
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { GlobalEditor } from '@/components/admin/GlobalEditor';
import { globalSchemas } from '@/components/admin/schemas';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const schema = globalSchemas[slug];

  if (!schema) {
    // Fallback or generic schema if slug not explicitly defined
    // but we defined most of them
    return notFound();
  }

  return <GlobalEditor slug={slug} label={schema.label} config={schema} />;
}
