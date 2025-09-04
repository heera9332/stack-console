export interface ScGiveResellersFullAutonomySectionProps {
  __typename: "PageBuilderSectionsGiveResellersFullAutonomyLayout";
  description: string;
  heading: string;
  resellerBenefits: {
    __typename: string;
    imageAlignment: string;
    heading: string;
    footerType: string;
    description: string;
    cardImage: {
      node: {
        altText: string;
        link: string;
      };
    };
    cardInnerContent: {
      __typename: string;
      heading: string;
      points: {
        __typename: string;
        point: string;
      }[];
    };
  }[];
}

export const ScGiveResellersFullAutonomySection = (
  data: ScGiveResellersFullAutonomySectionProps
) => {

  return (
    <section id="sc-give-resellers-full-autonomy">
      <h2>{data.heading}</h2>
      <p>{data.description}</p>

      <div className="reseller-benefits">
        
      </div>
    </section>
  );
};
