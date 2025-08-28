import Counter from "./sc-counter";

function splitHeading(heading: string) {
  // Regex to detect any emoji / symbol (covers most cases)
  const regex = /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/u;
  const match = heading.match(regex);

  if (!match) return { before: heading, icon: "", after: "" };

  const idx = match.index!;
  return {
    before: heading.slice(0, idx),
    icon: match[0],
    after: heading.slice(idx + match[0].length),
  };
}

export default function ScTurningIdeasCloudPowerBusiness(data: Props) {
  const { before, icon, after } = splitHeading(data.heading);

  return (
    <section
      id="sc-cloud-power-business"
      data-aos="fade-up"
      className="section px-4 md:px-12 py-12 md:py-16 bg-light"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left visual */}
        <div className="flex justify-center lg:justify-start">
          <ConcentricSun
            className="w-[280px] sm:w-[340px] md:w-[420px] lg:w-[480px] h-auto text-yellow"
            src={data.sectionImage.node.link}
          />
        </div>

        {/* Right copy */}
        <div>
          <h2 className="text-[32px] md:text-[56px] leading-tight font-semibold text-foreground">
            {before}
            <span role="img" aria-label="icon">
              {icon}
            </span>{" "}
            <span className="text-primary">{after.split(" ")[0]}</span>{" "}
            {after.split(" ").slice(1).join(" ")}
          </h2>

          <p className="mt-6 text-body1 text-muted-foreground">
            {data.description1}
          </p>

          <p className="mt-6 text-body1 text-muted-foreground">
            {data.description2}
          </p>

          {/* KPIs */}
          <div className="mt-10 grid grid-cols-3 gap-6 sm:gap-8">
            {data.stats.map((stat, idx) => (
              <Stat
                key={idx}
                value={stat.value}
                label={stat.label}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- UI bits ---------- */
function Stat({
  value,
  label,
  suffix,
  prefix,
}: {
  value: number;
  label: string;
  suffix: string;
  prefix?: string;
}) {
  return (
    <div className="text-center sm:text-left">
      {" "}
      <div className="text-[40px] md:text-[64px] leading-none font-extrabold text-primary">
        
        <Counter prefix={prefix || ""} to={value} suffix={suffix} />{" "}
      </div>{" "}
      <div className="mt-2 text-body2 text-muted-foreground">{label}</div>{" "}
    </div>
  );
}

function ConcentricSun({
  className = "",
  src,
}: {
  className?: string;
  src: string;
}) {
  return <img alt="" src={src} className={className} />;
}
