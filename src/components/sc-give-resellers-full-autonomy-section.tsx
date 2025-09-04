export interface ScGiveResellersFullAutonomySectionProps {
  __typename: "PageBuilderSectionsGiveResellersFullAutonomyLayout";
  description: string;
  heading: string;
  resellerBenefits: {
    __typename: string;
    // if fotoer type is only image
    imageAlignment: string;
    heading: string;
    footerType: string; // onlyImage | onlyDescription | imageAndDescription
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

// helpers: robust normalization for mixed shapes (string | string[] | null)
const pickFirst = <T,>(v: T | T[] | null | undefined): T | undefined =>
  Array.isArray(v) ? v[0] : (v as T | undefined);

const normFooterType = (raw: string | string[]): "onlyImage" | "onlyDescription" | "imageAndDescription" => {
  const v = (pickFirst(raw) || "").toLowerCase().replace(/[^a-z]/g, "");
  if (v === "onlyimage") return "onlyImage";
  if (v === "onlydescription") return "onlyDescription";
  return "imageAndDescription";
};

const normImageAlign = (raw: string | string[]): "left" | "right" => {
  const v = (pickFirst(raw) || "").toLowerCase();
  return v === "left" ? "left" : "right";
};


export const ScGiveResellersFullAutonomySection = (
  data: ScGiveResellersFullAutonomySectionProps
) => {

  console.log("sc given > ", data)
  return (
    <section
      id="sc-give-resellers-full-autonomy"
      className="relative overflow-hidden bg-dark bg-[#12141D] min-h-screen  bg-[radial-gradient(circle_at_62%_0,_#514ed88a_0%,_rgb(11,12,23)_33%)]  md:bg-[radial-gradient(circle_at_top,#514ED8_0%,_#0B0C17_50%)]"
      aria-labelledby="grfa-heading"
    >

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 text-center">
        <h2
          id="grfa-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight md:text-center text-left mx-auto max-w-3xl md:px-8"
        >
          {data.heading}
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-white  text-left md:text-center">
          {data.description}
        </p>

        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {data.resellerBenefits.map((b, i) => (
            <BenefitCard key={`${b.heading}-${i}`} benefit={b} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SafeFooterList = ({
  content,
}: {
  content: ScGiveResellersFullAutonomySectionProps["resellerBenefits"][number]["cardInnerContent"];
}) => {
  const pts = Array.isArray(content.points) ? content.points : [];
  if (!content.heading && pts.length === 0) return null;

  return (
    <div className="w-full">
      {content.heading && (
        <div className="text-white font-medium text-sm sm:text-base">
          {content.heading}
        </div>
      )}
      {pts.length > 0 && (
        <ul className="mt-3 space-y-2">
          {pts.map((p, idx) => (
            <li key={`${p.point}-${idx}`} className="flex items-start gap-2 text-white/80 text-sm">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
              <span>{p.point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


const BenefitCard = ({
  benefit,
}: {
  benefit: ScGiveResellersFullAutonomySectionProps["resellerBenefits"][number];
}) => {
  const imageLeft =
    typeof benefit.imageAlignment === "string" &&
    benefit.imageAlignment.toLowerCase() === "left";


  const footerType = normFooterType(benefit.footerType as unknown as string | string[]);
  const imageAlign = normImageAlign(benefit.imageAlignment as unknown as string | string[]);
  const img = benefit.cardImage.node;

  return (
    <article
      className="rounded-2xl bg-[#3E4170] backdrop-blur-[1px] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] px-4 py-5 sm:px-6 sm:py-6 md:px-7 md:py-7 text-left text-white/90"
    >
      <div className="flex flex-col h-full">
        <div className="text-white font-semibold text-lg sm:text-xl">
          {benefit.heading}
        </div>
        <p className="mt-2 text-sm sm:text-base text-white/75">
          {benefit.description}
        </p>

        {/* Footer zone */}
        <div className={`mt-5 sm:mt-6  rounded-2xl ${footerType === "onlyImage" ? "": "bg-[linear-gradient(180deg,#2D2F3E_34.57%,rgba(37,39,49,0.35)_100%)]"} `}  style={{boxShadow: footerType === "onlyImage" ? "none" : "inset 0px 1px 0px 0.5px #8EA7C0"}}>
          {footerType === "onlyImage" && (
            <div className={`w-full  px-4 py-2 sm:px-5 sm:py-5 flex items-center justify-${pickFirst(benefit.imageAlignment) === "Right" ? "end" : pickFirst(benefit.imageAlignment) === "Center" ? "center" : "start"}`}>
              <img
                src={img.link}
                alt={img.altText}
                className="max-h-40 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}

          {footerType === "onlyDescription" && (
            <div className="w-full rounded-2xl  px-4 py-4 sm:px-5 sm:py-5">
              <SafeFooterList content={benefit.cardInnerContent} />
            </div>
          )}

          {footerType === "imageAndDescription" && (
            <div className="w-full rounded-2xl px-4 py-4 sm:px-5 sm:py-5 grid grid-cols-1 gap-4 md:grid-cols-12">
              {imageAlign === "left" ? (
                <>
                  <div className="md:col-span-6 flex items-center justify-center">
                    <img
                      src={img.link}
                      alt={img.altText}
                      className="max-h-40 w-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="md:col-span-6">
                    <SafeFooterList content={benefit.cardInnerContent} />
                  </div>
                </>
              ) : (
                <>
                  <div className="md:col-span-7">
                    <SafeFooterList content={benefit.cardInnerContent} />
                  </div>
                  <div className="md:col-span-5 flex items-center justify-center">
                    <img
                      src={img.link}
                      alt={img.altText}
                      className="max-h-40 w-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

const FooterList = ({
  content,
}: {
  content: ScGiveResellersFullAutonomySectionProps["resellerBenefits"][number]["cardInnerContent"];
}) => {
  return (
    <div className="w-full">
      <div className="text-white font-medium text-sm sm:text-base">
        {content.heading}
      </div>
      <ul className="mt-3 space-y-2">
        {content.points.map((p, idx) => (
          <li
            key={`${p.point}-${idx}`}
            className="flex items-start gap-2 text-white/80 text-sm"
          >
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
            <span>{p.point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};


