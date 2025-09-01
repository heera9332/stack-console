// section-props.ts
import type { SectionByName } from "@/gql/section-types";
import { MediaNode } from "./utils";

export type HeroProps = SectionByName<"PageBuilderSectionsHeroLayout">;
export type CloudInnovatorsProps =
  SectionByName<"PageBuilderSectionsCloudInnovatorsLayout">;
export type InfiniteCloudConsoleProps =
  SectionByName<"PageBuilderSectionsInfiniteCloudConsoleLayout">;
export type CloudCommerceHeroProps =
  SectionByName<"PageBuilderSectionsCloudCommercePlatformLayout">;
export type SeeInActionProps =
  SectionByName<"PageBuilderSectionsCloudPowerBusinessLayout">;
export type EcosystemProps =
  SectionByName<"PageBuilderSectionsIntegratedCloudEcosystemLayout">;
export type FeaturesProps =
  SectionByName<"PageBuilderSectionsStackConsoleFeaturesLayout">;
export type FaqsProps = SectionByName<"PageBuilderSectionsFaqsLayout">;
export type FooterCtaProps =
  SectionByName<"PageBuilderSectionsBeforefooterctaLayout">;
export type TurningIdeasProps =
  SectionByName<"PageBuilderSectionsTurningideascloudpowerbusinessLayout">;
export type CapabilitiesGridProps =
  SectionByName<"PageBuilderSectionsPlatformCapabilitiesGridLayout">;
export type ExperienceProps =
  SectionByName<"PageBuilderSectionsExperienceStackLayout">;
export type WhyChooseProps =
  SectionByName<"PageBuilderSectionsWhyChooseStackConsoleLayout">;
export type WhoForProps =
  SectionByName<"PageBuilderSectionsWhoIsForStackConsoleLayout">;
export type CloudIntegrationsHeroProps =
  SectionByName<"PageBuilderSectionsCloudIntegrationsHeroLayout">;
export type ScCloudIntegrationsPostsProps =
  SectionByName<"PageBuilderSectionsCloudIntegrationsPostsLayout">;
export type ScStackConsoleApisProps =
  SectionByName<"PageBuilderSectionsStackConsoleApisLayout">;

export type ScStyleYourStackProps =
  SectionByName<"PageBuilderSectionsStyleYourStackHeroLayout">;

export type Footer = {
  columns?: Array<{
    fieldGroupName?: string | null;
    headling?: string | null;
    links?: Array<{
      fieldGroupName?: string | null;
      link?: {
        fieldGroupName?: string | null;
        label?: string | null;
        url?: string | null;
      } | null;
    } | null> | null;
  } | null> | null;
  companyDescription?: string | null;
  fieldGroupName?: string | null;
  logoImage?: {
    node?: { altText?: string | null; link?: string | null } | null;
  } | null;
  subscribe?: {
    buttonLabel?: string | null;
    fieldGroupName?: string | null;
    inputPlaceholder?: string | null;
    subscribeMessage?: string | null;
    successMessage?: string | null;
  } | null;
};

export interface TopNav {
  cta: {
    label?: string | null;
    link?: string | null;
    fieldGroupName?: string | null;
  } | null;
  fieldGroupName?: string | null;
  logo: {
    node: { altText: string | null; link: string | null };
  };
  logoDark: {
    node: { altText: string | null; link: string | null };
  };
  navItems: Array<{
    fieldGroupName?: string | null;
    label?: string | null;
    description: string;
    link?: string | null;
    type: string;
    icon: {
      node: { altText?: string | null; link?: string | null };
    };
    megaMenu?: {
      title?: string | null;
      description?: string | null;
      fieldGroupName?: string | null;
      megaMenuItems?: Array<{
        description?: string | null;
        fieldGroupName?: string | null;
        icon?: {
          node?: { altText?: string | null; link?: string | null } | null;
        } | null;

        itemHoverBackground?: string | null;
        itemHoverTextColor?: string | null;

        itemIconHoverBackgroundColorEnd?: string | null;
        itemIconHoverBackgroundColorStart?: string | null;
        itemIconHoverColor?: string | null;
        link?: string | null;
        title?: string | null;
        preview: {
          description?: string | null;

          fieldGroupName?: string | null;
          title?: string | null;
          backgroundImage?: MediaNode;
          card?: {
            node?: { altText?: string | null; link?: string | null } | null;
          } | null;
          cta?: {
            label?: string | null;
            link?: string | null;
            fieldGroupName?: string | null;
          } | null;
        };
      } | null> | null;
    } | null;
  }>;
}

export type NavData = {
  headerNavigation: {
    fieldGroupName: string | null;
    topNav: TopNav;
    footer: Footer;
  } | null;
};
