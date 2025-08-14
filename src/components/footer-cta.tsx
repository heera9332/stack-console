// components/CTASection.tsx
"use client";

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative min-h-[296px] w-full flex justify-center">
      <div className="max-w-6xl mx-auto text-center text-white rounded-lg bg-[#2B59FF] px-20 py-16 sm:px-8 absolute top-[96px]">
        <div className="cta-content px-28">
          <h2 className="text-3xl sm:text-[56px] font-bold">
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
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            Talk to Our Team
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-none text-white hover:text-white !bg-transparent sha dow-none"
          >
            <img className="svg-white"  src={'/assets/svg/play-circle.svg'} alt="try demo"/>
            Try the Live Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
