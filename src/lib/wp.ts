import { wp } from '@/lib/graphql';
import { gql } from 'graphql-request';
import { PAGE_SECTIONS_BY_URI } from '@/lib/graphql-queries';
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