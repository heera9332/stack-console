// app/[[...slug]]/page.tsx
import { notFound } from 'next/navigation';
import { getAllPageUris, getPageByUri } from '@/lib/wp';
import SectionRenderer from '@/sections/SectionRenderer';

export const revalidate = 60;
export const dynamicParams = true;

function toUri(slug?: string[]) {
  if (!slug || slug.length === 0) return '/home/';
  return `/${slug.join('/')}/`;
}

export async function generateStaticParams() {
  const uris = await getAllPageUris();
  return uris
    .map((u) => u.replace(/^\/|\/$/g, ''))
    .filter(Boolean)
    .map((path) => ({ slug: path.split('/') }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>; // <-- Promise to satisfy generated type
}) {
  const { slug } = await params;        // <-- resolve it
  const uri = toUri(slug);
  const page = await getPageByUri(uri);
  if (!page) return notFound();

  return (
    <main>
      <h1 className="sr-only">{page.title}</h1>
      <SectionRenderer sections={page.pageBuilder?.sections || []} />
    </main>
  );
}
