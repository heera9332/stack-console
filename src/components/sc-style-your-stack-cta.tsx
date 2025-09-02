import * as React from "react";
import Image from "next/image";
import { MediaNode } from "@/types/utils";

type Cta = {
  __typename: string;
  label: string;
  link?: string | null;
};

export interface ScStyleYourStackCtaProps {
  __typename: "PageBuilderSectionsStyleYourBrandCtaLayout";
  fieldGroupName?: string;
  descriptionHightlightedWords?: string | null; // e.g., "100% yours, tailor-made UI/UX"
  heading: string;
  description: string;
  sectionBackgroundImage?: MediaNode | null;         // desktop
  sectionBackgroundImageMobile?: MediaNode | null;   // mobile
  cta?: Cta | null;
}

function escapeRegex(src: string) {
  return src.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightPhrases(text: string, phrases: string[]): React.ReactNode[] {
  if (!text || phrases.length === 0) return [text];

  // Build a single alternation regex, case-insensitive
  const pattern = new RegExp(
    `(${phrases.map(escapeRegex).join("|")})`,
    "gi"
  );

  const out: React.ReactNode[] = [];
  let lastIdx = 0;

  // Use replace to iterate matches and build fragments
  text.replace(pattern, (match, _g1, offset: number) => {
    if (lastIdx < offset) out.push(text.slice(lastIdx, offset));
    out.push(
      <strong key={`${offset}-${match}`} className="font-semibold">
        {match}
      </strong>
    );
    lastIdx = offset + match.length;
    return match;
  });

  if (lastIdx < text.length) out.push(text.slice(lastIdx));
  return out;
}

export const ScStyleYourStackCta: React.FC<ScStyleYourStackCtaProps> = (data) => {
  const {
    heading,
    description,
    descriptionHightlightedWords,
    sectionBackgroundImage,
    sectionBackgroundImageMobile,
    cta,
  } = data;

  const desktopBg = sectionBackgroundImage?.node?.link ?? "";
  const mobileBg = sectionBackgroundImageMobile?.node?.link ?? "";

  const phrases =
    descriptionHightlightedWords
      ?.split(",")
      .map((s) => s.trim())
      .filter(Boolean) ?? [];

  const highlightedDescription = React.useMemo(
    () => highlightPhrases(description, phrases),
    [description, descriptionHightlightedWords]
  );

  const ctaHref = cta?.link ?? "#";
  const external = /^https?:\/\//i.test(ctaHref);

  return (
    <section
      id="sc-style-your-stack-cta"
      aria-label="Style your stack CTA"
      className="relative overflow-hidden py-16 md:py-28 bg-[#FFC1C3]"
      // soft pink gradient fallback behind the art
    
    >
      {/* Decorative background art */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Desktop wave art */}
        {desktopBg ? (
          <Image
            src={desktopBg}
            alt={sectionBackgroundImage?.node?.altText || ""}
            fill
            className="hidden md:block object-cover object-right-top select-none"
            priority
          />
        ) : null}
        {/* Mobile wave art */}
        {mobileBg ? (
          <Image
            src={mobileBg}
            alt={sectionBackgroundImageMobile?.node?.altText || ""}
            fill
            className="md:hidden object-cover object-right-top select-none"
            priority
          />
        ) : null}
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.1] font-semibold tracking-tight text-black">
          {heading}
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-[15px] md:text-base text-black/80">
          {highlightedDescription}
        </p>

        {cta?.label ? (
          <div className="mt-6 md:mt-8">
            <a
              href={ctaHref}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center justify-center rounded-xl bg-[#222] px-6 py-3 text-sm md:text-base font-medium text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              {cta.label}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
};
