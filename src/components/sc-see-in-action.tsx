// src/sections/SeeInAction.tsx
"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

const data = {
  titleTop: "See Stack Console in 👉 Action",
  titleBottom: "No Sales Call Required",
  description:
    "Explore how you can manage VMs, networks, billing, and users through one unified portal. Experience the interface, workflows, and automations before you even talk to us.",
  video: {
    src: "http://headless-dev.local/wp-content/uploads/2025/08/Untitled-design.mp4",
    poster:
      "http://headless-dev.local/wp-content/uploads/2025/08/191f97ba4fa5c19ce234f226b81a9d4e1c8f82bc.png",
  },
  cta: "Start the Tour",
};

export default function ScSeeInAction() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.play().catch(() => {});
    setHasStarted(true);
  };

  const { isMobile } = useMediaQuery();

  return (
    <section className="px-4 md:px-6 lg:px-8 py-12 pb-40 md:pb-16 md:py-16 bg-gray-100/50">
      {/* Heading */}
      <header className="text-center max-w-4xl mx-auto">
        {!isMobile && (
          <h2 className="text-[32px] md:text-[56px] leading-tight font-semibold text-foreground">
            {data.titleTop}
            <br />
            {data.titleBottom}
          </h2>
        )}

        {isMobile && (
          <h2 className="text-[32px] md:text-[56px] leading-tight font-semibold text-foreground">
            {`${data.titleTop} ${data.titleBottom}`}
          </h2>
        )}
        <p className="mt-3 text-body2 md:text-body1 text-muted-foreground">
          {data.description}
        </p>
      </header>

      {/* Video frame */}
      <div className="mt-8 md:mt-10 mx-auto max-w-5xl">
        <div
          className="
            relative md:overflow-hidden
            rounded-3xl border-[4px] md:border-[8px] border-black bg-background
            shadow-[0_10px_40px_rgba(0,0,0,0.15)]
            
          "
        >
          {/* subtle device bezel */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />

          {/* full overlay gradient */}
          {!hasStarted && (
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(55, 109, 195, 0.85) 100%)",
              }}
            />
          )}
          <video
            ref={videoRef}
            className="block w-full h-full object-cover rounded-3xl"
            src={data.video.src}
            poster={data.video.poster}
            preload="metadata"
            playsInline
            muted
            loop
            controls={hasStarted}
          />

          {/* CTA overlay (hidden when started) */}
          {!hasStarted && (
            <div className="absolute inset-0 flex items-center justify-end p-4 z-10 w-full">
              <Button
                size="lg"
                onClick={handleStart}
                className="bg-foreground text-background hover:bg-foreground/90 rounded-[10px] px-6 py-6 absolute right-[20%] top-[120%] md:top-[42%] z-10 w-56 transition-all delay-100 hover:shadow-[0_8px_0_#ef4444] hover:border-r-[2px] hover:border-[#ef4444] hover:border-l-0 hover:border-t-0"
              >
                <img
                  className="svg-white"
                  src={"/assets/svg/play-circle.svg"}
                  alt="try demo"
                />
                {data.cta}
              </Button>
              <div className="absolute hidden md:block right-[32%] top-[50%]">
                <VideoArrow />
              </div>
              <div className="absolute left-[2%] bottom-[2%]">
                <PromoImage />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const VideoArrow = () => {
  return (
    <svg
      width="204"
      height="137"
      viewBox="0 0 204 137"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M201.458 2.11328C201.458 2.11328 194.917 74.3738 144.769 109.664C102.93 139.106 2.5 119.186 2.5 119.186M2.5 119.186L23.7585 109.664M2.5 119.186L23.7585 134.871"
        stroke="#2B59FF"
        strokeWidth="3.36095"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const PromoImage = () => {
  return (
    <img src={"/assets/website/home/promo.png"} className="w-1/2 md:w-3/4" />
  );
};
