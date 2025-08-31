const NAV = [
  // MEGA MENU
  {
    label: "Platform",
    type: "mega",
    sections: [
      {
        id: "overview",
        title: "Overview",
        description: "Everything You Need to Run Your Cloud",

        items: [
          {
            id: "ovr",
            label: "Overview",
            href: "/overview",
            emoji: "/assets/svg/overview.svg",
            description: "High-level overview and core concepts.",
            preview: {
              title: "Overview",
              blurb: "Designed in pursuit of high-speed performance.",
              cta: { label: "Explore More", href: "#" },
              image: {
                link: "/assets/overview-img.png",
                alt: "",
              },
            },
            iconHoverBgColor: "#356EC5, #000052",
            cardHoverBgColor: "#E1F1FF",
            textHoverColor: "#fff",
          },
          {
            id: "billing",
            label: "Subscription & Billing",
            href: "#",
            emoji: "/assets/svg/atom-01.svg",
            description: "Automated invoices, usage metering, multi-currency.",
            preview: {
              title: "Billing",
              blurb: "Automate billing and focus on growth.",
              cta: { label: "Explore More", href: "/platform/billing" },
              image: {
                link: "/assets/overview-img.png",
                alt: "",
              },
            },
            iconHoverBgColor: "#DDB458, #895924",
            cardHoverBgColor: "#FFEFCA",
            textHoverColor: "#000",
          },
          {
            id: "integration",
            label: "Integration",
            href: "/cloud-integrations",
            emoji: "/assets/svg/atom-01.svg",
            description: "Connect clouds, tools, identity and more.",
            preview: {
              title: "Integration",
              blurb: "Native, deep integrations with your stack.",
              image: {
                link: "/assets/overview-img.png",
                alt: "",
              },
              cta: { label: "Explore More", href: "/platform/integration" },
            },
            iconHoverBgColor: "#F93333, #A10606",
            cardHoverBgColor: "#FFD6D6",
            textHoverColor: "#fff",
          },
          {
            id: "reseller",
            label: "Reseller Management",
            href: "#",
            emoji: "/assets/svg/users-03.svg",
            description: "Multi-tenant reseller workflows and controls.",
            preview: {
              title: "Reseller",
              blurb: "Scale partners with guardrails.",
              image: {
                link: "/assets/overview-img.png",
                alt: "",
              },
              cta: { label: "Explore More", href: "/platform/reseller" },
            },
            iconHoverBgColor: "#356EC3, #0D3269",
            cardHoverBgColor: "#E1F1FF",
            textHoverColor: "#fff",
          },
          {
            id: "style",
            label: "Style your Stack",
            href: "#",
            emoji: "/assets/svg/layers-three-02.svg",
            description: "White-label and brand controls.",
            preview: {
              title: "White Label",
              blurb: "Make it truly yours.",
              image: {
                link: "/assets/overview-img.png",
                alt: "",
              },
              cta: { label: "Explore More", href: "/platform/white-label" },
            },
            iconHoverBgColor: "#DDB458, #895924",
            cardHoverBgColor: "#FFEFCA",
            textHoverColor: "#000",
          },
          {
            id: "ai",
            label: "Stack AI",
            href: "#",
            emoji: "/assets/svg/stack-ai.svg",
            description: "Natural-language operations for teams.",
            preview: {
              title: "Stack AI",
              blurb: "Ship faster with AI-powered operations.",
              image: {
                link: "/assets/overview-img.png",
                alt: "",
              },
              cta: { label: "Explore More", href: "/platform/ai" },
            },
            iconHoverBgColor: "#F93333, #A10606",
            cardHoverBgColor: "#FFD6D6",
            textHoverColor: "#fff",
          },
          {
            id: "migration",
            label: "Migration Engine",
            href: "#",
            emoji: "/assets/svg/zap-fast.svg",
            description: "Move workloads with confidence.",
            preview: {
              title: "Migration",
              blurb: "Bring everything together safely.",
              image: {
                link: "/assets/overview-img.png",
                alt: "",
              },
              cta: { label: "Explore More", href: "/platform/migration" },
            },
            iconHoverBgColor: "#356EC3, #0D3269",
            cardHoverBgColor: "#E1F1FF",
            textHoverColor: "#fff",
          },
        ],
      },
    ],
  },

  // SIMPLE LINKS
  {
    label: "Solutions",
    type: "mega",
    sections: [
      {
        id: "solution-1",
        title: "Who We Serve",
        description: "Powering Every Cloud Journey",
        items: [
          {
            id: "ovr",
            label: "Cloud & Hosting Provider",
            href: "#",
            emoji: "/assets/svg/cloud.svg",
            description: "Launch, Manage, and scale with Ease",
            preview: {
              title: "Overview",
              blurb: "Designed in pursuit of high-speed performance.",
              cta: { label: "Explore More", href: "#" },
              image: {
                link: "/assets/overview-img.png",
                alt: "",
              },
            },
            iconHoverBgColor: "#356EC5, #000052",
            cardHoverBgColor: "#E1F1FF",
            textHoverColor: "#fff",
          },

          {
            id: "data-centers2",
            label: "Turn Infrastructure into Cloud Revenue",
            href: "#",
            emoji: "/assets/svg/database-01.svg",
            description: "Launch, Manage, and scale with Ease",
            preview: {
              title: "Overview",
              blurb: "Designed in pursuit of high-speed performance.",
              cta: { label: "Explore More", href: "#" },
              image: {
                link: "/assets/overview-img.png",
                alt: "",
              },
            },
            iconHoverBgColor: "#DDB458, #895924",
            cardHoverBgColor: "#FFEFCA",
            textHoverColor: "#000",
          },
          {
            id: "Managed Service Providers",
            label: "Deliver More, Manage Less",
            href: "#",
            emoji: "/assets/svg/message-check-circle.svg",
            description: "Launch, Manage, and scale with Ease",
            preview: {
              title: "Overview",
              blurb: "Designed in pursuit of high-speed performance.",
              cta: { label: "Explore More", href: "#" },
              image: {
                link: "/assets/overview-img.png",
                alt: "",
              },
            },
            iconHoverBgColor: "#F93333, #A10606",
            cardHoverBgColor: "#FFD6D6",
            textHoverColor: "#fff",
          },
          {
            id: "data-centers",
            label: "Turn Infrastructure into Cloud Revenue",
            href: "#",
            emoji: "/assets/svg/signal-02.svg",
            description: "Launch, Manage, and scale with Ease",
            preview: {
              title: "Overview",
              blurb: "Designed in pursuit of high-speed performance.",
              cta: { label: "Explore More", href: "#" },
              image: {
                link: "/assets/overview-img.png",
                alt: "",
              },
            },
            iconHoverBgColor: "#356EC5, #000052",
            cardHoverBgColor: "#E1F1FF",
            textHoverColor: "#fff",
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    type: "mega",
    sections: [
      {
        id: "knowledge-hub",
        title: "Knowledge Hub",
        description: "Content That Powers Your Cloud Journey",
        items: [
          {
            id: "insights",
            label: "Insights",
            href: "/insights",
            emoji: "/assets/svg/heart-hand.svg",
            description: "Case Studies, eBooks, Reports & Whitepapers",
            preview: {
              title: "Insight",
              blurb: "Case Studies, eBooks, Reports & Whitepapers",
              cta: { label: "Explore More", href: "#" },
              image: {
                link: "/assets/overview-img.png",
                alt: "Insight",
              },
            },
            iconHoverBgColor: "#356EC5, #000052",
            cardHoverBgColor: "#E1F1FF",
            textHoverColor: "#fff",
          },
          {
            id: "blogs",
            label: "Blogs",
            href: "/blogs",
            emoji: "/assets/svg/file-heart-02.svg",
            description: "Expert Tips, Product Updates & Stories",
            preview: {
              title: "Blogs",
              blurb:
                "Keep everyone informed about the current state of your projects",
              cta: { label: "Explore More", href: "#" },
              image: {
                link: "/assets/overview-img.png",
                alt: "Blogs",
              },
            },
            iconHoverBgColor: "#F93333, #A10606",
            cardHoverBgColor: "#FFD6D6",
            textHoverColor: "#fff",
          },
          {
            id: "videos",
            label: "Videos",
            href: "/videos",
            emoji: "/assets/svg/play-square.svg",
            description: "Product Demos, Tutorials & Feature Highlights",
            preview: {
              title: "Vidoes",
              blurb:
                "Keep everyone informed about the current state of your projects",
              cta: { label: "Explore More", href: "#" },
              image: {
                link: "/assets/overview-img.png",
                alt: "Videos",
              },
            },
            iconHoverBgColor: "#DDB458, #895924",
            cardHoverBgColor: "#FFEFCA",
            textHoverColor: "#fff",
          },
          {
            id: "events",
            label: "Events",
            href: "/events",
            emoji: "/assets/svg/disc-02.svg",
            description: "Meet Us at Industry Shows & Conferences",
            preview: {
              title: "Events",
              blurb:
                "Keep everyone informed about the current state of your projects",
              cta: { label: "Explore More", href: "#" },
              image: {
                link: "/assets/overview-img.png",
                alt: "Videos",
              },
            },
            iconHoverBgColor: "#356EC5, #000052",
            cardHoverBgColor: "#E1F1FF",
            textHoverColor: "#fff",
          },
        ],
      },
    ],
  },
  {
    label: "Company",
    type: "mega",
    sections: [
      {
        id: "the-company",
        title: "The Company",
        description: "Our Purpose, Team & Future",
        items: [
          {
            id: "manifesto",
            label: "Manifesto",
            href: "/manifesto",
            emoji: "/assets/svg/file-03.svg",
            description: "Driven by Innovation, Guided by Purpose",
            preview: {
              title: "Manifesto",
              blurb: "Designed in pursuit of high-speed performance.",
              cta: { label: "Explore More", href: "#" },
              image: {
                link: "/assets/overview-img.png",
                alt: "",
              },
            },
            iconHoverBgColor: "#356EC5, #000052",
            cardHoverBgColor: "#E1F1FF",
            textHoverColor: "#fff",
          },
          {
            id: "about-us",
            label: "About us",
            href: "/manifesto",
            emoji: "/assets/svg/building-01.svg",
            description: "Passion, People & the Cloud We Build",
            preview: {
              title: "About us",
              blurb: "Designed in pursuit of high-speed performance.",
              cta: { label: "Explore More", href: "#" },
              image: {
                link: "/assets/overview-img.png",
                alt: "",
              },
            },
            iconHoverBgColor: "#966F18, #160E02",
            cardHoverBgColor: "#FFEFCA",
            textHoverColor: "#fff",
          },
          {
            id: "careers",
            label: "Careers",
            href: "/manifesto",
            emoji: "/assets/svg/briefcase-01.svg",
            description: "Build the Future of Cloud With Us",
            preview: {
              title: "Careers",
              blurb: "Designed in pursuit of high-speed performance.",
              cta: { label: "Explore More", href: "#" },
              image: {
                link: "/assets/overview-img.png",
                alt: "",
              },
            },

            iconHoverBgColor: "#F93333, #A10606",
            cardHoverBgColor: "#FFD6D6",
            textHoverColor: "#fff",
          },
          {
            id: "contact-us",
            label: "Contact us",
            href: "/manifesto",
            emoji: "/assets/svg/phone.svg",
            description: "We’re Just a Message Away",
            preview: {
              title: "Contact us",
              blurb: "Designed in pursuit of high-speed performance.",
              cta: { label: "Explore More", href: "#" },
              image: {
                link: "/assets/overview-img.png",
                alt: "contact us",
              },
            },
            iconHoverBgColor: "#356EC5, #000052",
            cardHoverBgColor: "#E1F1FF",
            textHoverColor: "#fff",
          },
        ],
      },
    ],
  },
];
