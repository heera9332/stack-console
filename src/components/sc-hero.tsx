"use client";
import "./sc-hero.css";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const data = {
  kicker: "Build a legacy",
  title1: "Empowering Cloud Providers",
  title2Emoji: "/assets/website/home/trophy.png",
  title2: "Winning the Race",
  description:
    "Stack Console is a white-label cloud management and billing platform for CloudStack, OpenStack, Proxmox, OpenNebula, OpenShift, VMware, Virtuozzo, and more — helping you launch cloud services under your brand, faster and more profitably.",
  ctas: {
    primary: { label: "Book a Demo", href: "#demo" },
    secondary: { label: "Self Guided Tour", href: "#tour" },
  },
};

export default function ScHero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  const onLeave = () => {
    const el = wrapRef.current;
    if (!el) return;
    // push spotlight off-screen
    el.style.setProperty("--x", `-999px`);
    el.style.setProperty("--y", `-999px`);
  };

  return (
    <section
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="
        relative overflow-hidden
        bg-[#12141D] text-white
        px-4 md:px-6 lg:px-8 py-16 md:py-40
        flex flex-col items-center justify-center
        grid-container 
      "
    >
      <div id="glowSegments"></div>
      {/* GRID BACKGROUND */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          [background-image:linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      {/* SOFT SPOTLIGHT GLOW */}
      <div
        aria-hidden
        className="bgSpot pointer-events-none absolute inset-0"
      />

      {/* Text + spotlight */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <p className="text-[20px] font-bold md:text-[24px] text-white">
          {data.kicker}
        </p>

        <div className="my-8">
          {/* Title 1 */}
          <h1 className="font-semibold leading-tight text-[36px] md:text-[64px]">
            <span className="heroText" data-text={data.title1}>
              {data.title1}
            </span>
          </h1>

          {/* Title 2 */}
          <p className="mt-2 text-[32px] md:text-[56px] font-extrabold leading-tight">
            <span className="heroText relative" data-text={data.title2}>
              <Image
                src={data.title2Emoji}
                alt="trophy"
                width={512}
                height={512}
                className="h-10 md:h-18 w-10 md:w-18 object-cover absolute rotate-[-30deg] -left-10 md:-left-14"
              />
              <span
                className="
                  bg-clip-text text-transparent
                  [background-image:linear-gradient(90deg,#ff7a59,#ffd400,#78e08f,#3ba1ff)]
                "
              >
                {data.title2}
              </span>
            </span>
          </p>

          <p className="mx-auto mt-5 md:px-62 text-body2 md:text-body1 text-white/80">
            {data.description}
          </p>
        </div>

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
              <Image
                width={100}
                height={100}
                className="svg-white"
                src={"/assets/svg/play-circle.svg"}
                alt="try demo"
              />
              {data.ctas.secondary.label}
            </a>
          </Button>
        </div>
      </div>
      <div className="gradient-overlay"></div>
    </section>
  );
}
