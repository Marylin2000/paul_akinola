
import { cookies } from 'next/headers';
import Link from 'next/link';
import { Plus, Search, Filter, MoreVertical, Calendar, Tag, ChevronRight } from 'lucide-react';
import { payload } from '@/lib/payload/api';
import { cn } from '@/lib/utils';

async function getArticles() {
  const cookieStore = await cookies();
  const token = cookieStore.get('payload-token')?.value;
  
  try {
    const data = await payload.getArticles(token);
    return data.docs || [];
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    return [];
  }
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            Articles
          </h1>
          <p className="text-neutral-400 mt-2">Manage your thoughts and writings.</p>
        </div>
        <Link 
          href="/admin/articles/new"
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-5 py-3 rounded-xl font-semibold transition-all active:scale-[0.98] shadow-lg shadow-purple-500/20"
        >
          <Plus className="w-5 h-5" />
          Create New Article
        </Link>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-purple-400 transition-colors" />
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all text-white"
          />
        </div>
        <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-3 rounded-xl hover:bg-white/10 transition-all text-neutral-400 hover:text-white">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {articles.length === 0 ? (
          <div className="col-span-full py-20 text-center bg-white/5 border border-dashed border-white/10 rounded-3xl">
            <p className="text-neutral-500">No articles found. Start by creating one!</p>
          </div>
        ) : (
          articles.map((article: any) => (
            <Link 
              key={article.id} 
              href={`/admin/articles/${article.id}`}
              className="group relative flex flex-col bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Image Preview / Gradient if no image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {article.image?.url ? (
                  <img 
                    src={article.image.url} 
                    alt={article.image.alt || article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                    <div className="relative w-full h-full opacity-30">
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 via-transparent to-blue-600/40" />
                    </div>
                  </div>
                )}
                
                {/* Overlay status */}
                <div className="absolute top-4 right-4">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border",
                    article._status === 'published' 
                      ? "bg-green-500/20 text-green-400 border-green-500/20" 
                      : "bg-amber-500/20 text-amber-400 border-amber-500/20"
                  )}>
                    {article._status || 'Draft'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-purple-400 uppercase tracking-wider">
                    <Tag className="w-3 h-3" />
                    {article.tag}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </div>

                <p className="text-neutral-400 text-sm line-clamp-2 flex-1">
                  {article.excerpt}
                </p>

                <div className="pt-4 mt-auto border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium">
                    <Calendar className="w-4 h-4" />
                    {article.date || 'No date'}
                  </div>
                  <div className="text-neutral-600 group-hover:text-purple-400 transition-all transform translate-x-0 group-hover:translate-x-1">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
