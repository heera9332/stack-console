"use client";
import "./sc-header.css";
import * as React from "react";
import Link from "next/link";
import { useState, useRef, useMemo } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import type { TopNav as WpTopNav } from "@/types/sections-props";
import { GetIcon } from "./sc-get-icon";
import { UiTopItem, UiMegaSection, UiNavItem } from "@/types/header";
import { MegaPanel } from "./sc-mega-panel";

/* ===== helpers ===== */
const safe = (s?: string | null) => (s ?? "").trim();
const pick = <T,>(v: T | null | undefined): T | undefined => v ?? undefined;

function toGradient(start?: string | null, end?: string | null) {
  const s = safe(start);
  const e = safe(end);
  if (!s && !e) return "#356EC3, #0D3269";
  if (s && e) return `${s}, ${e}`;
  return s || e || "#356EC3, #0D3269";
}

function normalizeType(t?: string[] | string | null): "mega" | "link" {
  if (Array.isArray(t)) {
    const lowered = t.map((x) => safe(x).toLowerCase());
    if (lowered.includes("mega")) return "mega";
    if (lowered.includes("link")) return "link";
    return "link";
  }
  const s = safe(typeof t === "string" ? t : "");
  return s === "mega" ? "mega" : "link";
}

/* ===== map WP TopNav to UI data ===== */
function mapWpTopNavToUi(nav: WpTopNav): UiTopItem[] {
  const items = nav?.navItems ?? [];

  return items.filter(Boolean).map((it, i) => {
    const label = safe(it?.label) || `Item ${i + 1}`;
    const normalizedType = normalizeType((it as any)?.type);
    let desc = "";

    if (normalizedType === "mega" && it?.megaMenu) {
      const secTitle = safe(it.megaMenu.title) || label;
      const secDesc = safe(it.megaMenu.description);
      desc = secDesc;
      const mItems = (it.megaMenu.megaMenuItems ?? [])
        .filter(Boolean)
        .map((mi, idx): UiNavItem => {
          const title = safe(mi?.title) || `Item ${idx + 1}`;
          const href = safe(mi?.link) || "#";
          const emoji =
            safe(mi?.icon?.node?.link) || "/assets/svg/overview.svg";
          const description = safe(mi?.description);

          const iconHoverBgColor = toGradient(
            mi?.itemIconHoverBackgroundColorStart,
            mi?.itemIconHoverBackgroundColorEnd
          );
          const cardHoverBgColor = safe(mi?.itemHoverBackground) || "#E1F1FF";
          const textHoverColor = safe(mi?.itemIconHoverColor) || "#fff";

          const previewImage =
            safe(mi?.preview?.card?.node?.link) ||
            safe(mi?.preview?.backgroundImage?.node?.link) ||
            "/assets/overview-img.png";
          const previewAlt =
            safe(mi?.preview?.card?.node?.altText) ||
            safe(mi?.preview?.backgroundImage?.node?.altText) ||
            title;
          const blurb = safe(mi?.preview?.description) || description;

          const ctaLabel = safe(mi?.preview?.cta?.label);
          const ctaLink = safe(mi?.preview?.cta?.link);

          return {
            id: `${label}-${idx}`,
            label: title,
            href,
            icon: mi?.icon,
            emoji,
            description,
            iconHoverBgColor,
            cardHoverBgColor,
            textHoverColor,
            preview: {
              title,
              blurb,
              image: { link: previewImage, alt: previewAlt },
              cta:
                ctaLabel && ctaLink
                  ? { label: ctaLabel, href: ctaLink }
                  : undefined,
            },
          };
        });

      const section: UiMegaSection = {
        id: secTitle.toLowerCase().replace(/\s+/g, "-") || "section",
        title: secTitle,
        description: secDesc,
        items: mItems,
      };

      return { label, type: "mega", section } as UiTopItem;
    }

    return {
      label,
      description: desc,
      type: "link",
      href: safe(it?.link) || "#",
    } as UiTopItem;
  });
}

