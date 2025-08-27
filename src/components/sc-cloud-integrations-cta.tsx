// components/integrations/IntegrationCta.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  heading?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageUrl?: string;
  className?: string;
};

export default function ScCloudIntegrationsCta(props) {
  console.log("ScCloudIntegrationsCta props:", props);
  const data = {
    heading: "Didn’t find the integration you were looking for?",
    body: "Your business may rely on tools beyond what's listed here. At Stack Console, we continuously expand our ecosystem to match your needs. If you didn’t find the integration you’re looking for, let us know. Our team will work with you to plan and deliver it.",
    ctaLabel: "Book a Meeting",
    ctaHref: "#",
    imageUrl:
      "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/clound-integrations-hero.png", // put your image path here
    className: "",
  };

  return (
    <section
      className={[
        "relative overflow-hidden rounded-tl-[24px] rounded-tr-[24px] bg-light",
        "bg-[#E31D1A]",
        "px-6 pt-10 md:px-16 md:pt-16",
      ].join(" ")}
    >
      <div className="mx-auto flex flex-col md:flex-row max-w-7xl items-center">
        <div className="w-full md:w-6/10 pb-10">
          <h2 className="text-[36px] font-semibold leading-tight tracking-[-0.02em] md:text-[64px] text-white md:text-left text-center">
            Didn’t find the
            <span className="block"> integration you were </span> looking for?
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed/7 md:text-lg text-white md:text-left text-center">
            {data.body}
          </p>

          <div className="mt-8 flex  justify-center md:justify-start">
            <Button
              asChild
              className="rounded-md bg-black text-white hover:bg-black/90 px-8 w-64 md:w-50 py-2.5 h-12"
            >
              <a href={data.ctaHref} aria-label={data.ctaLabel}>
                {data.ctaLabel}
              </a>
            </Button>
          </div>
        </div>

        <div className="relative w-full md:w-4/10  text-cneter md:text-left">
          <div className="relative mx-auto w-full max-w-[520px] md:px-0 px-4 md:pr-16 pb-0">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={data.imageUrl}
                alt="Integrations illustration"
                width={1024}
                height={512}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
