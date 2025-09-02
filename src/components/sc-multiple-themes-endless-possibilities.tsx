"use client";

import * as React from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { MediaNode } from "@/types/utils";

type WpTab = {
    __typename: string;
    tabLabel: string;
    tabDescription: string;
    tabContentBackground: string; // hex or css color
    tabContentDescription: string;
    tabContentImage: MediaNode;
};

interface Props {
    __typename: string;
    heading: string;
    description: string;
    scTabs: WpTab[];
}

export function ScMultipleThemesEndlessPossibilities(data: Props) {
    const { heading, description, scTabs = [] } = data;
    const defaultValue = scTabs?.[0]?.tabLabel || "tab-0";

    return (
        <section
            id="sc-multiple-theme-endless-possibilities"
            className="section relative overflow-hidden bg-light px-4 md:px-8 lg:px-10 py-12 md:py-16"
        >
            {/* Heading */}
            <header className="max-w-7xl text-left mx-auto relative flex gap-4 items-center">
                <div className="max-w-4xl header-inner bg-[#FAFAFA] md:p-12 md:pl-6 md:pt-6 md:pb-32 rounded-4xl">
                    <h2 className="md:text-left text-center text-3xl md:text-5xl font-semibold leading-tight text-foreground">
                        {heading}
                    </h2>
                    <p className="mt-3 text-muted-foreground text-base md:text-lg py-6 md:p-0">
                        {description}
                    </p>
                </div>

                {/* infinity */}
                <Image width={1000} height={1000} alt="infinity" src={`/assets/svg/infinity-2.svg`} className="hidden md:block w-full -ml-32" />

            </header>

            {/* Body */}
            <div className="hidden md:block mx-auto max-w-7xl -mt-6 p-6 bg-[#FAFAFA] rounded-4xl">
                <Tabs defaultValue={defaultValue} className="grid gap-8 md:grid-cols-10 items-start">
                    {/* LEFT: vertical list */}
                    <TabsList className="col-span-12 md:col-span-4 p-0 bg-transparent h-auto flex md:block gap-3 md:gap-0 md:sticky md:top-6">
                        <div className="space-y-4 w-full">
                            {scTabs.map((t, idx) => {
                                const value = t.tabLabel || `tab-${idx}`;
                                return (
                                    <TabsTrigger
                                        key={value}
                                        value={value}
                                        className={cn(
                                            "cursor-pointer w-full justify-start text-left rounded-2xl border p-6 transition-all",
                                            "bg-white/60 hover:bg-white data-[state=active]:bg-[#EDEDED]")}
                                    >
                                        <div className="w-full">
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-lg font-semibold text-foreground">{t.tabLabel}</h3>
                                            </div>
                                            {t.tabDescription ? (
                                                <p className="mt-2 text-sm text-muted-foreground text-wrap">{t.tabDescription}</p>
                                            ) : null}
                                        </div>
                                    </TabsTrigger>
                                );
                            })}
                        </div>
                    </TabsList>

                    {/* RIGHT: preview */}
                    <div className="col-span-12 md:col-span-6">
                        {scTabs.map((t, idx) => {
                            const value = t.tabLabel || `tab-${idx}`;
                            const bg = (t.tabContentBackground || "").trim() || "#F6A84F";
                            const note =
                                t.tabContentDescription ||
                                "Whichever theme you choose, Stack Console adapts seamlessly to your brand and delivers a stunning experience to your users";
                            const imgUrl = t.tabContentImage?.node?.link || "";
                            const imgAlt = t.tabContentImage?.node?.altText || t.tabLabel || "Theme preview";

                            return (
                                <TabsContent
                                    key={value}
                                    value={value}
                                    className="m-0 w-full data-[state=inactive]:hidden data-[state=active]:block"
                                >
                                    {/* Big rounded tinted backdrop */}
                                    <div className="rounded-[40px] p-3 md:p-14 md:py-28" style={{ background: bg }}>
                                        <div className="rounded-[24px] overflow-hidden bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                                            <div className="relative aspect-[16/9]">
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
                                        </div>
                                    </div>

                                    {/* Red pill note */}
                                    <div className="relative w-full flex justify-center h-0">
                                        <div className="absolute mx-10 -bottom-8 rounded-full bg-[#E11D48] text-white text-xs md:text-sm lg:text-base px-4 md:px-6 py-2.5 shadow-lg">
                                            {note}
                                        </div>
                                    </div>
                                </TabsContent>
                            );
                        })}
                    </div>
                </Tabs>
            </div>

            {/* mobile only */}

            <div className="block md:hidden">
                {scTabs.map((t, idx) => {
                    const value = t.tabLabel || `tab-${idx}`;
                    const bg = (t.tabContentBackground || "").trim() || "#F6A84F";
                    const note =
                        t.tabContentDescription ||
                        "Whichever theme you choose, Stack Console adapts seamlessly to your brand and delivers a stunning experience to your users";
                    const imgUrl = t.tabContentImage?.node?.link || "";
                    const imgAlt = t.tabContentImage?.node?.altText || t.tabLabel || "Theme preview";

                    return (
                        <div
                            key={value}
                            className="m-0 w-full"
                        >

                            {/* Big rounded tinted backdrop */}
                            <div className="rounded-xl md:rounded-[40px] p-3 py-12" style={{ background: bg }}>
                                <div className="rounded-xl md:rounded-[24px] overflow-hidden bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                                    <div className="relative aspect-[16/9]">
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
                                </div>
                            </div>

                            <div className="py-6">
                                <h2 className="font-semibold text-xl mb-2">{t.tabLabel}</h2>
                                <p className="">{t.tabDescription}</p>

                                {/* Red pill note */}
                                <div className="mt-4">
                                    <div className="md:absolute md:mx-10 md:-bottom-8  border-dashed border-[#E11D48] border  text-xs md:text-sm lg:text-base px-4 md:px-6 py-2.5">
                                        {note}
                                    </div>
                                </div>
                            </div>


                        </div>
                    );
                })}
            </div>
        </section>
    );
}