/* ===== Component (styles untouched) ===== */
export default function ScHeader(data: WpTopNav) {
  const [openMega, setOpenMega] = useState(false);
  const [activeMegaIndex, setActiveMegaIndex] = useState<number | null>(null);
  const [hoverItem, setHoverItem] = useState<UiNavItem | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const NAV = useMemo(() => mapWpTopNavToUi(data), [data]);

  const onOpenMega = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMegaIndex(i);
    setOpenMega(true);
    const mega = NAV[i];
    if (mega?.type === "mega") {
      const first = mega.section.items?.[0];
      if (first) setHoverItem(first);
    }
  };

  const onCloseMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenMega(false);
      setActiveMegaIndex(null);
      setHoverItem(null);
    }, 120);
  };

  return (
    <>
      <header
        id="page-header"
        className="sticky top-0 z-50 border-b border-black/20 md:py-2 transition-colors duration-300 header-dark text-white"
      >
        <div className="mx-auto max-w-8xl px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 dark-logo">
            <Image
              src={
                pick(data?.logoDark?.node?.link) ||
                "/assets/images/brand/logo-dark.png"
              }
              alt={pick(data?.logoDark?.node?.altText) || "stack console"}
              width={512}
              height={512}
              className="w-42 h-12 object-cover logo-dark"
              priority
            />
            <Image
              src={
                pick(data?.logo?.node?.link) || "/assets/images/brand/logo.png"
              }
              alt={pick(data?.logo?.node?.altText) || "stack console"}
              width={512}
              height={512}
              className="w-42 h-12 object-cover logo-light"
              priority
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

                    {openMega && activeMegaIndex === i && (
                      <MegaPanel
                        section={item.section}
                        hoverItem={hoverItem}
                        setHoverItem={(i) => setHoverItem(i)}
                      />
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
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
                href={pick(data?.cta?.link) || "https://www.stackconsole.io"}
                className="schedule-meeting hidden sm:inline-block px-6 py-2.5 texxt-white bg-text rounded-md border border-white/20"
              >
                {safe(data?.cta?.label) || "Schedule a meeting"}
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
          <div className="fixed top-0  w-full">
            <div className="mx-auto max-w-8xl px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between">
              {/* Left: Logo */}
              <Link href="/" className="flex items-center gap-2">
                {/* only white logo in mobile */}
                <Image
                  src={
                    pick(data?.logo?.node?.link) ||
                    "/assets/images/brand/logo.png"
                  }
                  alt={pick(data?.logo?.node?.altText) || "stack console"}
                  width={512}
                  height={512}
                  className="w-42 h-12 object-cover  block md:hidden"
                  priority
                />
              </Link>

              <div className="flex gap-2 items-center">
                {/* Right: CTA + mobile button */}
                <div className="flex items-center gap-3">
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
            <MobileMenu
              nav={NAV}
              onClose={() => setMobileOpen(false)}
              cta={{
                label: safe(data?.cta?.label) || "Schedule a meeting",
                href: pick(data?.cta?.link) || "https://www.stackconsole.io",
              }}
            />
          </div>
        )}
      </header>
    </>
  );
}



/* =========================
   Mobile drawer (single section)
   ========================= */
function MobileMenu({
  nav,
  onClose,
  cta,
}: {
  nav: UiTopItem[];
  onClose: () => void;
  cta: { label: string; href: string };
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="lg:hidden border-t border-white/10 header-light">
      <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 py-4 space-y-2">
        {nav.map((item, i) =>
          item.type === "mega" ? (
            <div key={item.label} className="border border-white/10 rounded-lg">
              <button
                className="w-full flex items-start justify-between px-3 py-3"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex gap-2 items-center">
                  <GetIcon
                    iconHoverBgColor={
                      item.section.items[0]?.iconHoverBgColor || ""
                    }
                    textHoverColor={item.section.items[0]?.textHoverColor || ""}
                  />
                  <div className="text-left">
                    <h3>{item.label}</h3>
                    <span className="text-[12px]">
                      {item.section.description}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={`size-4 transition-transform ${
                    openIndex === i ? "rotate-0" : "rotate-270"
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="px-3 pb-3 space-y-3">
                  <div>
                    <div className="text-xs uppercase text-white/60 mb-1">
                      {item.section.title}
                    </div>
                    <ul className="space-y-1">
                      {item.section.items.map((it) => (
                        <li key={it.id}>
                          <Link
                            href={it.href || "#"}
                            className="flex items-start gap-2 px-2 py-2 rounded-md hover:bg-white/10"
                            onClick={onClose}
                          >
                            <span className="inline-flex size-7 items-center justify-center rounded bg-white/10">
                              <Image
                                src={it.emoji ?? "/assets/svg/overview.svg"}
                                alt={it.label}
                                width={20}
                                height={20}
                              />
                            </span>
                            <span>{it.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="block px-3 py-3 rounded-lg border border-white/10 hover:bg-white/10"
            >
              {item.label}
            </Link>
          )
        )}

        <Link
          href={cta.href}
          onClick={onClose}
          className="block text-center px-4 py-3 schedule-meeting rounded-md border border-white/20"
        >
          {cta.label}
        </Link>
      </div>
    </div>
  );
}


