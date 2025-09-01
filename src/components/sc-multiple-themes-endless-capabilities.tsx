// src/sections/ScMultipleThemesEndlessCapabilities.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MediaNode } from "@/types/utils";

type WpTab = {
    fieldGroupName: string;
    tabLabel: string;
    tabDescription: string;
    tabContentBackground: string;      // e.g. "#F6A84F"
    tabContentDescription: string;
    tabContentImage: MediaNode;
};

interface Props {
    __typename?: "PageBuilderSectionsMultiThemesAndEndlessPosibilitiesLayout";
    fieldGroupName: string;
    heading: string;
    description: string;
    tabs: WpTab[];
}

export function ScMultipleThemesEndlessCapabilities({
    heading,
    description,
    tabs,
}: Props) {
    const defaultValue = tabs?.[0]?.tabLabel || "tab-0";

    return (
        <section
            id="sc-multiple-theme-endless-capabilities"
            className="section overflow-hidden bg-light px-4 md:px-8 lg:px-10 py-12 md:py-16"
        >
            {/* Heading */}
            <header className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-foreground">
                    {heading}
                </h2>
                <p className="mt-3 text-muted-foreground text-base md:text-lg">{description}</p>
            </header>

            {/* Body */}
            <div className="mt-10 grid gap-8 lg:grid-cols-[360px,1fr] items-start">
                <Tabs defaultValue={defaultValue} className="contents">
                    {/* LEFT: vertical list */}
                    <TabsList className="flex lg:block justify-start gap-3 lg:gap-0 p-0 bg-transparent h-auto">
                        <div className="space-y-4 w-full">
                            {tabs?.map((t, idx) => (
                                <TabsTrigger
                                    key={idx}
                                    value={t.tabLabel || `tab-${idx}`}
                                    className={[
                                        "w-full justify-start text-left rounded-2xl border p-5 transition-colors",
                                        "border-black/10 bg-white shadow-sm hover:bg-white",
                                        "data-[state=active]:border-black data-[state=active]:shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
                                    ].join(" ")}
                                >
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">{t.tabLabel}</h3>
                                        {t.tabDescription ? (
                                            <p className="mt-2 text-sm text-muted-foreground">{t.tabDescription}</p>
                                        ) : null}
                                    </div>
                                </TabsTrigger>
                            ))}
                        </div>
                    </TabsList>

                    {/* RIGHT: preview */}
                    <div className="relative rounded-3xl p-4 md:p-8">
                        {tabs?.map((t, idx) => {
                            const value = t.tabLabel || `tab-${idx}`;
                            const bg = (t.tabContentBackground || "").trim() || "#F6A84F";
                            const imgUrl =
                                t.tabContentImage?.node?.url || t.tabContentImage?.node?.link || "";
                            const imgAlt = t.tabContentImage?.node?.altText || t.tabLabel || "Theme preview";

                            return (
                                <TabsContent key={value} value={value} className="m-0">
                                    <div
                                        className="rounded-3xl p-0 md:p-0"
                                        style={{ backgroundColor: bg }}
                                    >
                                        <div className="rounded-3xl overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                                            <div className="aspect-[16/9] relative">
                                                {imgUrl ? (
                                                    <Image
                                                        src={imgUrl}
                                                        alt={imgAlt}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(min-width: 1024px) 720px, 100vw"
                                                        priority={idx === 0}
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 grid place-items-center text-sm text-muted-foreground">
                                                        No preview image
                                                    </div>
                                                )}
                                            </div>
                                            {t.tabContentDescription ? (
                                                <div className="p-4 md:p-6 text-sm md:text-base text-muted-foreground">
                                                    {t.tabContentDescription}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>

                                    {/* Red pill note */}
                                    <div className="relative h-0">
                                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 rounded-full bg-[#E11D48] text-white text-sm md:text-base px-5 py-3 shadow-lg">
                                            Whichever theme you choose, Stack Console adapts seamlessly to your brand
                                            and delivers a stunning experience to your users
                                        </div>
                                    </div>
                                </TabsContent>
                            );
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    );
}
