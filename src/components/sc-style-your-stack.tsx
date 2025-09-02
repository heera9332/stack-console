import Image from "next/image";
import Link from "next/link";
import React from "react";

type Cta = { label: string; link: string };
type Data = {
  __typename: "PageBuilderSectionsStyleYourStackHeroLayout";
  heading: string;
  highlightedHeading: string;
  description: string;
  cta: Cta;
  ctaOutlined: Cta;
  heroImage?: { node: { altText?: string; link: string } };
  sectionBackgroundImage?: { node: { altText?: string; link: string } };
};

export const ScStyleYourStack = (data: Data) => {
  console.log("ScStyleYourStack data:", data);
  const bgImage =
    data.sectionBackgroundImage?.node?.link || data.heroImage?.node?.link;
  const heroAlt = data.heroImage?.node?.altText || "";
  const heroSrc = data.heroImage?.node?.link;

  return (
    <section
      id="sc-style-your-stack"
      className="relative overflow-hidden  text-white section bg-dark"
      aria-label="Style your stack hero"
    >
      {/* Background image with subtle overlay */}
      {bgImage && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
      )}

  
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 py-12 md:flex-row md:py-20 lg:py-24">
          {/* Left: copy */}
          <div className="w-full md:w-5/12">
            <h1 className="font-semibold tracking-tight">
              <span className="block text-4xl leading-tight sm:text-5xl lg:text-6xl pr-10">
                 {data.heading}
              </span>
              <span
                className="mt-2 block text-4xl leading-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#ff7a59,#ffd400,#78e08f,#3ba1ff)",
                }}
              >
                {data.highlightedHeading}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
              {data.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={data.ctaOutlined.link}
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-medium outline-none ring-offset-2 transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {data.ctaOutlined.label}
              </Link>
              <Link
                href={data.cta.link}
                className="inline-flex items-center justify-center rounded-md bg-white text-[#0b0d13] px-6 py-3 text-sm font-semibold outline-none ring-offset-2 transition hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {data.cta.label}
              </Link>
            </div>
          </div>

          {/* Right: artwork */}
          <div className="relative w-full md:w-7/12">
         
            {/* Sphere / hero image */}
            {heroSrc ? (
              <Image
                src={heroSrc}
                alt={heroAlt}
                width={900}
                height={900}
                className="relative z-10 md:mx-auto aspect-[1.8] w-[150%] ml-[-25%] md:w-full max-w-4xl object-contain"
                priority
              />
            ) : (
              <div className="relative z-10 mx-auto aspect-[1.8] w-full max-w-xl rounded-2xl bg-white/5" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
