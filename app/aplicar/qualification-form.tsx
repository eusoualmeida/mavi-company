"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Loader2,
  X,
  AlertCircle,
} from "lucide-react"
import type {
  LeadAttendant as Attendant,
  LeadSystemUsed as SystemUsed,
  LeadRevenue as Revenue,
  LeadNeedArea as NeedArea,
} from "@/lib/database.types"

// =====================================================================
// Tipos locais do formulário
// (os enums vêm de lib/database.types.ts — fonte única com as migrations)
// =====================================================================

type Step = "intro" | "commitment" | "questions" | "done" | "rejected"

type FormData = {
  nome: string
  empresa: string
  email: string
  whatsapp: string
  instagramOrSite: string
  descricaoNegocio: string
  quemAtende: Attendant | ""
  sistemaAtual: SystemUsed | ""
  faturamento: Revenue | ""
  precisa: NeedArea[]
  gargalo: string
}

type FieldErrors = Partial<Record<keyof FormData, string>>

const INITIAL_DATA: FormData = {
  nome: "",
  empresa: "",
  email: "",
  whatsapp: "",
  instagramOrSite: "",
  descricaoNegocio: "",
  quemAtende: "",
  sistemaAtual: "",
  faturamento: "",
  precisa: [],
  gargalo: "",
}

// =====================================================================
// Helpers
// =====================================================================

/** Aplica máscara BR (00) 00000-0000 progressivamente conforme o usuário digita. */
function formatWhatsapp(v: string): string {
  const d = v.replace(/\D/g, "").slice(0, 11)
  if (d.length === 0) return ""
  if (d.length <= 2) return `(${d}`
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
}

function isValidWhatsapp(v: string): boolean {
  // 10 (fixo) ou 11 (celular) dígitos. Aceita ambos para robustez.
  return v.replace(/\D/g, "").length >= 10
}

// =====================================================================
// Componente principal — máquina de etapas + estado do formulário
// =====================================================================

export function QualificationForm() {
  const [step, setStep] = useState<Step>("intro")
  const [data, setData] = useState<FormData>(INITIAL_DATA)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Progresso: só é visível nas 3 etapas ativas do funil.
  const isFunnelStep = step === "intro" || step === "commitment" || step === "questions"
  const stepNumber =
    step === "intro" ? 1 : step === "commitment" ? 2 : step === "questions" ? 3 : 3

  function handleCommitment(answer: "yes" | "no") {
    if (answer === "yes") {
      setStep("questions")
    } else {
      // Filtro de qualificação: se disser "não é pra mim", encerra sem enviar payload.
      setStep("rejected")
    }
  }

  function updateField<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }))
    // Limpa erro do campo assim que o usuário mexe nele.
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[key]
        return next
      })
    }
  }

  function togglePrecisa(area: NeedArea) {
    const next = data.precisa.includes(area)
      ? data.precisa.filter((a) => a !== area)
      : [...data.precisa, area]
    updateField("precisa", next)
  }

  function validateQuestions(): boolean {
    const e: FieldErrors = {}
    if (!data.nome.trim()) e.nome = "Preencha seu nome"
    if (!data.empresa.trim()) e.empresa = "Preencha o nome da empresa"
    if (!data.email.trim()) e.email = "Preencha o e-mail"
    else if (!isValidEmail(data.email)) e.email = "E-mail inválido"
    if (!data.whatsapp.trim()) e.whatsapp = "Preencha o WhatsApp"
    else if (!isValidWhatsapp(data.whatsapp)) e.whatsapp = "WhatsApp incompleto"
    if (!data.descricaoNegocio.trim())
      e.descricaoNegocio = "Descreva o negócio e o atendimento hoje"
    if (!data.quemAtende) e.quemAtende = "Escolha uma opção"
    if (!data.sistemaAtual) e.sistemaAtual = "Escolha uma opção"
    if (!data.faturamento) e.faturamento = "Escolha uma opção"
    if (data.precisa.length === 0) e.precisa = "Marque ao menos uma opção"
    if (!data.gargalo.trim()) e.gargalo = "Descreva o gargalo"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit() {
    if (!validateQuestions()) {
      // Scroll para o primeiro erro para o usuário ver.
      const firstErrorEl = document.querySelector("[data-error='true']")
      firstErrorEl?.scrollIntoView({ behavior: "smooth", block: "center" })
      return
    }

    setSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, commitmentConfirmed: true }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStep("done")
    } catch {
      setSubmitError(
        "Não conseguimos enviar sua resposta agora. Tente novamente em instantes."
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {isFunnelStep && <ProgressBar current={stepNumber} total={3} />}

      <div className="flex-1 flex items-start justify-center px-4 py-10 md:py-16">
        <div className="w-full max-w-2xl">
          {step === "intro" && <StepIntro onNext={() => setStep("commitment")} />}

          {step === "commitment" && (
            <StepCommitment
              onBack={() => setStep("intro")}
              onAnswer={handleCommitment}
            />
          )}

          {step === "questions" && (
            <StepQuestions
              data={data}
              errors={errors}
              submitting={submitting}
              submitError={submitError}
              onFieldChange={updateField}
              onTogglePrecisa={togglePrecisa}
              onBack={() => setStep("commitment")}
              onSubmit={handleSubmit}
            />
          )}

          {step === "done" && <StepDone />}
          {step === "rejected" && <StepRejected onRestart={() => setStep("intro")} />}
        </div>
      </div>
    </div>
  )
}

