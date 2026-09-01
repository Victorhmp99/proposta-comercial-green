// Todo o texto editável do site de Treinamento Comercial.

export const defaultContent = {
  hero: {
    tag: "Método Floresta — Cultivo",
    title: "GREEN HUB",
    subtitle: "Treinamento Comercial",
    headlinePlain: "Sua empresa já gera demanda.",
    headlineQuestion: "A pergunta é: seu comercial sabe colher?",
    lede:
      "Analisamos como sua empresa vende hoje, montamos o manual de vendas, " +
      "treinamos o time e acompanhamos de perto — até a demanda virar faturamento.",
    badge: "Proposta Comercial",
    stats: [
      { value: "93,2%", label: "das pequenas e médias empresas do Brasil vendem sem nenhum processo comercial organizado" },
      { value: "67%", label: "dos clientes perdidos nas vendas entre empresas são descartados por falta de preparo do vendedor — não por falta de interesse" },
      { value: "2,5%", label: "é a média de vendas fechadas a cada 100 contatos nas empresas brasileiras hoje" },
    ],
  },

  problem: {
    eyebrow: "O Problema Real",
    heading: "Marketing gera demanda. Comercial fraco transforma essa demanda em fracasso.",
    intro:
      "Toda empresa precisa de duas coisas: atrair pessoas interessadas e transformar " +
      "esse interesse em venda. A maioria investe pesado na primeira e esquece a " +
      "segunda — e é exatamente aí que o dinheiro do anúncio vai embora.",
    stats: [
      { num: "5", suffix: "+", text: "tentativas de contato são necessárias para fechar 80% das vendas", src: "LeadResponse / SPOTIO, 2026" },
      { num: "44", suffix: "%", text: "dos vendedores desistem depois da primeira tentativa de contato", src: "LeadResponse, 2026" },
      { num: "92", suffix: "%", text: "dos gestores admitem perder clientes prontos para comprar por demorar a responder", src: "Zapier, 2026" },
      { num: "7", suffix: "x", text: "mais chance de avançar com o cliente respondendo em até 1 hora, em vez de esperar um dia", src: "Harvard Business Review" },
    ],
    kicker: "Demanda sem conversão não é resultado. É custo.",
  },

  compare: {
    eyebrow: "Comercial forte × comercial fraco",
    heading: "Quanto mais forte o comercial, menos você depende de tráfego pago.",
    intro:
      "Cada venda a mais fechada com os mesmos contatos significa menos gente que você " +
      "precisa atrair para bater a meta. Time despreparado não é só venda perdida — " +
      "é dinheiro de anúncio jogado fora.",
    labelWeak: "Comercial fraco",
    labelStrong: "Comercial forte",
    rows: [
      { label: "Tempo de resposta", weak: "Demora horas — e o cliente esfria", strong: "Responde em minutos, com a fala pronta" },
      { label: "Insistência", weak: "Tenta uma vez e desiste", strong: "Pelo menos 3 tentativas por dia, com roteiro" },
      { label: "Quando ouve um 'não'", weak: "Trava a conversa e perde a venda", strong: "Entende o motivo real e reverte" },
      { label: "Controle dos números", weak: "Não sabe quantos por cento fecha", strong: "Sabe exatamente onde perde cliente, etapa por etapa" },
      { label: "Retorno do anúncio", weak: "Precisa de mais gente para bater a meta", strong: "Fatura mais com o mesmo investimento" },
    ],
  },

  cultivo: {
    eyebrow: "Etapa 03 do Método Floresta",
    heading: "Cultivo: o segredo que a maioria das agências ignora.",
    visualTitle: "Sem Cultivo, a Colheita não vem.",
    steps: [
      { num: "01", text: "Semente — a oferta certa para o mercado certo" },
      { num: "02", text: "Solo — gente interessada chegando todo dia" },
      { num: "03", text: "Cultivo — comercial treinado para fechar", active: true },
      { num: "04", text: "Colheita — faturamento que se repete todo mês" },
      { num: "05", text: "Floresta — cliente que volta e indica" },
    ],
    textHeading: "Não adianta atrair muita gente se o time não sabe transformar isso em venda.",
    paragraph1:
      "Você pode ter a Semente certa e o Solo fértil — anúncio bom, conteúdo bom, gente " +
      "chegando todo dia. Se o Cultivo falha, tudo isso apodrece antes de virar dinheiro.",
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
      { label: "Manual de vendas sob medida", value: "R$ 5.000 – 12.000" },
      { label: "Falas prontas de venda (biblioteca completa)", value: "R$ 1.500 – 4.000" },
      { label: "Sistema de CRM, por vendedor / mês", value: "R$ 80 – 200" },
      { label: "Consultoria comercial contínua / mês", value: "R$ 15.000 – 50.000" },
    ],
    total: { label: "Projeto de estruturação comercial completo, no mercado", value: "R$ 30.000 – 150.000" },
    kicker:
      "Com a Green Hub, seu comercial começa a ser estruturado a partir de R$ 1.500 — e até " +
      "o nosso plano mais completo, o Elite, custa menos que o mínimo que uma consultoria " +
      "cobraria só para montar tudo.",
  },

  results: {
    eyebrow: "Resultados",
    heading: "Parceiros que transformaram o comercial.",
    intro:
      "Empresas que pararam de depender da sorte no atendimento. Mesmo investimento em " +
      "anúncio, mesma equipe — só que agora com processo.",
  },

  glossary: {
    eyebrow: "Antes de escolher",
    heading: "Como vamos estruturar seu comercial.",
    intro:
      "Em português claro: o que cada entrega é, e o que ela muda na prática no dia a " +
      "dia do seu time.",
    items: [
      {
        term: "Diagnóstico",
        text: "O raio-x de como sua empresa vende hoje: de onde vêm os clientes, em que momento eles desistem e quanto dinheiro isso custa por mês. É o que define todo o resto do trabalho.",
      },
      {
        term: "Playbook (manual de vendas)",
        text: "O manual da sua área comercial escrito por completo: como abordar, como entender se a pessoa tem perfil, como falar o preço, como responder a um 'não' e como fechar. Vendedor novo entra e executa igual, sem depender de talento.",
      },
      {
        term: "Scripts (as falas prontas)",
        text: "O que falar, palavra por palavra, no WhatsApp, no telefone e na reunião: primeira mensagem, cobrança de resposta, resposta às desculpas mais comuns e fechamento. Testado, não improvisado na hora.",
      },
      {
        term: "CRM (o sistema)",
        text: "O programa onde cada cliente vira uma ficha, com o que já foi conversado e qual o próximo passo. É o que faz você saber quantos por cento você fecha de verdade, em vez de achar.",
      },
      {
        term: "Roleplay (treino de venda)",
        text: "Ensaio de venda ao vivo: o vendedor atende um cliente de mentira e é corrigido na hora. Ele erra no treino, não na frente do cliente que ia comprar.",
      },
      {
        term: "Suporte (prazo de resposta)",
        text: "O prazo máximo para a nossa equipe te responder. 'Até 48h' são dois dias úteis; 'até 24h' é um dia útil; 'no mesmo dia' é canal direto com prioridade.",
      },
    ],
  },

  plans: {
    eyebrow: "Planos",
    heading: "Escolha o ritmo de treinamento certo para o seu time.",
    resultLabel: "Resultado",
    revealLabel: "Desbloquear o investimento",
    hideLabel: "Ocultar o investimento",
    items: [
      {
        name: "Start",
        result: "2x",
        resultNote: "mais rápido para organizar o funil",
        description: "Para quem precisa organizar o básico e treinar uma pessoa por vez.",
        frequency: "Treinamento 1x por mês",
        setup: "R$ 1.500",
        price: "R$ 2.000",
        features: [
          "Diagnóstico geral de como vocês vendem hoje",
          "Manual de vendas em modelo pronto",
          "Treinamento em grupo, 1x por mês",
          "CRM Green Hub disponível — acesso pago à parte",
          "Acompanhamento em grupo — resposta em até 48h",
        ],
      },
      {
        name: "Unique",
        result: "3x",
        resultNote: "mais rápido para padronizar o time",
        description: "Ritmo quinzenal, manual de vendas mais completo, com certificado.",
        frequency: "Treinamento a cada 15 dias",
        setup: "R$ 2.200",
        price: "R$ 3.500",
        features: [
          "Diagnóstico + onde vocês estão perdendo cliente",
          "Manual de vendas + 1 etapa feita sob medida",
          "Falas prontas para os momentos principais",
          "Treinamento em grupo, a cada 15 dias",
          "CRM Green Hub com 25% de desconto",
          "Acompanhamento prioritário — resposta em até 24h",
          "Certificado de conclusão",
        ],
      },
      {
        name: "Estratégico",
        result: "5x",
        resultNote: "mais rápido para escalar a conversão",
        description: "Treino em equipe toda semana, manual sob medida e ensaio de venda.",
        frequency: "Treinamento 1x por semana",
        setup: "R$ 3.697",
        price: "R$ 7.890",
        featured: true,
        badge: "Mais vendido",
        features: [
          "Diagnóstico individual de cada vendedor",
          "Manual de vendas sob medida + 2 etapas detalhadas",
          "Todas as falas prontas, do primeiro contato ao fechamento",
          "Treino em equipe, toda semana",
          "CRM Green Hub com 50% de desconto",
          "Ensaio de venda em equipe, toda semana",
          "Certificado de conclusão",
        ],
      },
      {
        name: "Elite",
        result: "10x",
        resultNote: "mais rápido para virar máquina de vendas",
        description: "Estruturação completa, com treino individual por vendedor.",
        frequency: "Treinamento individual, no mínimo 1x por semana",
        setup: "R$ 5.490",
        price: "R$ 13.700",
        features: [
          "Diagnóstico individual de cada vendedor",
          "Manual de vendas completo — todas as etapas sob medida",
          "Falas prontas atualizadas o tempo todo",
          "Treino individual com cada vendedor, no mínimo 1x por semana",
          "CRM Green Hub incluso, sem custo",
          "Ensaio de venda gravado, com devolutiva individual",
          "Canal direto — resposta no mesmo dia",
        ],
      },
    ],
  },

  imersao: {
    title: "Imersão Floresta",
    eyebrow: "Imersão Floresta",
    heading: "Imersão Floresta: a virada comercial completa em 1 dia, sem esperar meses.",
    intro:
      "Diagnóstico prévio, um dia inteiro presencial com o time, playbook construído ao " +
      "vivo e 30 dias de suporte direto. Vagas limitadas por trimestre.",
    revealLabel: "Liberar Imersão",
    hideLabel: "Ocultar Imersão",
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
