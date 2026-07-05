# MaviCompany — Mapeamento do Site Atual

Documento de referência com **tudo o que existe hoje** no site da MaviCompany (landing page principal + páginas institucionais e de serviços). Serve de base para redesenhar a proposta com um posicionamento de **mais autoridade**.

---

## 0. Identidade e Posicionamento

- **Marca:** MaviCompany / Mavi Company
- **Domínio:** `mavicompany.com.br`
- **Slogan curto (footer):** "Transformamos processos em sistemas inteligentes"
- **Headline meta (SEO):** "Desenvolvimento e Automações com IA"
- **Descrição meta:** *"Desenvolvemos sistemas, integrações e automações inteligentes para empresas que querem crescer com tecnologia, previsibilidade e escala."*
- **Idioma:** pt-BR
- **Tema visual:** dark mode fixo (`<html className="dark">`)
- **Palavras-chave:** desenvolvimento de software, automação com IA, inteligência artificial, sistemas empresariais, integrações
- **Contato:**
  - E-mail: `contato@mavicompany.com.br`
  - WhatsApp: `+55 (99) 99150-6190`
  - Instagram: `@mavicompanybr`

**Tom atual da comunicação:** técnico, direto, orientado a resultado, com forte apelo a "escala", "automação", "IA" e "sistemas sob medida".

---

## 1. Estrutura do Site

### Rotas públicas
| Rota | Página | Objetivo |
|---|---|---|
| `/` | Home / Landing | Conversão principal — venda dos serviços |
| `/sobre` | Sobre a Mavi | Institucional — quem somos, missão, valores |
| `/como-trabalhamos` | Metodologia | Processo de trabalho (5 etapas) e práticas |
| `/cases` | Cases e Projetos | Portfólio com 12 cases + resultados |
| `/contato` | Contato | Formulário + canais diretos |
| `/servicos` | Índice de Serviços | Grid dos 7 serviços + destaque MaviControl |
| `/servicos/desenvolvimento` | Desenvolvimento Web & Sistemas | Sub-serviço |
| `/servicos/automacao` | Automação de Processos | Sub-serviço |
| `/servicos/agentes-ia` | Agentes de IA & Chatbots | Sub-serviço |
| `/servicos/integracoes` | Integrações & APIs | Sub-serviço |
| `/servicos/saas` | Plataformas SaaS & Dashboards | Sub-serviço |
| `/servicos/ecommerce` | E-commerce & Funis Inteligentes | Sub-serviço |
| `/servicos/consultoria` | Consultoria Técnica & Arquitetura | Sub-serviço |
| `/privacidade`, `/termos`, `/lgpd` | Legal | Compliance |
| `/trabalhe-conosco` | Carreiras | (existe, mas link comentado no footer) |

### Rotas privadas (fora do escopo desta refação de landing)
`/dashboard/*`, `/login`, `/register`, `/forgot-password`, `/api/contact`.

---

## 2. Landing Page (`/`) — Ordem das seções

A home é montada em [app/page.tsx](app/page.tsx) e segue este fluxo:

1. **Header** (fixo)
2. **Hero**
3. **Problems** — "Seu negócio está travado?"
4. **Solutions** — 3 pilares de solução
5. **HowItWorks** — Processo em 4 passos
6. **Benefits** — 6 benefícios
7. **Testimonials** — Carrossel de depoimentos
8. ~~Technologies~~ — *comentada no momento (existe no código, mas não renderiza)*
9. **TargetAudience** — Para quem é / Para quem não é
10. **CTA** — Fechamento com pedido de diagnóstico
11. **Footer**

---

## 3. Detalhamento de cada seção da Landing

### 3.1 Header ([components/landing/header.tsx](components/landing/header.tsx))
- Logo `mavi-logo.jpeg` à esquerda (encolhe ao rolar)
- Navegação desktop: **Soluções, Como Funciona, Tecnologias, Para Quem, Cases**
- CTA principal do header: **"Falar com especialista"** → abre modal `specialist`
- Menu mobile hamburguer com mesmos links + CTA
- Fundo `background/80` com blur + border inferior
- Efeito de encolhimento (`h-20` → `h-14`) ao scroll > 50px

