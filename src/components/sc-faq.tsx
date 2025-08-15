// src/sections/FAQ.tsx
"use client";

import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // shadcn/radix accordion
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Can I avail of the service if I want some very simple and minimal design?",
    a: "Absolutely. Beautiful Homes Service offers personalised solutions for your interior design needs. Our designers talk to you in detail to understand your vision and help you design a space that is in sync.",
  },
  {
    q: "Do I have to get the entire house designed if I book this service?",
    a: "No. You can do one room or the whole house—completely up to you.",
  },
  {
    q: "Who will supervise the work when I’m out of the house at work?",
    a: "Our site manager coordinates daily progress and quality checks, sharing updates with you.",
  },
  {
    q: "Am I allowed to customise the designs for my house according to my taste?",
    a: "Yes. Everything is customisable within the agreed scope and budget.",
  },
  {
    q: "Can I opt for different themes for different rooms in my house?",
    a: "Absolutely. We’ll keep a cohesive base while varying themes per room.",
  },
  {
    q: "When do I meet the interior designer to communicate my requirements?",
    a: "Right at the start during discovery. We’ll also have milestone reviews.",
  },
];

export default function SCFAQ() {
  return (
    <section className="bg-[#F3D431] py-14">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-[56px] font-semibold text-foreground">
          Frequently Asked 🤔 <br /> Questions 🙋🏻‍♂️
        </h2>

        <div
          className={cn(
            "mt-8 rounded-xl border border-border shadow-sm overflow-hidden",
            "bg-card text-card-foreground"
          )}
        >
          <Accordion type="single" collapsible defaultValue="item-1">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i + 1}`}
                className="border-b border-border/60"
              >
                {/* Header */}
                <AccordionTrigger
                  className={cn(
                    // layout
                    "cursor-pointer text-left w-full px-6 py-5 text-body1 font-semibold",
                    // default (closed)
                    "bg-muted/40 hover:no-underline rounded-none",
                    // open state: black header with white text + rounded top
                    "data-[state=open]:bg-foreground data-[state=open]:text-background data-[state=open]:rounded-t-lg",
                    // plus/minus at right
                    "pr-12 relative after:absolute after:right-6 after:top-1/2 after:-translate-y-1/2",
                    'after:content-["+"] data-[state=open]:after:content-["–"]',
                    // smoothness
                    "transition-colors"
                  )}
                >
                  <span className="select-none">Q. {f.q}</span>
                </AccordionTrigger>

                {/* Content (stays inside the dark panel when open) */}
                <AccordionContent
                  className={cn(
                    "px-6 pb-6 pt-0 text-left leading-relaxed text-body2",
                    "bg-foreground text-background"
                  )}
                >
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
