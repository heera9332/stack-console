import { ScStackConsoleApisProps } from "@/types/sections-props";
import "./sc-stack-console-apis.css";
import Image from "next/image";



export const ScStackConsoleApis = (data: ScStackConsoleApisProps) => {
  console.log("ScStackConsoleApis data:", data);
  return (
    <section
      className="relative overflow-hidden bg-dark w-full px-4 py-12 md:py-20 -mb-12"
      id="sc-stack-console-apis"
      style={{
        backgroundImage: `url(${data.sectionBackgroundImage.node.link})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="section-inner max-w-7xl mx-auto md:px-4 md:py-10">
        <h2 className="text-3xl md:text-[64px] font-semibold text-left md:text-center  text-white  px-4 mb-6">
          <span className="highlightedText pr-2">
            {data.headingHighlighted}
          </span>
          {data.heading}
        </h2>
        <p className="text-white text-left md:text-center px-4 md:px-10">{data.description}</p>
        {/* Add more content as needed */}
        <div className="mt-10 flex justify-center">
          <Image
            src={data.sectionMainImage.node.link}
            alt={data.sectionMainImage.node.altText}
            width={1000}
            height={1000}
            className="w-full hidden md:block"
          />
          <Image
            src={data.sectionMainImageMobile.node.link}
            alt={data.sectionMainImage.node.altText}
            width={1000}
            height={1000}
            className="w-full block md:hidden h-full object-cover mb-20"
          />
        </div>
      </div>
    </section>
  );
};
