const SHADOW = "inset -2px -2px 0px #5C3AE480, inset 2px 2px 0px #FFFFFF66";

const skeletons = [
  { w: 4, h: 4 },
  { w: 6, h: 3 },
  { w: 4, h: 3 },
  { w: 6, h: 4 },
  { w: 4, h: 3 },
  { w: 4, h: 5 },
];

export default function Loading() {
  return (
    <section className="min-h-[60vh] bg-[#121219] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 pt-12 sm:pt-16">
        <div className="flex items-center gap-3 mb-10">
          <div
            className="h-10 w-10 rounded-md"
            style={{ background: "#25184D", boxShadow: SHADOW }}
          />
          <div
            className="h-6 w-48 rounded-md"
            style={{ background: "#5C3AE4", boxShadow: SHADOW }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12 pb-16 sm:pb-20">
        {/* Masonry-like skeleton */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {skeletons.map((s, i) => (
            <article
              key={i}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/5 relative"
              style={{
                background: ["#1E1933", "#25184D", "#2D1C4F"][i % 3],
                boxShadow: SHADOW,
              }}
            >
              <div
                className="relative w-full"
                style={{ aspectRatio: `${s.w} / ${s.h}` }}
              >
                {/* Content placeholders */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex gap-3 mb-3">
                    <div
                      className="h-12 w-12 rounded-md"
                      style={{ background: "#5C3AE4", boxShadow: SHADOW }}
                    />
                    <div
                      className="h-4 w-24 rounded-md"
                      style={{ background: "#7D5EF7", boxShadow: SHADOW }}
                    />
                  </div>
                  <div
                    className="h-5 w-3/4 rounded-md mb-2"
                    style={{ background: "#6B07FF", boxShadow: SHADOW }}
                  />
                  <div
                    className="h-4 w-1/2 rounded-md"
                    style={{ background: "#A689FF", boxShadow: SHADOW }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
