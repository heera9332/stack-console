import { wp } from '@/lib/graphql';
import { gql } from 'graphql-request';
import { PAGE_SECTIONS_BY_URI } from '@/lib/graphql-queries';

export async function getPageByUri(uri: string) {
  const data = await wp.request(PAGE_SECTIONS_BY_URI, { uri });
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
  const data = await wp.request(query);
  return (data?.pages?.nodes ?? []).map((n: any) => n.uri).filter(Boolean);
}
