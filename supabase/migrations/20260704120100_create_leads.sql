-- =====================================================================
-- Create: leads
-- =====================================================================
-- Tabela para o formulário de qualificação em /aplicar (link da bio do
-- Instagram, funil de captação de alto ticket).
--
-- IMPORTANTE: separada de contact_submissions de propósito. Fluxos
-- diferentes, payloads diferentes, ciclos de vida diferentes.
--
-- Consumido por: app/api/lead/route.ts
-- Formulário: app/aplicar/qualification-form.tsx
-- =====================================================================

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- Identidade do lead
  nome text not null,
  empresa text not null,
  email text not null,
  whatsapp text not null,
  instagram_or_site text,

  -- Contexto operacional
  descricao_negocio text not null,

  quem_atende text not null
    check (quem_atende in ('eu', 'recepcao', 'equipe', 'ninguem')),

  sistema_atual text not null
    check (sistema_atual in ('nada', 'manual', 'robo_simples', 'completo')),

  faturamento text not null
    check (faturamento in ('ate_10k', '10_30k', '30_100k', 'acima_100k')),

  -- Multi-choice: em qual(is) pilar(es) precisa de estrutura
  precisa text[] not null default '{}',

  gargalo text not null,

  -- Meta
  commitment_confirmed boolean not null default false,
  user_agent text,
  source text not null default 'aplicar'
);

-- Índices para triagem
create index if not exists idx_leads_created_at
  on public.leads (created_at desc);
create index if not exists idx_leads_email on public.leads (email);

-- ---------------------------------------------------------------------
-- RLS
-- Anon pode inserir (form público). Nenhum SELECT/UPDATE/DELETE público.
-- Leitura só via service_role (painel interno / MaviControl).
-- ---------------------------------------------------------------------
alter table public.leads enable row level security;

drop policy if exists "anon insert leads" on public.leads;
create policy "anon insert leads"
  on public.leads
  for insert
  to anon
  with check (true);
