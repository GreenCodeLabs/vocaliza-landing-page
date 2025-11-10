import BlueGradientsBackground from "@/assets/backgrounds/blue-gradients-background.png";
import CloudsCardBackground from "@/assets/backgrounds/clouds-background.png";
import LightsBackground from "@/assets/backgrounds/lights-background.png";
import WaveBackground from "@/assets/backgrounds/wave-background.png";
import { Icons } from "@/components/ui/icons";

export const en = {
  header: {
    navbar: {
      links: [
        { name: "Features", url: "#features", icon: <Icons.Sparkles /> },
        { name: "Pricing", url: "#pricing", icon: <Icons.Coin /> },
        { name: "Waitlist", url: "#waitlist", icon: <Icons.Book /> },
      ],
      solutions: {
        title: "Solutions",
        industries: {
          title: "Industries",
          links: [
            { name: "Healthcare", url: "#" },
            { name: "Logistics", url: "#" },
            { name: "Customer Service", url: "#" },
          ],
        },
        usecases: {
          title: "Use Cases",
          links: [
            { name: "Customer Service", url: "#" },
            { name: "Sales", url: "#" },
            { name: "Support", url: "#" },
          ],
        },
      },
      resources: {
        title: "Resources",
        links: [
          { name: "About Us", url: "#" },
          { name: "Blog", url: "#" },
          { name: "FAQ", url: "#" },
          { name: "Contact", url: "#" },
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
      login: { name: "Login", url: "#" },
      startFreeTrial: { name: "Start Free Trial", url: "#waitlist" },
    },
  },
  hero: {
    copywrite: {
      title: "Automate calls and focus on what",
      highlighted: "matters",
      description:
        "Create AI agents that handle your voice calls with natural-sounding conversations. Save time, reduce costs, and improve customer experience.",
    },
    tags: ["Low Cost", "Sound Like Human", "Transfer Calls", "Api Functions"],
    cta: {
      startAFreeTrial: {
        title: "Talk to sales",
        href: "#waitlist",
      },
      requestDemo: {
        title: "Request demo",
        href: "#waitlist",
      },
    },
    benefits: ["No credit card required", "14-day free trial"],
  },
  features: {
    cards: {
      voiceCustomization: {
        title: "Voice Customization",
        description:
          "Personalize AI voices to match your brand’s tone for a more natural interaction.",
        icon: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f62f/512.gif",
        background: LightsBackground,
      },
      multilingualSupport: {
        title: "Multilingual Support",
        description:
          "Offer a natural-sounding experience to customers in multiple languages.",
        background: BlueGradientsBackground,
      },
      aiPoweredConversations: {
        title: "AI-Powered Conversations",
        description:
          "Enhance customer interactions with intelligent, human-like AI responses—24/7, seamless, and efficient.",
        icon: "https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif",
        background: WaveBackground,
      },
      flyHigher: {
        title: "Fly Higher Without Limits",
        description:
          "Easily manage multiple phone numbers and teams with our flexible and scalable platform.",
        icon: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif",
        background: CloudsCardBackground,
      },
    },
  },
  pricing: {
    copyright: {
      tag: "Pricing",
      title: "Plans for companies of all sizes",
      description:
        "Choose the ideal plan for your business and start transforming your service today.",
    },
    plans: [
      {
        name: "Starter",
        price: 149,
        description: "Ideal for small businesses starting with AI.",
        features: [
          "1 phone number",
          "Up to 2 simultaneous AI agents",
          "100 minutes included/month",
          "Basic reports",
          "Email support",
        ],
        checkoutButton: {
          title: "Coming Soon",
        },
        highlight: false,
        color: "yellow",
      },
      {
        name: "Business",
        price: 449,
        description: "For growing companies with advanced needs.",
        features: [
          "5 phone numbers",
          "Up to 10 simultaneous AI agents",
          "300 minutes included/month",
          "Advanced reports",
          "Priority support via chat",
        ],
        checkoutButton: {
          title: "Coming Soon",
        },
        highlight: true,
        color: "blue",
      },
      {
        name: "Custom",
        price: Infinity,
        description: "For large companies with complex needs.",
        features: [
          "Unlimited phone numbers",
          "Unlimited AI agents",
          "Starting from 1,000 minutes included/month",
          "Full API integration",
          "Dedicated account manager",
          "SLA guaranteed",
        ],
        checkoutButton: {
          title: "Coming Soon",
        },
        highlight: false,
        color: "black",
      },
    ],
  },
  waitList: {
    copywrite: {
      tag: "Access to beta out now",
      title: "Join the waitlist",
      description:
        "We're currently in beta with limited spots available. Join our waitlist to be notified when we open more seats.",
    },
    form: {
      placeholder: "Enter your email",
      button: "Join waitlist",
      success: "Thank you for joining the waitlist!",
      error: {
        invalid: "Invalid email",
        exists: "Email already exists in the waitlist",
        internal: "An internal error occurred",
        unknown: "An unexpected error occurred",
      },
    },
    disclaimer:
      "We'll notify you when it's your turn to experience Vocaliza. No spam, we promise.",
  },
  faq: {
    copywrite: {
      tag: "FAQ",
      title: "Frequently Asked Questions",
      description:
        "Find answers to common questions about Vocaliza and our AI-powered calling platform.",
    },
    questions: [
      {
        question: "What is Vocaliza and how does it work?",
        answer:
          "Vocaliza is a voice AI platform that automates calls with realistic, human-like conversations. We leverage advanced natural language processing (NLP) and voice synthesis technologies, integrated with Twilio for telephony and OpenAI for conversational intelligence. Our AI understands context, answers questions, and handles complex customer service scenarios like scheduling, support, and sales, all in a scalable, 24/7 manner.",
      },
      {
        question:
          "What are the benefits of using Vocaliza instead of human agents?",
        answer:
          "Vocaliza offers unlimited scalability, operating 24/7 without breaks, with consistency and no mood variations. While a human agent costs around R$ 0.20/minute (internal cost for companies), call center services typically charge clients R$ 1.00 to R$ 2.00/minute. With Vocaliza, you pay from R$ 1.49/minute (on plans) and get more efficient service, reducing operational costs and increasing customer satisfaction with fast, accurate responses.",
      },
      {
        question: "Can I customize the AI voices for my brand?",
        answer:
          "Yes! Vocaliza allows you to customize the AI voices to match your brand’s identity, adjusting tone, style, and even accents. On the Business and Enterprise plans, you can also create custom scripts for specific service scenarios, ensuring a unique experience for your customers.",
      },
      {
        question: "Is Vocaliza secure and compliant with privacy regulations?",
        answer:
          "Yes, Vocaliza strictly complies with Brazil’s General Data Protection Law (LGPD) and other privacy regulations. All call data is encrypted, and clients have full control over the storage and use of their information. Our system is designed to protect the privacy of both your customers and your business.",
      },
      {
        question:
          "How does Vocaliza handle complex customer service scenarios?",
        answer:
          "Our AI is trained to understand context and respond to complex queries, such as negotiations, technical support, or scheduling with multiple variables. If the AI cannot resolve a situation, it can transfer the call to a human agent (on Business and Enterprise plans) or log the request for follow-up, ensuring no customer is left unanswered.",
      },
      {
        question: "How long does it take to start using Vocaliza?",
        answer:
          "You can set up your Vocaliza account in minutes! After signing up, you’ll receive a dedicated phone number and can create your first AI agent in under 15 minutes using our pre-built templates. For more advanced setups, our support team (available on all plans) can help customize the system within 24 hours.",
      },
      {
        question: "What happens if I exceed the minutes in my plan?",
        answer:
          "If you exceed the minutes included in your plan, additional minutes will be charged at R$ 1.80/minute. You can monitor your usage in real-time through the Vocaliza dashboard, and if you regularly need more minutes, you can upgrade to a higher plan or negotiate custom packages on the Enterprise plan.",
      },
    ],
  },
  footer: {
    watermark: "© 2025 Vocaliza. All rights reserved.",
    links: [
      { name: "Terms", url: "#" },
      { name: "Privacy", url: "#" },
      { name: "Contact", url: "#" },
    ],
  },
};