// =====================================================================
// Progress bar
// =====================================================================

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = (current / total) * 100
  return (
    <div
      className="sticky top-0 z-10 border-b"
      style={{
        backgroundColor: "rgba(10,10,15,0.9)",
        borderColor: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="max-w-2xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-white/60">
            Etapa {current} de {total}
          </span>
          <span className="text-[11px] md:text-xs text-white/40">
            {Math.round(pct)}%
          </span>
        </div>
        <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, backgroundColor: "#6D28D9" }}
          />
        </div>
      </div>
    </div>
  )
}

// =====================================================================
// Etapa 1 — Apresentação
// =====================================================================

function StepIntro({ onNext }: { onNext: () => void }) {
  const bullets = [
    "Atendimento com IA — agente que responde, qualifica e agenda 24h",
    "Vendas — processos e automações que aumentam conversão e previsibilidade",
    "Operação — eliminação de tarefas manuais e gargalos com automação (n8n)",
    "Infraestrutura digital — sistemas e IA integrados à sua realidade",
    "Acompanhamento meu e do meu time pra garantir evolução real",
  ]

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#A78BFA] mb-6">
          Processo seletivo
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.15] tracking-tight text-white text-balance">
          Eu e meu time estruturamos sua empresa com IA —{" "}
          <span className="text-[#A78BFA]">
            atendimento, vendas e processos
          </span>{" "}
          operando de forma inteligente, previsível e escalável.
        </h1>
      </div>

      <div
        className="rounded-xl border p-5 md:p-6"
        style={{
          borderColor: "rgba(109,40,217,0.45)",
          backgroundColor: "rgba(109,40,217,0.08)",
        }}
      >
        <p className="text-base md:text-lg font-semibold text-white">
          ⚠️ Não é curso nem mentoria.
        </p>
      </div>

      <p className="text-white/80 leading-relaxed text-base md:text-lg">
        Este processo é seletivo e voltado para empresas que já operam e
        entendem que crescer sem estrutura, automação e IA é a forma mais
        rápida de perder tempo, cliente e mercado.
      </p>

      <ul className="space-y-4">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 w-5 h-5 rounded-full bg-green-500/15 border border-green-500/40 flex items-center justify-center shrink-0">
              <Check className="h-3 w-3 text-green-400" strokeWidth={3} />
            </span>
            <span className="text-white/90 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-2 text-sm text-white/60 border-t border-white/10 pt-6">
        <p>
          💡 Este formulário é a primeira etapa. Após análise do seu perfil,
          retornamos com os próximos passos.
        </p>
        <p>
          👉 Preencha com atenção. Respostas vagas serão desconsideradas.
        </p>
      </div>

      <div className="pt-2">
        <PrimaryButton onClick={onNext}>
          Quero prosseguir
          <ArrowRight className="h-5 w-5" />
        </PrimaryButton>
      </div>
    </div>
  )
}

// =====================================================================
// Etapa 2 — Compromisso (filtro)
// =====================================================================

