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
    h1: "Transform Intrastructure into Revenue-Generating, Self-Service Cloud Platform",
    p: "Transform bare-metal and virtual resources into a revenue-generating cloud with self-service and multi-tenancy",
    img: "/assets/website/home/database.gif",
    cta: { label: "Learn More", href: "#" },
  },
  {
    key: "msps",
    label: "Managed Service Providers (MSPs)",
    h1: "Deliver Bundled Services with Full Control and Seamless Automation",
    p: "Deliver bundled services with complete control over provisioning automation, support and user access",
    img: "/assets/website/home/database.gif",
    cta: { label: "Learn More", href: "#" },
  },
  {
    key: "telcos",
    label: "Telcos & ISPs",
    h1: "Monetize Your Infrastructure with Private Cloud & edge Ready Deployments",
    p: "Monetize existing infrastructure with private cloud offerings, on-prem compute, and edg-ready deployments",
    img: "/assets/website/home/database.gif",
    cta: { label: "Learn More", href: "#" },
  },
];

export default function ScWhoForStacKConsole() {
  return (
    <section data-aos="fade-up" className="section px-4 md:px-6 lg:px-8 py-10 md:py-20 md:bg-muted">
      {/* Heading */}
      <header className="text-center max-w-4xl mx-auto">
        <h2 className="text-[36px] md:text-[56px] leading-tight font-semibold text-foreground">
          <span role="img" aria-label="thinking">
            🤔
          </span>{" "}
          Who Is Stack Console For?
        </h2>
        <p className="mt-3 text-body1 md:text-[18px] text-muted-foreground">
          Built for the Ones Powering{" "}
          <span role="img" aria-label="fist">
            👊
          </span>{" "}
          the Internet
        </p>
      </header>

      {/* Tabs */}
      <Tabs defaultValue={items[0].key} className="mt-8 max-w-6xl md:mx-auto rounded-md">
        <TabsList
          className="
            flex flex-col md:flex-row w-full items-start md:items-center justify-start overflow-x-auto md:rounded-none md:bg-transparent p-4 md:p-0 border-b border-border bg-muted rounded-md shadow-md md:shadow-none
          "
        >
          {items.map((t) => (
            <TabsTrigger
              key={t.key}
              value={t.key}
              className="
                rounded-none 
                py-4 md:py-4
                text-[16px] md:text-[20px] font-semibold text-muted-foreground
                border-b-2 shadow-none bg-muted
                data-[state=active]:text-[#3B6EC6]
                data-[state=active]:border-b-[#3B6EC6]
                data-[state=active]:shadow-none
                data-[state=active]:bg-muted
                bg-none
                cursor-pointer
                w-full justify-start md:justify-center
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
            className="focus:outline-none bg-muted rounded-md shadow-md md:shadow-none p-4 pt-0 pb-8"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              {/* Copy */}
              <div className="order-2 lg:order-1 w-full md:w-3/5">
                <h3 className="text-[32px] md:text-[36px] font-semibold text-foreground md:pr-16">
                  {t.h1}
                </h3>
                <p className="mt-4 text-[18px] text-muted-foreground md:pr-2">{t.p}</p>

                {t.cta && (
                  <div className="mt-6">
                    {/* outline button per your standard */}
                    <Button
                      variant="outline"
                      size="lg"
                      className="
                        text-[18px] bg-transparent text-foreground border border-black
                        py-6 w-56 hover:bg-white hover:border-none  hover:shadow-[2px_8px_0px_2px_#356EC3] hover:border-r-[2px] hover:border-[#356EC3] hover:border-l-0 hover:border-t-0 transition-all duration-300 ease-in-out
                      "
                      asChild
                    >
                      <a href={t.cta.href || "#"}>{t.cta.label}</a>
                    </Button>
                  </div>
                )}
              </div>

              {/* Illustration */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full md:w-2/5">
                <div className="relative w-full max-w-[520px]">
                  <Image
                    src={t.img}
                    alt=""
                    width={800}
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
