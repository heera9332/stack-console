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
  // Beautiful Homes Service FAQs
  {
    category: "Beautiful Homes Service",
    q: "How does Stack Console help me monetize my infrastructure?",
    a: "Stack Console turns your infrastructure into a revenue-generating cloud platform by offering automated billing, subscription management, and reseller support — all white-labelled under your brand.",
  },
  {
    category: "Beautiful Homes Service",
    q: "Does Stack Console support multiple orchestrators (CloudStack, OpenStack, VMware, etc.)?",
    a: "Yes. Stack Console integrates seamlessly with Apache CloudStack, OpenStack, VMware, OpenNebula, Virtuozzo, Proxmox, Ceph, and more — all managed from one console.",
  },
  {
    category: "Beautiful Homes Service",
    q: "Can my customers manage their own services through Stack Console?",
    a: "Absolutely. Your end-users get a modern self-service portal to provision, monitor, and manage VMs, storage, and networks — reducing support overhead.",
  },
  {
    category: "Beautiful Homes Service",
    q: "How does StackAI simplify cloud operations for end users?",
    a: "StackAI enables natural language commands like “Create a VM with 2 cores and 4GB RAM” and provides intelligent alerts on usage thresholds — making cloud management effortless.",
  },
  {
    category: "Beautiful Homes Service",
    q: "Does Stack Console include automated billing and subscription management?",
    a: "Yes. From service activation to payment collection, Stack Console automates the entire billing lifecycle with prepaid, postpaid, and pay-as-you-go models.",
  },
  {
    category: "Beautiful Homes Service",
    q: "Can I manage resellers and partners with Stack Console?",
    a: "Yes. Our reseller management module allows you to create, track, and support reseller accounts with tiered pricing, white-labelling, and reporting.",
  },

  // Stack Console FAQs
  {
    category: "Stack Console",
    q: "What payment methods and currencies does the platform support?",
    a: "Stack Console supports multiple payment gateways and global currencies, giving your customers the flexibility to pay how they want.",
  },
  {
    category: "Stack Console",
    q: "Does Stack Console support multiple orchestrators (CloudStack, OpenStack, VMware, etc.)?",
    a: "Yes. Stack Console integrates seamlessly with Apache CloudStack, OpenStack, VMware, OpenNebula, Virtuozzo, Proxmox, Ceph, and more — all managed from one console.",
  },
  {
    category: "Stack Console",
    q: "How is Stack Console deployed — on-premises or SaaS?",
    a: "Stack Console is deployed on-premises, directly within your data center infrastructure. This ensures complete control, data sovereignty, and compliance with your business and regulatory needs — without relying on third-party SaaS hosting.",
  },
  {
    category: "Stack Console",
    q: "What kind of support and updates do you provide?",
    a: "We provide regular updates, 24/7 technical support, and onboarding assistance to ensure your cloud business runs smoothly and stays future-ready.",
  },
  {
    category: "Stack Console",
    q: "How long does it take to get started with Stack Console?",
    a: "Depending on your infrastructure setup, you can launch your branded cloud platform in a matter of days — not months.",
  },
  {
    category: "Stack Console",
    q: "How does Stack Console charge?",
    a: "Our pricing is flexible and depends on the integrations and modules you choose to enable. To get an accurate estimate tailored to your business needs, we recommend booking a meeting with our team.",
  }
];


export default function ScFAQ() {
  return (
    <section className="bg-[#F3D431] py-8 md:py-14">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-[36px] md:text-[56px] font-semibold text-foreground">
          Frequently Asked 🤔 <br /> Questions 🙋🏻‍♂️
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
          </Accordion>
        </div>
      </div>
    </section>
  );
}
