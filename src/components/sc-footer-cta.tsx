// components/CTASection.tsx

import { Button } from "@/components/ui/button";
import * as React from "react";

interface Props {
  __typename: "PageBuilderSectionsBeforefooterctaLayout";
  heading: string;
  description: string;
  talkToTeamLabel: string;
  talkToTeamLink?: string;
  tryALiveDemo: string;
  // optional: if later your API adds a link for the demo
  tryALiveDemoLink?: string;
}

export default function ScCta(data: Props) {
  const heading =
    (data.heading || "Ready to experience the power of Stack Console?").trim();

  const description = (data.description || "")
    .replace(/\r\n/g, "\n")
    .trim();

  const talkLabel = (data.talkToTeamLabel || "Talk to Our Team").trim();
  const talkHref = data.talkToTeamLink || "#";

  const demoLabel = (data.tryALiveDemo || "Try the Live Demo").trim();
  const demoHref = data.tryALiveDemoLink || "/demo";

  return (
    <section
      id="sc-cta"
      className="relative min-h-[296px] w-full flex justify-center bg-light"
    >
      <div className="max-w-6xl mx-4 md:mx-auto text-center text-white rounded-lg bg-[#2B59FF] md:px-20 py-8 md:py-16 absolute top-[72px] md:top-[96px]">
        <div className="cta-content px-4 md:px-16">
          <h2 className="md:text-[56px] text-[42px] font-bold leading-[100%] md:leading-[68px]">
            {heading}
          </h2>

          {description && (
            <p className="mt-4 text-white whitespace-pre-line">{description}</p>
          )}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="text-[18px] bg-foreground text-background hover:bg-foreground/90 px-10 w-56 py-6 transition-all delay-100 hover:shadow-[0_8px_0_#ef4444] hover:border-r-[2px] hover:border-[#ef4444] hover:border-l-0 hover:border-t-0"
          >
            <a href={talkHref} aria-label={talkLabel}>
              {talkLabel}
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-[18px] border-none text-white hover:text-white !bg-transparent shadow-none px-10 w-56 py-6"
          >
            <a href={demoHref} aria-label={demoLabel}>
              <img
                className="svg-white"
                src="/assets/svg/play-circle.svg"
                alt="play"
              />
              {demoLabel}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
