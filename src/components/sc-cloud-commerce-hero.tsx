import "./sc-cloud-commerce.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const data = {
  kicker: "Build a legacy",
  title1: "Your Complete",
  title2Emoji: "/assets/images/cloud-img.png",
  title2: "Cloud Commerce Platform",
  description:
    "Stack Console unifies provisioning, billing, reseller management, analytics, and AI automation in a fully white-label, multi-orchestrator solution — so you can run and grow your cloud business from a single pane of glass.",
  ctas: {
    primary: { label: "Request a demo", href: "#demo" },
    secondary: { label: "Try live demo", href: "#tour" },
  },
};

export default function ScCloudCommerceHero() {
  return (
    <section
      id="sc-cloud-commerce-hero"
      className="
        relative overflow-hidden
        bg-gradient-to-b from-[#0b0d0f] to-[#12141d] text-white
        px-4 md:px-6 lg:px-8 py-8
        flex flex-col items-center justify-center bg-dark
      "
    >
      <div className="gradient-overlay"></div>

      <div
        className="absolute -bottom-100 md:-bottom-64 left-1/2 -translate-x-1/2 w-[950px] h-[550px] 
      bg-[radial-gradient(ellipse_at_center,rgba(80,101,217,0.75)_0%,transparent_70%)]"
      ></div>

      {/* Text + spotlight */}
      <div className="max-w-7xl mx-auto text-left grid md:grid-cols-2 relative z-10">
        <div className="col-span-2 md:col-span-1 p-4 md:p-10">
          <div className="my-8">
            {/* Title 1 */}
            <h1 className="font-semibold leading-tight text-[36px] md:text-[64px] text-center md:text-left">
              <span className="" data-text={data.title1}>
                {data.title1}
              </span>
            </h1>

            {/* Title 2 */}
            <p className="mt-2 text-[32px] md:text-[56px] font-extrabold leading-tight text-center md:text-left">
              <span className="relative" data-text={data.title2}>
                <span
                  className="
                  bg-clip-text text-transparent
                  [background-image:linear-gradient(90deg,#ff7a59,#ffd400,#78e08f,#3ba1ff)]
                "
                >
                  {data.title2}
                  <Image
                    src={data.title2Emoji}
                    alt="trophy"
                    width={512}
                    height={512}
                    className="h-10 md:h-18 w-10 md:w-18 object-cover inline-block pl-2"
                  />
                </span>
              </span>
            </p>

            <p className="mt-5 text-body2 md:text-body1 text-white/80 px-4 md:px-0 text-center md:text-left">
              {data.description}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center md:justify-start gap-4 flex-wrap">
            <Button
              asChild
              size="lg"
              className="rounded-[10px] py-6 bg-[#1E1C26] hover:bg-[#1E1C26] hover:font-bold border border-white/10 w-56 transition-all delay-100 hover:shadow-[0_8px_0_#ef4444] hover:border-r-[2px] hover:border-[#ef4444] hover:border-l-0 hover:border-t-0"
            >
              <a href={data.ctas.primary.href}>{data.ctas.primary.label}</a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="
              rounded-[10px] px-5
              bg-transparent hover:bg-transparent text-white hover:text-white hover:font-bold
              py-6 w-56 border-none
            "
            >
              <a
                href={data.ctas.secondary.href}
                className="inline-flex items-center gap-2"
              >
                <Image
                  width={56}
                  height={56}
                  className="svg-white w-12"
                  src={"/assets/svg/play-circle.svg"}
                  alt="try demo"
                />
                {data.ctas.secondary.label}
              </a>
            </Button>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1 p-4 md:p-10">
          <Image
            src={
              "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-hero-img.png"
            }
            alt="overview"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
}
