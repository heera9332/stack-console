// fragments.ts
import { gql } from 'graphql-request';

export const HERO_SECTION = gql`
  fragment HeroSection on PageBuilderSectionsHeroLayout {
    __typename
    subHeading
    heading
    highlightedHeading
    description
    scheduleMeetingLabel
    scheduleMeetingLink
    tryDemoLabel
    tryDemoLink
    trophyIcon {
      node {
        altText
        link
      }
    }
  }
`;

export const CLOUD_INNOVATORS_SECTION = gql`
  fragment CloudInnovatorsSection on PageBuilderSectionsCloudInnovatorsLayout {
    __typename
    heading
    headingSufix
    headingPrefix
    brandLogos {
      __typename
      logo {
        node {
          altText
          link
        }
      }
    }
  }
`;

export const TURNING_IDEAS_SECTION = gql`
  fragment TurningIdeasCloudPowerBusinessSection on PageBuilderSectionsTurningideascloudpowerbusinessLayout {
    __typename
    description1
    description2
    heading
    sectionImage {
      node {
        altText
        link
      }
    }
    stats {
      description
      __typename
      prefix
      suffix
      value
    }
  }
`;

export const CLOUD_POWER_BUSINESS_SECTION = gql`
  fragment CloudPowerBusinessSection on PageBuilderSectionsCloudPowerBusinessLayout {
    __typename
    description
    heading
    video {
      __typename
      imageOverVideo {
        node {
          altText
          link
        }
      }
      videoUrl
      videoPoster {
        node {
          altText
          link
        }
      }
      buttonLabel
    }
  }
`;

export const INTEGRATED_CLOUD_ECOSYSTEM_SECTION = gql`
  fragment IntegratedCloudEcosystemSection on PageBuilderSectionsIntegratedCloudEcosystemLayout {
    __typename
    description
    heading
    heading2
    platforms {
      __typename
      name
      logo {
        node {
          altText
          link
        }
      }
    }
  }
`;

export const STACK_CONSOLE_FEATURES_SECTION = gql`
  fragment StackConsoleFeaturesSection on PageBuilderSectionsStackConsoleFeaturesLayout {
    __typename
    description
    heading
    features {
      __typename
      name
      featureDescription
      featureButtonLabel
      featureButtonLink
      videoSection {
        __typename
        backgroundColor
        video
        videoCardTopBackgroundColor
        videoPoster {
          node {
            altText
            link
          }
        }
      }
    }
  }
`;

export const WHO_IS_FOR_STACK_CONSOLE_SECTION = gql`
  fragment WhoIsForStackConsoleSection on PageBuilderSectionsWhoIsForStackConsoleLayout {
    __typename
    description
    heading
    tabs {
      __typename
      heading
      description
      learnMoreLabel
      learnMoreLink
      tabImage {
        node {
          altText
          link
        }
      }
    }
  }
`;

export const FAQS_SECTION = gql`
  fragment FaqsSection on PageBuilderSectionsFaqsLayout {
    __typename
    heading
    questions {
      __typename
      question
      answer
    }
  }
`;

export const BEFORE_FOOTER_CTA_SECTION = gql`
  fragment BeforeFooterCtaSection on PageBuilderSectionsBeforefooterctaLayout {
    __typename
    heading
    description
    talkToTeamLabel
    talkToTeamLink
    tryALiveDemo
  }
`;

export const CLOUD_COMMERCE_PLATFORM_SECTION = gql`
  fragment CloudCommercePlatformSection on PageBuilderSectionsCloudCommercePlatformLayout {
    __typename
    heading
    highlightedHeading
    description
    requestADemo
    requestADemoLink
    icon {
      node {
        altText
        link
      }
    }
    sectionImage {
      node {
        altText
        link
      }
    }
  }
`;

export const INFINITE_CLOUD_CONSOLE_SECTION = gql`
  fragment InfiniteCloudConsoleSection on PageBuilderSectionsInfiniteCloudConsoleLayout {
    __typename
    heading
    description
    heroImage {
      node {
        altText
        link
      }
    }
  }
`;

