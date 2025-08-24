"use client";

import Image from "next/image";
import Link from "next/link";

type Reason = {
  num: string;
  title: string;
  desc: string;
  icon: { src: string; alt: string; bg?: string };
};

type SectionData = {
  heading: string;
  reasons: Reason[];
  cta: {
    title: string[];
    desc: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
    art: { src: string; alt: string; width?: number; height?: number };
    bg: string;
  };
};

const DATA: SectionData = {
  heading: "Why Choose Stack Console ?",
  reasons: [
    {
      num: "1",
      title: "One Platform for All Channels",
      desc: "Manage direct and reseller sales together.",
      icon: {
        src: "/assets/svg/code-browser.svg", // put your icon here
        alt: "Platform",
        bg: "#E22C31",
      },
    },
    {
      num: "2",
      title: "Your Brand, Everywhere",
      desc: "White-label web, mobile, and partner portals.",
      icon: {
        src: "/assets/svg/code-browser.svg",
        alt: "Brand",
        bg: "#BEA71F",
      },
    },
    {
      num: "3",
      title: "Built for Scale",
      desc: "Multi-orchestrator, API-first, AI-enabled.",
      icon: {
        src: "/assets/svg/code-browser.svg",
        alt: "Scale",
        bg: "#376DC3",
      },
    },
  ],
  cta: {
    title: ["Turn Your Cloud into a", "Growth Engine"],
    desc: "See Stack Console in action and discover how we can help you scale.",
    primary: { label: "Book Live Demo", href: "/demo" },
    secondary: { label: "Contact Sales", href: "/contact" },
    art: {
      // replace with your art file in /public
      src: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/ovewview-cta.png",
      alt: "Analytics illustration",
      width: 760,
      height: 520,
    },
    bg: "#6B07FF", // purple
  },
};

export default function ScWhyChooseAndCTA(props: { data?: SectionData }) {
  const d = props.data ?? DATA;

  return (
    <section id="sc-why-choose-us-cta" className="w-full relative overflow-hidden bg-light">
      {/* ---------- Why Choose ---------- */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:pt-28 pb-92 md:pb-36">
          <h2 className="text-center text-4xl tracking-tight md:text-[56px] font-semibold">
            {d.heading}
          </h2>
        </div>
      </div>

      {/* ---------- CTA band ---------- */}
      <div className="relative mt-0 w-full bg-[#4E2FFF] pb-16 md:pb-36">
        {/* Cards on top edge of CTA (overlap with the purple band) */}
        <div
          className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-10 sm:grid-cols-2 lg:grid-cols-3 pb-16 md:mt-0"
          aria-hidden="false"
        >
          {d.reasons.map((r, i) => (
            <div
              key={i}
              className={`relative rounded-[20px] bg-white p-8 py-4 shadow-[0_10px_30px_rgba(17,24,39,0.08)] ring-1 ring-black/5 pb-12 md:-mt-20 ${i === 0 ? "-mt-76" : ""}`}
            >
              {/* Number in corner */}
              <span className="pointer-events-none absolute right-5 top-0 select-none text-[90px] font-bold text-gray-200">
                {r.num}
              </span>

              {/* Icon */}
              <div className="pt-32">
                <div
                  className="mb-5 inline-flex size-20 items-center justify-center rounded-xl p-2"
                  style={{ background: r.icon.bg ?? "#F3F4F6" }}
                >
                  <Image
                    src={r.icon.src}
                    alt={r.icon.alt}
                    width={72}
                    height={72}
                    className="object-contain text-white"
                  />
                </div>

                <h3 className="text-[26px] font-semibold text-gray-900">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center px-6 pt-0 sm:pt-20 lg:grid-cols-2">
          {/* Left: copy + actions */}
          <div className="order-1 md:order-0">
            <h3 className="hidden md:block text-4xl font-medium leading-tight text-white md:text-[56px]">
              {d.cta.title.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <h3 className="block md:hidden text-4xl font-medium leading-tight text-white md:text-[56px]">
              {d.cta.title.map((line, idx) => (
                <span key={idx} className="mr-2">
                  {line}
                </span>
              ))}
            </h3>
            <p className="mt-5 max-w-xl text-lg leading-7 text-white/90">
              {d.cta.desc}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={d.cta.primary.href}
                className="inline-flex items-center rounded-[6px] text-xl  text-[#514ED8] bg-white px-6 py-3 font-medium shadow-sm transition hover:opacity-90 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {d.cta.primary.label}
              </Link>

              <Link
                href={d.cta.secondary.href}
                className="inline-flex items-center gap-2 text-xl font-semibold text-white/95 transition focus-visible:outline-offset-2 focus-visible:outline-white pl-0 md:px-6 py-3"
              >
                <svg
                  width="39"
                  height="38"
                  viewBox="0 0 39 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="19.5"
                    cy="19"
                    r="18"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M17.4433 13.2725C16.3701 12.6334 15.5 13.1569 15.5 14.441V23.9164C15.5 25.2017 16.3701 25.7246 17.4433 25.0861L25.4208 20.3364C26.4944 19.6971 26.4944 18.6613 25.4208 18.0221L17.4433 13.2725Z"
                    fill="white"
                  />
                </svg>

                {d.cta.secondary.label}
              </Link>
            </div>
          </div>

          {/* Right: art */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[560px] mb-0 md:mb-10">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={d.cta.art.src}
                  alt={d.cta.art.alt}
                  fill
                  sizes="(min-width:1024px) 560px, 90vw"
                  priority
                  className="object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,.25)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
