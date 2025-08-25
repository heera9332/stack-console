"use client";

import * as React from "react";
import type { CloudIntegrationsHeroProps } from "@/types/sections-props";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // if you don’t have this helper, replace cn(...) with className strings
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Filter } from "lucide-react";
import { Button } from "./ui/button";

// ---------- static data (replace later with API/GraphQL) ----------
const CATEGORIES = [
  "Cloud Platforms",
  "Billing & Finance",
  "Payment Gateways",
  "Backup & Disaster Recovery",
  "Monitoring & Alerts",
  "Storage & Object Storage",
  "Others",
] as const;

const STATUS = ["Live", "In Progress", "Planned", "To Be Planned"] as const;
type Status = (typeof STATUS)[number];
type Category = (typeof CATEGORIES)[number];

type App = {
  id: string;
  name: string;
  category: Category;
  status: Status;
  logo: string; // url
};

// small sample set repeated to fill grid; replace with your real data
const STATIC_APPS: App[] = [
  {
    id: "1",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Live",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "2",
    name: "Proxmox Backup",
    category: "Backup & Disaster Recovery",
    status: "To Be Planned",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "3",
    name: "Proxmox Mail",
    category: "Monitoring & Alerts",
    status: "Planned",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "4",
    name: "Proxmox Cloud",
    category: "Cloud Platforms",
    status: "In Progress",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  // duplicate with different ids/status to fill grid demo
  {
    id: "5",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Live",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "6",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Live",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "7",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Live",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "8",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "To Be Planned",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "9",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Planned",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "10",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Live",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "11",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "In Progress",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "12",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Live",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "13",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Live",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "14",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Live",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "15",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Live",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "13",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Live",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "44",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Live",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "444",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Live",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "4545",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Live",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "4545",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Live",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
  {
    id: "4545",
    name: "Proxmox VE",
    category: "Cloud Platforms",
    status: "Live",
    logo: "https://stack-console.zoro-dev.com/wp-content/uploads/2025/08/overview-experiences.png",
  },
];

// ---------- helpers ----------
const PAGE_SIZE = 12;

function statusBadgeClasses(s: Status) {
  switch (s) {
    case "Live":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "In Progress":
      return "bg-blue-100 text-blue-700 border border-blue-200";
    case "Planned":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "To Be Planned":
      return "bg-zinc-100 text-zinc-700 border border-zinc-200";
  }
}

// ---------- component ----------
export const ScCloudIntegrationsPosts = (data: CloudIntegrationsHeroProps) => {
  // you’ll replace STATIC_APPS with data coming from `data` later
  const [query, setQuery] = React.useState("");
  const [activeCategory, setActiveCategory] =
    React.useState<Category>("Cloud Platforms");
  const [activeStatuses, setActiveStatuses] = React.useState<Status[]>([
    "Live",
  ]);
  const [page, setPage] = React.useState(1);

  // reset to page 1 when filters change
  React.useEffect(() => setPage(1), [query, activeCategory, activeStatuses]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return STATIC_APPS.filter((a) => {
      const matchesCategory = a.category === activeCategory;
      const matchesStatus =
        activeStatuses.length === 0 ? true : activeStatuses.includes(a.status);
      const matchesQuery = q ? a.name.toLowerCase().includes(q) : true;
      return matchesCategory && matchesStatus && matchesQuery;
    });
  }, [query, activeCategory, activeStatuses]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  const toggleStatus = (s: Status) =>
    setActiveStatuses((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 md:py-36">
      {/* header + search */}
      <div className="mb-6 flex flex-col gap-3 md:mb-8 ">
        <h2 className="text-4xl font-bold tracking-tight md:text-[64px]">
          The Stack Console
          <br />
          Ecosystem
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        {/* left filters */}
        <aside className="space-y-6 hidden md:block md:col-span-3">
          <h3>Filter by:</h3>
          <hr />
          <div>
            <h4 className="mb-3 text-sm font-semibold">Category</h4>
            <div className="space-y-2">
              {CATEGORIES.map((c) => (
                <label
                  key={c}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 text-sm",
                    activeCategory === c ? "bg-muted" : "hover:bg-muted/60"
                  )}
                >
                  <input
                    type="radio"
                    name="category"
                    className="h-4 w-4 accent-foreground"
                    checked={activeCategory === c}
                    onChange={() => setActiveCategory(c)}
                  />
                  <span>{c}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Status</h4>
            <div className="space-y-2">
              {STATUS.map((s) => {
                const checked = activeStatuses.includes(s);
                return (
                  <label
                    key={s}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 text-sm",
                      checked ? "bg-muted" : "hover:bg-muted/60"
                    )}
                  >
                    <Checkbox
                      checked={checked}
                      onCheckedChange={() => toggleStatus(s)}
                      className="data-[state=checked]:bg-foreground data-[state=checked]:text-background"
                    />
                    <span>{s}</span>
                  </label>
                );
              })}
            </div>
          </div>
        </aside>

        {/* grid */}
        <div className="min-h-[400px] md:col-span-9">
          <div className="flex w-full items-center gap-3 mb-8 ">
            <Input
              placeholder="Try an app name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full focus:outline-none bg-white h-12 px-4 focus:ring-none"
            />

            <Dialog>
              <DialogTrigger asChild className="md:hidden">
                <div className="border bg-whtie rounded-lg p-2">
                  <Filter size={12} className="w-8 h-8" />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <aside className="space-y-6 md:col-span-3">
                  <h3>Filter by:</h3>
                  <hr />
                  <div>
                    <h4 className="mb-3 text-sm font-semibold">Category</h4>
                    <div className="space-y-2">
                      {CATEGORIES.map((c) => (
                        <label
                          key={c}
                          className={cn(
                            "flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 text-sm",
                            activeCategory === c
                              ? "bg-muted"
                              : "hover:bg-muted/60"
                          )}
                        >
                          <input
                            type="radio"
                            name="category"
                            className="h-4 w-4 accent-foreground"
                            checked={activeCategory === c}
                            onChange={() => setActiveCategory(c)}
                          />
                          <span>{c}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 text-sm font-semibold">Status</h4>
                    <div className="space-y-2">
                      {STATUS.map((s) => {
                        const checked = activeStatuses.includes(s);
                        return (
                          <label
                            key={s}
                            className={cn(
                              "flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 text-sm",
                              checked ? "bg-muted" : "hover:bg-muted/60"
                            )}
                          >
                            <Checkbox
                              checked={checked}
                              onCheckedChange={() => toggleStatus(s)}
                              className="data-[state=checked]:bg-foreground data-[state=checked]:text-background"
                            />
                            <span>{s}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </aside>
                <DialogFooter>
                  <div className="flex gap-4 items-center">
                    {" "}
                    <DialogClose className="w-1/3" asChild>
                      <span className="text-[#929292]">Clear filter</span>
                    </DialogClose>
                    <Button
                      type="submit"
                      className="bg-black text-white hover:bg-none px-4 py-4 text-lg rounded-md w-2/3 h-12"
                    >
                      Apply
                    </Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {pageItems.length === 0 ? (
            <div className="flex h-40 items-center justify-center rounded-md border text-sm text-muted-foreground">
              No apps match your filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4  md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((app) => (
                <Card
                  key={app.id}
                  className="overflow-hidden pt-0 pb-6 border-none"
                  style={{ boxShadow: "0 4px 12px 0 #241C151F" }}
                >
                  <CardContent className="flex aspect-[4/3] items-center justify-center bg-zinc-100">
                    {/* replace img src with real CDN/media from WPGraphQL */}
                    <img
                      src={app.logo}
                      alt={app.name}
                      className="h-auto w-auto opacity-90"
                    />
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <span className="truncate text-sm font-medium">
                      {app.name}
                    </span>
                    <Badge
                      className={cn(
                        "rounded-full px-2.5 py-1 text-xs font-medium",
                        statusBadgeClasses(app.status)
                      )}
                      variant="outline"
                    >
                      {app.status}
                    </Badge>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}

          {/* pagination */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              className="rounded-md border px-3 py-1.5 text-sm disabled:opacity-50"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              ‹
            </button>
            {Array.from({ length: totalPages }).map((_, idx) => {
              const n = idx + 1;
              const active = n === page;
              return (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={cn(
                    "h-8 w-8 rounded-md border text-sm",
                    active ? "font-bold" : "hover:bg-muted"
                  )}
                >
                  {n}
                </button>
              );
            })}
            <button
              className="rounded-md border px-3 py-1.5 text-sm disabled:opacity-50"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
