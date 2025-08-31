import Image from "next/image";

export const GetIcon = ({
  className = "",
  iconHoverBgColor = "#356EC3, #0D3269",
  textHoverColor = "#fff",
  link = "",
  altText = "",
}) => {
  return (
    <div
      style={{
        ["--icon-gradient" as any]: `linear-gradient(135deg, ${iconHoverBgColor})`,
        ["--icon-color" as any]: textHoverColor,
      }}
      className={`
        group rounded-[12px] size-12 flex items-center justify-center
        border border-[#AFB9CE] transition
        group-hover:border-none
        group-hover:[background:var(--icon-gradient)]
        group-hover:text-[var(--icon-color)]
        ${className}
      `}
    >
      <Image
        src={link || "/assets/svg/overview.svg"}
        alt={altText}
        width={64}
        height={64}
        className="p-2.5 transition
          [filter:brightness(0)_saturate(100%)_invert(26%)_sepia(61%)_saturate(1406%)_hue-rotate(192deg)_brightness(91%)_contrast(95%)]
          group-hover:brightness-0 group-hover:invert"
      />
    </div>
  );
};