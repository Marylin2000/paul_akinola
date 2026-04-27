import type { GlobalConfig } from 'payload';

export const Work: GlobalConfig = {
  slug: 'work',
  label: 'Work Page',
  admin: {
    group: 'Pages',
    description: 'Manage content for the Systems at Work page',
  },
  access: {
    read: () => true, // Publicly readable
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            { name: 'heroPrefix', type: 'text', defaultValue: 'Systems at Work' },
            { name: 'heroTitleStatic', type: 'text', defaultValue: 'Something ' },
            { name: 'heroTitleHighlight', type: 'text', defaultValue: "isn't adding up." },
            { name: 'heroP1', type: 'textarea', defaultValue: "You're putting in the work. The team is active. Things are moving." },
            { name: 'heroP2', type: 'textarea', defaultValue: "But the results don't fully reflect it." },
            { name: 'heroStatValue', type: 'text', defaultValue: '95%' },
            { name: 'heroStatLabelTop', type: 'text', defaultValue: 'Systems drive' },
            { name: 'heroStatLabelBot', type: 'text', defaultValue: 'of outcomes' },
          ],
        },
        {
          label: 'Surface vs Root',
          fields: [
            { name: 'surfaceLabel', type: 'text', defaultValue: 'Surface vs Root Cause' },
            { name: 'surfaceTitle', type: 'textarea', defaultValue: "What you're seeing is only part of the picture." },
            { name: 'surfaceDesc', type: 'textarea', defaultValue: "Most of what shapes performance, growth, and decision-making sits underneath — in how things are structured, how signals move, and how work actually connects." },
          ],
        },
        {
          label: 'Reframes',
          fields: [
            { name: 'reframesTitle', type: 'text', defaultValue: 'The Reframes' },
            { name: 'reframesDesc', type: 'textarea', defaultValue: 'Common organisational problems, and what they usually look like when you view them as systemic issues.' },
            {
              name: 'reframesList',
              type: 'array',
              fields: [
                { name: 'surfaceProblem', type: 'text', required: true },
                { name: 'rootCause', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'The Shift',
          fields: [
            { name: 'shiftLabel', type: 'text', defaultValue: 'The Shift' },
            { name: 'shiftTitle1', type: 'text', defaultValue: "Most of what you're trying to fix " },
            { name: 'shiftHighlight', type: 'text', defaultValue: 'is not the real problem.' },
            { name: 'shiftP1', type: 'textarea', defaultValue: 'It is the system underneath it.' },
            { name: 'shiftP2', type: 'textarea', defaultValue: 'When you see that clearly, the problem — and your response — both change.' },
          ],
        },
        {
          label: 'Examples',
          fields: [
            { name: 'storiesLabel', type: 'text', defaultValue: 'Examples' },
            { name: 'storiesTitle', type: 'text', defaultValue: 'Systems in Practice' },
            { name: 'storiesDesc', type: 'textarea', defaultValue: 'How this approach has looked across different contexts—from growing startups to established teams.' },
            {
              name: 'storiesList',
              type: 'array',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'context', type: 'textarea', required: true },
                { name: 'intervention', type: 'textarea', required: true },
                { name: 'outcome', type: 'textarea', required: true },
              ],
            },
          ],
        },
        {
          label: 'Go Deeper & Next',
          fields: [
            { name: 'goDeeperLabel', type: 'text', defaultValue: 'Go Deeper' },
            { name: 'goDeeperTitle', type: 'text', defaultValue: 'If this resonates, the next step is not to do more.' },
            { name: 'goDeeperP1', type: 'text', defaultValue: 'It is to understand what is actually shaping these outcomes.' },
            { name: 'goDeeperBtn', type: 'text', defaultValue: 'Go deeper into Work' },
            { name: 'goDeeperBtnLink', type: 'text', defaultValue: '/thoughts' },
            { name: 'nextPathsTitle', type: 'text', defaultValue: 'Where to next?' },
            {
              name: 'nextPathsList',
              type: 'array',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
                { name: 'href', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
                { name: 'color', type: 'text' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
