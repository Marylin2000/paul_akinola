import { getPayload } from 'payload'
import config from '@payload-config'
import { thoughts as mockArticles } from '@/data/thoughts'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payload = await getPayload({ config })
    
    let seededCount = 0

    // Loop through the mock data and create documents in the Articles collection
    for (const article of mockArticles) {
      const existing = await (payload.find as any)({
        collection: 'articles',
        where: { slug: { equals: article.slug } },
        limit: 1,
      })

      if (existing?.docs?.length === 0) {
        await (payload.create as any)({
          collection: 'articles',
          data: {
            title: article.title,
            slug: article.slug,
            tag: article.tag,
            excerpt: article.excerpt,
            date: article.date || new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
            // Lexical expects JSON, so we just wrap the string to avoid errors or provide plain text 
            // The cms-fetcher `extractLexicalText` gracefully handles raw strings if we accidentally provide string,
            // but we can provide a basic Lexical node to be proper.
            content: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,
                    children: [
                      {
                        type: 'text',
                        text: article.content,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        detail: 0,
                        version: 1
                      }
                    ]
                  }
                ]
              }
            },
            question: article.question || '',
            image: article.image || { url: '', alt: '' },
          },
        })
        seededCount++
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: `Seeding completed successfully. Seeded ${seededCount} new articles.` 
    })
  } catch (error) {
    console.error('Error during seeding:', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}
