// src/components/SCFooter.tsx
import Image from "next/image";
import Link from "next/link";
import Newsletter from "./sc-news-letter";
import { headers } from "next/headers";
import type { Footer } from "@/types/sections-props";
 

type NavItem = {
  label: string;
  href: string;
  id?: string;
};

type Column = {
  title: string;
  items: NavItem[];
};

// Resolve a usable image URL from WPGraphQL MediaItem node
async function resolveMediaSourceUrl(node?: { altText?: string | null; link?: string | null }): Promise<{ src: string; alt: string }> {
  const alt = (node?.altText ?? "").trim();
  // If WPGraphQL exposes sourceUrl directly in your schema, prefer it:
  // return { src: node?.sourceUrl ?? "", alt };
  // Given your payload shows only "link" (attachment permalink), use it as best-effort.
  const src = (node?.link ?? "").trim();
  return { src, alt };
}

// Pure mapper: WP footer -> UI columns
function mapFooterToColumns(footer): Column[] {
  const cols = footer?.columns ?? [];
  return (cols ?? [])
    .filter(Boolean)
    .map((c) => {
      const title = (c?.headling ?? "").trim(); // field is "headling" in payload
      const items: NavItem[] =
        (c?.links ?? [])
          .filter(Boolean)
          .map((l, idx) => {
            const label = (l?.link?.label ?? "").trim();
            const href = (l?.link?.url ?? "#").trim() || "#";
            return { label, href, id: `${title}-${idx}` };
          })
          .filter((i) => i.label.length > 0) ?? [];
      return { title, items };
    })
    .filter((col) => col.title.length > 0 && col.items.length > 0);
}

export default async function ScFooter(data: Footer) {
  console.log("Rendering SCFooter", data);
  // data.headerNavigation?.footer contains the WP footer payload
  const footer = data ?? null;
  // Keep existing console for server debugging
  console.log("Footer data:", JSON.stringify(footer));

  const h = headers();
  const fullUrl = h.get("x-url") || ""; // from middleware
  const pathname = fullUrl ? new URL(fullUrl).pathname : "/";
  const isHome = pathname === "/" || pathname === "/index" || pathname === "/home";

  // Map dynamic columns
  const dynamicColumns: Column[] = mapFooterToColumns(footer);

  // Resolve brand logo and company description
  const companyDescription =
    (footer?.companyDescription ?? "©").trim();

  const { src: logoSrc, alt: logoAlt } = await resolveMediaSourceUrl(
    footer?.logoImage?.node ?? undefined
  );

  return (
    <footer
      id="footerSection"
      className={`bg-foreground bg-dark text-white ${isHome ? "pt-64" : "pt-0"}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 ">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand / Address */}
          <div className="md:col-span-4">
            <Link href="#">
              <Image
                className="w-1/2 object-cover"
                width={512}
                height={512}
                // Fallback to existing static asset if WP logo is missing
                src={logoSrc || "/assets/images/brand/logo-dark.png"}
                alt={logoAlt || "stack console logo"}
                priority
              />
            </Link>

            <p className="mt-4 text-sm opacity-90 w-4/5">
              {companyDescription ||
                "Copyright © 2025 All rights reserved Stack Console Cloud Solutions Pvt. Ltd."}
            </p>

            <div className="mt-4">
              <Newsletter />
            </div>
          </div>

          {/* Menus */}
          <div className="md:col-span-8 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {(dynamicColumns.length > 0 ? dynamicColumns : []).map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-xs font-semibold tracking-wider uppercase text-white">
                  {col.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {col.items.map((item) => (
                    <li key={item.id ?? item.label}>
                      <Link
                        href={item.href}
                        id={typeof item.id === "string" ? item.id : undefined}
                        className="
                          nav-link
                          text-white
                          underline-offset-4 hover:underline
                          transition-colors opacity-90
                        "
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
