/**
 * Fonte única de conteúdo e contato do site público.
 * Nada de dado inventado: métricas, cases e depoimentos só entram aqui
 * quando forem reais e autorizados.
 */

export const site = {
  name: "MaviCompany",
  legalName: "Mavi Company",
  url: "https://mavicompany.com.br",
  email: "contato@mavicompany.com.br",
  instagram: "https://instagram.com/mavicompanybr",
  // TODO(mateus): confirmar o número — DDD 99 (MA) veio do site antigo.
  whatsapp: "5599991506190",
  whatsappDisplay: "+55 (99) 99150-6190",
  founder: "Mateus de Almeida",
  positioning:
    "Sua operação tem processo manual sugando tempo e dinheiro. Eu construo a solução de IA que resolve isso e deixo rodando na sua operação, sem quebrar.",
} as const

/** Todo CTA do site termina numa conversa — nunca num checkout. */
export function whatsappUrl(message = "Olá! Quero falar sobre um processo manual da minha operação.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export const nav = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Sobre", href: "/sobre" },
  { label: "Dúvidas", href: "/#faq" },
] as const

/** Credenciais verificáveis. Não adicionar nada que não dê pra provar. */
export const trust = [
  "5+ anos entregando em produção",
  "SaaS & ERP no ar",
  "Da indústria ao código",
] as const

export const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Olho sua operação de perto e mapeio onde o trabalho manual custa mais caro. Você sai com clareza do que vale automatizar — e do que não vale.",
  },
  {
    n: "02",
    title: "Implementação",
    body: "Construo a solução com escopo e prazo fechados. Entrego rodando na sua operação, com a equipe treinada pra usar.",
  },
  {
    n: "03",
    title: "Operação",
    body: "Fica no ar sob acompanhamento. Evoluo o que já roda e automatizo processos novos conforme a operação pede.",
  },
] as const

export type Service = {
  n: string
  title: string
  price: string
  body: string
  badge?: string
  featured?: boolean
}

export const services: Service[] = [
  {
    n: "01",
    title: "Diagnóstico de Automação",
    price: "R$1.500 a R$3.500 · entrega em dias",
    body: "Mapeio os processos que sugam tempo e dinheiro e entrego um relatório com os 3 a 5 que valem automatizar, o impacto estimado e por onde começar. O valor é abatido se você fechar a implementação.",
    badge: "Comece por aqui",
  },
  {
    n: "02",
    title: "Implementação de Solução",
    price: "a partir de R$8.000",
    body: "Pego um processo específico — atendimento, triagem de leads, relatórios, conferência de documentos, recrutamento — e entrego a solução de IA rodando na sua operação. Deploy feito, equipe treinada. Escopo fechado, 2 a 6 semanas.",
    featured: true,
  },
  {
    n: "03",
    title: "Operação Inteligente",
    price: "mensal, sob consulta",
    body: "Depois de implementar, mantenho no ar, evoluo o que existe e automatizo um processo novo todo mês. Sua operação melhora de forma contínua, sem precisar reabrir projeto a cada demanda.",
  },
  {
    n: "04",
    title: "Software sob medida",
    price: "sob consulta",
    body: "Quando automação não resolve, construo do zero: SaaS, ERP ou plataforma desenhada pro seu negócio. Solução de verdade, feita pra durar e escalar — não gambiarra que quebra no primeiro pico.",
  },
]

export const faq = [
  {
    q: "Quanto tempo leva pra ficar pronto?",
    a: "O diagnóstico entrega em dias. Uma implementação tem escopo fechado de 2 a 6 semanas, dependendo do processo. Prazo entra em contrato — se eu não souber estimar, eu digo antes de você pagar.",
  },
  {
    q: "E se a solução quebrar depois de entregue?",
    a: "Toda entrega sai com período de acompanhamento incluído. Construo com o mesmo cuidado de sistema em produção: tratamento de erro, monitoramento e log. Se quebrar dentro do acompanhamento, eu conserto sem cobrar.",
  },
  {
    q: "O código é meu?",
    a: "É seu. Você fica com o código, os acessos e a documentação. Não trabalho com refém: se um dia quiser levar pra outro time, leva.",
  },
  {
    q: "Vocês atendem qual tipo de empresa?",
    a: "Empresas com processo manual caro o bastante pra doer — PMEs, indústria e operações com volume. Se o seu problema não justifica o investimento, eu falo isso no diagnóstico em vez de vender projeto.",
  },
  {
    q: "Como fica a LGPD e os dados da minha empresa?",
    a: "Os dados ficam na sua infraestrutura sempre que possível. Quando um processo passa por serviço de terceiro, isso é declarado antes, com a base legal e o tratamento documentados. Assino NDA sem drama.",
  },
  {
    q: "Preciso fazer o diagnóstico antes de contratar uma implementação?",
    a: "Não é obrigatório, mas é o caminho mais barato de descobrir se vale a pena. Se você já sabe exatamente o processo que quer resolver, pulamos direto pra implementação.",
  },
] as const