### 3.2 Hero ([components/landing/hero.tsx](components/landing/hero.tsx))
- **Top label** (badge acima do título): `AUTOMAÇÃO • IA • DESENVOLVIMENTO`
- **Headline (H1):** *"DESENVOLVIMENTO E **AUTOMAÇÕES COM IA** QUE ESCALAM NEGÓCIOS"* (o meio em roxo/primary)
- **Subhead:** *"Desenvolvemos sistemas, integrações e automações inteligentes para empresas que querem crescer com tecnologia, previsibilidade e escala."*
- **CTAs:**
  - Primário: **"Solicitar diagnóstico técnico"** → modal `diagnostic`
  - Secundário: **"Ver como funciona"** → scroll para `#como-funciona`
- **Elementos visuais:**
  - Grid de pontos + 2 glows radiais roxos no fundo
  - **4 badges flutuantes animadas** (só desktop): `+340% ROI`, `IA 24/7`, `127 ativas`, `3.4k leads`
  - **Mockup de dashboard** abaixo, com:
    - Barra estilo browser (`dashboard.mavicompany.com.br`)
    - 4 stat cards: Automações Ativas 127 (+23%), Leads Processados 3.4k (+45%), Tempo Economizado 892h (+67%), ROI 340% (+12%)
    - Diagrama animado de fluxo: `Input → IA → Automação → Output`

### 3.3 Problems ([components/landing/problems.tsx](components/landing/problems.tsx))
- **H2:** *"Seu negócio esta travado por processos manuais?"* (obs: tem um erro de acento — "esta" sem crase)
- Grid 3 colunas × 2 linhas com 6 cards de dores (ícone vermelho + título + descrição):
  1. **Processos manuais e sistemas mal estruturados** — retrabalho, erros, impede crescimento
  2. **Sistemas que não se integram** — dados fragmentados
  3. **Vendas e atendimento sem inteligência** — leads esfriam, oportunidades perdidas
  4. **Falta de dados e visão em tempo real** — decisão no escuro
  5. **Crescimento que depende de mais pessoas** — custo e complexidade proporcionais
  6. **Negócio dependente de pessoas e não de sistemas** — vulnerável a falhas humanas
- **Card de fechamento:** *"Enquanto isso, empresas orientadas por tecnologia **escalam com automação e IA.**"*

### 3.4 Solutions ([components/landing/solutions.tsx](components/landing/solutions.tsx))
- **Âncora:** `#solucoes`
- **H2:** *"A MaviCompany automatiza, integra e desenvolve o que seu negócio precisa"*
- **Sub:** *"Não entregamos promessas. **Entregamos sistemas funcionando.**"*
- 3 cards principais (cada um com ícone Lucide + título + bullets):
  1. **Desenvolvimento de Sistemas Sob Medida** — Plataformas web · Dashboards · SaaS · Backends escaláveis
  2. **Automações com Inteligência Artificial** — Chatbots inteligentes · Classificação de leads · Atendimento automatizado · Processos internos com IA
  3. **Integrações e APIs** — WhatsApp · CRMs · ERPs · Pagamentos · Plataformas digitais

### 3.5 HowItWorks ([components/landing/how-it-works.tsx](components/landing/how-it-works.tsx))
- **Âncora:** `#como-funciona`
- **H2:** *"Simples. Técnico. Eficiente."*
- **Sub:** *"Nosso processo garante resultados previsíveis"*
- 4 passos ligados por linha:
  1. **Diagnóstico técnico e mapeamento** — analisa operação e identifica oportunidades
  2. **Arquitetura da solução** — desenha a estrutura ideal
  3. **Desenvolvimento e automações** — constrói sistemas com IA integrada
  4. **Testes, entrega e suporte** — implementa e acompanha

### 3.6 Benefits ([components/landing/benefits.tsx](components/landing/benefits.tsx))
- **H2:** *"Por que automatizar com a MaviCompany?"*
- Grid 3×2 com 6 cards:
  1. **Redução de custos operacionais**
  2. **Escala sem aumentar equipe**
  3. **Menos erros e mais confiabilidade**
  4. **Processos claros e estruturados**
  5. **Controle total e dados centralizados**
  6. **Operação rodando 24/7**

