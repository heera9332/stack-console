// queries.ts
import { gql } from 'graphql-request';
import {
  HERO_SECTION,
  CLOUD_INNOVATORS_SECTION,
  TURNING_IDEAS_SECTION,
  CLOUD_POWER_BUSINESS_SECTION,
  INTEGRATED_CLOUD_ECOSYSTEM_SECTION,
  STACK_CONSOLE_FEATURES_SECTION,
  WHO_IS_FOR_STACK_CONSOLE_SECTION,
  FAQS_SECTION,
  BEFORE_FOOTER_CTA_SECTION,
  CLOUD_COMMERCE_PLATFORM_SECTION,
  INFINITE_CLOUD_CONSOLE_SECTION,
  PLATFORM_CAPABILITIES_GRID_SECTION,
  EXPERIENCE_STACK_SECTION,
  WHY_CHOOSE_STACK_CONSOLE_SECTION,
  CLOUD_INTEGRATIONS_HERO_SECTION,
  CLOUD_INTEGRETIONS_POSTS,
  CLOUD_INTEGRETIONS_CTA,
  STACK_CONSOLE_APIS_SECTION,
  STYLE_YOUR_STACK_HERO_SECTION,
  MULTIPLE_THEMES_ENDLESS_POSSIBILITIES,
  MAKE_EVERY_PIXEL_YOUR_BRAND,
  NEED_SOMETHING_TRULY_UNIQUE_SECTION,
  STYLE_YOUR_STACK_CTA_SECTION,

  // reseller page sections
  POWER_YOUR_NETWORK_CTA_SECTION,
  RESELLER_HERO_SECTION,
  RESELLER_COMPETITIVE_EDGE_SECTION,
  RESELLER_BRING_VENDORS_SECTION,
  GIVE_RESELLERS_FULL_AUTONOMY_SECTION,
  TURN_PARTNERS_INTO_GROWTH_ENGINE_SECTION
} from '@/lib/fragments';

export const PAGE_SECTIONS_BY_URI = gql`
  query PageSectionsByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      id
      title
      slug
      uri
      featuredImageId
      link
      pageBuilder {
        sections {
          __typename
          fieldGroupName
          ...HeroSection
          ...CloudInnovatorsSection
          ...TurningIdeasCloudPowerBusinessSection
          ...CloudPowerBusinessSection
          ...IntegratedCloudEcosystemSection
          ...StackConsoleFeaturesSection
          ...WhoIsForStackConsoleSection
          ...FaqsSection
          ...BeforeFooterCtaSection
          ...CloudCommercePlatformSection
          ...InfiniteCloudConsoleSection
          ...PlatformCapabilitiesGridSection
          ...ExperienceStackSection
          ...WhyChooseStackConsoleSection
          ...CloudIntegrationsHeroSection
          ...CloudIntegrationsPostsSection
          ...StackConsoleApisSection
          ...CloudIntegrationsCTASection
          ...StyleYourStackHeroSection
          ...MultipleThemesEndlessPossibilitiesSection
          ...PixelMatchSection
          ...NeedSomethingTrulyUnqiueSection
          ...StyleYourStackCtaSection
          ...PowerYourNetworkCtaSection
          ...ResellerHeroSection
          ...ResellerCompetitiveEdgeSection
          ...ResellerBringVendorsSection
          ...GiveResellersFullAutonomySection
          ...TurnPartnersIntoGrowthEngineSection
        }
      }
    }
  }
  ${HERO_SECTION}
  ${CLOUD_INNOVATORS_SECTION}
  ${TURNING_IDEAS_SECTION}
  ${CLOUD_POWER_BUSINESS_SECTION}
  ${INTEGRATED_CLOUD_ECOSYSTEM_SECTION}
  ${STACK_CONSOLE_FEATURES_SECTION}
  ${WHO_IS_FOR_STACK_CONSOLE_SECTION}
  ${FAQS_SECTION}
  ${BEFORE_FOOTER_CTA_SECTION}
  ${CLOUD_COMMERCE_PLATFORM_SECTION}
  ${INFINITE_CLOUD_CONSOLE_SECTION}
  ${PLATFORM_CAPABILITIES_GRID_SECTION}
  ${EXPERIENCE_STACK_SECTION}
  ${WHY_CHOOSE_STACK_CONSOLE_SECTION}
  ${CLOUD_INTEGRATIONS_HERO_SECTION}
  ${CLOUD_INTEGRETIONS_POSTS}
  ${STACK_CONSOLE_APIS_SECTION}
  ${CLOUD_INTEGRETIONS_CTA}
  ${STYLE_YOUR_STACK_HERO_SECTION}
  ${MULTIPLE_THEMES_ENDLESS_POSSIBILITIES}
  ${MAKE_EVERY_PIXEL_YOUR_BRAND}
  ${NEED_SOMETHING_TRULY_UNIQUE_SECTION}
  ${STYLE_YOUR_STACK_CTA_SECTION}
  ${POWER_YOUR_NETWORK_CTA_SECTION}
  ${RESELLER_HERO_SECTION}
  ${RESELLER_COMPETITIVE_EDGE_SECTION}
  ${RESELLER_BRING_VENDORS_SECTION}
  ${GIVE_RESELLERS_FULL_AUTONOMY_SECTION}
  ${TURN_PARTNERS_INTO_GROWTH_ENGINE_SECTION}
`;
