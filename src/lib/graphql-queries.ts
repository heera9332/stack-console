import { gql } from 'graphql-request';

export const PAGE_SECTIONS_BY_URI = gql`
  query PageSectionsByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      id
      title
      uri
      pageBuilder {
        sections {
          __typename
          fieldGroupName
          ... on PageBuilderSectionsHeroLayout {
            content
            heading
            headingHighlighted
            requestADemoLabel
            requestADemoLink
            tryDemoLabel
            tryDemoLink
            fieldGroupName
            heroImage {
              node {
                id
                altText
                link
              }
            }
          }
          # add other section layouts here...
        }
      }
    }
  }
`;
