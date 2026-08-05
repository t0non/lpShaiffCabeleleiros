import { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  businessName: "Shaiff Cabeleireiros",
  alternateName: "Espaço Shaiff",
  description:
    "Salão de beleza e cabeleireiro no Condomínio Edifício Angelini Center, no bairro Santa Efigênia em Belo Horizonte - MG.",
  telephone: "(31) 3564-0123",
  telephoneHref: "tel:+5531984435409",
  whatsappNumber: "(31) 3564-0123",
  whatsappHref: "https://wa.me/5531984435409?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20Shaiff%20Cabeleireiros%20e%20gostaria%20de%20consultar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%20para%20[nome%20do%20servi%C3%A7o].",
  address: "R. Padre Rolim, 715",
  building: "Condomínio Edifício Angelini Center",
  neighborhood: "Santa Efigênia",
  city: "Belo Horizonte",
  state: "MG",
  postalCode: "30130-094",
  country: "Brasil",
  googleBusinessProfile: "https://share.google/PCwFoDgKFJGVZaKqy",
  googleMapsUrl: "https://share.google/PCwFoDgKFJGVZaKqy",
  instagramUrl: "",
  domain: "",
  email: "",
  openingHours: null,
  reviews: null,
  socialLinks: null,
  trackingIds: null,
  brand: {
    primaryColor: "#B85C28",
    secondaryColor: "#5C4E43",
    darkSurfaceColor: "#14110F",
  },
  images: {
    logoPlaceholder: "/images/placeholder-logo.svg",
    heroPlaceholder: "/images/placeholder-hero.jpg",
    salonPlaceholder: "/images/placeholder-salon.jpg",
  },
  services: [
    {
      id: "cabelo",
      name: "Cabelo",
      slug: "cabelo",
      shortDescription:
        "Cortes, escova modeladora, finalizações, hidratação capilar profunda, nutrição, corte e penteados, alisamento, plástica dos fios, coloração, luzes e cronograma capilar.",
      fullDescription:
        "Oferecemos soluções completas para a saúde e beleza dos seus cabelos: cortes modernos, escova modeladora, finalizações detalhadas, hidratação profunda, nutrição capilar, alisamento, plástica dos fios, colorações vibrantes, mechas e luzes personalizadas, além de cronograma capilar personalizado.",
      ctaText: "Quero cuidar dos meus cabelos",
      introductoryText:
        "Os serviços de cabelo no Shaiff Cabeleireiros, em Santa Efigênia, Belo Horizonte, são realizados por profissionais especializados para garantir saúde, beleza e satisfação com o resultado.",
      benefits: [
        "Cortes modernos e personalizados",
        "Hidratação profunda e nutrição intensa",
        "Técnicas de coloração e luzes de alta qualidade",
        "Alinhamento capilar com plástica dos fios",
        "Cronograma capilar para recuperação capilar",
      ],
      howItWorks: [
        {
          step: "Passo 1",
          title: "Conte o que você procura",
          description:
            "Explique qual estilo, comprimento ou ajuste de formato você deseja realizar nos seus fios.",
        },
        {
          step: "Passo 2",
          title: "Consulte as possibilidades",
          description:
            "A equipe avalia as características do seu cabelo e orienta sobre o caimento e saúde capilar.",
        },
        {
          step: "Passo 3",
          title: "Confirme seu horário",
          description:
            "Após a conversa inicial, o procedimento desejado é executado com atenção total aos detalhes.",
        },
      ],
      suitableFor: [
        "Quem deseja renovar a estrutura e a leveza do cabelo",
        "Quem busca tratar fios ressecados ou danificados",
        "Quem quer mudar de cor ou iluminar o visual",
        "Quem busca alinhamento e redução do frizz",
      ],
      considerations: [
        "O caimento e durabilidade dos procedimentos dependem da estrutura natural e histórico capilar.",
        "Consulte a disponibilidade de horário com antecedência para garantir seu atendimento.",
        "Caso tenha químicas recentes, informe o profissional antes do procedimento.",
      ],
      frequentlyAskedQuestions: [
        {
          question: "Como solicitar um horário para Cabelo?",
          answer:
            "Você pode ligar para o telefone (31) 3564-0123 ou enviar uma mensagem pelo WhatsApp para consultar os horários.",
        },
        {
          question: "Vocês realizam mechas e coloração?",
          answer:
            "Sim. Nossos profissionais são especialistas em mechas, luzes, coloração e tratamentos capilares.",
        },
      ],
      image: "/images/shaiff/card_corte.png",
      imageAlt: "Cortes e escovas profissionais no Shaiff Cabeleireiros",
      icon: "Scissors",
      primaryKeyword: "cabeleireiro em Santa Efigênia",
      secondaryKeywords: [
        "corte de cabelo em Belo Horizonte",
        "hidratação profunda BH",
        "mechas e luzes Santa Efigênia",
      ],
      metadataTitle: "Serviços de Cabelo em Santa Efigênia, BH | Shaiff",
      metadataDescription:
        "Cortes, escovas, hidratação profunda, coloração, luzes e tratamentos capilares completos no Shaiff Cabeleireiros em Santa Efigênia, Belo Horizonte.",
      relatedSlugs: ["manicure-pedicure-esmaltacao", "sobrancelhas-design-e-henna", "producoes-maquiagem-e-penteados"],
      featured: true,
      active: true,
    },
    {
      id: "manicure-pedicure-esmaltacao",
      name: "Manicure, pedicure e esmaltação",
      slug: "manicure-pedicure-esmaltacao",
      shortDescription:
        "Unhas das mãos e pés bem cuidadas com cutilagem atenciosa, lixamento e esmaltação perfeita.",
      fullDescription:
        "Cuidado completo para a beleza das suas mãos e pés, com corte, lixamento, remoção de cutículas e esmaltação com produtos de qualidade e higiene garantida.",
      ctaText: "Quero agendar minhas unhas",
      introductoryText:
        "Os serviços de manicure, pedicure e esmaltação no Shaiff Cabeleireiros em Santa Efigênia oferecem o carinho e cuidado que suas unhas merecem.",
      benefits: [
        "Instrumentos esterilizados em autoclave",
        "Esmaltação duradoura com diversas cores",
        "Cuidado profissional e acabamento impecável",
      ],
      howItWorks: [
        {
          step: "Passo 1",
          title: "Conte o que você procura",
          description:
            "Indique se deseja atendimento de manicure, pedicure ou ambos.",
        },
        {
          step: "Passo 2",
          title: "Consulte as possibilidades",
          description:
            "Escolha a cor de esmalte e os acabamentos desejados.",
        },
        {
          step: "Passo 3",
          title: "Confirme seu horário",
          description:
            "A profissional realiza o preparo, cutilagem e esmaltação das unhas.",
        },
      ],
      suitableFor: [
        "Quem gosta de manter as unhas das mãos e dos pés sempre cuidadas",
        "Quem precisa se preparar para eventos ou viagens",
        "Quem valoriza higiene e materiais esterilizados",
      ],
      considerations: [
        "Utilizamos instrumentos esterilizados em autoclave para total segurança.",
        "Consulte a disponibilidade de horário caso queira realizar mãos e pés no mesmo dia.",
      ],
      frequentlyAskedQuestions: [
        {
          question: "Vocês usam materiais descartáveis?",
          answer:
            "Sim. Lixas e palitos são descartáveis, e os instrumentos de metal são esterilizados em autoclave.",
        },
        {
          question: "Como agendar?",
          answer:
            "Entre em contato pelo WhatsApp (31) 3564-0123 e agende seu horário.",
        },
      ],
      image: "/images/shaiff/card_manicure_pedicure.png",
      imageAlt: "Manicure e pedicure no Shaiff Cabeleireiros",
      icon: "Gem",
      primaryKeyword: "manicure e pedicure em Santa Efigênia",
      secondaryKeywords: [
        "unhas em Belo Horizonte",
        "salão com manicure BH",
        "pedicure Santa Efigênia",
      ],
      metadataTitle: "Manicure e Pedicure em Santa Efigênia, BH | Shaiff",
      metadataDescription:
        "Cuidados completos para pés e mãos. Esmaltação, manicure e pedicure com segurança e higiene no Shaiff Cabeleireiros.",
      relatedSlugs: ["cabelo", "sobrancelhas-design-e-henna", "producoes-maquiagem-e-penteados"],
      featured: true,
      active: true,
    },
    {
      id: "sobrancelhas-design-e-henna",
      name: "Sobrancelhas – Design e Henna",
      slug: "sobrancelhas-design-e-henna",
      shortDescription:
        "Design personalizado e aplicação de henna para valorizar o seu olhar de forma harmônica.",
      fullDescription:
        "Modelagem de sobrancelhas com design personalizado baseado na simetria do seu rosto e acabamento com henna para definição e preenchimento natural.",
      ctaText: "Quero agendar minhas sobrancelhas",
      introductoryText:
        "O design de sobrancelha e aplicação de henna no Shaiff Cabeleireiros, em Santa Efigênia, Belo Horizonte, destaca o olhar com simetria e naturalidade.",
      benefits: [
        "Alinhamento perfeito com a simetria facial",
        "Preenchimento de falhas com Henna premium",
        "Realce imediato do olhar e expressão",
      ],
      howItWorks: [
        {
          step: "Passo 1",
          title: "Conte o que você procura",
          description:
            "Explique se prefere apenas o design clássico ou a aplicação de henna para preenchimento.",
        },
        {
          step: "Passo 2",
          title: "Consulte as possibilidades",
          description:
            "A profissional realiza o mapeamento facial para encontrar o desenho ideal.",
        },
        {
          step: "Passo 3",
          title: "Confirme seu horário",
          description:
            "O procedimento é feito com pinça, linha e aplicação cuidadosa do pigmento.",
        },
      ],
      suitableFor: [
        "Quem busca limpar e alinhar o desenho das sobrancelhas",
        "Quem possui falhas e deseja preencher com a henna",
        "Quem quer destacar a expressão facial",
      ],
      considerations: [
        "A henna é temporária e sua duração na pele varia de acordo com a oleosidade e cuidados.",
        "O design respeita o crescimento e caimento natural dos seus fios.",
      ],
      frequentlyAskedQuestions: [
        {
          question: "Quanto tempo dura a henna?",
          answer:
            "A henna costuma durar de 5 a 10 dias na pele, variando conforme o tipo de pele e rotina de limpeza.",
        },
        {
          question: "Preciso agendar?",
          answer:
            "Sim. Recomendamos agendar previamente no WhatsApp (31) 3564-0123.",
        },
      ],
      image: "/images/shaiff/card_design_sobrancelha.png",
      imageAlt: "Design de sobrancelha e henna no Shaiff",
      icon: "Eye",
      primaryKeyword: "design de sobrancelha em Santa Efigênia",
      secondaryKeywords: [
        "sobrancelhas de henna BH",
        "designer de sobrancelhas Santa Efigênia",
      ],
      metadataTitle: "Design de Sobrancelha e Henna em Santa Efigênia | Shaiff",
      metadataDescription:
        "Definição e beleza para suas sobrancelhas. Design personalizado e henna no Shaiff Cabeleireiros em Santa Efigênia, Belo Horizonte.",
      relatedSlugs: ["cabelo", "manicure-pedicure-esmaltacao", "producoes-maquiagem-e-penteados"],
      featured: true,
      active: true,
    },
    {
      id: "producoes-maquiagem-e-penteados",
      name: "Produções – Maquiagem e Penteados",
      slug: "producoes-maquiagem-e-penteados",
      shortDescription:
        "Maquiagem e penteados profissionais para casamentos, formaturas, festas e ocasiões especiais.",
      fullDescription:
        "Produções de beleza completas com maquiagem de alta durabilidade e penteados personalizados para fazer você brilhar nos seus momentos mais especiais.",
      ctaText: "Quero agendar uma produção",
      introductoryText:
        "Os serviços de maquiagem e penteados no Shaiff Cabeleireiros em Santa Efigênia são ideais para noivas, madrinhas, formandas e convidadas.",
      benefits: [
        "Produtos de maquiagem de alta fixação",
        "Penteados clássicos, modernos e tranças",
        "Visual personalizado para o seu estilo e evento",
      ],
      howItWorks: [
        {
          step: "Passo 1",
          title: "Conte o que você procura",
          description:
            "Apresente referências de maquiagem ou penteados que combinam com seu evento.",
        },
        {
          step: "Passo 2",
          title: "Consulte as possibilidades",
          description:
            "Nossos profissionais indicam as melhores produções para seu tom de pele e tipo de cabelo.",
        },
        {
          step: "Passo 3",
          title: "Confirme seu horário",
          description:
            "No dia agendado, realizamos a maquiagem e penteado com total capricho.",
        },
      ],
      suitableFor: [
        "Madrinhas, noivas e formandas",
        "Convidadas de eventos sociais importantes",
        "Quem deseja um visual impecável e com alta durabilidade",
      ],
      considerations: [
        "Recomenda-se trazer referências (fotos) do estilo que você mais gosta.",
        "Chegue com antecedência e com o cabelo limpo e seco para penteados.",
      ],
      frequentlyAskedQuestions: [
        {
          question: "Vocês atendem noivas?",
          answer:
            "Sim. Oferecemos produções completas e atendimento personalizado para noivas e acompanhantes.",
        },
        {
          question: "Como agendar?",
          answer:
            "Você pode agendar pelo telefone/WhatsApp (31) 3564-0123.",
        },
      ],
      image: "/images/shaiff/card_escova.png",
      imageAlt: "Maquiagem e penteados no Shaiff Cabeleireiros",
      icon: "Sparkles",
      primaryKeyword: "maquiagem e penteado em Santa Efigênia",
      secondaryKeywords: [
        "maquiadora profissional BH",
        "penteados para festas Santa Efigênia",
        "produção de noivas BH",
      ],
      metadataTitle: "Maquiagem e Penteados em Santa Efigênia, BH | Shaiff",
      metadataDescription:
        "Produções completas de beleza. Maquiagem e penteados para festas e eventos com profissionalismo no Shaiff Cabeleireiros.",
      relatedSlugs: ["cabelo", "manicure-pedicure-esmaltacao", "sobrancelhas-design-e-henna"],
      featured: true,
      active: true,
    },
  ],
};
