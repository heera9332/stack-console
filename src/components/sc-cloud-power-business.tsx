import Counter from "./sc-counter";

const sectionData = {
  heading: "Turning Big💡 Ideas Into Cloud Power",
  description1:
    "Deliver, manage, and scale cloud services under your own brand with Stack Console — the white-label cloud management and billing platform for CloudStack, OpenStack, Proxmox, OpenShift, VMware, Virtuozzo, and more.",
  description2:
    "Trusted by providers in 25+ countries, we combine automation, real-time insights, and multi-orchestrator support to help you grow faster and smarter.",
  author: "— Sarah Kim, CTO – Tech Innovators",
  stats: [
    { suffix: "+", value: 25, label: "Countries Served" },
    { suffix: "+", value: 45, label: "Availability Zones" },
    { suffix: "k+", value: 20, label: "Managed Instances" },
  ],
  image: "/assets/website/home/sun.png",
};

export default function ScTurningIdeasCloudPowerBusiness() {
  return (
    <section id="sc-cloud-power-business" data-aos="fade-up" className="section px-4 md:px-12 py-12 md:py-16 bg-light">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left visual */}
        <div className="flex justify-center lg:justify-start">
          <ConcentricSun
            className="w-[280px] sm:w-[340px] md:w-[420px] lg:w-[480px] h-auto text-yellow"
            src={sectionData.image}
          />
        </div>

        {/* Right copy */}
        <div>
          <h2 className="text-[32px] md:text-[56px] leading-tight font-semibold text-foreground">
            {sectionData.heading.split("💡")[0]}
            <span role="img" aria-label="bulb">
              💡
            </span>
            <span className="text-primary">
              {sectionData.heading.split("💡")[1].split(" ")[1]}
            </span>{" "}
            {sectionData.heading.split("💡")[1].split(" ").slice(2).join(" ")}
          </h2>

          <p className="mt-6 text-body1 text-muted-foreground">
            {sectionData.description1}
          </p>

          <p className="mt-6 text-body1 text-muted-foreground">
            {sectionData.description2}
          </p>

          {/* KPIs */}
          <div className="mt-10 grid grid-cols-3 gap-6 sm:gap-8">
            {sectionData.stats.map((stat, idx) => (
              <Stat key={idx} value={stat.value} label={stat.label} suffix={stat.suffix}/>
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
}: {
  value: number;
  label: string;
  suffix: string;
}) {
  return (
    <div className="text-center sm:text-left">
      <div className="text-[40px] md:text-[64px] leading-none font-extrabold text-primary">
        <Counter to={value} suffix={suffix} />
      </div>
      <div className="mt-2 text-body2 text-muted-foreground">{label}</div>
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
