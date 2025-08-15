// src/sections/ScHero.tsx
"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const data = {
  kicker: "Build a legacy",
  title1: "Empowering Cloud Providers",
  title2Emoji: "🏆",
  title2: "Winning the Race",
  description:
    "Transform your data into actionable intelligence with our AI-driven SaaS, designed to optimize efficiency, automate workflows, and provide predictive insights for informed decision-making.",
  ctas: {
    primary: { label: "Book a Demo", href: "#demo" },
    secondary: { label: "Self Guided Tour", href: "#tour" },
  },
};

export default function ScHero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  // move the glow with the cursor using CSS variables
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  return (
    <section
      ref={wrapRef}
      onMouseMove={onMove}
      className="
        relative overflow-hidden
        bg-[#0B0B0F] text-white
        px-4 md:px-6 lg:px-8 py-16 md:py-24 min-h-[820px]
        flex flex-col items-center justify-center
      "
    >
      {/* GRID BACKGROUND */}
      <div
        aria-hidden
        className="
    pointer-events-none absolute inset-0
    [background-image:linear-gradient(to_right,rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.2)_1px,transparent_1px)]
    [background-size:40px_40px]
    [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]
  "
      />

      {/* HOVER GLOW (follows cursor) */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 transition-opacity duration-300
          [background:radial-gradient(400px_400px_at_var(--x,_50%)_var(--y,_50%),rgba(92,51,207,.30),transparent_60%)]
        "
      />

      <div
        aria-hidden
        className="
    pointer-events-none absolute inset-0
    transition-all duration-300
    [background-image:
      radial-gradient(400px_400px_at_var(--x,_50%)_var(--y,_50%),rgba(92,51,207,0.3),transparent_60%),
      linear-gradient(to_right,rgba(255,255,255,.2)_1px,transparent_1px),
      linear-gradient(to_bottom,rgba(255,255,255,.2)_1px,transparent_1px)
    ]
    [background-size:100%_100%,40px_40px,40px_40px]
    [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]
  "
      />

      <div className="max-w-6xl mx-auto text-center relative">
        {/* Kicker */}
        <p className="text-[20px] font-bold md:text-[24px] text-white">
          {data.kicker}
        </p>

        <div className="my-8">
          {/* Title */}
          <h1 className="font-semibold leading-tight text-[36px] md:text-[64px]">
            {data.title1}
          </h1>

          {/* Gradient word line */}
          <p className="mt-2 text-[32px] md:text-[56px] font-extrabold leading-tight">
            <span className="align-middle mr-2">{data.title2Emoji}</span>
            <span
              className="
              bg-clip-text text-transparent
              [background-image:linear-gradient(90deg,#ff7a59,#ffd400,#78e08f,#3ba1ff)]
            "
            >
              {data.title2}
            </span>
          </p>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-3xl text-body2 md:text-body1 text-white/80">
            {data.description}
          </p>
        </div>
        {/* CTAs */}
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Button
            asChild
            size="lg"
            className="rounded-[10px] py-6 bg-[#1E1C26] hover:bg-[#1E1C26] hover:font-bold border border-white/10 w-56 transition-all delay-100 hover:shadow-[0_8px_0_#ef4444] hover:border-r-[2px] hover:border-[#ef4444] hover:border-l-0 hover:border-t-0"
          >
            <a href={data.ctas.primary.href}>{data.ctas.primary.label}</a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="
              rounded-[10px] px-5
              bg-transparent hover:bg-transparent text-white hover:text-white hover:font-bold
              py-6 w-56 border-none
            "
          >
            <a
              href={data.ctas.secondary.href}
              className="inline-flex items-center gap-2"
            >
              <img
                className="svg-white"
                src={"/assets/svg/play-circle.svg"}
                alt="try demo"
              />
              {data.ctas.secondary.label}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
