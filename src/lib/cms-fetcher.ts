import { thoughts } from "@/data/thoughts";
import { Thought } from "./types-cms";

export async function getThoughts(): Promise<Thought[]> {
  // Simulate network latency or async fetching if needed
  return thoughts as Thought[];
}

export async function getThoughtBySlug(slug: string): Promise<Thought | null> {
  const thought = thoughts.find((t) => t.slug === slug);
  return (thought as Thought) || null;
}

export async function getFeaturedThoughts(): Promise<Thought[]> {
  // Just return the first three as featured for now
  return thoughts.slice(0, 3) as Thought[];
}
