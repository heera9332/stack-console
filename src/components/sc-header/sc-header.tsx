"use client";
import "./sc-header.css";
import * as React from "react";
import Link from "next/link";
import { useState, useRef, useMemo } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import type { TopNav as WpTopNav } from "@/types/sections-props";

/* ===== UI types (keeps UI stable, single section for mega) ===== */
type UiNavItem = {
  id: string;
  label: string;
  icon: {
    node: { altText?: string | null; link?: string | null };
  };
  href?: string;
  description?: string;
  emoji?: string;
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

type UiMegaSection = {
  id: string;
  title: string;
  items: UiNavItem[];
  description: string;
};

type UiTopItem =
  | { label: string; type: "mega"; section: UiMegaSection }
  | { label: string; type: "link"; href: string };

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
        className="sticky top-0 z-50 border-b border-black/20 py-2 transition-colors duration-300 header-dark text-white"
      >
        <div className="mx-auto max-w-8xl px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2">
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
          <MobileMenu
            nav={NAV}
            onClose={() => setMobileOpen(false)}
            cta={{
              label: safe(data?.cta?.label) || "Schedule a meeting",
              href: pick(data?.cta?.link) || "https://www.stackconsole.io",
            }}
          />
        )}
      </header>
    </>
  );
}

/* =========================
   Mega panel (single section)
   ========================= */
function MegaPanel({
  section,
  hoverItem,
  setHoverItem,
}: {
  section: UiMegaSection;
  hoverItem: UiNavItem | null;
  setHoverItem: (i: UiNavItem) => void;
}) {
  return (
    <div
      className="
        mega-menu overflow-hidden left-[62%] -translate-x-1/2 mt-6 w-[min(100vw-2rem,980px)]
        rounded-xl border border-white/10 bg-white text-black shadow-2xl transition-colors
        fixed
      "
    >
      <div className="grid grid-cols-12">
        <div className="col-span-8 p-4 md:p-6">
          <div className="mb-4">
            <div className="px-2 pb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {section.title}
              </div>
              <div>
                <p className="">{section.description}</p>
              </div>
            </div>
            <ul className="mt-2">
              {section.items.map((it) => (
                <li key={it.id}>
                  <Link
                    href={it.href ?? "#"}
                    onMouseEnter={() => setHoverItem(it)}
                    style={{ ["--hover-bg" as any]: it.cardHoverBgColor }}
                    className={`
                      group flex items-start gap-3 rounded-xl px-4 py-4
                      hover:bg-[var(--hover-bg)]
                    `}
                  >
                    <GetIcon
                      iconHoverBgColor={it.iconHoverBgColor}
                      textHoverColor={it.textHoverColor}
                      link={it.emoji ?? "/assets/svg/overview.svg"}
                      altText={it.label}
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
        </div>

        <div className="col-span-12 md:col-span-4 p-4 md:p-6 bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center">
          <PreviewCard item={hoverItem} />
        </div>
      </div>
    </div>
  );
}

/* =========================
   Preview card
   ========================= */
function PreviewCard({ item }: { item: UiNavItem | null }) {
  if (!item?.preview) {
    return (
      <div className="h-full w-full rounded-xl border border-black/10 p-4 flex items-center justify-center text-sm ">
        Hover an item to preview
      </div>
    );
  }
  const { title, blurb, cta } = item.preview;

  return (
    <div className="rounded-xl overflow-hidden min-w-full flex flex-col justify-center items-center">
      <div className="w-full relative">
        <div
          style={{
            ["--icon-gradient" as any]: `linear-gradient(135deg, ${item.iconHoverBgColor})`,
            ["--icon-color" as any]: item.textHoverColor,
          }}
          className="rounded-lg bg-gradient-to-b h-64 overflow-hidden [background:var(--icon-gradient)]"
        />
        {item.preview?.image?.link && (
          <Image
            className="absolute top-2"
            src={item.preview.image.link}
            width={512}
            height={512}
            alt={item.preview.image.alt || ""}
          />
        )}
        <div className="absolute bottom-0 px-4 w-full">
          <div className="text-white font-semibold">{title}</div>
          <p title={blurb} className="h-20 mt-1 text-sm text-muted">
            {blurb && blurb.length < 60
              ? blurb
              : `${blurb?.slice(0, 60) ?? ""}...`}
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
                      textHoverColor={
                        item.section.items[0]?.textHoverColor || ""
                      }
                    />
                  <div className="text-left">
                    <h3>{item.label}</h3>
                    <span className="text-[12px]">{item.section.description}</span>
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

const GetIcon = ({
  className = "",
  iconHoverBgColor = "#356EC3, #0D3269",
  textHoverColor = "#fff",
  link = "",
  altText = "",
}) => {
  return (
    <div
      style={{
        ["--icon-gradient" as any]: `linear-gradient(135deg, ${iconHoverBgColor})`,
        ["--icon-color" as any]: textHoverColor,
      }}
      className={`
        group rounded-[12px] size-12 flex items-center justify-center
        border border-[#AFB9CE] transition
        group-hover:border-none
        group-hover:[background:var(--icon-gradient)]
        group-hover:text-[var(--icon-color)]
        ${className}
      `}
    >
      <Image
        src={link || "/assets/svg/overview.svg"}
        alt={altText}
        width={64}
        height={64}
        className="p-2.5 transition
          [filter:brightness(0)_saturate(100%)_invert(26%)_sepia(61%)_saturate(1406%)_hue-rotate(192deg)_brightness(91%)_contrast(95%)]
          group-hover:brightness-0 group-hover:invert"
      />
    </div>
  );
};
