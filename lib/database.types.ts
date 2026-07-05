// =====================================================================
// Tipos do banco (mantidos manualmente por enquanto).
//
// TODO(supabase-cli): quando o Supabase CLI estiver plugado, substituir
// tudo abaixo pelo output de:
//   npx supabase gen types typescript \
//     --project-id zrrwljtueqtclmmocict --schema public \
//     > lib/database.types.ts
//
// Fonte da verdade atual: supabase/migrations/*.sql
// =====================================================================

// ---------- enums espelhados dos CHECK constraints em leads ----------

export type LeadAttendant = "eu" | "recepcao" | "equipe" | "ninguem"

export type LeadSystemUsed =
  | "nada"
  | "manual"
  | "robo_simples"
  | "completo"

export type LeadRevenue = "ate_10k" | "10_30k" | "30_100k" | "acima_100k"

export type LeadNeedArea =
  | "atendimento"
  | "vendas"
  | "processos"
  | "diagnostico"

// ---------- contact_submissions ----------

export type ContactSubmissionRow = {
  id: string
  created_at: string
  name: string
  email: string
  phone: string
  company: string | null
  message: string | null
  variant: string | null
}

export type ContactSubmissionInsert = Omit<
  ContactSubmissionRow,
  "id" | "created_at"
> & {
  company?: string | null
  message?: string | null
  variant?: string | null
}

// ---------- leads ----------

export type LeadRow = {
  id: string
  created_at: string
  nome: string
  empresa: string
  email: string
  whatsapp: string
  instagram_or_site: string | null
  descricao_negocio: string
  quem_atende: LeadAttendant
  sistema_atual: LeadSystemUsed
  faturamento: LeadRevenue
  precisa: LeadNeedArea[]
  gargalo: string
  commitment_confirmed: boolean
  user_agent: string | null
  source: string
}

export type LeadInsert = Omit<
  LeadRow,
  "id" | "created_at" | "source"
> & {
  source?: string
}