// integrations page

export const PLATFORM_CAPABILITIES_GRID_SECTION = gql`
  fragment PlatformCapabilitiesGridSection on PageBuilderSectionsPlatformCapabilitiesGridLayout {
  __typename
  heading
  card1 { 
  cardImage {
      node {
        altText
        link
      }
    }
    description
    heading 
  }
  card2 { 
    cardImage {
      node {
        altText
        link
      }
    }
    description
    heading 
  }
  card3 { cardImage {
    node {
      altText
      link
    }
  }
  description
  heading }
  card4 { cardImage {
    node {
      altText
      link
    }
  }
  description
  heading }
  card5 { cardImage {
    node {
      altText
      link
    }
  }
  description
  heading }
  card6 { cardImage {
    node {
      altText
      link
    }
  }
  description
  heading }
  card7 { cardImage {
    node {
      altText
      link
    }
  }
  description
  heading }
  card8 { cardImage {
    node {
      altText
      link
    }
  }
  description
  heading }
  card9 { cardImage {
    node {
      altText
      link
    }
  }
  description
  heading }
  card10 { cardImage {
    node {
      altText
      link
    }
  }
  description
  heading }
}`;

export const EXPERIENCE_STACK_SECTION = gql`
  fragment ExperienceStackSection on PageBuilderSectionsExperienceStackLayout {
    __typename
  }
`;

export const WHY_CHOOSE_STACK_CONSOLE_SECTION = gql`
  fragment WhyChooseStackConsoleSection on PageBuilderSectionsWhyChooseStackConsoleLayout {
    __typename
  }
`;

export const CLOUD_INTEGRATIONS_HERO_SECTION = gql`
  fragment CloudIntegrationsHeroSection on PageBuilderSectionsCloudIntegrationsHeroLayout {
    __typename
    heading
    headingHighlighted
    integrationButtonLabel
    integrationButtonLink
    backgroundImage {
      node {
        altText
        link
      }
    }
    backgroundImageMobile {
      node {
        altText
        link
      }
    }
    description
    brandLogos {
      __typename
        logo {
          node {
            altText
            link
            }
        }
      }
  }
`;

export const CLOUD_INTEGRETIONS_POSTS = gql`
  fragment CloudIntegrationsPostsSection on PageBuilderSectionsCloudIntegrationsPostsLayout {
    __typename
    heading
    posts {
      nodes {
        ... on Post {
          id
          slug
          title
          excerpt
          content
          featuredImage {
            node {
              altText
              link
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  }
`;

export const STACK_CONSOLE_APIS_SECTION = gql`
  fragment StackConsoleApisSection on PageBuilderSectionsStackConsoleApisLayout {
      description
      __typename
      heading
      headingHighlighted
      sectionBackgroundImage {
        node {
          altText
          link
        }
      }
      sectionMainImage {
        node {
          altText
          link
        }
      }
      sectionMainImageMobile {
        node {
          altText
          link
        }
      }
  }
`;

export const CLOUD_INTEGRETIONS_CTA = gql`
  fragment CloudIntegrationsCTASection on PageBuilderSectionsCloudIntegrationsCtaLayout {
    __typename
    heading
    description
    actionButtonLabel
    actionButtonLink
    heroImage {
      node {
        altText
        link
      }
    }
  }
`;

// style your stack page

export const STYLE_YOUR_STACK_HERO_SECTION = gql`
  fragment StyleYourStackHeroSection on PageBuilderSectionsStyleYourStackHeroLayout {
    __typename
    heading
    highlightedHeading
    description
    
    cta {
      label
      link
      __typename
    }
    ctaOutlined {
      label
      __typename
      link
    }
    heroImage {
      node {
        altText
        link
      }
    }
      
    sectionBackgroundImage {
      node {
        altText
        link
      }
    }
  }
`;

export const MULTIPLE_THEMES_ENDLESS_POSSIBILITIES = gql`
  fragment MultipleThemesEndlessPossibilitiesSection on PageBuilderSectionsMultipleThemesAndEndlessPossibilitiesLayout {
    __typename
    heading
    description
    scTabs {
      __typename
      tabLabel 
      tabDescription
      
      tabContentBackground
      tabContentDescription
      tabContentImage {
          node {
            altText
            link
          }
      }
    }
  }
`;

