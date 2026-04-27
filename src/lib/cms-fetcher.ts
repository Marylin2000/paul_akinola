import { thoughts as fallbackThoughts } from "@/data/thoughts";
import { Thought } from "./types-cms";
import { getPayload } from "payload";
import config from "@payload-config";

// Helper to convert Payload's Lexical JSON back into the simple newline-delimited string the frontend expects
function extractLexicalText(node: any): string {
  if (!node) return "";
  if (node.type === "text") return node.text || "";
  if (Array.isArray(node.children)) {
    const joined = node.children.map(extractLexicalText).join("");
    return node.type === "paragraph" || node.type === "heading" ? joined + "\n\n" : joined;
  }
  // For the root node
  if (node.root) return extractLexicalText(node.root).trim();
  return "";
}

function adaptThought(doc: any): Thought {
  // If the content is an object (Lexical JSON), parse it out. Else return as string.
  const contentStr = typeof doc.content === 'object' ? extractLexicalText(doc.content) : String(doc.content);
  return {
    ...doc,
    content: contentStr,
  } as Thought;
}

export async function getThoughts(): Promise<Thought[]> {
  try {
    const payload = await getPayload({ config });
    const result = await (payload.find as any)({
      collection: 'articles',
      limit: 100,
      sort: '-date',
    });
    
    if (result.docs.length > 0) {
      return result.docs.map(adaptThought);
    }
  } catch (error) {
    console.error("Failed to fetch articles from Payload:", error);
  }
  
  // Provide hardcoded fallback
  return fallbackThoughts as Thought[];
}

export async function getThoughtBySlug(slug: string): Promise<Thought | null> {
  try {
    const payload = await getPayload({ config });
    const result = await (payload.find as any)({
      collection: 'articles',
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    });
    
    if (result.docs.length > 0) {
      return adaptThought(result.docs[0]);
    }
  } catch (error) {
    console.error(`Failed to fetch article by slug ${slug}:`, error);
  }
  
  const thought = fallbackThoughts.find((t) => t.slug === slug);
  return (thought as Thought) || null;
}

export async function getFeaturedThoughts(): Promise<Thought[]> {
  try {
    const payload = await getPayload({ config });
    // Just fetch latest 3
    const result = await (payload.find as any)({
      collection: 'articles',
      limit: 3,
      sort: '-date',
    });
    
    if (result.docs.length > 0) {
      return result.docs.map(adaptThought);
    }
  } catch (error) {
    console.error("Failed to fetch featured articles from Payload:", error);
  }
  
  return fallbackThoughts.slice(0, 3) as Thought[];
}
