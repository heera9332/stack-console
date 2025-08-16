// src/components/SCFooter.tsx
import Image from "next/image";
import Link from "next/link";
import Newsletter from "./news-letter";

type NavItem = {
  label: string;
  href: string;
  id?: string; // optional string
};

type Column = {
  title: string;
  items: NavItem[];
};

const columns: Column[] = [
  {
    title: "PLATFORM",
    items: [
      { label: "Overview", href: "#" },
      { label: "Subscription & Billing", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Reseller Management", href: "#" },
      { label: "Style Your Stack", href: "#" },
      { label: "StackAI", href: "#" },
      { label: "Migration Engine", href: "#" },
    ],
  },
  {
    title: "SOLUTIONS",
    items: [
      { label: "Cloud & Hosting Providers", href: "#" },
      { label: "Datacenters", href: "#" },
      { label: "Managed Service Providers", href: "#" },
      { label: "Telcos & ISPs", href: "#" },
    ],
  },
  {
    title: "RESOURCES",
    items: [
      { label: "Insights", href: "#" },
      { label: "Blogs", href: "#" },
      { label: "Videos", href: "#" },
      { label: "Events", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    items: [
      { label: "Manifesto", href: "#" },
      { label: "About Us", href: "#" },
      // { label: "Leadership", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "LEGAL",
    items: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
];

export default function SCFooter() {
  return (
    <footer
      id="footerSection"
      className="border-t border-border bg-foreground text-white pt-64"
    >
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand / Address */}
          <div className="md:col-span-4">
            <Link href="#">
              <Image
                className="w-1/2 object-cover"
                width={512}
                height={512}
                src={"/assets/images/brand/logo-dark.png"}
                alt="stack console logo"
              />
            </Link>

            <p className="mt-4 text-sm opacity-90">
              © Stack Console Cloud Solutions Pvt Ltd
            </p>

            <div className="mt-4">
              <Newsletter />
            </div>
          </div>

          {/* Menus */}
          <div className="md:col-span-8 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-xs font-semibold tracking-wider uppercase text-white">
                  {col.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {col.items.map((item, idx: number) => {
                    return (
                      <li key={idx}>
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
                    );
                  })}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
