import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import type { ContactSubmissionInsert } from "@/lib/database.types"

// =====================================================================
// POST /api/contact
// Recebe o payload do ContactModal (landing) e do form em /contato.
// Grava em public.contact_submissions via Supabase (RLS: anon INSERT).
//
// Schema da tabela:
// supabase/migrations/20260704120000_baseline_contact_submissions.sql
// =====================================================================

type IncomingPayload = Partial<ContactSubmissionInsert>

export async function POST(request: Request) {
  let body: IncomingPayload
  try {
    body = (await request.json()) as IncomingPayload
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 })
  }

  const { name, email, phone, company, message, variant } = body

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Campos obrigatórios faltando" },
      { status: 400 }
    )
  }

  const row: ContactSubmissionInsert = {
    name,
    email,
    phone,
    company: company ?? null,
    message: message ?? null,
    variant: variant ?? null,
  }

  const { data, error } = await supabase
    .from("contact_submissions")
    .insert([row])
    .select()

  if (error) {
    console.error("[contact] supabase insert error:", error)
    return NextResponse.json(
      { error: "Erro ao enviar formulário" },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true, data }, { status: 200 })
}
