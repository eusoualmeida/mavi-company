import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import type { LeadInsert } from "@/lib/database.types"

// =====================================================================
// POST /api/lead
// Recebe o payload do formulário de qualificação em /aplicar e grava em
// public.leads via Supabase (RLS: anon INSERT).
//
// Schema da tabela: supabase/migrations/20260704120100_create_leads.sql
//
// TODO(notificação): disparar WhatsApp / e-mail para o dono quando um lead
//   qualificado chegar. Opções: Evolution API, Twilio, Resend.
//   Payload mínimo: nome, empresa, whatsapp + link para o painel.
// =====================================================================

export const runtime = "nodejs"

// Formato que chega do cliente (camelCase). Mapeamos para snake_case da tabela.
type IncomingPayload = {
  nome?: string
  empresa?: string
  email?: string
  whatsapp?: string
  instagramOrSite?: string
  descricaoNegocio?: string
  quemAtende?: LeadInsert["quem_atende"]
  sistemaAtual?: LeadInsert["sistema_atual"]
  faturamento?: LeadInsert["faturamento"]
  precisa?: LeadInsert["precisa"]
  gargalo?: string
  commitmentConfirmed?: boolean
}

export async function POST(req: Request) {
  let payload: IncomingPayload
  try {
    payload = (await req.json()) as IncomingPayload
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 }
    )
  }

  // Validação server-side mínima — nunca confiar só no cliente.
  const missing =
    !payload.nome ||
    !payload.empresa ||
    !payload.email ||
    !payload.whatsapp ||
    !payload.descricaoNegocio ||
    !payload.quemAtende ||
    !payload.sistemaAtual ||
    !payload.faturamento ||
    !payload.precisa?.length ||
    !payload.gargalo

  if (missing) {
    return NextResponse.json(
      { ok: false, error: "missing_required_fields" },
      { status: 400 }
    )
  }

  const row: LeadInsert = {
    nome: payload.nome!,
    empresa: payload.empresa!,
    email: payload.email!,
    whatsapp: payload.whatsapp!,
    instagram_or_site: payload.instagramOrSite?.trim() || null,
    descricao_negocio: payload.descricaoNegocio!,
    quem_atende: payload.quemAtende!,
    sistema_atual: payload.sistemaAtual!,
    faturamento: payload.faturamento!,
    precisa: payload.precisa!,
    gargalo: payload.gargalo!,
    commitment_confirmed: payload.commitmentConfirmed ?? false,
    user_agent: req.headers.get("user-agent"),
  }

  const { data, error } = await supabase
    .from("leads")
    .insert([row])
    .select("id")
    .single()

  if (error) {
    // Log completo do payload para poder recuperar manualmente se necessário.
    console.error("[lead] supabase insert error:", error)
    console.error("[lead] payload não gravado:", JSON.stringify(row))
    return NextResponse.json(
      { ok: false, error: "insert_failed" },
      { status: 500 }
    )
  }

  console.log("[lead] novo lead gravado:", data?.id)
  return NextResponse.json({ ok: true, id: data?.id })
}
