import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { getThoughts } from "@/lib/cms-fetcher";
import Navigation from "@/components/ui/Navigation";
import { Thought } from "@/lib/types-cms";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const allThoughts: Thought[] = await getThoughts();
  
  const categoryMap: { [key: string]: string } = {
    "work": "Work",
    "inner-life": "Life",
    "core": "Core"
  };

  const selectedCategory = categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
  const filteredThoughts = allThoughts.filter(t => t.tag === selectedCategory);

  if (filteredThoughts.length === 0 && !categoryMap[category]) {
      return (
        <main className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center p-6">
          <div className="text-center">
            <h1 className="text-4xl font-serif text-stone-900 dark:text-stone-100 mb-4">Category not found</h1>
            <p className="text-stone-600 dark:text-stone-400 mb-8">This corner of the journal seems empty for now.</p>
            <Link 
              href="/thoughts"
              className="inline-flex items-center text-stone-900 dark:text-stone-100 font-medium hover:gap-2 transition-all"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> All Thoughts
            </Link>
          </div>
        </main>
      );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-stone-950 transition-colors duration-500">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <header className="mb-20">
            <Link 
              href="/thoughts"
              className="inline-flex items-center text-stone-500 dark:text-stone-400 text-sm hover:text-stone-900 dark:hover:text-stone-100 transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> All Thoughts
            </Link>
            <h1 className="text-5xl md:text-6xl font-serif text-stone-900 dark:text-stone-100 mb-6 capitalize">
              {selectedCategory}
            </h1>
            <p className="text-xl text-stone-500 dark:text-stone-400 font-light max-w-2xl">
              Clarity on the systems that shape outcomes in {selectedCategory.toLowerCase()}.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredThoughts.map((thought) => (
              <Link 
                key={thought.slug}
                href={`/thoughts/${category}/${thought.slug}`}
                className="group border-b border-stone-100 dark:border-stone-900 pb-12 block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-primary/60">
                    {thought.tag}
                  </span>
                  {thought.date && (
                    <span className="flex items-center gap-1.5 text-[0.65rem] text-stone-400 uppercase tracking-widest">
                      <Clock className="w-3 h-3" />
                      {thought.date}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-serif text-stone-900 dark:text-stone-100 group-hover:text-primary transition-colors mb-4 leading-tight">
                  {thought.title}
                </h2>
                <p className="text-stone-500 dark:text-stone-400 font-light line-clamp-2">
                  {thought.excerpt}
                </p>
              </Link>
            ))}
          </div>

          {filteredThoughts.length === 0 && (
            <div className="py-20 text-center border border-dashed border-stone-200 dark:border-stone-800 rounded-3xl">
              <p className="text-stone-400 italic">No articles found in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
