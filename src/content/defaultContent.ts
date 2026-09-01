// Todo o texto editável do site de Treinamento Comercial.

export const defaultContent = {
  hero: {
    tag: "Método Floresta — Cultivo",
    title: "GREEN HUB",
    subtitle: "Treinamento Comercial",
    headlinePlain: "Sua empresa já gera demanda.",
    headlineQuestion: "A pergunta é: seu comercial sabe colher?",
    lede:
      "Diagnóstico, playbook, scripts, CRM e acompanhamento — para transformar " +
      "demanda em faturamento, não em agenda vazia.",
    badge: "Proposta Comercial",
    stats: [
      { value: "93,2%", label: "das PMEs brasileiras vendem sem nenhum sistema comercial estruturado" },
      { value: "67%", label: "dos leads perdidos no B2B são descartados por falta de qualificação — não de interesse" },
      { value: "2,5%", label: "é a taxa de conversão mediana do B2B brasileiro hoje" },
    ],
  },

  problem: {
    eyebrow: "O Problema Real",
    heading: "Marketing gera demanda. Comercial fraco transforma essa demanda em fracasso.",
    intro:
      "Toda empresa precisa das duas coisas: gerar demanda e converter essa demanda. " +
      "A maioria investe pesado na primeira e ignora a segunda — e é exatamente aí " +
      "que o dinheiro do tráfego pago vaza.",
    stats: [
      { num: "5", suffix: "+", text: "tentativas de follow-up são necessárias para fechar 80% das vendas", src: "LeadResponse / SPOTIO, 2026" },
      { num: "44", suffix: "%", text: "dos vendedores desistem depois da primeira tentativa de contato", src: "LeadResponse, 2026" },
      { num: "92", suffix: "%", text: "dos gestores comerciais relatam perder leads qualificados por atraso no follow-up", src: "Zapier, 2026" },
      { num: "7", suffix: "x", text: "mais chance de qualificar um lead respondendo em até 1h, contra esperar 24h", src: "Harvard Business Review" },
    ],
    kicker: "Demanda sem conversão não é resultado. É custo.",
  },

  compare: {
    eyebrow: "Comercial forte × comercial fraco",
    heading: "Quanto mais forte o comercial, menos você depende de tráfego pago.",
    intro:
      "Cada ponto de conversão a mais reduz o número de leads necessários para bater a " +
      "mesma meta. Comercial fraco não é só venda perdida — é custo de aquisição multiplicado.",
    labelWeak: "Comercial fraco",
    labelStrong: "Comercial forte",
    rows: [
      { label: "Resposta ao lead", weak: "Horas — ou o lead esfria", strong: "Minutos, com script pronto" },
      { label: "Follow-up", weak: "1 tentativa, depois desiste", strong: "Cadência mínima de 3 tentativas por dia" },
      { label: "Objeção", weak: "Trava a conversa e perde a venda", strong: "Reconhece como fuga e reverte" },
      { label: "Métrica", weak: "Não sabe a própria taxa de conversão", strong: "Sabe onde o funil vaza, etapa por etapa" },
      { label: "Tráfego pago", weak: "Precisa de mais leads para bater a meta", strong: "Fatura mais com o mesmo investimento" },
    ],
  },

  cultivo: {
    eyebrow: "Etapa 03 do Método Floresta",
    heading: "Cultivo: o segredo que a maioria das agências ignora.",
    visualTitle: "Sem Cultivo, a Colheita não vem.",
    steps: [
      { num: "01", text: "Semente — a oferta certa" },
      { num: "02", text: "Solo — demanda qualificada" },
      { num: "03", text: "Cultivo — comercial treinado para fechar", active: true },
      { num: "04", text: "Colheita — escala previsível" },
      { num: "05", text: "Floresta — LTV e indicação" },
    ],
    textHeading: "Toda empresa precisa gerar demanda e converter essa demanda.",
    paragraph1:
      "Você pode ter a Semente certa e o Solo fértil — anúncio bom, conteúdo bom, lead " +
      "chegando. Se o Cultivo falha, a demanda inteira apodrece antes de virar faturamento.",
    paragraph2:
      "É por isso que o treinamento comercial não é um produto separado do resto do " +
      "método — é a etapa que garante que tudo o que vem antes não seja desperdiçado.",
    quote: "Demanda sem conversão não é resultado. É custo.",
  },

  anchor: {
    eyebrow: "Quanto custaria montar isso sozinho",
    heading: "Estruturar seu comercial por conta própria custaria mais de R$ 30.000.",
    rows: [
      { label: "Diagnóstico comercial", value: "R$ 3.000 – 15.000" },
      { label: "Playbook de vendas único, sob medida", value: "R$ 5.000 – 12.000" },
      { label: "Scripts de vendas (biblioteca completa)", value: "R$ 1.500 – 4.000" },
      { label: "CRM, por vendedor / mês", value: "R$ 80 – 200" },
      { label: "Consultoria comercial contínua / mês", value: "R$ 15.000 – 50.000" },
    ],
    total: { label: "Projeto de estruturação comercial completo, no mercado", value: "R$ 30.000 – 150.000" },
    kicker:
      "Com a Green Hub, seu comercial começa a ser estruturado a partir de R$ 1.500 — e o " +
      "nosso tier mais completo, o Elite, ainda fica abaixo do piso do que uma consultoria " +
      "cobraria só pela implementação.",
  },

  plans: {
    eyebrow: "Planos",
    heading: "Escolha o ritmo de cultivo certo para o seu comercial.",
    revealLabel: "Desbloquear valores",
    hideLabel: "Ocultar valores",
    items: [
      {
        name: "Start",
        description: "Para quem precisa organizar o básico e treinar 1 pessoa por vez.",
        setup: "R$ 1.500",
        price: "R$ 2.000",
        features: [
          "Diagnóstico de funil (macro)",
          "Playbook de Vendas (genérico)",
          "Treinamento em grupo, 1x/mês",
          "Acompanhamento em grupo — SLA 48h",
        ],
      },
      {
        name: "Unique",
        description: "Ritmo quinzenal, playbook mais completo, com certificado.",
        setup: "R$ 2.200",
        price: "R$ 3.500",
        features: [
          "Diagnóstico de funil + gargalos",
          "Playbook de Vendas + 1 etapa à escolha",
          "Scripts básicos",
          "CRM Green Hub com 25% de desconto",
          "Acompanhamento prioritário — SLA 24h",
          "Certificado de conclusão",
        ],
      },
      {
        name: "Estratégico",
        description: "Treinamento em equipe toda semana, playbook único e roleplay.",
        setup: "R$ 2.800",
        price: "R$ 7.890",
        featured: true,
        badge: "Mais vendido",
        features: [
          "Diagnóstico individualizado por vendedor",
          "Playbook único + 2 etapas à escolha",
          "Scripts completos",
          "CRM Green Hub com 50% de desconto",
          "Roleplay em equipe, toda semana",
          "Certificado de conclusão",
        ],
      },
      {
        name: "Elite",
        description: "Implementação completa e individualizada por vendedor.",
        setup: "R$ 4.749",
        price: "R$ 13.700",
        features: [
          "Diagnóstico individualizado por vendedor",
          "Playbook único e completo — todas as etapas",
          "Scripts com atualização contínua",
          "CRM Green Hub gratuito",
          "Treinamento individualizado, 1x/semana no mínimo",
          "Roleplay gravado com feedback individual",
          "Canal direto — SLA no mesmo dia",
        ],
      },
    ],
  },

  imersao: {
    eyebrow: "Imersão Floresta",
    heading: "Imersão Floresta: a virada comercial completa em 1 dia, sem esperar meses.",
    intro:
      "Diagnóstico prévio, um dia inteiro presencial com o time, playbook construído ao " +
      "vivo e 30 dias de suporte direto. Vagas limitadas por trimestre.",
    revealLabel: "Desbloquear investimento",
    hideLabel: "Ocultar investimento",
    methodName: "Método Floresta",
    methodNote:
      "A palestra inteira é conduzida dentro do Método Floresta — as 5 etapas aplicadas " +
      "ao vivo, com os números e o funil reais do seu time.",
    steps: [
      { tag: "Antes", title: "Diagnóstico prévio", text: "Funil, CRM atual, scripts e entrevista com a liderança — 1 a 2 semanas antes." },
      { tag: "Manhã", title: "Devolutiva e alinhamento", text: "Gargalos apresentados direto para a liderança e o time, ao vivo." },
      { tag: "Meio do dia", title: "Método aplicado na prática", text: "Método Floresta + camada Challenger com exercícios reais do time." },
      { tag: "Tarde", title: "Playbook construído ao vivo", text: "Co-criado com o time — sai pronto no mesmo dia." },
      { tag: "Fechamento", title: "Roleplay e plano de 90 dias", text: "Feedback na hora, plano de ação definido antes de todos irem embora." },
      { tag: "Depois", title: "30 dias de suporte", text: "WhatsApp direto + 1 call de revisão no dia 30." },
    ],
    tableLabel: "Preço de tabela",
    tablePrice: "R$ 45.000",
    closingLabel: "Investimento de fechamento",
    closingPrice: "R$ 28.000",
  },

  closing: {
    titlePlain: "Eai, ",
    titleGold: "Deu Green?",
    line1: "Sua empresa já tem demanda.",
    line2: "Falta o comercial saber colher.",
  },
};

export type SiteContent = typeof defaultContent;
