
import { cookies } from 'next/headers';
import { payload } from '@/lib/payload/api';
import UserEditor from '@/components/admin/UserEditor';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get('payload-token')?.value;

  let initialData = null;

  if (id !== 'new') {
    try {
      initialData = await payload.getUser(id, token);
    } catch (error) {
      console.error('Failed to fetch user:', error);
      return notFound();
    }
  }

  return <UserEditor userId={id} initialData={initialData} />;
}
