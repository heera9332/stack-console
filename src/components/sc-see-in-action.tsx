// src/sections/SeeInAction.tsx
"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MediaNode } from "@/types/utils";

interface Props {
  fieldGroupName: string;
  heading: string;                // e.g. "The Power ⚡ Behind | Your Cloud ☁️ Business" OR a single string
  description: string;
  video: {
    fieldGroupName: string;
    videoUrl: string;
    videoPoster: MediaNode;
    imageOverVideo: MediaNode;
    buttonLabel: string;          // e.g. "Start the Tour"
  };
  // Optional: if your API already gives separate lines, we’ll prefer these.
  titleTop?: string;
  titleBottom?: string;
}

/** Split heading into two lines, with support for:
 * - explicit delimiter `|`  -> "Line A | Line B"
 * - newline                 -> "Line A\nLine B"
 * - auto split near middle  -> fallback
 */
function splitTwoLines(heading: string): { top: string; bottom: string } {
  if (!heading) return { top: "", bottom: "" };

  const byPipe = heading.split("|").map(s => s.trim());
  if (byPipe.length === 2) return { top: byPipe[0], bottom: byPipe[1] };

  const byNl = heading.split(/\r?\n/).map(s => s.trim());
  if (byNl.length === 2) return { top: byNl[0], bottom: byNl[1] };

  // Fallback: split near middle by word
  const parts = heading.trim().split(/\s+/);
  if (parts.length < 2) return { top: heading.trim(), bottom: "" };
  const mid = Math.floor(parts.length / 2);
  return {
    top: parts.slice(0, mid).join(" "),
    bottom: parts.slice(mid).join(" "),
  };
}

export default function ScSeeInAction(data: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.play().catch(() => {});
    setHasStarted(true);
  };

  const titleTop = data.titleTop ?? splitTwoLines(data.heading).top;
  const titleBottom = data.titleBottom ?? splitTwoLines(data.heading).bottom;

  return (
    <section
      id="sc-see-in-action"
      data-aos="fade-up"
      className="section px-4 md:px-6 lg:px-8 py-12 pb-40 md:pb-16 md:py-16 bg-gray-100/50 bg-light"
    >
      {/* Heading */}
      <header className="text-center max-w-5xl mx-auto">
        {/* Desktop: two lines */}
        <h2 className="hidden md:block text-[32px] md:text-[56px] leading-tight font-semibold text-foreground">
          {titleTop}
          {titleBottom ? <><br />{titleBottom}</> : null}
        </h2>

        {/* Mobile: single line */}
        <h2 className="block md:hidden text-[28px] leading-tight font-semibold text-foreground">
          {titleBottom ? `${titleTop} ${titleBottom}` : titleTop}
        </h2>

        <p className="my-6 text-body2 md:text-body1 text-muted-foreground">
          {data.description}
        </p>
      </header>

      {/* Video frame */}
      <div className="mt-8 md:mt-10 mx-auto max-w-5xl">
        <div
          className="
            relative md:overflow-hidden
            rounded-3xl bg-background
            shadow-[0_0_0_6px_black] md:shadow-[0_0_0_10px_black]
          "
        >
          {/* subtle device bezel */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />

          {/* overlay gradient before play */}
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
            src={data.video.videoUrl}
            poster={data.video.videoPoster?.node?.link}
            preload="metadata"
            playsInline
            muted
            loop
            controls={hasStarted}
          />

          {/* CTA overlay */}
          {!hasStarted && (
            <div className="absolute inset-0 flex items-center justify-end p-4 z-10 w-full">
              <Button
                size="lg"
                onClick={handleStart}
                className="bg-foreground text-background hover:bg-foreground/90 rounded-[10px] px-6 py-6 absolute right-[20%] top-[120%] md:top-[42%] z-10 w-56 transition-all delay-100 hover:shadow-[0_8px_0_#ef4444] hover:border-r-[2px] hover:border-[#ef4444] hover:border-l-0 hover:border-t-0"
                aria-label={data.video.buttonLabel}
              >
                <Image
                  className="svg-white w-10 h-10"
                  src="/assets/svg/play-circle.svg"
                  alt="play"
                  width={56}
                  height={56}
                />
                {data.video.buttonLabel}
              </Button>

              <div className="absolute hidden md:block right-[32%] top-[50%]">
                <VideoArrow />
              </div>

              <div className="absolute left-[2%] bottom-[2%]">
                <PromoImage
                  src={data.video.imageOverVideo?.node?.link}
                  altText={data.video.imageOverVideo?.node?.altText}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const VideoArrow = () => (
  <svg
    width="204"
    height="137"
    viewBox="0 0 204 137"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
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

// Fix props signature; provide safe defaults.
function PromoImage({
  src,
  altText,
}: {
  src?: string;
  altText?: string;
}) {
  const fallback = "/assets/website/home/promo.png";
  return (
    <Image
      src={src || fallback}
      className="w-1/2 md:w-3/4"
      width={512}
      height={512}
      alt={altText || "promo"}
    />
  );
}
