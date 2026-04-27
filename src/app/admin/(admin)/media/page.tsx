import { cookies } from 'next/headers';
import { payload } from '@/lib/payload/api';
import { MediaLibrary } from '@/components/admin/MediaLibrary';

async function getMedia() {
  const cookieStore = await cookies();
  const token = cookieStore.get('payload-token')?.value;
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'http://localhost:3000/api'}/media?limit=100`, {
      headers: token ? { Authorization: `JWT ${token}` } : {},
    });
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error('Failed to fetch media:', error);
    return [];
  }
}

export default async function MediaPage() {
  const mediaItems = await getMedia();

  return <MediaLibrary initialMedia={mediaItems} />;
}