### 3.7 Testimonials ([components/landing/testimonials.tsx](components/landing/testimonials.tsx))
- **H2:** *"Quem já usa recomenda"*
- **Sub:** *"Empresas que transformaram suas operações com a MaviCompany"*
- Carrossel com auto-play (5s), pausa no hover, controles + dots
- 5 depoimentos com nome, cargo, empresa e avatar de iniciais:
  1. **Carlos Mendes** — CEO, DocSafe — *"reduzimos o tempo de emissão de laudos em 70%"*
  2. **Ana Beatriz Oliveira** — Diretora Marketing, Imobiliária Nova Era — *"custo por lead caiu 60%, conversão subiu 35%"*
  3. **Rafael Torres** — Diretor Operacional, CondoApp — *"operação roda sem gargalos"*
  4. **Juliana Costa** — Fundadora, Loyalts — *"aumento de 40% na recompra em 3 meses"*
  5. **Felipe Augusto** — Fotógrafo & Empresário, Gestor Fotógrafo — *"sistema financeiro específico para fotógrafos"*

### 3.8 Technologies (COMENTADA) ([components/landing/technologies.tsx](components/landing/technologies.tsx))
- **Âncora:** `#tecnologias` (o header ainda linka para cá, mas a seção não é renderizada hoje)
- **H2:** *"Tecnologias de Ponta"*
- 4 carrosséis infinitos por categoria, com logos brancos vindos do simpleicons CDN:
  - **Automação & IA:** OpenAI, Anthropic Claude, WhatsApp, n8n, Make, Zapier, ManyChat
  - **Websites & Aplicações Web:** Next.js, React, TypeScript, Tailwind, Node.js, Vercel, Supabase, PostgreSQL, MongoDB, Google Cloud
  - **E-commerces & Plataformas de Venda:** WordPress, WooCommerce, Shopify, Elementor
  - **Pagamentos & Assinaturas:** Stripe, Mercado Pago, PayPal
- Rodapé com 3 selos: ✓ Alta Performance · ✓ Segurança Garantida · ✓ 100% Escalável

### 3.9 TargetAudience ([components/landing/target-audience.tsx](components/landing/target-audience.tsx))
- **Âncora:** `#para-quem`
- **H2:** *"Trabalhamos com empresas que entendem que escala exige tecnologia"*
- **Sub:** *"Não entregamos soluções genéricas. Construímos sistemas para operações que precisam de eficiência, controle e crescimento previsível."*
- 2 colunas lado a lado:
  - **Para quem é** (verde, check):
    - Negócios digitais com operação complexa
    - Empresas em fase de crescimento ou estruturação
    - Times que precisam automatizar processos críticos
    - Operações que exigem tecnologia para escalar
  - **Para quem não é** (vermelho, X):
    - Não é para quem busca soluções prontas ou genéricas
    - Não é para quem não está disposto a estruturar processos
    - Não é para quem vê tecnologia como custo
- **Card de autoridade final:** *"**Tecnologia não é diferencial. É pré-requisito.** Empresas que crescem de forma sustentável constroem sistemas antes de escalar pessoas."*

### 3.10 CTA final ([components/landing/cta.tsx](components/landing/cta.tsx))
- **H2:** *"Pronto para evoluir sua operação com tecnologia e IA?"*
- **Sub:** *"A MaviCompany desenvolve sistemas, integra ferramentas e cria automações inteligentes para escalar seu negócio."*
- **CTA único:** **"Solicitar diagnóstico técnico"** → modal `diagnostic`

### 3.11 Footer ([components/landing/footer.tsx](components/landing/footer.tsx))
- Fundo `bg-black`, 5 colunas
- Logo + microcopy + botão **"CONTRATE A MAVI"** → `/contato`
- Ícones sociais: Instagram, WhatsApp
- Colunas:
  - **Institucional:** Sobre, Como Trabalhamos, Cases, Contato *(Trabalhe Conosco comentado)*
  - **Serviços:** Desenvolvimento Web, Automação, Agentes de IA & Chatbots, Integrações & APIs, Plataformas SaaS, E-commerce & Funis, Consultoria Técnica
  - **Legal:** Privacidade, Termos, LGPD
  - **Fale Conosco:** e-mail + telefone
