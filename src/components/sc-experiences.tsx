"use client";

import Image from "next/image";
import Link from "next/link";

type ExperienceData = {
  title: string[];
  description: string;
  cta: { label: string; href: string; rel?: string; target?: "_blank" | "_self" };
  art: { src: string; alt: string; width?: number; height?: number };
  deco?: { orangeCircle?: boolean; orangeCircleSize?: number };
};

const DATA: ExperienceData = {
  title: ["Experience Stack", "Console Live"],
  description:
    "Generate your demo login instantly and explore the full platform — No setup, No commitments.",
  cta: { label: "Generate Demo Login", href: "/demo" },
  art: {
    src: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
    alt: "Illustration showing target, wrench and website preview",
    width: 900,
    height: 1280,
  },
  deco: { orangeCircle: true, orangeCircleSize: 520 },
};

export default function ScExperienceSection(props: { data?: ExperienceData }) {
  const d = props.data ?? DATA;

  return (
    <section
      className="relative bg-[#F1D52F] overflow-hidden min-h-[620px] flex items-end bg-light section"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-14 py-10 md:py-0">
        <div className="flex flex-col md:flex-row items-stretch md:items-end gap-8 md:gap-10">
          {/* Left copy */}
          <div className="order-1 md:order-1 self-center md:self-start pb-8 md:pb-0 pt-0 md:pt-12">
            <h2
              id="experience-title"
              className="text-3xl sm:text-4xl md:text-[56px] font-semibold leading-tight text-gray-900"
            >
              {d.title.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <p className="mt-4 sm:mt-5 max-w-xl text-base sm:text-lg leading-7 text-gray-900/80">
              {d.description}
            </p>

            <div className="mt-6 sm:mt-8">
              <Link
                href={d.cta.href}
                target={d.cta.target ?? "_self"}
                rel={d.cta.rel}
                className="inline-flex items-center rounded-md px-5 py-3 text-sm sm:text-lg font-semibold text-white shadow-md bg-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {d.cta.label}
              </Link>
            </div>
          </div>

          {/* Right art */}
          <div className="order-0 md:order-2 flex-1 relative flex items-end justify-center">
            {/* Mobile/Tablet: fixed visual height so image is big; Desktop: allow larger max height */}
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-auto md:w-full md:max-w-3xl md:min-h-[520px]">
              <Image
                src={d.art.src}
                alt={d.art.alt}
                fill
                priority
                sizes="(min-width:1280px) 48rem, (min-width:768px) 44rem, 95vw"
                className="object-contain object-bottom md:max-h-[680px] md:object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
