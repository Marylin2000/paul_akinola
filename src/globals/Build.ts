import type { GlobalConfig } from 'payload';

export const Build: GlobalConfig = {
  slug: 'build',
  label: 'Build Page',
  admin: {
    group: 'Pages',
    description: 'Manage content for the Build page',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            { name: 'heroBadge', type: 'text', defaultValue: 'Systems at Work' },
            { name: 'heroTitle1', type: 'text', defaultValue: 'Builds' },
            { name: 'heroTitle2', type: 'text', defaultValue: 'That Scale' },
            { name: 'heroP1', type: 'textarea', defaultValue: 'A closer look at the systems I design across growth, revenue, CRM, and GTM.' },
            { name: 'heroP2', type: 'textarea', defaultValue: 'I work in the space between Marketing, Sales, Product, and Engineering—building the architecture that makes visibility from lead to profit possible. Some call this Revenue Operations. Others call it Marketing Operations. I think of it as revenue systems design.' },
          ],
        },
        {
          label: 'What I Build',
          fields: [
            { name: 'whatIBuildTitle', type: 'text', defaultValue: 'The architecture behind the growth.' },
            {
              name: 'buildItems',
              type: 'array',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'category', type: 'text' },
                { name: 'metric', type: 'text' },
                { name: 'description', type: 'textarea' },
              ],
            },
          ],
        },
        {
          label: 'Proof Points',
          fields: [
            { name: 'proofTitle', type: 'text', defaultValue: 'Impact & Scale' },
            {
              name: 'statsList',
              type: 'array',
              fields: [
                { name: 'value', type: 'text', required: true },
                { name: 'suffix', type: 'text' },
                { name: 'label', type: 'text' },
                { name: 'description', type: 'textarea' },
              ],
            },
            {
              name: 'industriesList',
              type: 'array',
              fields: [
                { name: 'name', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'System Stories',
          fields: [
            { name: 'storiesTitle', type: 'text', defaultValue: 'Real systems. Real impact.' },
            {
              name: 'storiesList',
              type: 'array',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'metric', type: 'text' },
                { name: 'description', type: 'textarea' },
                { name: 'category', type: 'text' },
              ],
            },
          ],
        },
        {
          label: 'Tools Built',
          fields: [
            { name: 'toolsTitle', type: 'text', defaultValue: 'The Stack' },
            {
              name: 'toolsList',
              type: 'array',
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'category', type: 'text' },
                { name: 'description', type: 'textarea' },
              ],
            },
          ],
        },
        {
          label: 'CTA',
          fields: [
            { name: 'ctaTitle', type: 'text', defaultValue: 'Connect the dots between your systems, your teams, and your revenue.' },
            { name: 'ctaBtn', type: 'text', defaultValue: 'Start a build conversation' },
          ],
        },
      ],
    },
  ],
};
