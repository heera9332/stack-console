import Image from "next/image";
import clsx from "clsx";


interface ScTrustedCloudInnovatorsProps {
  heading: string;
  headingPrefix: string;
  headingSufix: string;
  brandLogos: {
    node: {
      altText: string;
      link: string;
    }[];
  };
}

export default function ScTrustedCloudInnovators(
  data: ScTrustedCloudInnovatorsProps
) {
  console.log("cloud innovators data > ", data);
  const lanes = splitIntoLanes(data.brandLogos, 2);

  return (
    <section
      data-aos="fade-up"
      className="section bg-primary text-primary-foreground mx-auto flex justify-center flex-col items-center bg-light overflow-hidden"
    >
      <div className="w-full max-w-7xl pt-10 flex flex-col items-cener justify-center">
        {/* Heading */}
        <h2 className="text-center leading-tight text-[20px] md:text-[18px] opacity-90 px-4 sm:px-6 lg:px-8 w-full">
          {data.headingPrefix}
          <span className="font-bold opacity-100">{data.heading}</span>{" "}
          {data.headingSufix}
        </h2>
        <p className="sr-only px-4 sm:px-6 lg:px-8">
          {data.headingPrefix} {data.heading} {data.headingSufix}
        </p>

        {/* Mobile/Tablet: two vertical lanes (stacked), infinitely scrolling */}
        <div className="mt-10 md:mt-12 space-y-4 lg:hidden relative pb-10">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-primary to-transparent" />

          <Lane items={lanes[0]} duration={12} />
          <Lane items={lanes[1]} duration={14} reverse />
        </div>

        {/* Desktop: single marquee row */}
        <div className="hidden lg:block mt-12 relative">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent" />
        </div>
      </div>
      <div className="pb-10 hidden lg:block">
        <Lane items={data.brandLogos} duration={10} />
      </div>
    </section>
  );
}

/** Split logos evenly across N lanes */
function splitIntoLanes<T>(arr: T[], lanes: number) {
  const out: T[][] = Array.from({ length: lanes }, () => []);
  arr.forEach((item, i) => out[i % lanes].push(item));
  return out;
}

interface LaneProps {
  items: {
    node: {
      altText: string;
      link: string;
    };
  };
  reverse?: boolean;
  duration: number;
}

/** A scrolling lane (horizontal marquee) */
function Lane({ items, reverse, duration = 30 }: LaneProps) {
  // Duplicate track for seamless loop
  const track = [...items, ...items];

  return (
    <div
      className="overflow-hidden"
      style={{ ["--marquee-duration" as any]: `${duration}s` }}
    >
      <ul
        className={clsx(
          "marquee marquee-pause flex gap-20 items-center",
          reverse && "marquee-reverse"
        )}
      >
        {track.map((logo, idx) => (
          <li
            key={`${logo.name}-${idx}`}
            className="shrink-0 opacity-80 hover:opacity-100 transition-opacity"
          >
            <Logo {...logo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

interface LaneProps {
  logo: { node: { altText: string; link: string } };
  makeWhite?: boolean;
}

/** Single logo cell */
function Logo(data: LaneProps) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={data.logo.node.link}
        alt={data.logo.node.altText || ""}
        width={260}
        height={100}
        className={clsx(
          "h-12 lg:h-10 w-auto object-contain",
          data.makeWhite && "invert brightness-0 saturate-100"
        )}
        priority
      />
    </div>
  );
}
