-- =====================================================================
-- Baseline: contact_submissions
-- =====================================================================
-- Tabela usada pelo formulário do site principal (ContactModal na landing
-- e /contato). Foi criada originalmente via dashboard do Supabase — esta
-- migration é a reconstrução idempotente para deixar o schema em código.
--
-- Consumido por: app/api/contact/route.ts
-- Formulário: components/landing/contact-modal.tsx + app/contato/page.tsx
-- =====================================================================

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  name text not null,
  email text not null,
  phone text not null,
  company text,
  message text,

  -- Origem do modal: "specialist" (Falar com especialista) ou "diagnostic"
  -- (Solicitar diagnóstico). Nullable p/ tolerar chamadas antigas sem variant.
  variant text
);

create index if not exists idx_contact_submissions_created_at
  on public.contact_submissions (created_at desc);

-- ---------------------------------------------------------------------
-- RLS: anon pode inserir (form público); leitura só via service_role.
-- ---------------------------------------------------------------------
alter table public.contact_submissions enable row level security;

drop policy if exists "anon insert contact_submissions"
  on public.contact_submissions;
create policy "anon insert contact_submissions"
  on public.contact_submissions
  for insert
  to anon
  with check (true);
