// src/sections/ScMakeEveryPixelYourBrand.tsx
"use client";

import * as React from "react";
import Image from "next/image";

/** GraphQL shapes (type-safe to your payload) */
type MediaNode = {
    node?: { altText?: string | null; link?: string | null } | null;
};

type ScPoint = { __typename?: string; point: string };

type ScFeature = {
    __typename?: string;
    heading: string;
    points?: ScPoint[] | null;
    featureIcon?: MediaNode | null;
};

export interface ScMakeEveryPixelYourBrandProps {
    __typename: "PageBuilderSectionsPixelMatchLayout";
    fieldGroupName?: string;
    heading: string;
    headingHighlighted?: string | null;
    scFeatures: ScFeature[];
}

export const ScMakeEveryPixelYourBrand: React.FC<ScMakeEveryPixelYourBrandProps> = (data) => {
    const { heading, headingHighlighted, scFeatures = [] } = data;

    // your logic: normalize into two columns
    const left: ScFeature[] = [];
    const right: ScFeature[] = [];
    scFeatures.forEach((f, i) => (i % 2 === 0 ? left : right).push(f));

    return (
        <section
            id="sc-make-every-pixel-your-brand"
            className="relative overflow-hidden bg-[#F9FAFE] py-14 md:py-20"
            aria-label="Make Every Pixel Match"
        >
            <div className="mx-auto max-w-6xl px-4">
                {/* Heading */}
                <header className="text-center z-10 overflow-hidden md:pb-10 relative">
                    <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-foreground hidden md:block">
                        {heading}
                    </h2>
                    
                    <h2 className="text-left text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-foreground block md:hidden mt-2">
                        {heading} <span className="text-[#2B5CE7]">{headingHighlighted}</span>
                    </h2>

                    {/* Highlight block with outline + SVG corners */}
                    <div className="mt-3 justify-center hidden md:flex">
                        <span
                            className="
                            relative inline-block bg-[#EAF1FF]
                            px-5 py-2 text-3xl font-semibold 
                                text-[#2B5CE7] md:text-4xl
                            outline-2 outline-[#99B7FF] outline-offset-2
                            "
                        >
                            {headingHighlighted}

                            {/* TL corner */}
                            <svg
                                aria-hidden
                                className="pointer-events-none absolute -top-3 -left-3 h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="#2B5CE7"
                            >
                                {/* little L shape */}
                                <svg
                                    aria-hidden
                                    className="pointer-events-none absolute -bottom-2 -right-2 h-4 w-4"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <rect x="0" y="0" width="16" height="16" fill="#2B5CE7" />
                                </svg>
                            </svg>

                            {/* BR corner */}
                            <svg
                                aria-hidden
                                className="pointer-events-none absolute -bottom-3 -right-3 h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                {/* mirrored L shape */}
                                <svg
                                    aria-hidden
                                    className="pointer-events-none absolute -bottom-2 -right-2 h-4 w-4"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <rect x="0" y="0" width="16" height="16" fill="#2B5CE7" />
                                </svg>
                            </svg>
                        </span>
                    </div>

                </header>

                {/* Body */}
                <div className="relative mt-8 md:mt-0 grid grid-cols-1 md:grid-cols-[1fr_44px_1fr] gap-6 z-0">
                    {/* Left column */}
                    <div className="space-y-6 md:space-y-8">
                        {left.map((f, idx) => (
                            <FeatureCard key={`l-${idx}`} feature={f} side="left" />
                        ))}
                    </div>

                    {/* Middle vertical rail */}
                    <div className="relative hidden md:block">
                        <div className="absolute left-1/2 -top-1 -translate-x-1/2 h-full w-[2px] bg-[#376DC3] -mt-22" />
                    </div>

                    {/* Right column */}
                    <div className="space-y-6 md:space-y-8">
                        {right.map((f, idx) => (
                            <FeatureCard key={`r-${idx}`} feature={f} side="right" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ---------- Pieces ---------- */
type Side = "left" | "right";

const FeatureCard: React.FC<{ feature: ScFeature; side: Side }> = ({ feature, side }) => {
    const iconUrl = feature.featureIcon?.node?.link ?? "";
    const iconAlt = feature.featureIcon?.node?.altText ?? feature.heading ?? "Feature icon";

    return (
        <article className="relative rounded-2xl border border-[#11192E1A] bg-white p-6 md:p-7">
            <div className="flex items-start gap-4">
                {/* Icon tile */}
                <div className="shrink-0 rounded-sm bg-[#376DC333] p-3">
                    {iconUrl ? (
                        <div className="bg-[#376DC3] p-2 rounded-sm">
                            <Image
                                src={iconUrl}
                                alt={iconAlt}
                                width={28}
                                height={28}
                                className="block h-7 w-7 object-contain svg-white"
                            />
                        </div>
                    ) : (
                        <div className="h-7 w-7" />
                    )}
                </div>

                {/* Texts */}
                <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground pr-10">{feature.heading}</h3>
                    {feature.points?.length ? (
                        <ul className="mt-3 space-y-2 text-sm md:text-[15px] text-muted-foreground">
                            {feature.points.map((p, i) => (
                                <li key={i} className="list-disc ml-5 leading-relaxed">
                                    {p.point}
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </div>

            {/* Arrow pointing to middle rail (desktop only) */}
            {side === "left" ? (
                <div className="hidden md:flex absolute inset-y-0 -right-[1px] items-center">
                    <svg
                        className="-mr-[55px]"
                        width="47"
                        height="51"
                        viewBox="0 0 47 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                    >
                        <path
                            d="M0.792893 42.2929C0.402369 42.6834 0.402369 43.3166 0.792893 43.7071L7.15685 50.0711C7.54738 50.4616 8.18054 50.4616 8.57107 50.0711C8.96159 49.6805 8.96159 49.0474 8.57107 48.6569L2.91421 43L8.57107 37.3431C8.96159 36.9526 8.96159 36.3195 8.57107 35.9289C8.18054 35.5384 7.54738 35.5384 7.15685 35.9289L0.792893 42.2929ZM45.5 0.5H44.5V19H45.5H46.5V0.5H45.5ZM21.5 43V42H1.5V43V44H21.5V43ZM45.5 19H44.5C44.5 31.7025 34.2025 42 21.5 42V43V44C35.3071 44 46.5 32.8071 46.5 19H45.5Z"
                            fill="#376DC3"
                        />
                    </svg>
                </div>
            ) : (
                <div className="hidden md:flex absolute inset-y-0 left-[1px] items-center">
                    <svg
                        className="-ml-[49px]"
                        width="51"
                        height="40"
                        viewBox="0 0 51 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                    >
                        <path
                            d="M50.2071 32.7071C50.5976 32.3166 50.5976 31.6834 50.2071 31.2929L43.8431 24.9289C43.4526 24.5384 42.8195 24.5384 42.4289 24.9289C42.0384 25.3195 42.0384 25.9526 42.4289 26.3431L48.0858 32L42.4289 37.6569C42.0384 38.0474 42.0384 38.6805 42.4289 39.0711C42.8195 39.4616 43.4526 39.4616 43.8431 39.0711L50.2071 32.7071ZM1.5 0.5H0.5V8H1.5H2.5V0.5H1.5ZM25.5 32V33H49.5V32V31H25.5V32ZM1.5 8H0.5C0.5 21.8071 11.6929 33 25.5 33V32V31C12.7975 31 2.5 20.7025 2.5 8H1.5Z"
                            fill="#376DC3"
                        />
                    </svg>
                </div>
            )}
        </article>
    );
};
