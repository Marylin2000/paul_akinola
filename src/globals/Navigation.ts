import type { GlobalConfig } from 'payload';

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigation',
  admin: {
    group: 'Site',
    description: 'Manage site-wide navigation labels and links',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
      defaultValue: [
        { name: 'Home', href: '/' },
        { name: 'Work', href: '/work' },
        { name: 'Build', href: '/build' },
        { name: 'Thoughts', href: '/thoughts' },
        { name: 'Inner Life', href: '/inner-life' },
        { name: 'About', href: '/about' },
        { name: 'Together', href: '/together' },
      ],
    },
    { name: 'ctaLabel', type: 'text', defaultValue: 'Start a Conversation' },
    { name: 'ctaMobileLabel', type: 'text', defaultValue: 'Contact' },
    { name: 'ctaHref', type: 'text', defaultValue: '/together#contact' },
    { name: 'mobileBrand', type: 'text', defaultValue: 'Paul Akinola' },
  ],
};