- Copyright: *"Copyright © 2025 MAVI COMPANY. Todos os direitos reservados."*

---

## 4. Modais de conversão

Toda a landing gira em torno de 2 CTAs modais ([components/landing/contact-modal.tsx](components/landing/contact-modal.tsx) + [modal-provider.tsx](components/landing/modal-provider.tsx)):

| Variante | Título | Onde abre |
|---|---|---|
| `specialist` | *"Fale com um especialista"* | Header, Menu mobile |
| `diagnostic` | *"Solicitar diagnóstico técnico"* | Hero (primário), CTA final |

**Campos do form:** Nome*, E-mail*, WhatsApp*, Empresa, Mensagem/Descrição de operação.
**Fluxo:** POST em `/api/contact` com `variant`; sucesso → tela de confirmação com CheckCircle e fecha após 3s.

---

## 5. Páginas institucionais (para contexto)

### `/sobre`
- Bloco **"Quem Somos"** + card com stats: **50+ Projetos, 30+ Clientes Ativos, 99% Satisfação, 24/7 Suporte**
- **Missão** e **Visão**
- 4 **Valores:** Inovação, Parceria, Excelência, Confiança

### `/como-trabalhamos`
- **5 etapas do processo** (versão expandida do "Como Funciona" da home): Diagnóstico → Planejamento → Desenvolvimento → Implantação → Suporte Contínuo (cada uma com 4 sub-itens)
- **4 metodologias:** Ágil (Scrum/Kanban), DevOps & CI/CD, Clean Architecture, Testes Automatizados

### `/cases`
- **12 cases** com categoria, ícone, descrição, 3 métricas de resultado e tags. Cases com link externo abrem em nova aba.
- Exemplos: DocSafe, CondoApp, Loyalts, Gestor Fotógrafo, Paulete Armários, Vitralle, Terra Ambientes, Linne Estofados, Chatbot IA, Plataforma SaaS Gestão, Integração Multi-plataforma, Classificação de Leads.
- CTA final: *"Quer ser o próximo case de sucesso?"* → `/contato`

### `/contato`
- Coluna esquerda com canais (e-mail, WhatsApp, Instagram, localização "Brasil") + card de atalho para WhatsApp
- Coluna direita com formulário (Nome*, E-mail*, Telefone, Empresa, Mensagem*) — mesma API `/api/contact`

### `/servicos` (índice)
- 7 cards de serviços (grid 2 colunas)
- **Destaque especial: "MaviControl"** — apresentado como plataforma proprietária de *gestão de automações, monitoramento de agentes de IA e métricas em tempo real*
- CTA "Solicitar Diagnóstico" no fim

### Sub-páginas `/servicos/*` (padrão comum)
Cada sub-página tem: PageHeader → **Features (4 cards)** → **seção intermediária** (casos de uso / integrações / componentes) → **Benefícios (lista + card CTA)**. Resumo por serviço:

| Serviço | Sub-blocos | CTA |
|---|---|---|
| Desenvolvimento Web & Sistemas | Aplicações Web, APIs/Backends, BD, Apps Responsivos + 12 techs (React, Next.js, Node, TS, Python, Postgres, Mongo, Redis, AWS, Vercel, Docker, GraphQL) | "Solicitar Orçamento" |
| Agentes de IA & Chatbots | Chatbots WhatsApp, IA Conversacional, Qualificação de Leads, Atendimento 24/7 + Casos: Atendimento, Vendas, Cobrança, RH | "Solicitar Demonstração" |
| Automação de Processos | Workflows, RPA, Triggers, Processamento de Dados + O que automatizamos (onboarding, relatórios, sincronização, aprovações etc.) | "Mapear meus processos" |
| Integrações & APIs | APIs personalizadas, Sincronização, Gateways, Comunicação + integrações Salesforce, HubSpot, SAP, TOTVS, Stripe, Shopify etc. | "Mapear Integrações" |
| Plataformas SaaS & Dashboards | Multi-tenancy, Dashboards Analíticos, Billing, Segurança Enterprise + 10 componentes (SSO, Roles, Webhooks, White-label...) | "Iniciar meu SaaS" |
| E-commerce & Funis Inteligentes | Lojas Virtuais, Funis, Recuperação de Carrinho, Checkout Otimizado + integrações Stripe, MP, PagSeguro, Correios, RD Station etc. | "Criar meu E-commerce" |
| Consultoria Técnica & Arquitetura | Arquitetura, Code Review, Mentoria, Planejamento + Diagnóstico, Stack, Documentação, Treinamento, Auditoria, Otimização | "Agendar Consultoria" |

