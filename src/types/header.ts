/* ===== UI types (keeps UI stable, single section for mega) ===== */
export type UiNavItem = {
  id: string;
  label: string;
  icon: {
    node: { altText?: string | null; link?: string | null };
  };
  href?: string;
  description?: string;
  emoji?: string;
  preview?: {
    title: string;
    blurb: string;
    cta?: { label: string; href: string };
    image?: { link: string; alt: string };
    bgImage?: { link: string; alt: string };
  };
  iconHoverBgColor: string;
  cardHoverBgColor: string;
  textHoverColor: string;
};

export type UiMegaSection = {
  id: string;
  title: string;
  items: UiNavItem[];
  description: string;
};

export type UiTopItem =
  | { label: string; type: "mega"; section: UiMegaSection }
  | { label: string; type: "link"; href: string };
