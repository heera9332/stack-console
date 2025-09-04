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
  return (
    <section id="sc-turn-partners-into-growth-engine">
      <h2>{data.heading}</h2>
      <p>{data.descriptions}</p>

      <div className="highlighted-words">
        {data.highlightedWords.map((hw, index) => (
          <span key={index} style={{ color: hw.color }}>
            {hw.word}{" "}
          </span>
        ))}
      </div>

      <img
        src={data.sectionImage.node.link}
        alt={data.sectionImage.node.altText}
      />
    </section>
  );
};
