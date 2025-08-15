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
  // If you don't have logo svgs yet, keep these placeholders or point to your assets
  logos: [
    { name: "SIEMENS", src: "/assets/website/brands/siemans.svg", makeWhite: true },
    { name: "Ogilvy", src: "/assets/website/brands/ogilvy.svg", makeWhite: true },
    { name: "nickelodeon", src: "/assets/website/brands/nick.svg", makeWhite: true },
    { name: "snowflake", src: "/assets/website/brands/snowflake.svg", makeWhite: true },
  ],
};

export default function ScTrustedCloudInnovators() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Heading */}
        <h2 className="text-center leading-tight text-[20px] md:text-[56px] opacity-90">
          {data.title.pre}{" "}
          <span className="font-bold opacity-100">{data.title.emphasis}</span>{" "}
          {data.title.post}
        </h2>

        {/* Optional second line break on small screens */}
        <p className="sr-only">
          {data.title.pre} {data.title.emphasis} {data.title.post}
        </p>

        {/* Logos grid */}
        <div className="mt-10 md:mt-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-4 md:gap-y-10 items-center">
          {data.logos.map((logo) => (
            <Logo key={logo.name} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Single logo cell (keeps aspect, centers, can force white via CSS filters) */
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
          "h-12 lg:h-12 w-auto object-contain",
          // for dark-on-light assets you want to appear white on the blue bg
          makeWhite && "invert brightness-0 saturate-100"
        )}
        priority
      />
    </div>
  );
}
