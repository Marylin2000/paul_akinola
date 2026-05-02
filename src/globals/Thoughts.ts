import type { GlobalConfig } from 'payload';

export const Thoughts: GlobalConfig = {
  slug: 'thoughts-page',
  label: 'Thoughts Page',
  admin: {
    group: 'Pages',
    description: 'Manage content for the Thoughts landing page',
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
            { name: 'heroBadge', type: 'text', defaultValue: 'Thoughts & Reflections' },
            { name: 'heroTitlePrefix', type: 'text', defaultValue: 'This is where I think' },
            { name: 'heroTitleHighlight', type: 'text', defaultValue: 'out loud' },
            { name: 'heroDescription', type: 'textarea', defaultValue: 'Most of these ideas do not start as frameworks. They start as observations. Things I notice in work, in people, and in myself. Over time, they begin to connect.' },
          ],
        },
        {
          label: 'Start Here',
          fields: [
            { name: 'startLabel', type: 'text', defaultValue: 'Orientation' },
            { name: 'startTitle', type: 'text', defaultValue: 'New to the systems lens?' },
            { name: 'startDescription', type: 'textarea', defaultValue: 'These three reflections offer a helpful foundation for how to read everything else on this site.' },
            {
              name: 'startItems',
              type: 'array',
              fields: [
                { name: 'num', type: 'text' },
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea' },
                { name: 'slug', type: 'text' },
              ],
            },
          ],
        },
        {
          label: 'Featured & Journal',
          fields: [
            { name: 'featuredLabel', type: 'text', defaultValue: 'Featured' },
            { name: 'featuredTitle', type: 'text', defaultValue: 'A few thoughts to start with.' },
            {
              name: 'featuredSlugs',
              type: 'array',
              fields: [{ name: 'slug', type: 'text' }],
            },
            { name: 'journalLabel', type: 'text', defaultValue: 'Journal' },
            { name: 'journalTitle', type: 'text', defaultValue: 'Notes and Reflections' },
            { name: 'journalDescription', type: 'text', defaultValue: 'Ongoing reading, observations, and inquiries.' },
            { name: 'journalFilteredPrefix', type: 'text', defaultValue: 'Showing reflections tagged with' },
          ],
        },
        {
          label: 'Cross Paths',
          fields: [
            { name: 'crossTitle', type: 'text', defaultValue: 'Not sure where to go next?' },
            { name: 'crossDescription', type: 'textarea', defaultValue: 'Choose a path that resonates with where you are.' },
            {
              name: 'crossPaths',
              type: 'array',
              fields: [
                { name: 'label', type: 'text' },
                { name: 'support', type: 'textarea' },
                { name: 'href', type: 'text' },
                { name: 'cta', type: 'text' },
              ],
            },
            { name: 'footerLine', type: 'text', defaultValue: 'Clarity on the systems that shape how we live, lead, and grow.' },
          ],
        },
      ],
    },
  ],
};
