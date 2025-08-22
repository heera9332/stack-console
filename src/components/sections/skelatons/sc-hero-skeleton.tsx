// components/sections/skeletons/ScHeroSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function ScHeroSkeleton() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#12141D] text-white
        px-4 md:px-6 lg:px-8 py-42 md:py-50
        flex flex-col items-center justify-center
        grid-container
      "
      aria-busy="true"
      aria-live="polite"
    >
      <div className="gradient-overlay" />
      <div id="glowSegments" />

      <div
        className="absolute -bottom-100 md:-bottom-64 left-1/2 -translate-x-1/2 w-[950px] h-[550px]
        bg-[radial-gradient(ellipse_at_center,#5065d95e_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* kicker */}
        <Skeleton className="h-6 md:h-7 w-40 mx-auto" />

        <div className="my-8 space-y-4">
          {/* title 1 */}
          <Skeleton className="h-9 md:h-14 w-[72%] mx-auto" />

          {/* title 2 with emoji position reserved */}
          <div className="relative flex items-center justify-center">
            <Skeleton className="h-10 md:h-[72px] w-[60%] mx-auto" />
            <Skeleton className="absolute -left-10 md:-left-14 h-10 w-10 md:h-18 md:w-18 rounded-md" />
          </div>

          {/* description */}
          <Skeleton className="h-5 w-[86%] md:w-[66%] mx-auto mt-5" />
        </div>

        {/* buttons */}
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Skeleton className="h-14 w-56 rounded-[10px]" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-14 w-56 rounded-[10px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
