import { ChevronDown, ChevronLeft, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { TopNav as WpTopNav } from "@/types/sections-props";
import { UiTopItem } from "@/types/header";
import { useEffect, useState } from "react";
import { GetIcon } from "./sc-get-icon";
/* ===== helpers ===== */
const safe = (s?: string | null) => (s ?? "").trim();
const pick = <T,>(v: T | null | undefined): T | undefined => v ?? undefined;
/* =========================
 Mobile drawer (single section)
 ========================= */
// ...imports unchanged


interface MobileMenuProps {
  data: WpTopNav;
  nav: UiTopItem[];
  onClose: () => void;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cta: { label: string; href: string };
}

export function MobileMenu({
  data,
  nav,
  onClose,
  mobileOpen,
  setMobileOpen,
  cta,
}: MobileMenuProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  console.log(data)
  useEffect(() => {
    if (!mobileOpen) setOpenIndex(null);
  }, [mobileOpen]);

  console.log("mobile menu > ")
  console.log(data.navItems)
  const isSubmenuOpen = openIndex !== null;

  return (
    <div className="fixed top-0 w-full bg-white mobile-nav min-h-dvh">
      <div className="mx-auto max-w-8xl px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between">
        {/* Left: Logo (hide when submenu open) */}
        {!isSubmenuOpen && (
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={
                pick(data?.logo?.node?.link) || "/assets/images/brand/logo.png"
              }
              alt={pick(data?.logo?.node?.altText) || "stack console"}
              width={512}
              height={512}
              className="w-42 h-12 object-cover block md:hidden mobile-logo"
              priority
            />
          </Link>
        )}

        {/* Back button when submenu is open */}
        {isSubmenuOpen && (
          <button
            type="button"
            className="inline-flex items-center justify-between w-24 bg-primary text-white rounded-full gap-2 py-1.5 px-3"
            onClick={() => setOpenIndex(null)} // go back to top level only
            aria-label="Back to main menu"
          >
            <ChevronLeft className="size-5" />
            <span>Back</span>
          </button>
        )}

        <div className="flex gap-2 items-center">
          {/* Right: toggle drawer */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center size-9 rounded-md hover:bg-white/10"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu-panel"
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu-panel"
        className="lg:hidden border-t border-white/10 header-light min-h-[86vh]"
      >
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 py-2 pb-4">
          {/* When a submenu is open, render only its children list */}
          {isSubmenuOpen ? (
            <>
              {/* Find the open mega item once */}
              {(() => {
                const i = openIndex as number;
                const item = nav[i];
                console.log("mega menu item > ", item)
                // Guard: only render if this is a mega item
                if (!item || item.type !== "mega") return null; 
                
                return (
                  <div
                    id={`submenu-${i}`}
                    aria-labelledby={`parent-${i}`}
                    className="px-1 space-y-3"
                    role="region"
                  >
                    <div className="text-xs uppercase text-gray-900 mb-4">
                      <p className="leading-[20%]">
                        {item.section.title}
                      </p>
                    </div>
                    <ul className="space-y-1" role="menu">
                      {item.section.items.map((it) => (
                        <li key={it.id} role="none">
                          <Link
                            href={it.href || "#"}
                            className="flex items-start gap-2 py-2 rounded-md hover:bg-white/10 justify-between"
                            onClick={onClose}
                            role="menuitem"
                          >
                            <div className="flex gap-2 items-center overflow-hidden">
                              <GetIcon link={it.icon.node.link || ""}/>
                              <div className="text-left">
                                <h3 className="text-sm">{it.label}</h3>
                                <span className="text-[10px]" title={it.description}>
                                  {it.description}
                                </span>
                              </div>
                            </div>
                            <ChevronDown className="size-4 transition-transform rotate-270" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
            </>
          ) : (
            /* Otherwise render the full top-level list */
            <>
              {nav.map((item, i) =>
                item.type === "mega" ? (
                  <div
                    key={item.label}
                    className="border border-white/10 rounded-lg"
                  >
                    <button
                      id={`parent-${i}`}
                      type="button"
                      className="w-full flex items-start justify-between px-3 py-3"
                      onClick={() => setOpenIndex(i)}
                      aria-expanded={false}
                      aria-controls={`submenu-${i}`}
                    >
                      <div className="flex gap-2 items-center">
                        <GetIcon />
                        <div className="text-left">
                          <h3>{item.label}</h3>
                          <span className="text-[12px]">
                            {item.section.description}
                          </span>
                        </div>
                      </div>
                      <ChevronDown className="size-4 transition-transform rotate-270" />
                    </button>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="block px-3 py-3 rounded-lg border border-white/10 hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
