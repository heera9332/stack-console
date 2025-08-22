import Image from "next/image";

type HeroData = {
  title: string[];
  body: string;
  image: { src: string; alt: string; width?: number; height?: number };
};

const DATA: HeroData = {
  title: ["Infinite Cloud Power.", "One Seamless", "Console"],
  body: "Stack Console is built for cloud and hosting providers, data centers, MSPs, and telcos who need more than infrastructure management. It’s your end-to-end cloud commerce platform — delivering services directly to customers or through resellers, with everything from provisioning to payments in one place. Fully white-labelled and compatible with Apache CloudStack, OpenStack, VMware, Virtuozzo, OpenNebula, and more. Stack Console lets you launch services faster, automate operations, and scale revenue without adding complexity.",
  image: {
    // put this file in /public/images/stack-console-wheel.png
    src: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/sc-infinity-cloud-power.png",
    alt: "Cloud commerce ecosystem wheel",
    width: 1080,
    height: 1080,
  },
};

export default function ScInfityCloudPower(props: { data?: HeroData }) {
  const d = props.data ?? DATA;

  return (
    <section className="relative bg-[#12141D]">
      {/* subtle grid background */}
      <div className="rounded-tr-[44px] rounded-tl-[44px] -top-4 bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 [mask-image:linear-gradient(to_top,black,transparent)]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(99,102,241,.14) 0 1px, transparent 1px 64px),repeating-linear-gradient(90deg, rgba(99,102,241,.14) 0 1px, transparent 1px 64px)",
            backgroundSize: "64px 64px, 64px 64px",
          }}
        />

        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 ">
          <div className="grid items-center gap-12 md:gap-24 lg:grid-cols-2 ">
            {/* Left: Circular infographic */}
            <div className="relative">
              <div className="relative mx-auto aspect-square w-full max-w-2xl">
                <Image
                  src={d.image.src}
                  alt={d.image.alt}
                  fill
                  priority
                  sizes="(min-width:1024px) 560px, 100vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right: Text */}
            <div className="relative">
              <h1 className="text-[36px] md:text-[56px] font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                {d.title.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <p className="mt-6 text-base leading-7 text-gray-600">{d.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
