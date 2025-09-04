import { Button } from "./ui/button";

export interface ScPowerYourNetworkCtaSectionProps {
  __typename: "PageBuilderSectionsPowerYourNetworkCtaLayout";
  description: string;
  heading: string;
  headingHighlighted: string;
  cta: {
    __typename: string;
    label: string;
    link: string;
  };
  backgroundImage: {
    node: {
      altText: string;
      link: string;
    };
  };
  backgroundImageMobile: {
    node: {
      altText: string;
      link: string;
    };
  };
}

export const ScPowerYourNetworkCtaSection = (
  data: ScPowerYourNetworkCtaSectionProps
) => {
  return (
    <section
      id="sc-power-your-network-cta"
      className="relative overflow-hidden bg-white"
    >
      {/* Background image fixed to bottom */}
      {data.backgroundImage?.node?.link && (
        <img
          src={data.backgroundImage.node.link}
          alt={data.backgroundImage.node.altText}
          className="hidden md:block absolute bottom-0 left-0 right-0 md:h-64 xl:h-72 w-full object-cover"
        />
      )}
      
      {data.backgroundImage?.node?.link && (
        <img
          src={data.backgroundImageMobile.node.link}
          alt={data.backgroundImageMobile.node.altText}
          className="block md:hidden absolute bottom-0 left-0 right-0 h-32 w-full object-cover"
        />
      )}

      <div className="container relative mx-auto px-4 md:px-6 text-center py-18 md:py-20">
        {/* Heading */}
        <h2 className="md:text-[64px] font-semibold text-gray-900 text-[36px] leading-[100%]">
          {data.heading},{" "}
          <br />
          <span className="inline-block bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 bg-clip-text text-transparent pt-4">
            {data.headingHighlighted}
          </span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          {data.description}
        </p>

        {/* CTA */}
        <div className="mt-4 md:mt-8 h-12 md:h-20">
          <Button
            asChild
            size="lg"
            className="rounded-[6px] py-6 bg-[#1E1C26] hover:bg-[#1E1C26] hover:font-bold border border-white/10 w-56 transition-all delay-100 hover:shadow-[0_8px_0_#ef4444] hover:border-r-[2px] hover:border-[#ef4444] hover:border-l-0 hover:border-t-0 cursor-pointer"
          >
            <a href={data.cta.link}>{data.cta.label}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
