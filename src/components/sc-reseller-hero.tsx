export interface ScResellerHeroSectionProps {
  __typename: "PageBuilderSectionsResellerHeroLayout";
  description: string;
  videoUrl: string;
  headingHighlighted: string;
  heading: string;
  videoPoster: {
    node: {
      altText: string;
      link: string;
    };
  };
  cta: {
    __typename: string;
    label: string;
    link: string;
  };
}

export const ScResellerHeroSection = (data: ScResellerHeroSectionProps) => {
  return (
    <section id="sc-reseller-hero">
      <h2>{data.heading}</h2>
      <span>{data.headingHighlighted}</span>
      <p>{data.description}</p>

      <video
        controls
        poster={data.videoPoster.node.link}
        style={{ maxWidth: "100%" }}
      >
        <source src={data.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <a href={data.cta.link}>{data.cta.label}</a>
    </section>
  );
};
