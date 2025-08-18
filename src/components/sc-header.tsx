// src/components/SCHeader.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

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
                alt: ""
              }
            },
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
                link: "/assets/nav-billing.svg",
                alt: ""
              }
            },
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
              cta: { label: "Explore More", href: "/platform/integration" },
              
            },
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
              cta: { label: "Explore More", href: "/platform/reseller" },
            },
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
              cta: { label: "Explore More", href: "/platform/white-label" },
            },
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
              cta: { label: "Explore More", href: "/platform/ai" },
            },
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
              cta: { label: "Explore More", href: "/platform/migration" },
            },
          },
        ],
      },
    ],
  },

  // SIMPLE LINKS
  { label: "Solutions", type: "link", href: "#" },
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
            className="w-[172px]"
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
              Book a Demo
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
        rounded-xl border border-white/10 bg-white text-black shadow-2xl
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
                      href={it.href || "#"}
                      onMouseEnter={() => setHoverItem(it)}
                      className="
                        group flex items-start gap-3 rounded-md px-2 py-2
                        hover:bg-gray-100 my-4
                      "
                    >
                      <span className="p-2 flex size-10 mt-0.5 shrink-0 items-center justify-center rounded-[12px] bg-gray-100 group-hover:bg-white border border-[#AFB9CE]">
                        <span className="">
                          <Image
                            className="text-white img-primary"
                            src={it.emoji || "#"}
                            alt="icon"
                            width={100}
                            height={100}
                          />
                        </span>
                      </span>
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
        <div className="rounded-lg bg-gradient-to-b from-indigo-600 to-indigo-800 h-64 overflow-hidden" />
          {item.preview && <Image className="absolute top-2" src={item?.preview?.image?.link || "/assets/overview-img.png"} width={512} height={512} alt={item?.preview.image?.alt}/>}
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
          Book a Demo
        </Link>
      </div>
    </div>
  );
}
