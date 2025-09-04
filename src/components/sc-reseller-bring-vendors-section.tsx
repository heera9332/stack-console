import { Button } from "./ui/button";

export interface ScResellerBringVendorsSectionProps {
  __typename: "PageBuilderSectionsResellerBringVendorsLayout";
  description: string;
  heading: string;
  cta: {
    __typename: string;
    label: string;
    link: string;
  };
  vendorCards: {
    __typename: string;
    cardDescription: string;
    heading: string;
    headingHighlighted: string;
    headingHighlightedColor: string;
  }[];
}

export const ScResellerBringVendorsSection = (
  data: ScResellerBringVendorsSectionProps
) => {
  return (
    <section
      id="sc-reseller-bring-vendors"
      className="relative overflow-hidden"
      aria-labelledby="bring-vendors-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Layout: copy left, cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Heading + copy + CTA */}
          <div className="lg:col-span-5">
            <h2
              id="bring-vendors-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900"
            >
              {data.heading}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-600">
              {data.description}
            </p>

            <div className="mt-6">
              <Button
                asChild
                size="lg"
                className="rounded-[6px] py-6 bg-[#1E1C26] hover:bg-[#1E1C26] hover:font-bold border border-white/10 w-56 transition-all delay-100 hover:shadow-[0_8px_0_#ef4444] hover:border-r-[2px] hover:border-[#ef4444] hover:border-l-0 hover:border-t-0 cursor-pointer"
              >
                <a href={data.cta.link}>{data.cta.label}</a>
              </Button>
            </div>
          </div>

          {/* Right: Cards grid with soft glow */}
          <div className="relative lg:col-span-7">
            {/* Soft radial glow behind cards (desktop only) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden lg:block"
              style={{
                background:
                  "radial-gradient(600px 400px at 55% 60%, #3b82f642, rgba(59,130,246,0) 60%)",
                filter: "blur(0.5px)",
              }}
            />

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {data.vendorCards.map((card, i) => (
                <article
                  key={`${card.heading}-${i}`}
                  className="rounded-xl border border-black/5 bg-white shadow-[0px_3px_2.9px_0px_#0000001A] px-5 py-5 sm:px-6 sm:py-6"
                >
                  {/* Card Heading with highlighted second line */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug">
                    {card.heading}
                    <br />
                    <span
                      className="font-semibold"
                      style={{ color: card.headingHighlightedColor }}
                    >
                      {card.headingHighlighted}
                    </span>
                  </h3>

                  <p className="mt-3  text-gray-600">
                    {card.cardDescription}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
