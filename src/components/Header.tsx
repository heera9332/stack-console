"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BgSwitcher } from "@/components/bg-switcher";

type NavLink = { label: string; href: string; external?: boolean };
type SCHeaderProps = {
  logo?: React.ReactNode;
  links?: NavLink[];
  cta?: { label: string; href: string };
};

export default function SCHeader({
  logo = <span className="font-bold">StackConsole</span>,
  links = [
    { label: "Home", href: "/" },
    { label: "Contact us", href: "/contact-us" },
    { label: "Docs", href: "/docs" },
    { label: "Pricing", href: "/pricing" },
  ],
  cta,
}: SCHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:m-4 focus:rounded focus:px-3 focus:py-2 focus:bg-muted"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b w-full">
        <div className="container flex h-14 items-center justify-between px-4 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2"
              aria-label="Go to home"
            >
              {logo}
            </Link>

            <nav className="ml-6 hidden md:flex items-center gap-1">
              {links.map((l) =>
                l.external ? (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded px-3 py-2 text-sm transition hover:bg-accent ${
                      isActive(l.href)
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`rounded px-3 py-2 text-sm transition hover:bg-accent ${
                      isActive(l.href)
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <BgSwitcher />
            {cta && (
              <Link
                href={cta.href}
                className="hidden sm:inline-flex items-center rounded-md px-4 py-2 text-sm bg-primary text-primary-foreground hover:opacity-90"
              >
                {cta.label}
              </Link>
            )}
            <button
              className="md:hidden inline-flex items-center justify-center rounded p-2 hover:bg-accent"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d={open ? "M6 6l12 12M18 6L6 18" : "M4 6h16M4 12h16M4 18h16"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <MobileMenu
          open={open}
          links={links}
          cta={cta}
          onClose={() => setOpen(false)}
        />
      </header>
    </>
  );
}

function MobileMenu({
  open,
  links,
  cta,
  onClose,
}: {
  open: boolean;
  links: NavLink[];
  cta?: { label: string; href: string };
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="md:hidden border-t">
      <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
        {links.map((l) =>
          l.external ? (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="rounded px-3 py-2 text-sm hover:bg-accent text-foreground"
            >
              {l.label}
            </a>
          ) : (
            <Link
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="rounded px-3 py-2 text-sm hover:bg-accent text-foreground"
            >
              {l.label}
            </Link>
          )
        )}
        {cta && (
          <Link
            href={cta.href}
            onClick={onClose}
            className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm bg-primary text-primary-foreground"
          >
            {cta.label}
          </Link>
        )}
      </nav>
    </div>
  );
}
