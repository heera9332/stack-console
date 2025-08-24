import Image from "next/image";

/** Helpers */
const alignToObjectPos = (a?: Align) => {
  switch (a) {
    case "top-left":
      return "left top";
    case "top-right":
      return "right top";
    case "bottom-left":
      return "left bottom";
    case "bottom-right":
      return "right bottom";
    default:
      return "center";
  }
};

const alignToFlex = (a?: Align) => {
  switch (a) {
    case "top-left":
      return "items-start justify-start text-left";
    case "top-right":
      return "items-start justify-end text-right";
    case "bottom-left":
      return "items-end justify-start text-left";
    case "bottom-right":
      return "items-end justify-end text-right";
    default:
      return "items-start justify-start text-left";
  }
};

/** TYPES */
type Align = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type MasonryItem = {
  id: string;
  title: string;
  subtitle?: string;

  /** Visual size controls the aspect-ratio: width / height */
  width: number;
  height: number;

  /** Card theming */
  bg?: string;
  textOn?: "light" | "dark";

  /** Optional main image layer (over bg & under content) */
  image?: {
    src: string;
    alt?: string;
    fit?: "contain" | "cover";
    align?: Align;
    opacity?: number; // default 1
  };

  /** Decoration overlay (background layer) */
  deco: {
    src: string;
    alt?: string;
    fit?: "contain" | "cover"; // default cover
    align?: Align; // default center
    opacity?: number; // default 0.25
    blend?: "normal" | "soft-light" | "overlay"; // default soft-light
  };

  /** Icon shown in the icon box */
  icon: { src: string; alt?: string };

  /** NEW: controls alignment of icon+text block */
  contentAlign?: Align;
};

type MasonryData = {
  heading?: string;
  items: MasonryItem[];
};

/** DATA — uses your URL everywhere needed */
const IMG =
  "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/layers-1.png";

