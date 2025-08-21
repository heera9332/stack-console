// src/components/SCHeader.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* =========================
   1) STATIC MENU DATA
   ========================= */
type NavItem = {
  id: string;
  label: string;
  href?: string;
  description?: string;
  emoji?: string; // simple icon token (you can swap to <Image/> or SVG later)
  preview?: {
    title: string;
    blurb: string;
    cta?: { label: string; href: string };
    image?: { link: string; alt: string };
    bgImage?: { link: string; alt: string };
  };
  iconHoverBgColor: string;
  cardHoverBgColor: string;
  textHoverColor: string;
};

type MegaSection = {
  id: string;
  title: string;
  items: NavItem[];
  description: string;
};

type TopNav = {
  label: string;
  type: "link" | "mega";
  href?: string;
  sections?: MegaSection[]; // required when type === "mega"
};

const NAV: TopNav[] = [
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
            href: "#",
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
            emoji: "/assets/svg/file.svg",
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
            href: "#",
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
            emoji: "/assets/svg/overview.svg",
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
            emoji: "/assets/svg/overview.svg",
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
            emoji: "/assets/svg/overview.svg",
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
            emoji: "/assets/svg/overview.svg",
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
  { label: "Resources", type: "link", href: "#" },
  { label: "Company", type: "link", href: "#" },
];

/* =========================
   2) HEADER
   ========================= */
export default function ScHeader() {
  const [openMega, setOpenMega] = useState(false);
  const [activeMegaIndex, setActiveMegaIndex] = useState<number | null>(null);
  const [hoverItem, setHoverItem] = useState<NavItem | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onOpenMega = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMegaIndex(i);
    setOpenMega(true);
    // seed preview with the first item
    const first = NAV[i].sections?.[0]?.items?.[0] ?? null;
    setHoverItem(first);
  };

  const onCloseMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenMega(false);
      setActiveMegaIndex(null);
      setHoverItem(null);
    }, 120); // small delay to allow moving between trigger & panel
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/20 bg-[#0B0D0F] text-white py-2">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/assets/images/brand/logo-dark.png"}
            alt="stack console"
            width={512}
            height={512}
            className="w-42 h-12 object-cover"
          />
        </Link>

        <div className="flex gap-2 items-center">
          {/* Center: Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {NAV.map((item, i) =>
              item.type === "mega" ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => onOpenMega(i)}
                  onMouseLeave={onCloseMega}
                >
                  <button
                    className="px-3 py-2 cursor-pointer transition-colors rounded-full hover:bg-white hover:text-primary inline-flex items-center gap-1"
                    aria-expanded={openMega && activeMegaIndex === i}
                  >
                    {item.label}
                    <ChevronDown className="size-4 opacity-80" />
                  </button>

                  {/* Mega panel */}
                  {openMega && activeMegaIndex === i && (
                    <MegaPanel
                      sections={item.sections!}
                      hoverItem={hoverItem}
                      setHoverItem={setHoverItem}
                    />
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="px-3 py-2 cursor-pointer transition-colors rounded-full hover:bg-white hover:text-primary inline-flex items-center gap-1"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right: CTA + mobile button */}
          <div className="flex items-center gap-3">
            <Link
              href="/demo"
              className="hidden sm:inline-block px-6 py-2.5 texxt-white bg-text rounded-md border border-white/20"
            >
              Schedule a Meeting
            </Link>

            <button
              className="lg:hidden inline-flex items-center justify-center size-9 rounded-md hover:bg-white/10"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <MobileMenu nav={NAV} onClose={() => setMobileOpen(false)} />
      )}
    </header>
  );
}

/* =========================
   3) MEGA PANEL (Desktop)
   ========================= */
