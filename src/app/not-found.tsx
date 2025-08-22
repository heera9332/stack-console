"use client";

import Link from "next/link";
import Image from "next/image";

const SHADOW = "inset -2px -2px 0px #5C3AE480, inset 2px 2px 0px #FFFFFF66";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-[#121219] text-white flex items-center">
      <div className="mx-auto max-w-4xl w-full px-6">
        <section
          className="relative overflow-hidden rounded-2xl ring-1 ring-white/5 p-8 md:px-20 md:py-16"
          style={{ background: "#181822", boxShadow: SHADOW }}
        >
          {/* deco bg using your image */}
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/layers.png"
              alt=""
              fill
              className="object-cover"
              style={{
                mixBlendMode: "soft-light",
                opacity: 0.25,
                objectPosition: "right top",
              }}
              priority
            />
          </div>

          {/* content */}
          <div className="relative z-10 grid gap-6 sm:grid-cols-[auto,1fr] items-start">
            <div>
              <p className="text-sm tracking-wide text-white/70 mb-1">
                Error 404
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">
                Page not found
              </h1>
              <p className="mt-3 text-white/70">
                The page you’re looking for doesn’t exist or has moved. Try
                going back or head to the home page.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Go home
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md border border-white/60 px-4 py-2.5 text-sm font-semibold text-white/95 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact support
                </Link>
              </div>
            </div>
          </div>

          {/* bottom-right watermark */}
          <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
        </section>
      </div>
    </main>
  );
}
