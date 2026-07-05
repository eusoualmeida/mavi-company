# Supabase — schema e migrations

Este diretório versiona o schema do banco. Toda mudança de estrutura em produção passa por uma migration daqui — nada mais direto no dashboard.

## Estrutura

```
supabase/
  migrations/
    20260704120000_baseline_contact_submissions.sql   # tabela do form do site
    20260704120100_create_leads.sql                    # tabela do funil /aplicar
```

## Convenção de nomes

Formato Supabase CLI: `YYYYMMDDHHMMSS_descricao_curta.sql` (UTC).

Ex.: `20260710153000_add_status_to_leads.sql`.

## Como aplicar

### Opção A — Dashboard (rápido, sem CLI)

1. Abrir SQL Editor no dashboard do projeto Supabase.
2. Copiar o conteúdo de cada arquivo em ordem cronológica e rodar.
3. Migrations são idempotentes (`CREATE TABLE IF NOT EXISTS` + `DROP POLICY IF EXISTS`), então rodar de novo sobre schema existente não quebra.

### Opção B — Supabase CLI (recomendado, quando plugar)

```bash
# Uma vez
npx supabase login
npx supabase link --project-ref zrrwljtueqtclmmocict

# A cada mudança
npx supabase db push
```

### Opção C — Supabase MCP dentro do Claude Code

Quando o MCP `supabase` estiver conectado neste projeto, o Claude pode aplicar as migrations via SQL direto. Requer autorização explícita antes de tocar em prod.

## Tabelas atuais

| Tabela | Fluxo | Endpoint | RLS |
|---|---|---|---|
| `contact_submissions` | Modal do site + /contato | `POST /api/contact` | `anon` pode inserir |
| `leads` | Funil /aplicar (bio Instagram) | `POST /api/lead` | `anon` pode inserir |

Ambas ficam **isoladas de propósito** — tratam públicos diferentes (contato geral vs. lead qualificado de alto ticket) e não devem ser mescladas.

## Tipagem

Tipos TypeScript vivem em [`lib/database.types.ts`](../lib/database.types.ts). Manutenção manual por enquanto — quando plugar o Supabase CLI, gerar automaticamente:

```bash
npx supabase gen types typescript --project-id zrrwljtueqtclmmocict --schema public > lib/database.types.ts
```

## O que **não** está aqui ainda

- **Auth.** `lib/modules/auth/auth.ts` está vazio, `/login` é mockup com `setTimeout`. Quando decidirmos implementar auth de verdade (Supabase Auth ou outro), abre-se uma migration para as tabelas relacionadas (`profiles`, `user_roles` etc.).
- **MaviControl.** Painel interno de acompanhamento de leads/automações. Vai gerar mais tabelas quando começar a implementação.

## Ordem para plugar Supabase CLI

Se quiser fechar a organização depois:

1. `npx supabase init` — cria `supabase/config.toml` local
2. `npx supabase link --project-ref zrrwljtueqtclmmocict`
3. `npx supabase db pull` — snapshot do estado atual (deve bater com as migrations aqui)
4. `npx supabase gen types typescript ... > lib/database.types.ts` — tipos gerados