function MegaPanel({
  sections,
  hoverItem,
  setHoverItem,
}: {
  sections: MegaSection[];
  hoverItem: NavItem | null;
  setHoverItem: (i: NavItem) => void;
}) {
  return (
    <div
      className="
        overflow-hidden absolute left-1/2 -translate-x-1/2 mt-6 w-[min(100vw-2rem,980px)]
        rounded-xl border border-white/10 bg-white text-black shadow-2xl transition-colors
      "
    >
      <div className="grid grid-cols-12">
        {/* Left column: list */}
        <div className="col-span-8 p-4 md:p-6">
          {sections.map((sec) => (
            <div key={sec.id} className="mb-4">
              <div className="px-2 pb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {sec.title}
                </div>
                <div>
                  <p className="">{sec.description}</p>
                </div>
              </div>
              <ul className="mt-2">
                {sec.items.map((it) => (
                  <li key={it.id}>
                    <Link
                      href={it.href ?? "#"}
                      onMouseEnter={() => setHoverItem(it)}
                      // inject the dynamic color into a CSS variable
                      style={{ ["--hover-bg" as any]: it.cardHoverBgColor }}
                      className={`
                        group flex items-start gap-3 rounded-xl px-4 py-4
                        hover:bg-[var(--hover-bg)]
                      `}
                    >
                      <GetIcon
                        iconHoverBgColor={it.iconHoverBgColor}
                        textHoverColor={it.textHoverColor}
                      />
                      <span className="flex-1">
                        <span className="block font-medium text-gray-900">
                          {it.label}
                        </span>
                        {it.description && (
                          <span className="block text-sm text-gray-600">
                            {it.description}
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right column: preview card */}
        <div className="col-span-12 md:col-span-4 p-4 md:p-6 bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center">
          <PreviewCard item={hoverItem} />
        </div>
      </div>
    </div>
  );
}

/* =========================
   4) PREVIEW CARD (right)
   ========================= */
function PreviewCard({ item }: { item: NavItem | null }) {
  if (!item?.preview) {
    return (
      <div className="h-full w-full rounded-xl border border-black/10 p-4 flex items-center justify-center text-sm ">
        Hover an item to preview
      </div>
    );
  }
  const { title, blurb, cta } = item.preview;

  return (
    <div className="rounded-xl bg-white overflow-hidden min-w-full flex flex-col justify-center items-center">
      <div className="w-full relative">
        <div
          style={{
            ["--icon-gradient" as any]: `linear-gradient(135deg, ${item.iconHoverBgColor})`,
            ["--icon-color" as any]: item.textHoverColor,
          }}
          className="rounded-lg bg-gradient-to-b h-64 overflow-hidden [background:var(--icon-gradient)]"
        />
        {item.preview && (
          <Image
            className="absolute top-2"
            src={item?.preview?.image?.link || "/assets/overview-img.png"}
            width={512}
            height={512}
            alt={item?.preview.image?.alt}
          />
        )}
        <div className="absolute bottom-0 px-4 w-full">
          <div className="text-white font-semibold">{title}</div>
          <p title={blurb} className="h-20 mt-1 text-sm text-muted">
            {blurb.length < 60 ? blurb : blurb.slice(0, 60) + "..."}
          </p>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#110900] opacity-80 rounded-lg" />
        </div>
      </div>
      {cta && (
        <div className="p-4 pt-0 mt-4">
          <Link
            href={cta.href}
            className="w-42 text-center block cursor-pointer px-4 py-2.5 bg-white text-black rounded-[8px] border border-black transition-all delay-100 hover:shadow-[0_8px_0_#356EC3] hover:border-l-0 hover:border-t-0 hover:border-[#356EC3]"
          >
            {cta.label}
          </Link>
        </div>
      )}
    </div>
  );
}

/* =========================
  5) MOBILE MENU (drawer)
   ========================= */
function MobileMenu({ nav, onClose }: { nav: TopNav[]; onClose: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="lg:hidden border-t border-white/10 bg-[#0B0D0F] text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-4 space-y-2">
        {nav.map((item, i) =>
          item.type === "mega" ? (
            <div key={item.label} className="border border-white/10 rounded-lg">
              <button
                className="w-full flex items-center justify-between px-3 py-3"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`size-4 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="px-3 pb-3 space-y-3">
                  {item.sections?.map((sec) => (
                    <div key={sec.id}>
                      <div className="text-xs uppercase text-white/60 mb-1">
                        {sec.title}
                      </div>
                      <ul className="space-y-1">
                        {sec.items.map((it) => (
                          <li key={it.id}>
                            <Link
                              href={it.href || "#"}
                              className="flex items-start gap-2 px-2 py-2 rounded-md hover:bg-white/10"
                              onClick={onClose}
                            >
                              <span className="inline-flex size-7 items-center justify-center rounded bg-white/10">
                                {it.emoji}
                              </span>
                              <span>{it.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href!}
              onClick={onClose}
              className="block px-3 py-3 rounded-lg border border-white/10 hover:bg-white/10"
            >
              {item.label}
            </Link>
          )
        )}

        <Link
          href="/demo"
          onClick={onClose}
          className="block text-center px-4 py-3 bg-white text-black rounded-md border border-white/20"
        >
          Schedule a Meeting
        </Link>
      </div>
    </div>
  );
}

const GetIcon = ({
  iconHoverBgColor = "#356EC3, #0D3269",
  textHoverColor = "#fff",
}) => {
  return (
    <div
      style={{
        ["--icon-gradient" as any]: `linear-gradient(135deg, ${iconHoverBgColor})`,
        ["--icon-color" as any]: textHoverColor,
      }}
      className={`
        rounded-[12px] size-12 flex items-center justify-center
        border border-[#AFB9CE] group-hover:border-none
        group-hover:[background:var(--icon-gradient)]
        group-hover:text-[var(--icon-color)]
      `}
    >
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 2.76953V6.90007C14 7.46012 14 7.74015 14.109 7.95406C14.2049 8.14222 14.3578 8.2952 14.546 8.39108C14.7599 8.50007 15.0399 8.50007 15.6 8.50007H19.7305M14 17.5H8M16 13.5H8M20 10.4882V17.7C20 19.3802 20 20.2202 19.673 20.862C19.3854 21.4265 18.9265 21.8854 18.362 22.173C17.7202 22.5 16.8802 22.5 15.2 22.5H8.8C7.11984 22.5 6.27976 22.5 5.63803 22.173C5.07354 21.8854 4.6146 21.4265 4.32698 20.862C4 20.2202 4 19.3802 4 17.7V7.3C4 5.61984 4 4.77976 4.32698 4.13803C4.6146 3.57354 5.07354 3.1146 5.63803 2.82698C6.27976 2.5 7.11984 2.5 8.8 2.5H12.0118C12.7455 2.5 13.1124 2.5 13.4577 2.58289C13.7638 2.65638 14.0564 2.77759 14.3249 2.94208C14.6276 3.1276 14.887 3.38703 15.4059 3.90589L18.5941 7.09411C19.113 7.61297 19.3724 7.8724 19.5579 8.17515C19.7224 8.44356 19.8436 8.7362 19.9171 9.0423C20 9.38757 20 9.75445 20 10.4882Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
