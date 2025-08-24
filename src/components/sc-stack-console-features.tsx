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
  topFrameColor: string; // background color for the ENTIRE right column when active
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
    topFrameColor: "#C4B0FF",
  },
  {
    id: "billing",
    title: "Multi-Orchestrator Ready",
    body: "Seamlessly manage Apache CloudStack, OpenStack, Virtuozzo, VMware, Proxmox, and more — all from a single dashboard.",
    cta: { label: "Learn More", href: "#" },
    video: {
      src: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/Untitled-design-4.mp4",
      poster:
        "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/191f97ba4fa5c19ce234f226b81a9d4e1c8f82bc.png",
    },
    surface: "blue",
    bgColor: "#FDE569",
    topFrameColor: "#FFC07E",
  },
  {
    id: "governance",
    title: "Powerful Billing Engine",
    body: "Automated billing for prepaid and postpaid users, with support for usage-based metering, thresholds, auto-pay, and reseller markups.",
    cta: { label: "Learn More", href: "#" },
    video: {
      src: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/Untitled-design-5.mp4",
      poster:
        "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/191f97ba4fa5c19ce234f226b81a9d4e1c8f82bc.png",
    },
    surface: "yellow",
    bgColor: "#FFC1C3",
    topFrameColor: "#8FD9F7",
  },
  {
    id: "stackai2",
    title: "Reseller Management Built-In",
    body: "Enable channel-based sales with advanced tools for managing resellers, sub-users, pricing controls, and customer hierarchies.",
    cta: { label: "Learn More", href: "#" },
    video: {
      src: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/Untitled-design-4.mp4",
      poster:
        "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/191f97ba4fa5c19ce234f226b81a9d4e1c8f82bc.png",
    },
    surface: "muted",
    bgColor: "#83B6FF",
    topFrameColor: "#C4B0FF",
  },
  {
    id: "stackai234",
    title: "Fully White-Labeled",
    body: "Launch your own branded cloud portal and mobile apps — your logo, your domain, your rules.",
    cta: { label: "Learn More", href: "#" },
    video: {
      src: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/Untitled-design-4.mp4",
      poster:
        "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/191f97ba4fa5c19ce234f226b81a9d4e1c8f82bc.png",
    },
    surface: "muted",
    bgColor: "#FDE569",
    topFrameColor: "#8FD9F7",
  },  {
    id: "stackai23",
    title: "Modern & Responsive UI",
    body: "Deliver a sleek, intuitive user experience across desktop and mobile — no training required, just instant usability.",
    cta: { label: "Learn More", href: "#" },
    video: {
      src: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/Untitled-design-4.mp4",
      poster:
        "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/191f97ba4fa5c19ce234f226b81a9d4e1c8f82bc.png",
    },
    surface: "muted",
    bgColor: "#FFC1C3",
    topFrameColor: "#FFC07E",
  },
];

