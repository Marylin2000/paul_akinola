
import { cookies } from 'next/headers';
import { payload } from '@/lib/payload/api';
import { ArticleEditor } from '@/components/admin/ArticleEditor';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get('payload-token')?.value;

  let initialData = null;

  if (id !== 'new') {
    try {
      const data = await payload.getArticle(id, token);
      initialData = data;
    } catch (error) {
      console.error('Failed to fetch article:', error);
      return notFound();
    }
  }

  return <ArticleEditor articleId={id} initialData={initialData} />;
}
