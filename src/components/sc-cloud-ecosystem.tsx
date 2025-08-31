// src/sections/ScCloudEcosystem.tsx
import Image from "next/image";
import { MediaNode } from "@/types/utils";

interface Platform {
  fieldGroupName: string;
  name: string;
  logo: MediaNode;
}

interface Props {
  __typename: "PageBuilderSectionsIntegratedCloudEcosystemLayout";
  fieldGroupName: string;
  description: string; // subtitle
  heading: string;     // titleTop
  heading2: string;     // titleTop
  platforms: Platform[];
}

/** Fallback logos by platform name (when API link isn't a direct image URL) */
const FALLBACK_LOGOS: Record<string, string> = {
  "Apache CloudStack": "/assets/website/home/eco-system-1.svg",
  "Proxmox": "/assets/website/home/eco-system-2.svg",
  "OpenShift": "/assets/website/home/eco-system-3.svg",
  "Google Cloud Platform": "/assets/website/home/eco-system-4.svg",
  "HostedAI": "/assets/website/home/eco-system-5.svg",
  "OpenNebula": "/assets/website/home/eco-system-6.svg",
  "OpenStack / RedHat OpenStack": "/assets/website/home/eco-system-9.svg",
  "VMware": "/assets/website/home/eco-system-11.svg",
  "Ceph": "/assets/svg/brands/ceph.svg",
  "Veeam": "/assets/svg/brands/veeam.svg",
  "Virtuozzo": "/assets/svg/brands/virtuazzo.svg",
  "Coming Soon: AWS & Azure": "/assets/website/home/eco-system-13.svg",
};

/** Normalize API platforms into {name, src} with dedupe & fallbacks */
function normalizeItems(platforms: Platform[]) {
  const seen = new Set<string>();
  const items: { name: string; src: string; alt?: string }[] = [];

  for (const p of platforms) {
    const rawName = (p.name || "").trim();
    if (!rawName) continue;
    if (seen.has(rawName)) continue; // de-dupe by name
    seen.add(rawName);

    // Some API 'logo.node.link' might be a page URL; prefer image-like links
    const link = p.logo?.node?.link?.trim() || "";
    const looksLikeImage = /\.(svg|png|jpe?g|webp|gif|avif)(\?.*)?$/i.test(link);

    const fallbackKey =
      rawName.endsWith(" ") ? rawName.slice(0, -1) : rawName; // handle stray spaces
    const src =
      (looksLikeImage && link) ||
      FALLBACK_LOGOS[fallbackKey] ||
      "/assets/website/home/eco-system-13.svg"; // last-resort generic

    items.push({
      name: rawName,
      src,
      alt: p.logo?.node?.altText || rawName,
    });
  }

  return items;
}

/** Split items into rows using [5,4,3,2] pattern safely */
function splitRows<T>(items: T[], pattern = [5, 4, 3, 2]) {
  let start = 0;
  const rows: T[][] = [];
  for (const count of pattern) {
    if (start >= items.length) break;
    rows.push(items.slice(start, start + count));
    start += count;
  }
  // If items still remain (longer than pattern), continue with last count repeatedly
  const last = pattern[pattern.length - 1] || 3;
  while (start < items.length) {
    rows.push(items.slice(start, start + last));
    start += last;
  }
  return rows;
}

export default function ScCloudEcosystem(data: Props) {
  console.log(data)
  // Map API -> UI strings
  const titleTop = data.heading || "Seamlessly Integrated with Your ☁️ Cloud Ecosystem 💻";
  const subtitle =
    data.description ||
    "No plugins. No hacks. Just native, deep integrations with your core cloud infrastructure.";

  const items = normalizeItems(data.platforms || []);
  const rows = splitRows(items, [5, 4, 3, 2]);
  const offsets = ["ml-0", "ml-8 md:ml-16", "ml-16 md:ml-32"]; // keep stair-step feel

  return (
    <section
      id="sc-cloud-ecosystem"
      data-aos="fade-up"
      className="section relative overflow-hidden bg-foreground text-background bg-dark"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 md:pt-20">
        {/* Heading */}
        <header className="relative text-center flex flex-col items-center justify-center md:px-64">
          <h2 className="text-[32px] leading-tight font-semibold md:text-[44px] text-left md:text-center max-w-3xl">
            {data.heading}
          </h2><h2 className="text-[32px] leading-tight font-semibold md:text-[44px] text-left md:text-center max-w-3xl">
            {data.heading2}
          </h2>
          <p className="my-3 text-body2 md:text-body1 text-muted-foreground/80 text-left md:text-center">
            {subtitle}
          </p>
          {/* Decorative dotted connectors (top) */}
          <TopDottedWires className="w-full mx-auto absolute top-24 hidden md:block" />
        </header>

        {/* Radar rings background (desktop) */}
        <div className="relative mt-10 md:mt-14 min-h-[720px] hidden md:block">
          <img src={"/assets/images/radar.png"} className="absolute w-full mt-18" alt="" />

          <svg
            className="w-full absolute top-[10%]"
            width="1200"
            height="1"
            viewBox="0 0 1200 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <mask
              id="mask0_2445_2765"
              style={{ maskType: "alpha" as const }}
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
                key={`row-${i}`}
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
                        alt={item.alt || item.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <span className="mt-3 text-sm text-gray-300">{item.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: pills */}
        <div className="mt-4 block md:hidden">
          {items.map((item, idx) => (
            <Pill item={item} key={`pill-${idx}`} />
          ))}
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
