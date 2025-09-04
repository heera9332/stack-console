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
    <section id="sc-reseller-bring-vendors">
      <h2>{data.heading}</h2>
      <p>{data.description}</p>

      <a href={data.cta.link}>{data.cta.label}</a>

      <div className="vendor-cards">
        {data.vendorCards.map((card, index) => (
          <div key={index} className="vendor-card">
            <h3>
              {card.heading}{" "}
              <span style={{ color: card.headingHighlightedColor }}>
                {card.headingHighlighted}
              </span>
            </h3>
            <p>{card.cardDescription}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
