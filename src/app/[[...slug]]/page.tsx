import { notFound } from 'next/navigation';
import { getAllPageUris, getPageByUri } from '@/lib/wp';
import ScSectionRenderer from '@/sections/sc-section-renderer';
import type { PageSectionsByUriQuery } from '@/gql/__generated__/graphql';

export const revalidate = 60;
export const dynamicParams = true;

function toUri(slug?: string[]) {
  // Adjust your default route if needed ("/" vs "/home/")
  if (!slug || slug.length === 0) return '/home/';
  return `/${slug.join('/')}/`;
}

export async function generateStaticParams(): Promise<Array<{ slug?: string[] }>> {
  const uris = await getAllPageUris();
  return uris
    .map((u) => u.replace(/^\/|\/$/g, '')) // trim leading/trailing slash
    .filter(Boolean)
    .map((path) => ({ slug: path.split('/') }));
}

type Section =
  NonNullable<PageSectionsByUriQuery['page']>['pageBuilder']['sections'][number];
type SectionNullable = Section | null | undefined;

export default async function Page({
  params,
}: {
  params: { slug?: string[] }; // <-- plain object, not a Promise
}) {
  const uri = toUri(params.slug);
  const page = await getPageByUri(uri);
  if (!page) return notFound();

  // Null-safe sections extraction
  const sections = (page.pageBuilder?.sections ?? []) as SectionNullable[];

  return (
    <main>
      <h1 className="sr-only">{page.title}</h1>
      <ScSectionRenderer sections={sections} />
    </main>
  );
}
