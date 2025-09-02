"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  
  useEffect(() => {
    /** show error in console */
    console.log(error);
  }, [error]);

  return (
    <main className="min-h-[60vh] bg-[#121219] text-white grid place-items-center">
      <div className="mx-auto w-full max-w-xl px-6">
        <div
          className="rounded-2xl ring-1 ring-white/5 p-8"
          style={{
            background: "#181822",
            boxShadow:
              "inset -2px -2px 0px #5C3AE480, inset 2px 2px 0px #FFFFFF66",
          }}
        >
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="mt-2 text-white/70">
            An unexpected error occurred. You can retry or go back home.
          </p>
          <div className="mt-6 flex gap-3">
            <button
              onClick={reset}
              className="cursor-pointer rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:opacity-90"
            >
              Try again
            </button>
            <Link
              href="/"
              className="cursor-pointer rounded-md border border-white/60 px-4 py-2.5 text-sm font-semibold text-white/95 hover:bg-white/10"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