const DATA: MasonryData = {
  heading: "Platform Capabilities Grid",
  items: [
    {
      id: "prov",
      title: "Service Provisioning & Orchestration",
      subtitle: "Multi-orchestrator, instant provisioning, auto-scaling",
      width: 4,
      height: 4,
      bg: "#151223",
      textOn: "light",
      contentAlign: "bottom-left",
      deco: {
        src: IMG,
        alt: "Provisioning deco",
        opacity: 0.35,
        blend: "soft-light",
        fit: "cover",
        align: "top-right",
      },
      icon: { src: "/assets/svg/layers-three-02.svg", alt: "Provisioning" },
    },
    {
      id: "self",
      title: "Customer Self-Service",
      subtitle: "White-label portal for provisioning, monitoring, scaling",
      width: 6,
      height: 3,
      bg: "#25184D",
      textOn: "light",
      contentAlign: "bottom-left",
      deco: {
        src: IMG,
        alt: "Self service deco",
        opacity: 0.28,
        blend: "soft-light",
        fit: "contain",
        align: "bottom-left",
      },
      image: {
        src: IMG,
        alt: "Portal preview",
        fit: "cover",
        align: "bottom-right",
        opacity: 0.2,
      },
      icon: { src: "/assets/svg/layers-three-02.svg", alt: "Icon" },
    },
    {
      id: "billing",
      title: "Billing & Revenue",
      subtitle: "Subscriptions, usage, hybrid billing, auto-pay thresholds",
      width: 4,
      height: 3,
      bg: "#9DC7FF",
      textOn: "dark",
      contentAlign: "bottom-left",
      deco: {
        src: IMG,
        alt: "Billing deco",
        opacity: 0.35,
        blend: "overlay",
        fit: "cover",
        align: "top-left",
      },
      icon: { src: "/assets/svg/layers-three-02.svg", alt: "Icon" },
    },
    {
      id: "reseller",
      title: "Reseller & Channel",
      subtitle: "Multi-tier resellers, sub-portals, quota control",
      width: 6,
      height: 4,
      bg: "#FFD7E0",
      textOn: "dark",
      contentAlign: "bottom-left",
      deco: {
        src: IMG,
        alt: "Reseller deco",
        opacity: 0.28,
        blend: "soft-light",
        fit: "contain",
        align: "top-right",
      },
      image: {
        src: IMG,
        alt: "Support preview",
        fit: "cover",
        align: "top-left",
        opacity: 0.2,
      },
      icon: { src: "/assets/svg/layers-three-02.svg", alt: "Icon" },
    },
    {
      id: "support",
      title: "Support & SLA",
      subtitle: "Ticketing, SLA tracking, escalation workflows",
      width: 4,
      height: 3,
      bg: "#FFF06A",
      textOn: "dark",
      contentAlign: "bottom-left",
      deco: {
        src: IMG,
        alt: "Support deco",
        opacity: 0.22,
        blend: "overlay",
        fit: "cover",
        align: "bottom-left",
      },
      image: {
        src: IMG,
        alt: "Support preview",
        fit: "cover",
        align: "top-right",
        opacity: 0.2,
      },
      icon: { src: "/assets/svg/layers-three-02.svg", alt: "Icon" },
    },
    {
      id: "api",
      title: "API & Integrations",
      subtitle: "REST, webhooks, CRM, payments, monitoring",
      width: 4,
      height: 5,
      bg: "#19172A",
      textOn: "light",
      contentAlign: "bottom-left",
      deco: {
        src: IMG,
        alt: "API deco",
        opacity: 0.22,
        blend: "soft-light",
        fit: "cover",
        align: "top-right",
      },
      icon: { src: "/assets/svg/layers-three-02.svg", alt: "Icon" },
    },
    {
      id: "analytics",
      title: "Analytics & Reporting",
      subtitle: "Dashboards, custom reports, anomaly alerts",
      width: 5,
      height: 3,
      bg: "#1B152C",
      textOn: "light",
      contentAlign: "top-left",
      deco: {
        src: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-report-and-analysis.png",
        alt: "Analytics deco",
        opacity: 0.22,
        blend: "soft-light",
        fit: "cover",
        align: "top-right",
      },
      icon: { src: "/assets/svg/layers-three-02.svg", alt: "Icon" },
    },
    {
      id: "ai",
      title: "StackAI",
      subtitle: "NL provisioning, smart triggers, predictive insights",
      width: 4,
      height: 3,
      bg: "#12101F",
      textOn: "light",
      contentAlign: "bottom-right",
      deco: {
        src: IMG,
        alt: "AI deco",
        opacity: 0.18,
        blend: "soft-light",
        fit: "cover",
        align: "top-left",
      },
      icon: { src: "/assets/svg/layers-three-02.svg", alt: "Icon" },
    },
    {
      id: "theme",
      title: "Customizable Theme",
      subtitle: "Themes, palettes, brand alignment",
      width: 4,
      height: 3,
      bg: "#AECBFF",
      textOn: "dark",
      contentAlign: "bottom-left",
      deco: {
        src: IMG,
        alt: "Theme deco",
        opacity: 0.22,
        blend: "overlay",
        fit: "cover",
        align: "bottom-right",
      },
      icon: { src: "/assets/svg/layers-three-02.svg", alt: "Icon" },
    },
    {
      id: "mobility",
      title: "Mobility & Accessibility",
      subtitle: "Native apps, multi-language support",
      width: 4,
      height: 3,
      bg: "#201C34",
      textOn: "light",
      contentAlign: "bottom-left",
      deco: {
        src: IMG,
        alt: "Mobility deco",
        opacity: 0.2,
        blend: "soft-light",
        fit: "cover",
        align: "top-right",
      },
      icon: { src: "/assets/svg/layers-three-02.svg", alt: "Icon" },
    },
  ],
};

