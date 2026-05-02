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
      defaultValue: "You've never looked at it this way before.",
      admin: { description: 'Text before the italic word (e.g. "When")' },
    },
    {
      name: 'titleItalic',
      type: 'text',
      defaultValue: '',
      admin: { description: 'The highlighted italic word in the headline' },
    },
    {
      name: 'titleSuffix',
      type: 'text',
      defaultValue: '',
      admin: { description: 'Text after the italic word' },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Most outcomes are shaped by something just beneath the surface. I help organisations find it in their revenue. I help people find it in themselves.',
    },
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'Organisational Systems · Human Systems',
    },
    {
      name: 'quote',
      type: 'text',
      required: true,
      defaultValue: 'Organisational systems · Revenue, GTM & CRM · Human systems · Behaviour, clarity & transformation',
      admin: { description: 'Legacy fallback for the credential anchor' },
    },
    {
      name: 'credentialAnchor',
      type: 'text',
      defaultValue: 'Organisational systems · Revenue, GTM & CRM · Human systems · Behaviour, clarity & transformation',
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
