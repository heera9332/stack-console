import Image from "next/image";

type Props = {
  content?: string;
  heading?: string;
  headingHighlighted?: string;
  requestADemoLabel?: string;
  requestADemoLink?: string;
  tryDemoLabel?: string;
  tryDemoLink?: string;
  heroImage?: { node?: { id?: string; altText?: string; link?: string } };
};

export default function SCHero(p: Props) {
  return (
    <section className="container max-w-[1440px] mx-auto px-4 lg:px-10 py-16">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          {p.heading && (
            <h2 className="text-3xl md:text-5xl font-bold">
              {p.heading} <br /> {p.headingHighlighted}
            </h2>
          )}
          {p.content && (
            <div
              className="mt-4 text-lg opacity-80"
              dangerouslySetInnerHTML={{ __html: p.content }}
            />
          )}
          <div className="mt-6 flex gap-3">
            {p.requestADemoLabel && p.requestADemoLink && (
              <a
                className="rounded px-5 py-3 bg-primary text-white"
                href={p.requestADemoLink}
              >
                {p.requestADemoLabel}
              </a>
            )}
            {p.tryDemoLabel && (
              <a href={p.tryDemoLink} className="rounded px-5 py-3 border">
                {" "}
                {p.tryDemoLabel}{" "}
              </a>
            )}
          </div>
        </div>
        {p.heroImage?.node?.link && (
          <Image
            src={p.heroImage.node.link}
            alt={p.heroImage.node.altText || ""}
            className="w-full h-auto rounded-xl"
            width={1000}
            height={1000}
          />
        )}
      </div>
    </section>
  );
}