const data = {
  heading: "What Makes Stack Console a Game Changer? 🌟",
  description:
    "Not just another CMP. Stack Console is built to help cloud providers move faster, reduce dependency, and increase margins.",
};

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
      <section id="sc-stack-console-feature" data-aos="fade-up" className="section px-4 md:px-6 lg:px-8 pt-14 md:pt-24 bg-light">
        {/* Heading */}
        <header className="text-center max-w-4xl mx-auto">
          <div className="hidden md:block">
            <h2 className="text-h2 md:text-[56px] font-semibold leading-tight text-foreground">
              {data.heading}
            </h2>
          </div>
          <div className="block md:hidden">
            <h2 className="text-[36px] md:text-[56px] font-semibold leading-tight text-foreground">
              {data.heading}
            </h2>
          </div>
          <p className="mt-3 md:px-32 text-body2 md:text-body1 text-muted-foreground">
            {data.description}
          </p>
        </header>
      </section>
      <section className="section">
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 min-h-[720px]">
          {/* LEFT: feature list */}
          <div
            ref={leftRef}
            className="space-y-20 md:space-y-42  px-4 lg:py-32 md:pl-12"
          >
            {features.map((f) => (
              <article
                key={f.id}
                data-feature={f.id}
                className="max-w-xl min-h-[512px] flex justify-center flex-col order-2 md:order-1 md:px-6"
              >
                <div>
                  <h3 className="text-[28px] md:text-[36px] font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-body1 text-muted-foreground md:pr-14">
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
                </div>

                {/* MOBILE/TABLET: inline video under its text (no sticky on small) */}
                <div
                  className={`my-6 py-16 px-10 lg:hidden bg-[${f.bgColor}] order-[-1]`}
                  style={{ backgroundColor: f.bgColor }}
                >
                  <VideoFrame feature={f} autoPlay muted loop playsInline />
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT: sticky video (desktop) with ENTIRE column bg color changing */}
          <div
            className="hidden lg:block transition-colors duration-500 lg:py-32 px-12"
            style={{
              backgroundColor: features[active]?.bgColor || "transparent",
            }}
          >
            <div className="sticky top-46 overflow-visible">
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
const VideoFrame = (
  { feature, className, ...rest }: VideoFrameProps,
  ref?: React.Ref<HTMLVideoElement>
) => {
  return (
    <div className="relative w-full h-full">
      {/* Square framed container */}
      <div className="relative w-full h-full aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-[0px_0px_0px_4px_#000] bg-white">
        {/* Video fills the square */}
        <video
          ref={ref}
          className="absolute inset-0 w-full h-full object-cover shadow-[0px_0px_0px_4px_#000]"
          src={feature.video.src}
          poster={feature.video.poster}
          {...rest}
        />
        <TopVideoFrame color={feature.topFrameColor} />
      </div>
    </div>
  );
};

const TopVideoFrame = ({ color = "#0B0D0F" }) => {
  return (
    <svg
      width="580"
      height="46"
      viewBox="0 0 580 46"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-full h-auto block pointer-events-none select-none"
    >
      <path
        d="M20 0.5H560C570.77 0.5 579.5 9.23045 579.5 20V45.5H0.5V20C0.5 9.23045 9.23045 0.5 20 0.5Z"
        fill={color}
        stroke="#0B0D0F"
      />
      <path
        d="M501.375 18.625L504 16L506.625 18.625"
        stroke="#0B0D0F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M504 23V16"
        stroke="#0B0D0F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M507 21H508.5C508.633 21 508.76 21.0527 508.854 21.1464C508.947 21.2402 509 21.3674 509 21.5V24.75V28C509 28.1326 508.947 28.2598 508.854 28.3536C508.76 28.4473 508.633 28.5 508.5 28.5H499.5C499.367 28.5 499.24 28.4473 499.146 28.3536C499.053 28.2598 499 28.1326 499 28V21.5C499 21.3674 499.053 21.2402 499.146 21.1464C499.24 21.0527 499.367 21 499.5 21H501"
        stroke="#0B0D0F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M522.5 23H533.5"
        stroke="#0B0D0F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M528 17.5V28.5"
        stroke="#0B0D0F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M549.5 25.5H547.5C546.948 25.5 546.5 25.0523 546.5 24.5V18.5C546.5 17.9477 546.948 17.5 547.5 17.5H553.5C554.052 17.5 554.5 17.9477 554.5 18.5V20.5"
        stroke="#0B0D0F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M550.5 20.5H556.5C557.052 20.5 557.5 20.9477 557.5 21.5V27.5C557.5 28.0523 557.052 28.5 556.5 28.5H550.5C549.948 28.5 549.5 28.0523 549.5 27.5V21.5C549.5 20.9477 549.948 20.5 550.5 20.5Z"
        stroke="#0B0D0F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="26"
        cy="23"
        r="5.5"
        fill="black"
        fillOpacity="0.1"
        stroke="#0B0D0F"
      />
      <circle
        cx="44"
        cy="23"
        r="5.5"
        fill="black"
        fillOpacity="0.1"
        stroke="#0B0D0F"
      />
      <circle
        cx="62"
        cy="23"
        r="5.5"
        fill="black"
        fillOpacity="0.1"
        stroke="#0B0D0F"
      />
      <rect
        x="149"
        y="14"
        width="281"
        height="18"
        rx="5"
        fill="white"
        fillOpacity="0.5"
        stroke="#0B0D0F"
      />
    </svg>
  );
};
