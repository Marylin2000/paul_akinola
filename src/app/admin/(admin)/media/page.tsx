
import { cookies } from 'next/headers';
import { payload } from '@/lib/payload/api';
import { ImageIcon, Calendar, Tag, MoreVertical, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            Media Library
          </h1>
          <p className="text-neutral-400 mt-2">Manage your uploaded assets.</p>
        </div>
        <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-5 py-3 rounded-xl font-semibold transition-all active:scale-[0.98] shadow-lg shadow-purple-500/20">
          <Plus className="w-5 h-5" />
          Upload New Media
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
        {mediaItems.length === 0 ? (
          <div className="col-span-full py-20 text-center bg-white/5 border border-dashed border-white/10 rounded-3xl">
            <p className="text-neutral-500">No media found.</p>
          </div>
        ) : (
          mediaItems.map((item: any) => (
            <div key={item.id} className="group relative aspect-square bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all">
              <img 
                src={item.url} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <p className="text-[10px] font-mono text-white truncate">{item.filename}</p>
                <p className="text-[10px] text-neutral-400">{item.width}x{item.height}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