function StepCommitment({
  onBack,
  onAnswer,
}: {
  onBack: () => void
  onAnswer: (a: "yes" | "no") => void
}) {
  return (
    <div className="space-y-8">
      <BackButton onClick={onBack} />

      <div>
        <p className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#A78BFA] mb-4">
          Compromisso
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance">
          Você leu o texto anterior e está comprometido(a) a fazer uma reunião
          de análise comigo{" "}
          <span className="text-[#A78BFA]">nas próximas 48 horas</span>?
        </h2>
      </div>

      <div className="space-y-4">
        <button
          type="button"
          onClick={() => onAnswer("yes")}
          className="group w-full text-left rounded-xl p-5 md:p-6 border transition-all"
          style={{
            borderColor: "rgba(109,40,217,0.45)",
            backgroundColor: "rgba(109,40,217,0.08)",
          }}
        >
          <div className="flex items-center gap-4">
            <span
              className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(34,197,94,0.15)" }}
            >
              <Check className="h-5 w-5 text-green-400" strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-base md:text-lg font-semibold text-white">
                Sim, e quero prosseguir
              </p>
              <p className="text-sm text-white/60 mt-0.5">
                Avança para as perguntas de qualificação
              </p>
            </div>
            <ArrowRight className="ml-auto h-5 w-5 text-white/40 group-hover:text-[#A78BFA] group-hover:translate-x-1 transition-all" />
          </div>
        </button>

        <button
          type="button"
          onClick={() => onAnswer("no")}
          className="group w-full text-left rounded-xl p-5 md:p-6 border transition-all"
          style={{
            borderColor: "rgba(255,255,255,0.08)",
            backgroundColor: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="flex items-center gap-4">
            <span
              className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(239,68,68,0.12)" }}
            >
              <X className="h-5 w-5 text-red-400" strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-base md:text-lg font-semibold text-white">
                Não é pra mim
              </p>
              <p className="text-sm text-white/60 mt-0.5">
                Encerra o processo — sem envio de dados
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

// =====================================================================
// Etapa 3 — Qualificação (11 perguntas)
// =====================================================================

function StepQuestions({
  data,
  errors,
  submitting,
  submitError,
  onFieldChange,
  onTogglePrecisa,
  onBack,
  onSubmit,
}: {
  data: FormData
  errors: FieldErrors
  submitting: boolean
  submitError: string | null
  onFieldChange: <K extends keyof FormData>(key: K, value: FormData[K]) => void
  onTogglePrecisa: (area: NeedArea) => void
  onBack: () => void
  onSubmit: () => void
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
      className="space-y-10"
    >
      <BackButton onClick={onBack} />

      <div>
        <p className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#A78BFA] mb-4">
          Qualificação
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
          Poucas perguntas para eu entender seu contexto.
        </h2>
      </div>

      {/* ---- Bloco: sobre você e a empresa ---- */}
      <FieldGroup label="Sobre você e a empresa">
        <TextField
          label="Nome completo"
          required
          value={data.nome}
          onChange={(v) => onFieldChange("nome", v)}
          error={errors.nome}
          placeholder="Seu nome completo"
        />
        <TextField
          label="Nome da empresa ou clínica"
          required
          value={data.empresa}
          onChange={(v) => onFieldChange("empresa", v)}
          error={errors.empresa}
          placeholder="Ex.: Clínica Bem-Estar"
        />
        <TextField
          label="Melhor e-mail"
          type="email"
          required
          value={data.email}
          onChange={(v) => onFieldChange("email", v)}
          error={errors.email}
          placeholder="voce@empresa.com.br"
        />
        <TextField
          label="WhatsApp"
          required
          value={data.whatsapp}
          onChange={(v) => onFieldChange("whatsapp", formatWhatsapp(v))}
          error={errors.whatsapp}
          placeholder="(00) 00000-0000"
          inputMode="tel"
        />
        <TextField
          label="@ do Instagram ou site da empresa"
          value={data.instagramOrSite}
          onChange={(v) => onFieldChange("instagramOrSite", v)}
          placeholder="@suaempresa ou https://..."
        />
        <TextareaField
          label="Descreva em poucas palavras o que sua empresa faz e como funciona o atendimento hoje"
          required
          value={data.descricaoNegocio}
          onChange={(v) => onFieldChange("descricaoNegocio", v)}
          error={errors.descricaoNegocio}
          rows={4}
          placeholder="O que vocês vendem/oferecem, e como chega e é atendido um novo cliente hoje."
        />
      </FieldGroup>

      {/* ---- Bloco: operação atual ---- */}
      <FieldGroup label="Sobre a operação hoje">
        <SingleChoice
          label="Hoje, quem responde seus clientes?"
          required
          value={data.quemAtende}
          onChange={(v) => onFieldChange("quemAtende", v)}
          error={errors.quemAtende}
          options={[
            { value: "eu", label: "Eu mesmo" },
            { value: "recepcao", label: "Recepção ou secretária" },
            { value: "equipe", label: "Equipe" },
            { value: "ninguem", label: "Ninguém fora do horário" },
          ]}
        />

        <SingleChoice
          label="Vocês já usam algum sistema ou robô de atendimento?"
          required
          value={data.sistemaAtual}
          onChange={(v) => onFieldChange("sistemaAtual", v)}
          error={errors.sistemaAtual}
          options={[
            { value: "nada", label: "Não, nada" },
            { value: "manual", label: "Só WhatsApp manual" },
            { value: "robo_simples", label: "Tenho um robô simples" },
            { value: "completo", label: "Sim, sistema completo" },
          ]}
        />

        <SingleChoice
          label="Faturamento médio mensal"
          required
          value={data.faturamento}
          onChange={(v) => onFieldChange("faturamento", v)}
          error={errors.faturamento}
          options={[
            { value: "ate_10k", label: "Até R$ 10 mil" },
            { value: "10_30k", label: "R$ 10 – 30 mil" },
            { value: "30_100k", label: "R$ 30 – 100 mil" },
            { value: "acima_100k", label: "Acima de R$ 100 mil" },
          ]}
        />
      </FieldGroup>

      {/* ---- Bloco: onde estruturar ---- */}
      <FieldGroup label="Sobre o que você quer resolver">
        <MultiChoice
          label="Onde você mais precisa de estrutura hoje?"
          hint="Pode marcar mais de uma"
          required
          values={data.precisa}
          onToggle={onTogglePrecisa}
          error={errors.precisa}
          options={[
            { value: "atendimento", label: "Atendimento" },
            { value: "vendas", label: "Vendas" },
            { value: "processos", label: "Processos e operação" },
            { value: "diagnostico", label: "Não sei, quero diagnóstico" },
          ]}
        />

        <TextareaField
          label="Descreva o principal gargalo que está travando seu crescimento"
          required
          value={data.gargalo}
          onChange={(v) => onFieldChange("gargalo", v)}
          error={errors.gargalo}
          rows={4}
          placeholder="Onde a operação trava, o que já tentou, o que não funcionou."
        />
      </FieldGroup>

      {submitError && (
        <div
          className="rounded-lg border p-4 flex items-start gap-3"
          style={{
            borderColor: "rgba(239,68,68,0.4)",
            backgroundColor: "rgba(239,68,68,0.08)",
          }}
        >
          <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-sm text-red-300">{submitError}</p>
        </div>
      )}

      <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-3 pt-2">
        <SecondaryButton onClick={onBack} disabled={submitting} type="button">
          <ArrowLeft className="h-5 w-5" />
          Voltar
        </SecondaryButton>
        <PrimaryButton type="submit" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              Enviar aplicação
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </PrimaryButton>
      </div>
    </form>
  )
}

// =====================================================================
// Etapa final — Sucesso
// =====================================================================

function StepDone() {
  return (
    <div className="text-center space-y-8 py-8 md:py-16">
      <div
        className="w-20 h-20 mx-auto rounded-full flex items-center justify-center border-2"
        style={{
          borderColor: "rgba(34,197,94,0.5)",
          backgroundColor: "rgba(34,197,94,0.1)",
        }}
      >
        <Check className="h-10 w-10 text-green-400" strokeWidth={2.5} />
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight text-balance">
          Resposta enviada!
        </h2>
        <p className="text-lg text-white/70 max-w-md mx-auto leading-relaxed">
          Vou analisar seu perfil e retorno em breve com os próximos passos.
        </p>
      </div>
    </div>
  )
}

// =====================================================================
// Etapa final — Não é pra mim
// =====================================================================

function StepRejected({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="text-center space-y-8 py-8 md:py-16">
      <div
        className="w-20 h-20 mx-auto rounded-full flex items-center justify-center border-2"
        style={{
          borderColor: "rgba(255,255,255,0.15)",
          backgroundColor: "rgba(255,255,255,0.03)",
        }}
      >
        <X className="h-10 w-10 text-white/60" strokeWidth={2} />
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight text-balance">
          Sem problema!
        </h2>
        <p className="text-lg text-white/70 max-w-md mx-auto leading-relaxed">
          Quando fizer sentido pra você, o formulário estará aqui.
        </p>
      </div>
      <button
        type="button"
        onClick={onRestart}
        className="text-sm text-white/50 hover:text-white/80 transition-colors underline underline-offset-4"
      >
        Voltar ao início
      </button>
    </div>
  )
}

// =====================================================================
// UI primitives — botões, campos, grupos
// =====================================================================

function PrimaryButton({
  children,
  onClick,
  type = "button",
  disabled,
}: {
  children: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-lg text-white font-semibold px-8 py-4 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      style={{ backgroundColor: disabled ? "#4C1D95" : "#6D28D9" }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.backgroundColor = "#4C1D95"
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.style.backgroundColor = "#6D28D9"
      }}
    >
      {children}
    </button>
  )
}

function SecondaryButton({
  children,
  onClick,
  type = "button",
  disabled,
}: {
  children: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 font-medium text-white/70 hover:text-white transition-colors border disabled:opacity-60"
      style={{
        borderColor: "rgba(255,255,255,0.15)",
        backgroundColor: "transparent",
      }}
    >
      {children}
    </button>
  )
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors group"
    >
      <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
      Voltar
    </button>
  )
}

function FieldGroup({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <fieldset className="space-y-6">
      <legend className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-white/40">
        {label}
      </legend>
      {children}
    </fieldset>
  )
}

function TextField({
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  placeholder,
  inputMode,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  error?: string
  required?: boolean
  type?: string
  placeholder?: string
  inputMode?: "text" | "email" | "tel" | "numeric"
}) {
  return (
    <div className="space-y-2" data-error={Boolean(error)}>
      <label className="block text-sm font-medium text-white/85">
        {label} {required && <span className="text-[#A78BFA]">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
        className="w-full rounded-lg px-4 py-3 text-white placeholder-white/30 outline-none transition-colors border"
        style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          borderColor: error ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)",
        }}
        onFocus={(e) => {
          if (!error) e.currentTarget.style.borderColor = "#6D28D9"
        }}
        onBlur={(e) => {
          if (!error) e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
        }}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}

function TextareaField({
  label,
  value,
  onChange,
  error,
  required,
  rows = 4,
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  error?: string
  required?: boolean
  rows?: number
  placeholder?: string
}) {
  return (
    <div className="space-y-2" data-error={Boolean(error)}>
      <label className="block text-sm font-medium text-white/85">
        {label} {required && <span className="text-[#A78BFA]">*</span>}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-lg px-4 py-3 text-white placeholder-white/30 outline-none transition-colors resize-y border"
        style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          borderColor: error ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)",
        }}
        onFocus={(e) => {
          if (!error) e.currentTarget.style.borderColor = "#6D28D9"
        }}
        onBlur={(e) => {
          if (!error) e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
        }}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}

