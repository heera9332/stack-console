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

/* ---------- Types matching your API ---------- */
type ApiQuestion = {
  fieldGroupName: string;
  question: string;
  answer: string;
};

interface Props {
  __typename: "PageBuilderSectionsFaqsLayout";
  fieldGroupName: string;
  heading: string;         // e.g. "Frequently Asked 🤔 Questions 🙋🏻‍♂️"
  questions: ApiQuestion[];
}

/* ---------- Helpers ---------- */
function normalizeFaqs(input: ApiQuestion[] = []) {
  const seen = new Set<string>();
  const items: { q: string; a: string }[] = [];

  for (const it of input) {
    const q = (it?.question || "").trim();
    if (!q) continue;

    // de-duplicate by case/space-insensitive question text
    const key = q.replace(/\s+/g, " ").toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);

    // clean up CR/LF and trailing spaces in answers
    const a = (it?.answer || "").replace(/\r\n/g, "\n").trim();
    items.push({ q, a });
  }
  return items;
}

/* ---------- Component ---------- */
export default function ScFAQ(props: Props) {
  const faqs = React.useMemo(() => normalizeFaqs(props.questions), [props.questions]);

  return (
    <section
      id="sc-faq"
      data-aos="fade-up"
      className="section bg-[#F3D431] py-8 md:py-14 bg-light"
    >
      <div className="mx-auto max-w-5xl px-4 text-center flex flex-col justify-center items-center">
        {/* Heading from API */}
        <h2 className="text-[36px] md:text-[56px] font-semibold text-foreground max-w-xl">
          {props.heading}
        </h2>

        <div
          className={cn(
            "mt-4 md:mt-8 rounded-sm md:rounded-xl border border-border shadow-sm overflow-hidden",
            "bg-card text-card-foreground"
          )}
        >
          <Accordion type="single" collapsible>
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
                    "cursor-pointer text-left w-full px-6 py-5 text-[20px] font-semibold",
                    // hide shadcn's default chevron
                    "[&>svg]:hidden",
                    // default (closed)
                    "bg-muted/40 hover:no-underline rounded-none",
                    // open state: black header with white text + rounded top
                    "data-[state=open]:bg-foreground data-[state=open]:text-background data-[state=open]:rounded-t-sm md:data-[state=open]:rounded-t-lg",
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
                    "px-6 pb-6 pt-6 md:pt-0 text-left leading-relaxed text-body2 md:text-body1",
                    "bg-foreground text-background"
                  )}
                >
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}

            {/* Graceful empty state */}
            {faqs.length === 0 && (
              <div className="px-6 py-8 text-left text-muted-foreground">
                No FAQs available right now.
              </div>
            )}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
