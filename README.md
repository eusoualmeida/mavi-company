# MaviCompany — site

Site institucional B2B da MaviCompany. Vende automação e IA para operações com processo
manual, no design system **Editorial Mono**. Marca pessoal (Mateus de Almeida) na frente,
empresa assinando por trás. Todo CTA termina numa conversa de WhatsApp — não em checkout.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # ver nota de build abaixo
```

Stack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · next/font.

## Onde ficam as coisas

| O quê | Onde |
|---|---|
| **Conteúdo e contato** (fonte da verdade) | [`lib/site.ts`](lib/site.ts) |
| **Design tokens** (cores, fontes, escala tipográfica) | [`app/globals.css`](app/globals.css) |
| **Componentes do site** | [`components/site/`](components/site/) |
| **Páginas** (home, sobre, contato, legais) | [`app/(site)/`](app/(site)/) |
| App logado (tema escuro, intocado) | `app/dashboard/`, `app/(auth)/` |

Editar copy, preço ou serviço = editar `lib/site.ts`. Nada de texto de venda hardcoded
espalhado pelos componentes.

### Design system

- **Fontes:** Martian Mono (manchetes/labels/preços) · Fraunces itálico (destaque, 1–2
  palavras por manchete) · Plus Jakarta Sans (corpo). Carregadas via `next/font` em
  [`app/layout.tsx`](app/layout.tsx).
- **Tokens:** definidos em `:root` e expostos ao Tailwind via `@theme` (utilitários
  `bg-cream`, `text-indigo`, `border-line`, `text-orange-ink`…).
- **Isolamento de tema:** o site vive dentro de `.site-scope` (creme claro); dashboard e
  auth seguem no tema escuro shadcn. Os dois não se afetam. Nunca remova `site-scope` de
  [`app/(site)/layout.tsx`](app/(site)/layout.tsx).
- **Classes de assinatura:** `.display-1/2/3`, `.em-serif`, `.kicker`, `.body-lg`,
  `.ink-orange`, `.ink-indigo`, `.reveal`, `.measure` (em `globals.css`).

### Componentes reutilizáveis

`Header` · `Hero` · `TrustBar` · `Steps` · `ServiceIndex` (+ `FeatureBlock`) · `Founder` ·
`Faq` · `Cta` · `Footer` · `PageHeader` · `ActionButton` · `Reveal`.

## Nota de build

`next build` falha no ambiente local (Windows + Node 24) com um `InvariantError` de
AsyncLocalStorage nas páginas sintéticas (`/_not-found`, `/_global-error`). **É um bug
conhecido do Next 16 e é anterior a este trabalho** — reproduz no commit sem nenhuma
alteração. O `npm run dev` roda 100%. Para produção, use Node 20 ou 22 LTS (é o que a
Vercel usa por padrão), onde o build passa.

## Pendências de conteúdo (placeholders marcados)

- **Foto do fundador** → `public/images/founder.jpg`, referenciada em `Founder` e `/sobre`.
- **Número de WhatsApp** → `lib/site.ts` (`whatsapp`). O atual, DDD 99, veio do site antigo
  e é de Maranhão — confirmar se é o número certo de Belém.
- **Prova/cases** → omitidos de propósito (sem cases reais autorizados). Quando houver,
  adicionar seção editorial (problema → o que foi feito → resultado).
