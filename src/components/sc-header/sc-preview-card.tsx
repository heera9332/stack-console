import { UiNavItem } from "@/types/header";
import Image from "next/image";
import Link from "next/link";

/* =========================
   Preview card
   ========================= */
export function PreviewCard({ item }: { item: UiNavItem | null }) {
  if (!item?.preview) {
    return (
      <div className="h-full w-full rounded-xl border border-black/10 p-4 flex items-center justify-center text-sm ">
        Hover an item to preview
      </div>
    );
  }
  const { title, blurb, cta } = item.preview;

  return (
    <div className="rounded-xl overflow-hidden min-w-full flex flex-col justify-center items-center">
      <div className="w-full relative">
        <div
          style={{
            ["--icon-gradient" as any]: `linear-gradient(135deg, ${item.iconHoverBgColor})`,
            ["--icon-color" as any]: item.textHoverColor,
          }}
          className="rounded-lg bg-gradient-to-b h-64 overflow-hidden [background:var(--icon-gradient)]"
        />
        {item.preview?.image?.link && (
          <Image
            className="absolute top-2"
            src={item.preview.image.link}
            width={512}
            height={512}
            alt={item.preview.image.alt || ""}
          />
        )}
        <div className="absolute bottom-0 px-4 w-full">
          <div className="text-white font-semibold">{title}</div>
          <p title={blurb} className="h-20 mt-1 text-sm text-muted">
            {blurb && blurb.length < 60
              ? blurb
              : `${blurb?.slice(0, 60) ?? ""}...`}
          </p>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#110900] opacity-80 rounded-lg" />
        </div>
      </div>
      {cta && (
        <div className="p-4 pt-0 mt-4">
          <Link
            href={cta.href}
            className="w-42 text-center block cursor-pointer px-4 py-2.5 bg-white text-black rounded-[8px] border border-black transition-all delay-100 hover:shadow-[0_8px_0_#356EC3] hover:border-l-0 hover:border-t-0 hover:border-[#356EC3]"
          >
            {cta.label}
          </Link>
        </div>
      )}
    </div>
  );
}
