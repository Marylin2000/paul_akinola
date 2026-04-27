import type { GlobalConfig } from 'payload'

export const PersonalAnchor: GlobalConfig = {
  slug: 'personal-anchor',
  label: 'Personal Anchor Section',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      defaultValue: 'A anchor for personal clarity.',
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
      defaultValue:
        "When work gets complex, clarity isn't just a luxury—it's a requirement. I help you build the internal structures that keep you grounded and effective.",
    },
    {
      name: 'image',
      type: 'group',
      fields: [
        { name: 'url', type: 'text', defaultValue: '/images/pa.png' },
        { name: 'alt', type: 'text', defaultValue: 'Personal Anchor visualisation' },
      ],
    },
  ],
}