export const MAKE_EVERY_PIXEL_YOUR_BRAND = gql`
  fragment PixelMatchSection on PageBuilderSectionsPixelMatchLayout {
    __typename
    heading
    headingHighlighted
    scFeatures {
      __typename
      heading
      points {
        __typename
        point      
      }
      featureIcon {
        node {
          altText
          link
        }
      }
    }
  }
`;

export const NEED_SOMETHING_TRULY_UNIQUE_SECTION = gql`
  fragment  NeedSomethingTrulyUnqiueSection on PageBuilderSectionsSomethingTrulyUniqueLayout  {
  heading
  description
  backgroundImage {
    node {
      altText
      link
    }
  }
  backgroundImageMobile {
    node {
      altText
      link
    }
  }

  sectionImage {
    node {
      altText
      link
    }
  }
  sectionImageMobile {
    node {
      altText
      link
    }
  }
}`;

export const STYLE_YOUR_STACK_CTA_SECTION = gql`
  fragment  StyleYourStackCtaSection on PageBuilderSectionsStyleYourBrandCtaLayout {
  descriptionHightlightedWords
  heading
  description
  __typename
  sectionBackgroundImage {
    node {
      altText
      link
    }
  }
  sectionBackgroundImageMobile {
    node {
      altText
      link
    }
  }
  cta {
    __typename
    label
    link
  }  
}`;

// reseller page
export const POWER_YOUR_NETWORK_CTA_SECTION = gql`
  fragment PowerYourNetworkCtaSection on PageBuilderSectionsPowerYourNetworkCtaLayout {
    description
    heading
    headingHighlighted
    cta {
      __typename
      label
      link
    }
    backgroundImage {
      node {
        altText
        link
      }
    }
    backgroundImageMobile {
      node {
        altText
        link
      }
    }
    __typename
  }
`;

export const RESELLER_HERO_SECTION = gql`
  fragment ResellerHeroSection on PageBuilderSectionsResellerHeroLayout {
    __typename
    description
    videoUrl
    headingHighlighted
    heading
    videoPoster {
      node {
        altText
        link
      }
    }
    cta {
      __typename
      label
      link
    }
  }
`;

export const RESELLER_COMPETITIVE_EDGE_SECTION = gql`
  fragment ResellerCompetitiveEdgeSection on PageBuilderSectionsResellerCompetitiveEdgeLayout {
    __typename
    description
    heading
    headingHighlighted
    edgeCards {
      __typename
      cardDescription
      cardHeading
      icon {
        node {
          altText
          link
        }
      }
    }
  }
`;

export const RESELLER_BRING_VENDORS_SECTION = gql`
  fragment ResellerBringVendorsSection on PageBuilderSectionsResellerBringVendorsLayout {
    __typename
    description
    heading
    cta {
      __typename
      label
      link
    }
    vendorCards {
      __typename
      cardDescription
      heading
      headingHighlighted
      headingHighlightedColor
    }
  }
`;

export const GIVE_RESELLERS_FULL_AUTONOMY_SECTION = gql`
  fragment GiveResellersFullAutonomySection on PageBuilderSectionsGiveResellersFullAutonomyLayout {
    __typename
    description
    heading
    resellerBenefits {
      __typename
      imageAlignment
      heading
      footerType
      description
      cardImage {
        node {
          altText
          link
        }
      }
      cardInnerContent {
        __typename
        heading
        points {
          __typename
          point
        }
      }
    }
  }
`;

export const TURN_PARTNERS_INTO_GROWTH_ENGINE_SECTION = gql`
  fragment TurnPartnersIntoGrowthEngineSection on PageBuilderSectionsTurnPartnersIntoGrowthEngineLayout {
    __typename
    descriptions
    heading
    highlightedWords {
      __typename
      color
      word
    }
    sectionImage {
      node {
        altText
        link
      }
    }
  }
`;
