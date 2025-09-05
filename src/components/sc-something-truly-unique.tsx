// src/sections/ScNeedSomethingTrulyUnique.tsx
import * as React from "react";
import Image from "next/image";

/** Basic WP media shape */
type MediaLink = {
  node?: {
    altText?: string | null;
    link?: string | null; // absolute URL to the asset
  } | null;
};

export interface ScNeedSomethingTrulyUniqueProps {
  __typename: "PageBuilderSectionsSomethingTrulyUniqueLayout";
  fieldGroupName?: string;
  heading: string;
  description: string;

  /** Background artwork (full-bleed) */
  backgroundImage?: MediaLink | null;         // desktop
  backgroundImageMobile?: MediaLink | null;   // mobile

  /** Foreground section illustration */
  sectionImage?: MediaLink | null;            // desktop
  sectionImageMobile?: MediaLink | null;      // mobile
}

/** Bold a known phrase if present */
function emphasizeKnownPhrase(text: string) {
  const phrase = "Tailor-Made UI/UX Service";
  const i = text.indexOf(phrase);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <strong className="font-semibold">{phrase}</strong>
      {text.slice(i + phrase.length)}
    </>
  );
}

export const ScNeedSomethingTrulyUnique: React.FC<ScNeedSomethingTrulyUniqueProps> = (data) => {
  const {
    heading,
    description,
    backgroundImage,
    backgroundImageMobile,
    sectionImage,
    sectionImageMobile,
  } = data;

  const bgDesktop = backgroundImage?.node?.link ?? "";
  const bgMobile  = backgroundImageMobile?.node?.link ?? "";
  const fgDesktop = sectionImage?.node?.link ?? "";
  const fgMobile  = sectionImageMobile?.node?.link ?? "";

  return (
    <section
      id="sc-something-truly-unique"
      className="relative overflow-hidden py-24 md:py-12 px-10"
      aria-label="Need Something Truly Unique section"
    >
      {/* Full-bleed background art (images from CMS only) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {bgDesktop ? (
          <Image
            src={bgDesktop}
            alt={backgroundImage?.node?.altText || ""}
            fill
            priority
            className="hidden md:block object-cover object-center select-none"
            sizes="100vw"
          />
        ) : null}
        {bgMobile ? (
          <Image
            src={bgMobile}
            alt={backgroundImageMobile?.node?.altText || ""}
            fill
            priority
            className="md:hidden object-cover object-center select-none"
            sizes="100vw"
          />
        ) : null}
      </div>

      {/* === ONLY ADDITION: a wrapper that scales content down on md+ === */}
      <div className="relative mx-auto max-w-7xl origin-top transition-transform
                      scale-100 md:scale-[0.93] lg:scale-[0.9]">

        {/* Content (UNCHANGED) */}
        <div className="relative mx-auto max-w-7xl text-center ">
          <div className="mx-auto max-w-3xl flex flex-col justify-center items-center">
            <h2 className="text-4xl md:text-6xl max-w-xl font-semibold leading-tight tracking-tight text-white text-center">
              {heading}
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-[15px] md:text-base text-white/85">
              {emphasizeKnownPhrase(description)}
            </p>
          </div>

          {/* Foreground illustration (UNCHANGED) */}
          <div className="mx-auto mt-10 mr-0 md:mt-14 max-w-8xl">
            <div className="relative">
              {/* Desktop illustration */}
              {fgDesktop ? (
                <div className="hidden md:block">
                  <Image
                    src={fgDesktop}
                    alt={sectionImage?.node?.altText || "Unique UI/UX illustration"}
                    width={1600}
                    height={1000}
                    className="w-full h-auto select-none aspact-[16/9]"
                    priority
                  />
                </div>
              ) : null}

              {/* Mobile illustration */}
              {fgMobile ? (
                <div className="md:hidden">
                  <Image
                    src={fgMobile}
                    alt={sectionImageMobile?.node?.altText || "Unique UI/UX illustration"}
                    width={1200}
                    height={900}
                    className="w-full h-auto select-none rounded-xl shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
                    priority
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {/* === END ADDITION === */}
    </section>
  );
};
