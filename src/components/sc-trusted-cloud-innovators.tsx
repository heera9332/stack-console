// src/sections/ScTrustedCloudInnovators.tsx
"use client";

import Image from "next/image";
import clsx from "clsx";

/** ===== Static data (replace from API in future) ===== */
const data = {
  title: {
    pre: "Trusted by",
    emphasis: "Cloud Innovators",
    post: "Across the Globe",
  },
  logos: [
    {
      name: "SIEMENS",
      src: "/assets/website/brands/siemans.svg",
      makeWhite: true,
    },
    {
      name: "Ogilvy",
      src: "/assets/website/brands/ogilvy.svg",
      makeWhite: true,
    },
    {
      name: "nickelodeon",
      src: "/assets/website/brands/nick.svg",
      makeWhite: true,
    },
    {
      name: "Ogilvy",
      src: "/assets/website/brands/ogilvy.svg",
      makeWhite: true,
    },
    {
      name: "nickelodeon",
      src: "/assets/website/brands/nick.svg",
      makeWhite: true,
    },
    {
      name: "snowflake",
      src: "/assets/website/brands/snowflake.svg",
      makeWhite: true,
    },
  ],
};

export default function ScTrustedCloudInnovators() {
  const lanes = splitIntoLanes(data.logos, 2);

  return (
    <section className="bg-primary text-primary-foreground mx-auto flex justify-center flex-col items-center">
      <div className="w-full max-w-7xl pt-10 flex flex-col items-cener justify-center">
        {/* Heading */}
        <h2 className="text-center leading-tight text-[20px] md:text-[18px] opacity-90 px-4 sm:px-6 lg:px-8 w-full">
          {data.title.pre}{" "}
          <span className="font-bold opacity-100">{data.title.emphasis}</span>{" "}
          {data.title.post}
        </h2>
        <p className="sr-only px-4 sm:px-6 lg:px-8">
          {data.title.pre} {data.title.emphasis} {data.title.post}
        </p>

        {/* Mobile/Tablet: two vertical lanes (stacked), infinitely scrolling */}
        <div className="mt-10 md:mt-12 space-y-4 lg:hidden relative pb-10">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-primary to-transparent" />

          <Lane items={lanes[0]} duration={12} />
          <Lane items={lanes[1]} duration={14} reverse />
        </div>

        {/* Desktop: single marquee row */}
        <div className="hidden lg:block mt-12 relative">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent" />
        </div>
      </div>
      <div className="pb-10 hidden lg:block">
        <Lane items={data.logos} duration={10} />
      </div>
    </section>
  );
}

/** Split logos evenly across N lanes */
function splitIntoLanes<T>(arr: T[], lanes: number) {
  const out: T[][] = Array.from({ length: lanes }, () => []);
  arr.forEach((item, i) => out[i % lanes].push(item));
  return out;
}

/** A scrolling lane (horizontal marquee) */
function Lane({
  items,
  reverse,
  duration = 30,
}: {
  items: { name: string; src: string; makeWhite?: boolean }[];
  reverse?: boolean;
  duration?: number;
}) {
  // Duplicate track for seamless loop
  const track = [...items, ...items];

  return (
    <div
      className="overflow-hidden"
      style={{ ["--marquee-duration" as any]: `${duration}s` }}
    >
      <ul
        className={clsx(
          "marquee marquee-pause flex gap-16 items-center",
          reverse && "marquee-reverse"
        )}
      >
        {track.map((logo, idx) => (
          <li
            key={`${logo.name}-${idx}`}
            className="shrink-0 opacity-80 hover:opacity-100 transition-opacity"
          >
            <Logo {...logo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Single logo cell */
function Logo({
  name,
  src,
  makeWhite = false,
}: {
  name: string;
  src: string;
  makeWhite?: boolean;
}) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={src}
        alt={name}
        width={260}
        height={100}
        className={clsx(
          "h-12 lg:h-10 w-auto object-contain",
          makeWhite && "invert brightness-0 saturate-100"
        )}
        priority
      />
    </div>
  );
}