/** COMPONENT */
export default function ScPlatformCapabilitiesGrid(props: { data?: MasonryData }) {
  const d = props.data ?? DATA;

  return (
    <section id="platform-capcabilities-grid" className="bg-[#121219] bg-dark text-white px-4 md:px-0">
      {d.heading && (
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
          <h2 className="text-center text-4xl md:text-[56px] font-semibold tracking-tight">
            {d.heading}
          </h2>
        </div>
      )}

      <div className="mx-auto max-w-7xl pb-16 sm:pb-20">
        {/* Masonry: responsive CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {d.items.map((item) => (
            <MasonryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Single card */
function MasonryCard({ item }: { item: MasonryItem }) {
  const ratio = `${item.width} / ${item.height}`;
  const textDark = item.textOn === "dark";

  const decoFit = item.deco.fit ?? "cover";
  const decoAlign = alignToObjectPos(item.deco.align);
  const decoOpacity = item.deco.opacity ?? 0.25;
  const decoBlend = item.deco.blend ?? "soft-light";

  const hasMainImg = !!item.image;
  const imgFit = item.image?.fit ?? "cover";
  const imgAlign = alignToObjectPos(item.image?.align);
  const imgOpacity = item.image?.opacity ?? 1;

  const contentAlignClasses = alignToFlex(item.contentAlign);

  return (
    <article
      className="mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,.35)] relative"
      style={{
        background: item.bg ?? "#181822",
        boxShadow:
          item.textOn === "light"
            ? "inset 1px 1px 0px #5C3AE480, inset 1px 1px 4px #FFFFFF66"
            : "none",
      }}
    >
      <div className="relative w-full" style={{ aspectRatio: ratio }}>
        {/* Decoration overlay */}
        <Image
          src={item.deco.src}
          alt={item.deco.alt ?? ""}
          fill
          sizes="(min-width:1280px) 22rem, (min-width:1024px) 30vw, (min-width:640px) 45vw, 92vw"
          className={decoFit === "contain" ? "object-contain" : "object-cover"}
          style={{
            objectPosition: decoAlign,
            opacity: decoOpacity,
            mixBlendMode: decoBlend,
          }}
          priority={false}
        />

        {/* Optional main image layer */}
        {hasMainImg && (
          <Image
            src={item.image!.src}
            alt={item.image!.alt ?? ""}
            fill
            sizes="(min-width:1280px) 22rem, (min-width:1024px) 30vw, (min-width:640px) 45vw, 92vw"
            className={imgFit === "contain" ? "object-contain" : "object-cover"}
            style={{ objectPosition: imgAlign, opacity: imgOpacity }}
            priority={false}
          />
        )}

        <div
          className={`absolute inset-0 flex p-5 sm:p-6 ${contentAlignClasses}`}
        >
          <div
            className={`max-w-[90%] flex flex-col gap-3 ${
              item.contentAlign?.includes("right")
                ? "items-end text-right"
                : "items-start text-left"
            }`}
          >
            {/* Icon box */}
            <div className="flex h-14 w-14 items-center justify-center rounded-md border border-white/15 bg-black/25 backdrop-blur-sm">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 9.50006L2 12.0001L11.6422 16.8212C11.7734 16.8868 11.839 16.9196 11.9078 16.9325C11.9687 16.9439 12.0313 16.9439 12.0922 16.9325C12.161 16.9196 12.2266 16.8868 12.3578 16.8212L22 12.0001L17 9.50006M7 14.5001L2 17.0001L11.6422 21.8212C11.7734 21.8868 11.839 21.9196 11.9078 21.9325C11.9687 21.9439 12.0313 21.9439 12.0922 21.9325C12.161 21.9196 12.2266 21.8868 12.3578 21.8212L22 17.0001L17 14.5001M2 7.00006L11.6422 2.17895C11.7734 2.11336 11.839 2.08056 11.9078 2.06766C11.9687 2.05622 12.0313 2.05622 12.0922 2.06766C12.161 2.08056 12.2266 2.11336 12.3578 2.17895L22 7.00006L12.3578 11.8212C12.2266 11.8868 12.161 11.9196 12.0922 11.9325C12.0313 11.9439 11.9687 11.9439 11.9078 11.9325C11.839 11.9196 11.7734 11.8868 11.6422 11.8212L2 7.00006Z"
                  stroke={textDark ? "#0D0D12" : "#fff"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Text */}
            <div>
              <h3
                className={`font-semibold text-xl md:text-2xl ${
                  textDark ? "text-[#0D0D12]" : "text-white"
                }`}
              >
                {item.title}
              </h3>
              {item.subtitle && (
                <p
                className={`mt-1 text-sm md:text-base ${
                    textDark ? "text-black/70" : "text-white/70"
                  }`}
                >
                  {item.subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
