import "./sc-clound-integrations.css";
import Image from "next/image";
import Link from "next/link";
import { CloudIntegrationsHeroProps } from "@/types/sections-props";


export default function ScCloudIntegrationsHero(
  data: CloudIntegrationsHeroProps
) {
  console.log("CloudIntegrationsHero data:", data);
  return (
    <section className="relative overflow-hidden bg-white bg-light" id="clound-integrations-hero">
      {/* BG images (no SVG) */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover md:hidden opacity-90 bg-light"
        style={{ backgroundImage: `url(${data.backgroundImageMobile.node.link})` }}
      />
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover hidden md:block opacity-90"
        style={{ backgroundImage: `url(${data.backgroundImage.node.link})` }}
      />

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Heading */}
        <div className="mx-auto max-w-7xl text-center pt-16 md:pt-20 relative z-20">
          <h1 className="text-[34px] md:text-[64px] font-semibold tracking-tight">
            {data.heading}
          </h1>
          <p className="text-transparent bg-clip-text font-semibold mt-2 md:mt-3 text-[36px] md:text-[64px] integration-highlighted">
            {data.headingHighlighted}
          </p>
          <p className="text-muted-foreground my-4 text-base md:text-lg md:px-10">
            {data?.description}
          </p>
          <div className="mt-12">
            <Link
              className="bg-black text-white px-10 py-4 rounded-md z-50"
              href={data.integrationButtonLabel}
            >
              {data.integrationButtonLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* Field */}
      <div
        className="relative mx-auto h-[440px] md:h-[732px] flex items-center justify-center -mt-40 md:-mt-80 z-10"
        style={{
          backgroundImage: `url(${data.backgroundImage.node.link})`,
          backgroundSize: "cover", // cover
          backgroundPosition: "center", // center
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Desktop: butterfly/X placement */}
        <div className="md:block w-full max-w-5xl px-10 md:px-0 pt-36 md:pt-62">
          <div className="grid grid-cols-9 gap-2 md:gap-16 justify-items-center">
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
                      className={`w-8 md:h-24 h-8 md:w-24 rounded-xl flex items-center justify-center ${ isLastRow ? "md:mt-[-42px]" : ""}`}
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
