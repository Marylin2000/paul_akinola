import { notFound } from 'next/navigation';
import { PageEditor } from '@/components/admin/PageEditor';

const validPages = ['home', 'work', 'inner-life', 'thoughts', 'about', 'together', 'build'];

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  if (!validPages.includes(slug)) {
    return notFound();
  }

  return <PageEditor pageSlug={slug} />;
}
