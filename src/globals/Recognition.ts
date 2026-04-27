import type { GlobalConfig } from 'payload'

export const Recognition: GlobalConfig = {
  slug: 'recognition',
  label: 'Recognition Section',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'titlePrefix',
      type: 'text',
      required: true,
      defaultValue: 'Most problems do not start',
    },
    {
      name: 'titleSuffix',
      type: 'text',
      required: true,
      defaultValue: 'where they show up.',
    },
    {
      name: 'lines',
      type: 'array',
      label: 'Lines',
      fields: [
        { name: 'text', type: 'text', required: true },
        { name: 'insight', type: 'text', required: false },
      ],
      defaultValue: [
        { text: 'Performance drops, but the issue is not always effort.', insight: 'Look at the system, not just the person.' },
        { text: 'Growth slows, but the issue is not always ambition.', insight: 'Examine the structure beneath the surface.' },
        { text: 'Decisions feel unclear, but the issue is not always intelligence.', insight: 'Clarity often comes from seeing the whole picture.' },
      ],
    },
    {
      name: 'footerTitle',
      type: 'text',
      required: true,
      defaultValue: 'Beneath the surface',
    },
    {
      name: 'footerBody',
      type: 'textarea',
      required: true,
      defaultValue:
        'Something is happening beneath the surface, and without clarity, it is hard to fix what you cannot fully see.',
    },
  ],
}
