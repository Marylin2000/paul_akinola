import type { GlobalConfig } from 'payload'

export const Hero: GlobalConfig = {
  slug: 'hero',
  label: 'Hero Section',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'titlePrefix',
      type: 'text',
      required: true,
      defaultValue: 'When',
      admin: { description: 'Text before the italic word (e.g. "When")' },
    },
    {
      name: 'titleItalic',
      type: 'text',
      required: true,
      defaultValue: 'something',
      admin: { description: 'The highlighted italic word in the headline' },
    },
    {
      name: 'titleSuffix',
      type: 'text',
      required: true,
      defaultValue: "isn't adding up.",
      admin: { description: 'Text after the italic word' },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Most outcomes are shaped by something beneath the surface. I help you see it clearly—so you can move with better judgment, stronger direction, and real change.',
    },
    {
      name: 'quote',
      type: 'text',
      required: true,
      defaultValue: 'Most problems do not start where they show up.',
      admin: { description: 'Floating quote card text' },
    },
    {
      name: 'image',
      type: 'group',
      fields: [
        { name: 'url', type: 'text', defaultValue: '/images/bg-clean.png' },
        { name: 'alt', type: 'text', defaultValue: 'Paul Akinola portrait' },
      ],
    },
  ],
}