---

## 6. Sistema de Design atual

- **Framework UI:** Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + shadcn/ui + Radix UI + framer-motion
- **Fonte:** Inter (Google Fonts) via `next/font`
- **Cor primária:** roxo (`#7C3AED`-ish — variável `--primary`)
- **Estilo dominante:**
  - Fundos escuros com **glows radiais** roxos
  - **Cards translúcidos** (`bg-card/30 backdrop-blur-sm`) com borders sutis
  - **Hover states** consistentes (border primary/50 + slight scale/lift)
  - **Ícones Lucide React**
  - **Animações framer-motion** em quase todas as seções (fade+slide-in ao entrar em view, stagger children)
  - Muitos gradientes suaves de fundo em seções alternadas

---

## 7. Análise crítica — pontos para o redesign com "mais autoridade"

Uso interno para o próximo agente. O que hoje **puxa para baixo** o tom de autoridade:

1. **Números fictícios/exagerados visíveis:** badges do hero (`+340% ROI`, `IA 24/7`, `127 ativas`, `3.4k leads`) e stats do mock de dashboard. Sem fonte, parecem *marketing chapado*. Ou remover, ou vincular a cases reais e citar a origem.
2. **"Cases" mistura tudo:** landing pages para móveis planejados listadas ao lado de SaaS complexos e "Sistema de Classificação de Leads com IA". Diluí o posicionamento premium.
3. **Copy quase todo no imperativo genérico:** "Escalar", "Automatizar", "Simples. Técnico. Eficiente." — falta *ponto de vista, tese, opinião forte*. Autoridade nasce de tese, não de adjetivo.
4. **Falta prova concreta:** sem números específicos de clientes reais no hero, sem logos de empresas no header/hero, sem certificações/parcerias oficiais, sem estudo de caso navegável em profundidade.
5. **Ausência de rosto/equipe:** página `/sobre` fala de missão/valores genéricos mas não apresenta fundadores, times ou lideranças técnicas — autoridade se ancora em pessoas.
6. **Seção Technologies comentada:** o header ainda linka `#tecnologias` mas a seção não existe na home → link quebrado e perda de credibilidade técnica.
7. **Erro tipográfico visível:** *"Seu negócio esta travado…"* (falta crase em "está"). Detalhes assim minam a percepção de rigor.
8. **CTA único e repetido:** o mesmo modal "diagnóstico" ecoa em todo lugar. Faltam pontos de entrada com **compromisso variado**: baixar material, ver case profundo, marcar reunião com engenheiro, etc.
9. **Depoimentos sem foto real:** apenas iniciais em círculo. Fotos de clientes reais (mesmo com consentimento) elevam credibilidade.
10. **Métricas dos cases pouco auditáveis:** "conversões +42%", "3 meses" sem contexto de baseline. Autoridade pede *contexto → intervenção → resultado → como mediu*.

**Ganchos de autoridade a explorar no redesign:**
- Tese técnica clara na home (ex.: *"Sistemas antes de pessoas"* já aparece, mas escondido lá embaixo).
- Nome + rosto + credenciais dos líderes técnicos.
- 1–3 cases-flagship com narrativa longa, dados de before/after e diagrama de arquitetura.
- Manifesto / metodologia proprietária nomeada.
- Publicações, artigos técnicos ou changelog do MaviControl como sinal de expertise viva.
- Logos de clientes com autorização no hero e/ou faixa de social proof.
- Tipografia mais forte e menos glow/gradiente — autoridade tende a estética *mais editorial e menos "SaaS AI genérico"*.

---

*Documento gerado em 2026-07-04 a partir do estado atual do repositório na branch `main`.*
