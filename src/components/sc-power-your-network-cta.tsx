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
}

export const ScPowerYourNetworkCtaSection = (data: ScPowerYourNetworkCtaSectionProps) => {
  return (
    <section id="sc-power-your-network-cta">
      <h2>{data.heading}</h2>
      <span>{data.headingHighlighted}</span>
      <p>{data.description}</p>

      <a href={data.cta.link}>{data.cta.label}</a>

      <img 
        src={data.backgroundImage.node.link} 
        alt={data.backgroundImage.node.altText} 
      />
    </section>
  );
};
