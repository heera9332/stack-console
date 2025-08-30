import { wp } from '@/lib/graphql';
import { gql } from 'graphql-request';
import { PAGE_SECTIONS_BY_URI } from '@/lib/graphql-queries';
import type { NavData } from '@/types/sections-props';
import type { PageSectionsByUriQuery, PageSectionsByUriQueryVariables } from '../gql/__generated__/graphql';

export async function getPageByUri(uri: string) {
  const data = await wp.request<PageSectionsByUriQuery, PageSectionsByUriQueryVariables>(PAGE_SECTIONS_BY_URI, { uri });
  
  return data?.page ?? null;
}

export async function getAllPageUris(): Promise<string[]> {
  const query = gql`
    query AllPageUris {
      pages(first: 1000, where: { status: PUBLISH }) {
        nodes { uri }
      }
    }
  `;

  const data = await wp.request<{
    pages?: { nodes?: Array<{ uri?: string | null }> };
  }>(query);

  console.log("data", data)
  const uris =
    data?.pages?.nodes?.map(n => n?.uri).filter((u): u is string => !!u) ?? [];

    console.log(uris)
  // Normalize: ensure leading/trailing slash
  return uris.map(u => {
    const trimmed = u.replace(/^\/+|\/+$/g, "");
    return trimmed ? `/${trimmed}/` : "/";
  });
}

export async function getNavigation() {
  const query = gql`
    query NewQuery {
      scNavigation {
        headerNavigation {
          fieldGroupName
          footer {
            columns {
              fieldGroupName
              headling
              links {
                fieldGroupName
                link {
                  fieldGroupName
                  label
                  url
                }
              }
            }
            companyDescription
            fieldGroupName
            logoImage {
              node {
                altText
                link
              }
            }
            subscribe {
              buttonLabel
              fieldGroupName
              inputPlaceholder
              subscribeMessage
              successMessage
            }
          }
          topNav {
            cta {
              label
              fieldGroupName
              link
            }
            fieldGroupName
            logo {
              node {
                altText
                link
              }
            }
            logoDark {
              node {
                altText
                link
              }
            }
            navItems {
              fieldGroupName
              label
              link
              type
              icon {
                node {
                  altText
                  link
                }
              }
              megaMenu {
                description
                fieldGroupName
                title
                megaMenuItems {
                  description
                  fieldGroupName
                  icon {
                    node {
                      altText
                      link
                    }
                  }
                  itemHoverBackground
                  itemHoverTextColor
                  itemIconHoverBackgroundColorEnd
                  itemIconHoverBackgroundColorStart
                  itemIconHoverColor
                  link
                  title
                  preview {
                    description
                    fieldGroupName
                    title
                    backgroundImage {
                      node {
                        altText
                        link
                      }
                    }
                    card {
                      node {
                        altText
                        link
                      }
                    }
                    cta {
                      label
                      link
                      fieldGroupName
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await wp.request<{ scNavigation?: NavData['headerNavigation'] extends infer T ? { headerNavigation?: T | null } : never }>(query);

  const headerNavigation = data?.scNavigation?.headerNavigation ?? null;

  return {
    topNav: headerNavigation?.topNav ?? null,
    footer: headerNavigation?.footer ?? null,
    fieldGroupName: headerNavigation?.fieldGroupName ?? null,
  };
}