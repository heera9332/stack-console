export interface ScTurnPartnersIntoGrowthEngineSectionProps {
  __typename: "PageBuilderSectionsTurnPartnersIntoGrowthEngineLayout";
  descriptions: string;
  heading: string;
  highlightedWords: {
    __typename: string;
    color: string;
    word: string;
  }[];
  sectionImage: {
    node: {
      altText: string;
      link: string;
    };
  };
}

export const ScTurnPartnersIntoGrowthEngineSection = (
  data: ScTurnPartnersIntoGrowthEngineSectionProps
) => {
  // Build a quick lookup for highlighted words → color (case-insensitive)
  const highlightMap = new Map<string, string>(
    data.highlightedWords.map(h => [h.word.toLowerCase(), h.color])
  );

  // Tokenize heading while preserving spaces so we can color words inline
  const tokens = data.heading.split(/(\s+)/); // keeps spaces as tokens

  const renderHeading = () => (
    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight tracking-[-0.02em] text-gray-900">
      {tokens.map((tk, i) => {
        // if token is whitespace, render as is
        if (/^\s+$/.test(tk)) return <span key={i}>{tk}</span>;

        // strip trailing punctuation for matching, keep original for render
        const core = tk.replace(/[.,!?;:()"'`]+$/g, "");
        const color = highlightMap.get(core.toLowerCase());
        if (color) {
          return (
            <span key={i} style={{ color }} className="inline">
              {tk}
            </span>
          );
        }
        return <span key={i}>{tk}</span>;
      })}
    </h2>
  );

  return (
    <section
      id="sc-turn-partners-into-growth-engine"
      className="relative overflow-hidden"
      aria-labelledby="tpige-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center space-x-reverse">
          {/* Left: Heading + description */}
          <div className="lg:col-span-6 order-2 md:order-1">
            <div id="tpige-heading">{renderHeading()}</div>

            <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-2xl">
              {data.descriptions}
            </p>
          </div>

          {/* Right: Image with concentric ring backdrop */}
          <div className="lg:col-span-6  order-1 md:order-2">
            <div className="relative mx-auto w-full max-w-[680px]">
              {/* Concentric rings (SVG ensures crisp rendering & perf) */}
              <svg
                className="absolute inset-0 m-auto w-[92%] h-[92%] -z-10"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.10)" />
                    <stop offset="60%" stopColor="rgba(59,130,246,0.05)" />
                    <stop offset="100%" stopColor="rgba(59,130,246,0.0)" />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="49" fill="url(#ringGlow)" />
                <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="0.4" />
                <circle cx="50" cy="50" r="34" fill="none" stroke="rgba(59,130,246,0.18)" strokeWidth="0.35" />
                <circle cx="50" cy="50" r="24" fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="0.3" />
              </svg>

              {/* Hero image */}
              <img
                src={data.sectionImage.node.link}
                alt={data.sectionImage.node.altText}
                className="block w-full h-auto select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
