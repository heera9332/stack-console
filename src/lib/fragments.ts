// fragments.ts
import { gql } from 'graphql-request';

export const HERO_SECTION = gql`
  fragment HeroSection on PageBuilderSectionsHeroLayout {
    fieldGroupName
    content
    tryDemoLink
    tryDemoLabel
    subHeading
    requestADemoLink
    requestADemoLabel
    heading
    headingHighlighted
    heroImage {
      node {
        altText
        link
      }
    }
  }
`;

export const CLOUD_INNOVATORS_SECTION = gql`
  fragment CloudInnovatorsSection on PageBuilderSectionsCloudInnovatorsLayout {
    fieldGroupName
    headinSufix
    headingPrefix
    sectionHeading
  }
`;

export const TURNING_IDEAS_SECTION = gql`
  fragment TurningIdeasCloudPowerBusinessSection on PageBuilderSectionsTurningideascloudpowerbusinessLayout {
    fieldGroupName
    author
    description1
    description2
    heading
    stats {
      fieldGroupName
      description
      prefix
      suffix
      value
    }
  }
`;

export const CLOUD_POWER_BUSINESS_SECTION = gql`
  fragment CloudPowerBusinessSection on PageBuilderSectionsCloudPowerBusinessLayout {
    fieldGroupName
    description
    heading
    video {
      fieldGroupName
      imageovervideo {
        node {
          altText
          link
        }
      }
      overImage
      videoUrl
      videoPoster {
        node {
          altText
          link
        }
      }
    }
  }
`;

export const INTEGRATED_CLOUD_ECOSYSTEM_SECTION = gql`
  fragment IntegratedCloudEcosystemSection on PageBuilderSectionsIntegratedCloudEcosystemLayout {
    fieldGroupName
    description
    heading
    platforms {
      fieldGroupName
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
    fieldGroupName
    description
    heading
    features {
      fieldGroupName
      name
      featureDescription
      featureButtonLabel
      featureButtonLink
      videoSection {
        fieldGroupName
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
    fieldGroupName
    description
    headign
    tabs {
      fieldGroupName
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
    fieldGroupName
    heading
    questions {
      fieldGroupName
      question
      answer
    }
  }
`;

export const BEFORE_FOOTER_CTA_SECTION = gql`
  fragment BeforeFooterCtaSection on PageBuilderSectionsBeforefooterctaLayout {
    fieldGroupName
    heading
    description
    talkToTeamLabel
    talkToTeamLink
    tryALiveDemo
  }
`;

export const CLOUD_COMMERCE_PLATFORM_SECTION = gql`
  fragment CloudCommercePlatformSection on PageBuilderSectionsCloudCommercePlatformLayout {
    fieldGroupName
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
    fieldGroupName
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

export const PLATFORM_CAPABILITIES_GRID_SECTION = gql`
  fragment PlatformCapabilitiesGridSection on PageBuilderSectionsPlatformCapabilitiesGridLayout {
    fieldGroupName
  }
`;

export const EXPERIENCE_STACK_SECTION = gql`
  fragment ExperienceStackSection on PageBuilderSectionsExperienceStackLayout {
    fieldGroupName
  }
`;

export const WHY_CHOOSE_STACK_CONSOLE_SECTION = gql`
  fragment WhyChooseStackConsoleSection on PageBuilderSectionsWhyChooseStackConsoleLayout {
    fieldGroupName
  }
`;

export const CLOUD_INTEGRATIONS_HERO_SECTION = gql`
  fragment CloudIntegrationsHeroSection on PageBuilderSectionsCloudIntegrationsHeroLayout {
    fieldGroupName
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
    description
    brandLogos {
      fieldGroupName
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
    fieldGroupName
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
