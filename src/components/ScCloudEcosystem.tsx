// src/sections/ScCloudEcosystem.tsx
"use client";

import Image from "next/image";

/** --------- STATIC DATA (swap with API later) --------- */
const cloudData = {
  titleTop: "Seamlessly Integrated with Your Cloud Ecosystem",

  subtitle:
    "No plugins. No hacks. Just native, deep integrations with your core cloud infrastructure.",
  items: [
    { name: "Apache CloudStack", src: "/assets/website/home/eco-system-1.svg" },
    {
      name: "OpenStack / RedHat OpenStack",
      src: "/assets/website/home/eco-system-9.svg",
    },

    { name: "OpenNebula", src: "/assets/website/home/eco-system-6.svg" },
    { name: "Ceph", src: "/assets/website/home/eco-system-10.svg" },
    { name: "Veeam", src: "/assets/website/home/eco-system-7.svg" },

    { name: "Virtuozzo", src: "/assets/website/home/eco-system-8.svg" },
    { name: "VMware", src: "/assets/website/home/eco-system-11.svg" },
    { name: "HostedAI", src: "/assets/website/home/eco-system-5.svg" },

    { name: "OpenShift", src: "/assets/website/home/eco-system-3.svg" },
    { name: "Google Cloud Platform ", src: "/assets/website/home/eco-system-4.svg" },
    {
      name: "Coming Soon: AWS & Azure",
      src: "/assets/website/home/eco-system-13.svg",
    },

    { name: "Proxmox", src: "/assets/website/home/eco-system-2.svg" },
    { name: "Cloudian", src: "/assets/website/home/eco-system-12.svg" },
  ],
};

/** --------- SECTION --------- */
export default function ScCloudEcosystem() {
  // FIXED PATTERN: 5, 4, 3
  const pattern = [5, 4, 3, 2];
  let start = 0;
  const rows: (typeof cloudData.items)[] = [];
  pattern.forEach((count) => {
    rows.push(cloudData.items.slice(start, start + count));
    start += count;
  });

  // margin offsets for stair-step effect (row 1, 2, 3)
  const offsets = ["ml-0", "ml-8 md:ml-16", "ml-16 md:ml-32"];

  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Heading */}
        <header className="relative text-center flex flex-col items-center justify-center">
          <h2 className="text-[32px] leading-tight font-semibold md:text-[44px] text-left md:text-center max-w-3xl">
            {cloudData.titleTop}
          </h2>
          <p className="my-3 text-body2 md:text-body1 text-muted-foreground/80 text-left md:text-center">
            {cloudData.subtitle}
          </p>
          {/* Decorative dotted connectors (top) */}
          <TopDottedWires className="w-full mx-auto absolute top-24 hidden md:block" />
        </header>

        {/* Radar rings background */}
        <div className="relative mt-10 md:mt-14 min-h-[720px] hidden md:block">
          <img
            src={"/assets/images/radar.png"}
            className="absolute w-full mt-18"
          />

          <svg
            className="w-full absolute top-[10%]"
            width="1200"
            height="1"
            viewBox="0 0 1200 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_2445_2765"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1200"
              height="1"
            >
              <rect
                width="1200"
                height="1"
                transform="matrix(1 0 0 -1 0 1)"
                fill="url(#paint0_linear_2445_2765)"
              />
            </mask>
            <g mask="url(#mask0_2445_2765)"></g>
            <rect
              width="1200"
              height="1"
              transform="matrix(1 0 0 -1 0 1)"
              fill="url(#paint1_linear_2445_2765)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2445_2765"
                x1="0"
                y1="0.5"
                x2="1200"
                y2="0.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="0.5" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2445_2765"
                x1="0"
                y1="0.5"
                x2="1200"
                y2="0.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DF2D2E" />
                <stop offset="0.5" stopColor="#F1D530" />
                <stop offset="1" stopColor="#3C68B9" />
              </linearGradient>
            </defs>
          </svg>

          {/* Rows of integrations */}
          <div className="absolute w-full z-10 space-y-10 md:space-y-12 lg:space-y-16 mt-[8%] mb-20 pt-4 px-10">
            {rows.map((row, i) => (
              <div
                key={i}
                className={`flex justify-center gap-6 ${offsets[i] ?? ""}`}
              >
                {row.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center text-center min-w-64"
                  >
                    <div className="rounded-xl p-2 bg-white/5 border border-white/10">
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm text-gray-300">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* only mobile */}

        <div className="mt-4 block md:hidden">
          {cloudData.items.map((item, idx: number) => {
            return <Pill item={item} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
}

/** dotted top wires */
function TopDottedWires({ className = "" }: { className?: string }) {
  return (
    <svg
      width="994"
      height="192"
      viewBox="0 0 994 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M200.403 191V140C200.403 135.582 203.992 132 208.419 132H472.952C477.379 132 480.968 128.418 480.968 124V97C480.968 92.582 477.379 89 472.952 89H9.51946C5.09255 89 1.30489 90.4183 1.30489 86L1.30469 1.5"
        stroke="url(#paint0_linear_2445_2634)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1.5 6"
      />
      <path
        d="M793.597 191V140C793.597 135.582 790.008 132 785.581 132H521.048C516.621 132 513.032 128.418 513.032 124V97C513.032 92.582 516.621 89 521.048 89H984.481C988.907 89 992.695 90.4183 992.695 86L992.695 1.5"
        stroke="url(#paint1_linear_2445_2634)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1.5 6"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2445_2634"
          x1="1.30469"
          y1="96.25"
          x2="480.968"
          y2="96.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DF2D2E" />
          <stop offset="0.5" stopColor="#F1D530" />
          <stop offset="1" stopColor="#3C68B9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2445_2634"
          x1="992.695"
          y1="96.25"
          x2="513.032"
          y2="96.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DF2D2E" />
          <stop offset="0.5" stopColor="#F1D530" />
          <stop offset="1" stopColor="#3C68B9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const Pill = ({ item }: { item: { src: string; name: string } }) => {
  return (
    <div
      className="
      mb-4 rounded-md p-[1px]
      bg-[linear-gradient(150.58deg,#E52C2C_-2.27%,#F3D431_41.79%,#386CC5_82.09%)]
      overflow-hidden
    "
    >
      <div className="flex items-center gap-2 rounded-[inherit] p-2 bg-foreground">
        <Image
          src={item.src}
          alt={item.name}
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
        />
        <p>{item.name}</p>
      </div>
    </div>
  );
};
