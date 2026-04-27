import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  labels: {
    singular: 'Article',
    plural: 'Articles',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'tag', 'date', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g. "my-article-title")',
      },
    },
    {
      name: 'tag',
      type: 'select',
      required: true,
      options: [
        { label: 'Work', value: 'Work' },
        { label: 'Inner Life', value: 'Inner Life' },
        { label: 'Core', value: 'Core' },
      ],
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
    },
    {
      name: 'date',
      type: 'text',
      admin: {
        description: 'Display date (e.g. "January 2024")',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'question',
      type: 'text',
      admin: {
        description: 'Optional closing question or reflection prompt',
      },
    },
    {
      name: 'image',
      type: 'group',
      fields: [
        { name: 'url', type: 'text' },
        { name: 'alt', type: 'text' },
      ],
    },
  ],
}
