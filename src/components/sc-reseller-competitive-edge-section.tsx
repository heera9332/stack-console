export interface ScResellerCompetitiveEdgeSectionProps {
  __typename: "PageBuilderSectionsResellerCompetitiveEdgeLayout";
  description: string;
  heading: string;
  headingHighlighted: string;
  edgeCards: {
    __typename: string;
    cardDescription: string;
    cardHeading: string;
    icon: {
      node: {
        altText: string;
        link: string;
      };
    };
  }[];
}

export const ScResellerCompetitiveEdgeSection = (
  data: ScResellerCompetitiveEdgeSectionProps
) => {
  return (
    <section
      id="sc-reseller-competitive-edge"
      className="relative bg-[#F1D530] bg-light"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12 text-center">
        {/* Heading */}
        <h2 className="mx-auto font-semibold text-gray-900 leading-tight md:text-5xl text-4xl">
          {data.heading}
          <br />
          <span className="block mt-2 text-[#E22B2B]">
            {data.headingHighlighted}
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-4xl text-sm sm:text-base md:text-lg text-gray-900/90">
          {data.description}
        </p>

        {/* Cards */}
        <div className="mt-6 grid gap-6 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {data.edgeCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border px-4 py-6 md:px-6 md:py-8 text-left"
            >
              {/* Icon (concentric circles) */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#376DC3] relative">
                <div className="absolute -inset-4 rounded-full bg-blue-600/10" /> 
                <img
                  src={card.icon.node.link}
                  alt={card.icon.node.altText}
                  className="h-7 w-7 object-contain relative svg-white"
                />
              </div>

              {/* Card heading */}
              <h3 className="text-center font-semibold text-gray-900 text-base sm:text-lg md:text-xl">
                {card.cardHeading}
              </h3>

              {/* Card description */}
              <p className="mt-3 text-center text-sm md:text-base text-gray-600">
                {card.cardDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
