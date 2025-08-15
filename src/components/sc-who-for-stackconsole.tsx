// src/sections/WhoFor.tsx
"use client";

import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

type Item = {
  key: string;
  label: string;
  h1: string;
  p: string;
  img: string;
  cta?: { label: string; href?: string };
};

const items: Item[] = [
  {
    key: "cloud",
    label: "Cloud & Hosting Providers",
    h1: "Launch Your Own Cloud Platform — Fully Branded and Scalable",
    p: "Enable on‑demand VM provisioning, automated billing, and seamless user self‑service — all under your brand.",
    img: "/assets/website/home/database.gif",
    cta: { label: "Learn More", href: "#" },
  },
  {
    key: "dc",
    label: "Data Centers",
    h1: "Turn Capacity Into Products",
    p: "Package compute, storage, and network into sellable SKUs with automated orchestration.",
    img: "/assets/website/home/database.gif",
    cta: { label: "Learn More", href: "#" },
  },
  {
    key: "msps",
    label: "Managed Service Providers (MSPs)",
    h1: "Deliver Managed Cloud Services at Scale",
    p: "Standardize deployments, SLAs, and billing across tenants with a single control plane.",
    img: "/assets/website/home/database.gif",
    cta: { label: "Learn More", href: "#" },
  },
  {
    key: "telcos",
    label: "Telcos & ISPs",
    h1: "Monetize Edge & Network Assets",
    p: "Offer low‑latency workloads and enterprise cloud under your existing footprint.",
    img: "/assets/website/home/database.gif",
    cta: { label: "Learn More", href: "#" },
  },
];

export default function ScWhoForStacKConsole() {
  return (
    <section className="px-4 md:px-6 lg:px-8 py-10 md:py-14">
      {/* Heading */}
      <header className="text-center max-w-4xl mx-auto">
        <h2 className="text-h2 md:text-[56px] leading-tight font-semibold text-foreground">
          <span role="img" aria-label="thinking">
            🤔
          </span>{" "}
          Who Is Stack Console For?
        </h2>
        <p className="mt-3 text-body2 md:text-body1 text-muted-foreground">
          Built for the Ones Powering{" "}
          <span role="img" aria-label="fist">
            👊
          </span>{" "}
          the Internet
        </p>
      </header>

      {/* Tabs */}
      <Tabs defaultValue={items[0].key} className="mt-8 max-w-6xl mx-auto">
        <TabsList
          className="
            w-full justify-start gap-2 overflow-x-auto rounded-none bg-transparent p-0 border-b border-border
          "
        >
          {items.map((t) => (
            <TabsTrigger
              key={t.key}
              value={t.key}
              className="
                rounded-none 
    px-3 md:px-6 py-3 md:py-4
    text-[16px] md:text-[20px] font-semibold text-muted-foreground
    border-b-2 border-transparent
    data-[state=active]:text-[#3B6EC6]
    data-[state=active]:border-[#3B6EC6]
    data-[state=active]:bg-none
    bg-none
              "
            >
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {items.map((t) => (
          <TabsContent
            key={t.key}
            value={t.key}
            className="mt-8 focus:outline-none"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Copy */}
              <div>
                <h3 className="text-[32px] md:text-[36px] font-semibold text-foreground">
                  {t.h1}
                </h3>
                <p className="mt-4 text-body1 text-muted-foreground">{t.p}</p>

                {t.cta && (
                  <div className="mt-6">
                    {/* outline button per your standard */}
                    <Button
                      variant="outline"
                      size="lg"
                      className="
                        bg-transparent text-foreground
                        border border-input hover:bg-accent hover:text-accent-foreground
                        
                      "
                      asChild
                    >
                      <a href={t.cta.href || "#"}>{t.cta.label}</a>
                    </Button>
                  </div>
                )}
              </div>

              {/* Illustration */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[520px]">
                  <Image
                    src={t.img}
                    alt=""
                    width={1040}
                    height={800}
                    className="w-full h-auto select-none"
                    priority
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
