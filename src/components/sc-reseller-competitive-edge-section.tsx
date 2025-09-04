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
    <section id="sc-reseller-competitive-edge">
      <h2>{data.heading}</h2>
      <span>{data.headingHighlighted}</span>
      <p>{data.description}</p>

      <div className="edge-cards">
        {data.edgeCards.map((card, index) => (
          <div key={index} className="edge-card">
            <img
              src={card.icon.node.link}
              alt={card.icon.node.altText}
              style={{ width: 50, height: 50 }}
            />
            <h3>{card.cardHeading}</h3>
            <p>{card.cardDescription}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
