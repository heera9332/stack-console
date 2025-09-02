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
    __typename?: string | null;
    headling?: string | null;
    links?: Array<{
      __typename?: string | null;
      link?: {
        __typename?: string | null;
        label?: string | null;
        url?: string | null;
      } | null;
    } | null> | null;
  } | null> | null;
  companyDescription?: string | null;
  __typename?: string | null;
  logoImage?: MediaNode;
  subscribe?: {
    buttonLabel?: string | null;
    __typename?: string | null;
    inputPlaceholder?: string | null;
    subscribeMessage?: string | null;
    successMessage?: string | null;
  } | null;
};

export interface TopNav {
  cta: {
    label?: string | null;
    link?: string | null;
    __typename?: string | null;
  } | null;
  __typename?: string | null;
  logo: MediaNode;
  logoDark: MediaNode;
  navItems: Array<{
    __typename?: string | null;
    label: string;
    description: string;
    link: string;
    type: string;
    icon: MediaNode;
    megaMenu?: {
      title?: string | null;
      description?: string | null;
      __typename?: string | null;
      megaMenuItems?: Array<{
        description?: string | null;
        __typename?: string | null;
        icon: MediaNode;

        itemHoverBackground?: string | null;
        itemHoverTextColor?: string | null;

        itemIconHoverBackgroundColorEnd?: string | null;
        itemIconHoverBackgroundColorStart?: string | null;
        itemIconHoverColor?: string | null;
        link?: string | null;
        title?: string | null;
        preview: {
          description?: string | null;

          __typename?: string | null;
          title?: string | null;
          backgroundImage?: MediaNode;
          card?: MediaNode;
          cta?: {
            label?: string | null;
            link?: string | null;
            __typename?: string | null;
          } | null;
        };
      } | null> | null;
    } | null;
  }>;
}

export type NavData = {
  headerNavigation: {
    __typename: string | null;
    topNav: TopNav;
    footer: Footer;
  } | null;
};
