import { UiMegaSection, UiNavItem } from "@/types/header";
import Link from "next/link";
import { GetIcon } from "./sc-get-icon";
import { PreviewCard } from "./sc-preview-card";
import Image from "next/image";
/* =========================
   Mega panel (single section)
   ========================= */
export function MegaPanel({
  section,
  hoverItem,
  setHoverItem,
}: {
  section: UiMegaSection;
  hoverItem: UiNavItem | null;
  setHoverItem: (i: UiNavItem) => void;
}) {
  return (
    <div
      className="
        mega-menu overflow-hidden left-[62%] -translate-x-1/2 mt-6 w-[min(100vw-2rem,980px)]
        rounded-xl border border-white/10 text-black shadow-2xl transition-colors
        fixed bg-white mx-auto
      "
    >
      <div className="grid grid-cols-12">
        <div className="col-span-7 p-4 md:p-6">
          <div className="mb-4">
            <div className="px-2 pb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 leading-[20%] mb-4">
                {section.title}
              </div>
              <div>
                <p className="">{section.description}</p>
              </div>
            </div>
            <ul className="mt-2">
              {section.items.map((it) => (
                <li key={it.id}>
                  <Link
                    href={it.href ?? "#"}
                    onMouseEnter={() => setHoverItem(it)}
                    style={{ ["--hover-bg" as any]: it.cardHoverBgColor }}
                    className={`
                      group flex items-start gap-3 rounded-xl px-4 py-4
                      hover:bg-[var(--hover-bg)]
                    `}
                  >
                    <GetIcon
                      iconHoverBgColor={it.iconHoverBgColor}
                      textHoverColor={it.textHoverColor}
                      link={it.emoji ?? "/assets/svg/overview.svg"}
                      altText={it.label}
                    />
                    <span className="flex-1">
                      <span className="block font-medium text-gray-900">
                        {it.label}
                      </span>
                      {it.description && (
                        <span className="block text-sm text-gray-600">
                          {it.description}
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 flex items-center justify-center border-l-2 border-gray-100 min-h-[80vh]">
          <div className="relative h-full w-full overflow-hidden">
            {/* Background image */}
            {hoverItem?.preview?.bgImage?.node?.link && (
              <Image
                src={hoverItem.preview.bgImage.node.link}
                alt={hoverItem.preview.bgImage.node.altText || ""}
                fill
                className="object-cover object-center"
                priority
              />
            )}


            {/* Foreground content */}
            <div className="relative z-10 h-full w-full flex items-center justify-center p-4 px-12">
              <PreviewCard item={hoverItem} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}