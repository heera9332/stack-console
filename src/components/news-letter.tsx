// src/components/Newsletter.tsx
"use client";

import { useState } from "react";
import { Button } from "./ui/button";
// If you already wired the shadcn Button with color="yellow", you can import it
// import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: call your API
    // await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) })
  }

  return (
    <section
      aria-labelledby="newsletter-title"
      className="rounded-lg w-3/4 pt-4"
    >
      <h3 id="newsletter-title" className="text-body1 font-medium">
        Cloud tips, insights, and updates — in your inbox.
      </h3>

      <form onSubmit={onSubmit} className="mt-3">
        <div
          className="
            flex items-stretch gap-2
            rounded-[4px] bg-muted/10
            p-1
            shadow-xs
          "
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>

          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="
              w-full rounded-[6px]
              bg-transparent
              px-3
              text-foreground placeholder:text-muted-foreground
              outline-none
              focus-visible:ring-[3px] focus-visible:ring-ring/40
            "
          />

          {/* If you have <Button color="yellow">, use that instead of this <button> */}
          <Button
            type="submit"
            className="bg-yellow hover:bg-yellow hover:cursor-pointer text-foreground rounded-[4px] px-6 w-32"
          >
            Subscribe
          </Button>
        </div>
      </form>
    </section>
  );
}
