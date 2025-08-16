// src/sections/ScGameChanger.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type Feature = {
  id: string;
  badge?: string;
  title: string;
  body: string;
  cta?: { label: string; href?: string };
  video: { src: string; poster?: string };
  surface?: "blue" | "yellow" | "red" | "muted";
  bgColor: string; // background color for the ENTIRE right column when active
};

const features: Feature[] = [
  {
    id: "stackai",
    title: "AI-Powered Operations with StackAI",
    body: "Let users perform everyday cloud tasks — from creating VMs to managing billing, setting alerts, and more — using simple natural language commands.",
    cta: { label: "Learn More", href: "#" },
    video: {
      src: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/Untitled-design-5.mp4",
      poster:
        "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/191f97ba4fa5c19ce234f226b81a9d4e1c8f82bc.png",
    },
    surface: "muted",
    bgColor: "#83B6FF",
  },
  {
    id: "billing",
    title: "Automated Billing & Invoicing",
    body: "Usage metering, automated invoices, and multi-currency support out of the box. Stop spreadsheets, start scaling.",
    cta: { label: "Explore Billing", href: "#" },
    video: {
      src: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/Untitled-design-6.mp4",
      poster:
        "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/191f97ba4fa5c19ce234f226b81a9d4e1c8f82bc.png",
    },
    surface: "blue",
    bgColor: "#FDE569",
  },
  {
    id: "governance",
    title: "Policy-Driven Governance",
    body: "Templates, guardrails, and drift detection keep environments compliant without slowing teams down.",
    cta: { label: "See Policies", href: "#" },
    video: {
      src: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/Untitled-design-4.mp4",
      poster:
        "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/191f97ba4fa5c19ce234f226b81a9d4e1c8f82bc.png",
    },
    surface: "yellow",
    bgColor: "#FDE569",
  },
  {
    id: "stackai",
    title: "AI-Powered Operations with StackAI",
    body: "Let users perform everyday cloud tasks — from creating VMs to managing billing, setting alerts, and more — using simple natural language commands.",
    cta: { label: "Learn More", href: "#" },
    video: {
      src: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/Untitled-design-4.mp4",
      poster:
        "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/191f97ba4fa5c19ce234f226b81a9d4e1c8f82bc.png",
    },
    surface: "muted",
    bgColor: "#83B6FF",
  },
];

export default function ScStackConsoleFeatures() {
  const [active, setActive] = useState(0);
  const leftRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sections = useMemo(() => features.map((f) => f.id), []);

  // Observe left-side sections to update the active index
  useEffect(() => {
    const container = leftRef.current;
    if (!container) return;

    const nodes = sections
      .map((id) =>
        container.querySelector<HTMLElement>(`[data-feature="${id}"]`)
      )
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const idx = sections.indexOf(
            visible.target.getAttribute("data-feature") || ""
          );
          if (idx !== -1) setActive(idx);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [sections]);

  // Play the active video; pause the rest
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active]);

  return (
    <>
      <section className="px-4 md:px-6 lg:px-8 py-14 md:py-20">
        {/* Heading */}
        <header className="text-center max-w-4xl mx-auto">
          <h2 className="text-h2 md:text-[56px] font-semibold leading-tight text-foreground">
            What Makes Stack <br className="hidden md:block" />
            Console a Game Changer?
          </h2>
          <p className="mt-3 text-body2 md:text-body1 text-muted-foreground">
            Built for the Ones Powering the Internet
          </p>
        </header>
      </section>
      <section>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 min-h-[720px]">
          {/* LEFT: feature list */}
          <div
            ref={leftRef}
            className="space-y-20 md:space-y-42 lg:py-32 pl-12"
          >
            {features.map((f) => (
              <article
                key={f.id}
                data-feature={f.id}
                className="max-w-xl min-h-[512px] flex justify-center flex-col"
              >
                <h3 className="text-[28px] md:text-[36px] font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-4 text-body1 text-muted-foreground">
                  {f.body}
                </p>

                {f.cta && (
                  <div className="mt-6">
                    <Link
                      href={f.cta.href || "#"}
                      className="text-center block cursor-pointer px-4 py-3 bg-white text-black rounded-[6px] w-56 border border-black transition-all delay-100 hover:shadow-[2px_8px_0px_2px_#356EC3] hover:border-r-[2px] hover:border-[#356EC3] hover:border-l-0 hover:border-t-0"
                    >
                      {f.cta.label}
                    </Link>
                  </div>
                )}

                {/* MOBILE/TABLET: inline video under its text (no sticky on small) */}
                <div className="mt-6 lg:hidden">
                  <VideoFrame
                    feature={f}
                    playing
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT: sticky video (desktop) with ENTIRE column bg color changing */}
          <div
            className="hidden lg:block transition-colors duration-500 lg:py-64 px-12"
            style={{
              backgroundColor: features[active]?.bgColor || "transparent",
            }}
          >
            <div className="sticky top-42 overflow-visible">
              <div
                className="relative w-full max-w-[560px] mx-auto rounded-2xl"
                style={{ boxShadow: "16px 16px 0px 6px black" }}
              >
                {/* crossfade stack inside a PERFECT SQUARE */}
                <div className="relative aspect-square rounded-2xl overflow-visible">
                  {features.map((f, i) => (
                    <div
                      key={f.id}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        i === active ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <VideoFrame
                        feature={f}
                        ref={(el) => (videoRefs.current[i] = el)}
                        autoPlay
                        muted
                        loop
                        playsInline
                        onLoadedMetadata={() => {
                          if (i === active)
                            videoRefs.current[i]?.play().catch(() => {});
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* soft drop shadow */}
                <div className="absolute inset-0 -z-10 blur-2xl opacity-30 rounded-2xl bg-black/20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------- helpers ---------------- */

type VideoFrameProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  feature: Feature;
};

// eslint-disable-next-line react/display-name
// eslint-disable-next-line react/display-name
const VideoFrame = (
  { feature, className, ...rest }: VideoFrameProps,
  ref?: React.Ref<HTMLVideoElement>
) => {
  return (
    <div className="relative w-full h-full">
      {/* Square framed container */}
      <div className="relative w-full h-full aspect-square rounded-2xl overflow-hidden border-2 border-black bg-white">
        {/* Video fills the square */}
        <video
          ref={ref}
          className="absolute inset-0 w-full h-full object-cover"
          src={feature.video.src}
          poster={feature.video.poster}
          {...rest}
        />

        {/* Frame top bar OVERLAY (doesn't change square ratio) */}
        <img
          src={"/video-frame-topbar.svg"}
          alt="frame topbar"
          className="absolute top-0 left-0 w-full h-auto block pointer-events-none select-none"
        />
      </div>
    </div>
  );
};
