"use client";
import "./sc-clound-integrations.css";
import Image from "next/image";
import Link from "next/link";
import { CloudIntegrationsHeroProps } from "@/types/sections-props";
interface Item {
  id: string;
  src: string;
  label: string;
  href: string;
  rank: number;
}

const DATA = {
  bg: {
    mobile: "/assets/integrations/lines-bg-mobile.jpg",
    desktop: "/assets/integrations/lines-bg-desktop.jpg",
  },
  hub: {
    src: "/assets/integrations/hub-logo.png",
    alt: "Stack Console Hub",
    size: 76,
  },
  cta: { label: "Browse All Integrations", href: "/integrations" },
  // sample icons — replace paths; add/remove freely
  integrations: [
    // top-left arm
    {
      id: "redhat",
      src: "/assets/integrations/redhat.png",
      label: "Red Hat",
      href: "#",
      rank: 0,
    },
    {
      id: "gitlab",
      src: "/assets/integrations/gitlab.png",
      label: "GitLab",
      href: "#",
      rank: 1,
    },
    {
      id: "k8s",
      src: "/assets/integrations/k8s.png",
      label: "K8s",
      href: "#",
      rank: 2,
    },

    // top-right arm
    {
      id: "notion",
      src: "/assets/integrations/notion.png",
      label: "Notion",
      href: "#",
      rank: 0,
    },
    {
      id: "metrics",
      src: "/assets/integrations/metrics.png",
      label: "Metrics",
      href: "#",
      rank: 1,
    },
    {
      id: "grafana",
      src: "/assets/integrations/grafana.png",
      label: "Grafana",
      href: "#",
      rank: 2,
    },

    // bottom-left arm
    {
      id: "openai",
      src: "/assets/integrations/openai.png",
      label: "OpenAI",
      href: "#",
      rank: 0,
    },
    {
      id: "stripe",
      src: "/assets/integrations/stripe.png",
      label: "Stripe",
      href: "#",
      rank: 1,
    },

    // bottom-right arm
    {
      id: "aws",
      src: "/assets/integrations/aws.png",
      label: "AWS",
      href: "#",
      rank: 0,
    },
    {
      id: "x",
      src: "/assets/integrations/x.png",
      label: "X",
      href: "#",
      rank: 1,
    },
  ] as const satisfies Item[],
};

export default function ScCloudIntegrationsHero(
  data: CloudIntegrationsHeroProps
) {
  console.log("CloudIntegrationsHero data:", data);
  return (
    <section className="relative overflow-hidden bg-white">
      {/* BG images (no SVG) */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover md:hidden opacity-90 bg-light"
        style={{ backgroundImage: `url(${DATA.bg.mobile})` }}
      />
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover hidden md:block opacity-90"
        style={{ backgroundImage: `url(${DATA.bg.desktop})` }}
      />

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Heading */}
        <div className="mx-auto max-w-7xl text-center pt-16 md:pt-20 relative z-20">
          <h1 className="text-[34px] md:text-[64px] font-semibold tracking-tight">
            {data.heading}
          </h1>
          <p className="text-transparent bg-clip-text font-semibold mt-2 md:mt-3 text-[30px] md:text-[64px] integration-highlighted">
            {data.headingHighlighted}
          </p>
          <p className="text-muted-foreground my-4 text-base md:text-lg">
            {data?.description}
          </p>
          <div className="mt-12">
            <Link
              className="bg-black text-white px-10 py-4 rounded-md z-50"
              href={DATA.cta.href}
            >
              {DATA.cta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Field */}
      <div
        className="relative mx-auto h-[440px] md:h-[732px] flex items-center justify-center -mt-80 z-10"
        style={{
          backgroundImage: `url(${data.backgroundImage.node.link})`,
          backgroundSize: "cover", // cover
          backgroundPosition: "center", // center
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Desktop: butterfly/X placement */}
        <div className="hidden md:block w-full max-w-5xl pt-62">
          <div className="grid grid-cols-9 gap-16 justify-items-center">
            {(() => {
              // Fixed, deterministic mapping (left→right, top→bottom)
              // cells that should show a logo:
              const positions: Array<[number, number]> = [
                [0, 0],
                [0, 8],
                [1, 2],
                [1, 4],
                [1, 6],
                [2, 0],
                [2, 8],
              ];

              // Build a quick lookup: "i-j" -> logoIndex
              const positionMap: Record<string, number> = {};
              positions.forEach(([ri, rj], idx) => {
                positionMap[`${ri}-${rj}`] = idx;
              });

              return Array.from({ length: 3 }, (_, i) =>
                Array.from({ length: 9 }, (_, j) => {
                  const mapIndex = positionMap[`${i}-${j}`];
                  const logoNode = Number.isInteger(mapIndex)
                    ? data?.brandLogos?.[mapIndex]?.logo?.node
                    : null; 
                  const showLogo = !!logoNode;

                  const isLastRow = i === 2 && (j === 0 || j === 8);

                  return (
                    <div
                      key={`${i}-${j}`}
                      className={`h-24 w-24 rounded-xl flex items-center justify-center ${ isLastRow ? "mt-[-42px]" : ""}`}
                    >
                      {showLogo ? (
                        <Image
                          width={128}
                          height={128}
                          alt={logoNode.altText || "Brand logo"}
                          src={logoNode.link}
                          className="object-contain" // keep logos un-cropped
                        />
                      ) : null}
                    </div>
                  );
                })
              ).flat();
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