function SingleChoice<T extends string>({
  label,
  value,
  onChange,
  options,
  error,
  required,
}: {
  label: string
  value: T | ""
  onChange: (v: T) => void
  options: { value: T; label: string }[]
  error?: string
  required?: boolean
}) {
  return (
    <div className="space-y-3" data-error={Boolean(error)}>
      <label className="block text-sm font-medium text-white/85">
        {label} {required && <span className="text-[#A78BFA]">*</span>}
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((opt) => {
          const selected = value === opt.value
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className="text-left rounded-lg px-4 py-3 border transition-colors"
              style={{
                borderColor: selected
                  ? "#6D28D9"
                  : "rgba(255,255,255,0.1)",
                backgroundColor: selected
                  ? "rgba(109,40,217,0.15)"
                  : "rgba(255,255,255,0.02)",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0"
                  style={{
                    borderColor: selected ? "#A78BFA" : "rgba(255,255,255,0.3)",
                  }}
                >
                  {selected && (
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#A78BFA" }}
                    />
                  )}
                </span>
                <span className="text-sm text-white/90">{opt.label}</span>
              </div>
            </button>
          )
        })}
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}

function MultiChoice<T extends string>({
  label,
  hint,
  values,
  onToggle,
  options,
  error,
  required,
}: {
  label: string
  hint?: string
  values: T[]
  onToggle: (v: T) => void
  options: { value: T; label: string }[]
  error?: string
  required?: boolean
}) {
  return (
    <div className="space-y-3" data-error={Boolean(error)}>
      <div>
        <label className="block text-sm font-medium text-white/85">
          {label} {required && <span className="text-[#A78BFA]">*</span>}
        </label>
        {hint && <p className="text-xs text-white/50 mt-1">{hint}</p>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((opt) => {
          const selected = values.includes(opt.value)
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onToggle(opt.value)}
              className="text-left rounded-lg px-4 py-3 border transition-colors"
              style={{
                borderColor: selected
                  ? "#6D28D9"
                  : "rgba(255,255,255,0.1)",
                backgroundColor: selected
                  ? "rgba(109,40,217,0.15)"
                  : "rgba(255,255,255,0.02)",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-4 h-4 rounded flex items-center justify-center shrink-0 border-2"
                  style={{
                    borderColor: selected ? "#A78BFA" : "rgba(255,255,255,0.3)",
                    backgroundColor: selected ? "#6D28D9" : "transparent",
                  }}
                >
                  {selected && (
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  )}
                </span>
                <span className="text-sm text-white/90">{opt.label}</span>
              </div>
            </button>
          )
        })}
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}
