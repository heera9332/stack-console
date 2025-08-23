// components/CTASection.tsx
"use client";

import { Button } from "@/components/ui/button";

export default function ScCta() {
  return (
    <section id="sc-cta" className="relative min-h-[296px] w-full flex justify-center">
      <div className="max-w-6xl mx-4 md:mx-auto text-center text-white rounded-lg bg-[#2B59FF] md:px-20 py-8 md:py-16 absolute top-[72px] md:top-[96px]">
        <div className="cta-content px-4 md:px-16">
          <h2 className="md:text-[56px] text-[42px] font-bold leading-[100%] md:leading-[68px]">
          Ready to experience the power of Stack Console?
        </h2>

        <p className="mt-4 text-white">
          Stop reselling someone else’s cloud. Start building your own.
          Stack Console gives you the tools, flexibility, and speed to lead.
        </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="text-[18px] bg-foreground text-background hover:bg-foreground/90 px-10 w-56 py-6 w-56 transition-all delay-100 hover:shadow-[0_8px_0_#ef4444] hover:border-r-[2px] hover:border-[#ef4444] hover:border-l-0 hover:border-t-0" 
          >
            Talk to Our Team
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="text-[18px] border-none text-white hover:text-white !bg-transparent shadow-none px-10 w-56 py-6"
          >
            <img className="svg-white"  src={'/assets/svg/play-circle.svg'} alt="try demo"/>
            Try the Live Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
