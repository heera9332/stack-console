"use client";

import * as React from "react";
import type { ScCloudIntegrationsPostsProps } from "@/types/sections-props";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "./ui/dialog";
import { Filter } from "lucide-react";
import { Button } from "./ui/button";

const PAGE_SIZE = 12;
const WP_REST_ENDPOINT =
  (process.env.NEXT_PUBLIC_WP_REST_ENDPOINT as string) ||
  "https://stack-console.zoro-dev.com";

type App = {
  id: string;
  name: string;
  categories: string[]; // multiple category names per post
  status: string;
  logo: string;
};

type WPCategory = { id: number; name: string };

function decodeHTML(str: string) {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

function statusBadgeClasses(s: string) {
  switch (s) {
    case "Live":
      return "bg-emerald-100 text-emerald-700 border border-emerald-200";
    case "In Progress":
      return "bg-blue-100 text-blue-700 border border-blue-200";
    case "Planned":
      return "bg-amber-100 text-amber-700 border border-amber-200";
    case "To Be Planned":
      return "bg-zinc-100 text-zinc-700 border border-zinc-200";
    default:
      return "bg-gray-100 text-gray-700 border border-gray-200";
  }
}

export const ScCloudIntegrationsPosts = (
  data: ScCloudIntegrationsPostsProps
) => {
  const [categories, setCategories] = React.useState<WPCategory[]>([]);
  const [apps, setApps] = React.useState<App[]>([]);
  const [loading, setLoading] = React.useState(true);

  // UI-only state
  const [query, setQuery] = React.useState("");
  const [activeCategoryName, setActiveCategoryName] = React.useState("All"); // ✅ default All
  const [activeStatuses, setActiveStatuses] = React.useState<string[]>([
    "Live",
  ]); // ✅ default Live
  const [page, setPage] = React.useState(1);

  // debounce search
  const [debouncedQuery, setDebouncedQuery] = React.useState(query);
  React.useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(t);
  }, [query]);

  // reset to page 1 when filters/search change
  React.useEffect(
    () => setPage(1),
    [debouncedQuery, activeCategoryName, activeStatuses]
  );

  // fetch categories (prepend "All")
  React.useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${WP_REST_ENDPOINT}/wp-json/wp/v2/categories`);
        const json = await res.json();
        const list: WPCategory[] = (json || []).map((c: any) => ({
          id: c.id,
          name: decodeHTML(c.name),
        }));
        setCategories([{ id: 0, name: "All" }, ...list]); // ✅ All first
        setActiveCategoryName("All"); // ✅ ensure All selected
      } catch (err) {
        console.error("Error fetching categories", err);
        setCategories([{ id: 0, name: "All" }]);
      }
    })();
  }, []);

  // fetch posts
  React.useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${WP_REST_ENDPOINT}/wp-json/wp/v2/cloud-integrations?_embed`
        );
        const json = await res.json();

        const mapped: App[] = (json || []).map((item: any) => {
          const terms = (item?._embedded?.["wp:term"] || []).flat();
          const catNames = terms
            .filter((t: any) => t?.taxonomy === "category")
            .map((t: any) => decodeHTML(t?.name || ""))
            .filter(Boolean);

          return {
            id: String(item.id),
            name: item?.title?.rendered ?? "",
            categories: catNames.length ? catNames : ["Others"],
            status: item?.acf?.status || "Live",
            logo:
              item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "https://via.placeholder.com/150",
          };
        });

        setApps(mapped);
      } catch (err) {
        console.error("Error fetching apps", err);
        setApps([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // filtering
  const filtered = React.useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    return apps.filter((a) => {
      const matchesCategory =
        activeCategoryName === "All"
          ? true
          : a.categories.some(
              (c) => c.toLowerCase() === activeCategoryName.toLowerCase()
            );
      const matchesStatus =
        activeStatuses.length === 0 ? true : activeStatuses.includes(a.status);
      const matchesQuery = q ? a.name.toLowerCase().includes(q) : true;
      return matchesCategory && matchesStatus && matchesQuery;
    });
  }, [apps, debouncedQuery, activeCategoryName, activeStatuses]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  const toggleStatus = (s: string) =>
    setActiveStatuses((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [s]
    );

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 md:py-36">
      <div className="mb-6 flex flex-col gap-3 md:mb-8 ">
        <h2 className="text-4xl font-bold tracking-tight md:text-[64px] md:max-w-xl">
          {data.heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        {/* sidebar (desktop) */}
        <aside className="space-y-6 hidden md:block md:col-span-3">
          <h3>Filter by:</h3>
          <hr />
          <div>
            <h4 className="mb-3 text-sm font-semibold">Category</h4>
            <div className="space-y-2">
              {categories.map((c) => (
                <label
                  key={c.id + "-" + c.name}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 text-sm",
                    activeCategoryName === c.name
                      ? "bg-muted"
                      : "hover:bg-muted/60"
                  )}
                >
                  <input
                    type="radio"
                    name="category"
                    className="h-4 w-4 accent-foreground"
                    checked={activeCategoryName === c.name}
                    onChange={() => {
                      setActiveCategoryName(c.name);
                      setPage(1);
                    }}
                  />
                  <span>{c.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Status</h4>
            <div className="space-y-2">
              {["Live", "In Progress", "Planned", "To Be Planned"].map((s) => {
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
                      onCheckedChange={() => {
                        toggleStatus(s);
                        setPage(1);
                      }}
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
          {/* search + mobile filter trigger */}
          <div className="flex w-full items-center gap-3 mb-8 ">
            <Input
              placeholder="Search by app name…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-12 px-4"
            />
            <Dialog>
              <DialogTrigger asChild className="md:hidden h-12 w-16 flex items-center justify-center">
                <div className="border bg-white rounded-lg p-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.38394 5.66687C2.6276 4.82155 2.24943 4.39889 2.23516 4.03968C2.22277 3.72764 2.35687 3.42772 2.59768 3.22889C2.87489 3 3.44203 3 4.57633 3H19.4193C20.5536 3 21.1207 3 21.3979 3.22889C21.6387 3.42772 21.7728 3.72764 21.7604 4.03968C21.7462 4.39889 21.368 4.82155 20.6116 5.66687L14.9054 12.0444C14.7546 12.2129 14.6793 12.2972 14.6255 12.3931C14.5778 12.4781 14.5428 12.5697 14.5217 12.6648C14.4978 12.7721 14.4978 12.8852 14.4978 13.1113V18.4584C14.4978 18.6539 14.4978 18.7517 14.4663 18.8363C14.4384 18.911 14.3931 18.9779 14.334 19.0315C14.2673 19.0922 14.1765 19.1285 13.9949 19.2012L10.5949 20.5612C10.2274 20.7082 10.0436 20.7817 9.89607 20.751C9.76706 20.7242 9.65385 20.6476 9.58104 20.5377C9.49779 20.4122 9.49779 20.2142 9.49779 19.8184V13.1113C9.49779 12.8852 9.49779 12.7721 9.47391 12.6648C9.45274 12.5697 9.41776 12.4781 9.37008 12.3931C9.31633 12.2972 9.24095 12.2129 9.09018 12.0444L3.38394 5.66687Z"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <aside className="space-y-6 md:col-span-3">
                  <h3>Filter by:</h3>
                  <hr />
                  {/* categories (mobile) */}
                  <div>
                    <h4 className="mb-3 text-sm font-semibold">Category</h4>
                    {categories.map((c) => (
                      <label
                        key={c.id}
                        className="flex items-center gap-3 py-1.5"
                      >
                        <input
                          type="radio"
                          name="category-mobile"
                          checked={activeCategoryName === c.name}
                          onChange={() => setActiveCategoryName(c.name)}
                        />
                        <span>{c.name}</span>
                      </label>
                    ))}
                  </div>
                  {/* statuses (mobile) */}
                  <div>
                    <h4 className="mb-3 text-sm font-semibold">Status</h4>
                    {["Live", "In Progress", "Planned", "To Be Planned"].map(
                      (s) => (
                        <label
                          key={s}
                          className="flex items-center gap-3 py-1.5"
                        >
                          <Checkbox
                            checked={activeStatuses.includes(s)}
                            onCheckedChange={() => toggleStatus(s)}
                          />
                          <span>{s}</span>
                        </label>
                      )
                    )}
                  </div>
                </aside>
                <DialogFooter>
                  <div className="flex gap-4 items-center">
                    <DialogClose className="w-1/3" asChild>
                      <span className="text-[#929292]">Close</span>
                    </DialogClose>
                    <DialogClose asChild className="w-2/3">
                      <Button className="bg-black text-white h-12">
                        Apply
                      </Button>
                    </DialogClose>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* list */}
          {loading ? (
            <div className="grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-40 bg-gray-100 animate-pulse rounded-lg"
                />
              ))}
            </div>
          ) : pageItems.length === 0 ? (
            <div className="flex h-40 items-center justify-center rounded-md border text-sm text-muted-foreground">
              No apps match your filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((app) => (
                <Card
                  key={app.id}
                  className="overflow-hidden pt-0 pb-6 border-none"
                  style={{ boxShadow: "0 4px 12px 0 #241C151F" }}
                >
                  <CardContent className="flex aspect-[4/3] items-center justify-center bg-zinc-100">
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
              type="button"
              className="rounded-md border px-3 py-1.5 text-sm disabled:opacity-50"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              ‹
            </button>
            {Array.from({ length: totalPages }).map((_, idx) => {
              const n = idx + 1;
              return (
                <button
                  type="button"
                  key={n}
                  onClick={() => setPage(n)}
                  className={cn(
                    "h-8 w-8 rounded-md border text-sm",
                    n === page ? "font-bold" : "hover:bg-muted"
                  )}
                >
                  {n}
                </button>
              );
            })}
            <button
              type="button"
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
