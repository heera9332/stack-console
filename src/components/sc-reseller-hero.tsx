import { Button } from "./ui/button";

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
    <section
      id="sc-reseller-hero"
      className="relative overflow-hidden pb-12 md:pb-20"
      aria-labelledby="reseller-hero-heading"
      style={{
        // subtle grid background
        backgroundImage:
          "linear-gradient(to right, rgba(17,24,39,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.06) 1px, transparent 1px)",
        backgroundSize: "42px 56px",
        backgroundPosition: "center top",
      }}
    >

      {/* Top overlay */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full hidden md:block md:h-24 "
        style={{
          background:
            "linear-gradient(to bottom, white 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Bottom overlay */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-24 sm:h-32 lg:h-40"
        style={{
          background:
            "linear-gradient(to top, white 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-14">
        {/* Heading */}
        <h1
          id="reseller-hero-heading"
          className="text-center font-semibold text-gray-900 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-5xl mx-auto px-10 md:px-0"
        >
          <span
            style={{
              backgroundImage:
                "linear-gradient(176.58deg, rgb(229, 44, 44) 28.73%, rgb(243, 212, 49) 85.79%, rgb(56, 108, 197) 110%)",
            }}
            className="bg-clip-text text-transparent ">
            {data.headingHighlighted}
          </span>
          <span className="">{" "} {data.heading}</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 md:mt-5 max-w-3xl text-center text-sm sm:text-base md:text-lg text-gray-600">
          {data.description}
        </p>

        {/* CTA */}
        <div className="mt-6 md:mt-7 flex justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-[6px] py-6 bg-[#1E1C26] hover:bg-[#1E1C26] hover:font-bold border border-white/10 w-56 transition-all delay-100 hover:shadow-[0_8px_0_#ef4444] hover:border-r-[2px] hover:border-[#ef4444] hover:border-l-0 hover:border-t-0 cursor-pointer"
          >
            <a href={data.cta.link}>{data.cta.label}</a>
          </Button>
        </div>

        {/* Video Panel */}
        <div className="relative mt-10 md:mt-14">
          {/* Soft right-side glow blob (matches figma) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 md:-right-16 bottom-6 md:bottom-10 h-52 w-72 md:h-64 md:w-96 blur-3xl rounded-full"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0) 70%)",
            }}
          />

          {/* Rounded container with lilac glassy gradient */}
          <div className="mx-auto max-w-5xl">
            <div
              className="relative rounded-xl md:rounded-3xl  overflow-hidden z-10"
              style={{
                background:
                  "radial-gradient(90% 100% at 20% 80%, rgba(177,144,255,0.25) 0%, rgba(177,144,255,0.10) 40%, rgba(177,144,255,0.06) 70%, rgba(177,144,255,0.04) 100%), radial-gradient(70% 70% at 70% 10%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0.15) 100%)",
              }}
            >
              {/* Maintain aspect ratio even if video not loaded */}
              <div className="aspect-[16/9]">
                <video
                  controls
                  preload="none"
                  poster={data.videoPoster.node.link}
                  className="h-full w-full object-cover"
                >
                  <source src={data.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        <svg className="hidden md:block absolute bottom-0 left-0 z-0" width="469" height="399" viewBox="0 0 469 399" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.1" filter="url(#filter0_f_4717_22803)">
            <rect x="-75" y="64" width="480" height="270.5" rx="135.25" fill="#EEBC30" />
          </g>
          <defs>
            <filter id="filter0_f_4717_22803" x="-139" y="0" width="608" height="398.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="32" result="effect1_foregroundBlur_4717_22803" />
            </filter>
          </defs>
        </svg>

        <svg className="hidden md:block bottom-32 right-0 absolute" width="597" height="433" viewBox="0 0 597 433" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.2" filter="url(#filter0_f_2314_317)">
            <rect x="64" y="64" width="541" height="305" rx="152.5" fill="url(#paint0_linear_2314_317)" />
          </g>
          <defs>
            <filter id="filter0_f_2314_317" x="0" y="0" width="669" height="433" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="32" result="effect1_foregroundBlur_2314_317" />
            </filter>
            <linearGradient id="paint0_linear_2314_317" x1="64" y1="216.5" x2="605" y2="216.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#70CFFF" />
              <stop offset="1" stop-color="#5A63E0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Bottom spacing to breathe on mobile/desktop */}
        <div className="h-10 md:h-14" />
      </div>
    </section>
  );
};
