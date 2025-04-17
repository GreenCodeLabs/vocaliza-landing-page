import BlueGradientsBackground from "@/assets/backgrounds/blue-gradients-background.png";
import CloudsCardBackground from "@/assets/backgrounds/clouds-background.png";
import LightsBackground from "@/assets/backgrounds/lights-background.png";
import WaveBackground from "@/assets/backgrounds/wave-background.png";
import { Icons } from "@/components/ui/icons";

export const pt = {
  header: {
    navbar: {
      links: [
        { name: "Funcionalidades", url: "#features", icon: <Icons.Sparkles /> },
        { name: "Preços", url: "#pricing", icon: <Icons.Coin /> },
        { name: "Waitlist", url: "#waitlist", icon: <Icons.Book /> },
      ],
      solutions: {
        title: "Soluções",
        industries: {
          title: "Indústrias",
          links: [
            { name: "Saúde", url: "#" },
            { name: "Logística", url: "#" },
            { name: "Atendimento ao Cliente", url: "#" },
          ],
        },
        usecases: {
          title: "Casos de Uso",
          links: [
            { name: "Atendimento ao Cliente", url: "#" },
            { name: "Vendas", url: "#" },
            { name: "Suporte", url: "#" },
          ],
        },
      },
      resources: {
        title: "Recursos",
        links: [
          { name: "Sobre Nós", url: "#" },
          { name: "Blog", url: "#" },
          { name: "FAQ", url: "#" },
          { name: "Contato", url: "#" },
        ],
        socialMedias: [
          {
            name: "Linkedin",
            url: "#",
            icon: <Icons.SocialMedias.Linkedin className="w-3 h-3" />,
          },
          {
            name: "Instagram",
            url: "#",
            icon: <Icons.SocialMedias.Instagram className="w-3 h-3" />,
          },
          {
            name: "X",
            url: "#",
            icon: <Icons.SocialMedias.X className="w-3 h-3" />,
          },
        ],
      },
    },
    links: {
      login: { name: "Entrar", url: "#" },
      startFreeTrial: { name: "Iniciar Teste Grátis", url: "#waitlist" },
    },
  },
  hero: {
    copywrite: {
      title: "Automatize ligações e foque no que",
      highlighted: "importa",
      description:
        "Crie agentes de IA que lidam com suas chamadas de voz com conversas de som natural. Economize tempo, reduza custos e melhore a experiência do cliente.",
    },
    tags: [
      "Baixo Custo",
      "Som Humano",
      "Transferência de Chamadas",
      "Funções de API",
    ],
    cta: {
      startAFreeTrial: {
        title: "Iniciar Teste Grátis",
        href: "#waitlist",
      },
      requestDemo: {
        title: "Solicitar uma Demonstração",
        href: "#waitlist",
      },
    },
    benefits: ["Sem cartão de crédito necessário", "Teste grátis de 14 dias"],
  },
  features: {
    cards: {
      voiceCustomization: {
        title: "Personalização de Voz",
        description:
          "Personalize vozes de IA para combinar com o tom da sua marca para uma interação mais natural.",
        icon: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f62f/512.gif",
        background: LightsBackground,
      },
      multilingualSupport: {
        title: "Suporte Multilíngue",
        description:
          "Ofereça uma experiência com som natural para clientes em vários idiomas.",
        background: BlueGradientsBackground,
      },
      aiPoweredConversations: {
        title: "Conversas Alimentadas por IA",
        description:
          "Melhore as interações com os clientes com respostas de IA inteligentes e semelhantes a humanos—24/7, fluidas e eficientes.",
        icon: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif",
        background: WaveBackground,
      },
      flyHigher: {
        title: "Voe Mais Alto Sem Limites",
        description:
          "Gerencie facilmente vários números de telefone e equipes com nossa plataforma flexível e escalável.",
        icon: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif",
        background: CloudsCardBackground,
      },
    },
  },
  pricing: {
    copyright: {
      tag: "Preços",
      title: "Planos para empresas de todos os tamanhos",
      description:
        "Escolha o plano ideal para o seu negócio e comece a transformar seu serviço hoje.",
    },
    plans: [
      {
        name: "Iniciante",
        price: 149,
        description: "Ideal para pequenas empresas começando com IA.",
        features: [
          "1 número de telefone",
          "Até 2 agentes de IA simultâneos",
          "100 minutos incluídos/mês",
          "Relatórios básicos",
          "Suporte por e-mail",
        ],
        checkoutButton: {
          title: "Em Breve",
        },
        highlight: false,
        color: "yellow",
      },
      {
        name: "Negócios",
        price: 449,
        description: "Para empresas em crescimento com necessidades avançadas.",
        features: [
          "5 números de telefone",
          "Até 10 agentes de IA simultâneos",
          "300 minutos incluídos/mês",
          "Relatórios avançados",
          "Suporte prioritário via chat",
        ],
        checkoutButton: {
          title: "Em Breve",
        },
        highlight: true,
        color: "blue",
      },
      {
        name: "Customizado",
        price: Infinity,
        description: "Para grandes empresas com necessidades complexas.",
        features: [
          "Números de telefone ilimitados",
          "Agentes de IA ilimitados",
          "A partir de 1.000 minutos incluídos/mês",
          "Integração completa com APIs",
          "Gerente de conta dedicado",
          "SLA garantido",
        ],
        checkoutButton: {
          title: "Em Breve",
        },
        highlight: false,
        color: "black",
      },
    ],
  },
  waitList: {
    copywrite: {
      tag: "Acesso Limitado",
      title: "Entre na Lista de Espera",
      description:
        "Estamos atualmente em beta com vagas limitadas disponíveis. Entre na nossa lista de espera para ser notificado quando abrirmos mais lugares.",
    },
    form: {
      placeholder: "Digite seu e-mail",
      button: "Entrar na Lista",
      success: "Obrigado por entrar na lista de espera!",
      error: {
        invalid: "E-mail inválido",
        exists: "Este email já está na lista de espera.",
        internal: "Ocorreu um erro interno.",
        unknown: "Ocorreu um erro inesperado.",
      },
    },
    disclaimer:
      "Nós te notificaremos quando for sua vez de experimentar o Vocaliza. Sem spam, prometemos.",
  },
  faq: {
    copywrite: {
      tag: "FAQ",
      title: "Perguntas Frequentes",
      description:
        "Encontre respostas para perguntas comuns sobre o Vocaliza e nossa plataforma de chamadas alimentada por IA.",
    },
    questions: [
      {
        question: "O que é a Vocaliza e como ela funciona?",
        answer:
          "A Vocaliza é uma plataforma de IA de voz que automatiza chamadas com conversas realistas e humanas. Utilizamos tecnologias avançadas de processamento de linguagem natural (NLP) e síntese de voz, integradas ao Twilio para telefonia e ao OpenAI para inteligência conversacional. Nossa IA entende o contexto, responde perguntas e lida com cenários complexos de atendimento, como agendamentos, suporte ao cliente e vendas, tudo de forma escalável e 24/7.",
      },
      {
        question:
          "Quais são os benefícios de usar a Vocaliza em vez de atendentes humanos?",
        answer:
          "A Vocaliza oferece escalabilidade ilimitada, funcionando 24/7 sem pausas, com consistência e sem variação de humor. Enquanto um atendente humano custa cerca de R$ 0,20/minuto (custo interno para empresas), as empresas de call center cobram de R$ 1,00 a R$ 2,00/minuto dos clientes. Com a Vocaliza, você paga a partir de R$ 1,49/minuto (nos planos) e tem um atendimento mais eficiente, reduzindo custos operacionais e aumentando a satisfação do cliente com respostas rápidas e precisas.",
      },
      {
        question: "Posso personalizar as vozes da IA para a minha marca?",
        answer:
          "Sim! A Vocaliza permite personalizar as vozes da IA para refletir a identidade da sua marca, ajustando tom, estilo e até sotaques. No plano Negócios e Empresarial, você também pode criar scripts personalizados para cenários específicos de atendimento, garantindo uma experiência única para seus clientes.",
      },
      {
        question: "A Vocaliza é segura e está em conformidade com a LGPD?",
        answer:
          "Sim, a Vocaliza segue rigorosamente a Lei Geral de Proteção de Dados (LGPD) e outras regulamentações de privacidade. Todos os dados das chamadas são criptografados, e os clientes têm controle total sobre o armazenamento e uso das informações. Nosso sistema é projetado para proteger a privacidade dos seus clientes e da sua empresa.",
      },
      {
        question: "Como a Vocaliza lida com cenários complexos de atendimento?",
        answer:
          "Nossa IA é treinada para entender o contexto e responder a perguntas complexas, como negociações, suporte técnico ou agendamentos com múltiplas variáveis. Se a IA não conseguir resolver uma situação, ela pode transferir a chamada para um atendente humano (no plano Negócios e Empresarial) ou registrar a solicitação para follow-up, garantindo que nenhum cliente fique sem resposta.",
      },
      {
        question: "Quanto tempo leva para começar a usar a Vocaliza?",
        answer:
          "Você pode configurar sua conta Vocaliza em minutos! Após se inscrever, você recebe um número de telefone dedicado e pode criar seu primeiro agente de IA em menos de 15 minutos usando nossos modelos prontos. Para configurações mais avançadas, nossa equipe de suporte (disponível em todos os planos) pode ajudar a personalizar o sistema em até 24 horas.",
      },
      {
        question: "O que acontece se eu ultrapassar os minutos do meu plano?",
        answer:
          "Se você exceder os minutos inclusos no seu plano, os minutos adicionais serão cobrados a R$ 1,80/minuto. Você pode monitorar seu uso em tempo real pelo painel da Vocaliza e, se precisar de mais minutos regularmente, pode migrar para um plano maior ou negociar pacotes personalizados no plano Empresarial.",
      },
    ],
  },
  footer: {
    watermark: "© 2025 Vocaliza. Todos os direitos reservados.",
    links: [
      { name: "Termos", url: "#" },
      { name: "Privacidade", url: "#" },
      { name: "Contato", url: "#" },
    ],
  },
};
