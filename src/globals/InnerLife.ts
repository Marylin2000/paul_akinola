import type { GlobalConfig } from 'payload';

export const InnerLife: GlobalConfig = {
  slug: 'inner-life',
  label: 'Inner Life Page',
  admin: {
    group: 'Pages',
    description: 'Manage content for the Systems in Life page',
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
            { name: 'heroPrefix', type: 'text', defaultValue: 'Systems in Life' },
            { name: 'heroTitleStatic', type: 'text', defaultValue: 'You can feel it, ' },
            { name: 'heroTitleHighlight', type: 'text', defaultValue: "but you can't fully explain it." },
            { name: 'heroP1', type: 'textarea', defaultValue: "You're thinking. You're trying. You're moving forward." },
            { name: 'heroP2', type: 'textarea', defaultValue: "But something still doesn't sit right." },
            { name: 'heroQuote', type: 'textarea', defaultValue: "The inner world has its own architecture." },
          ],
        },
        {
          label: 'Setup',
          fields: [
            { name: 'setupLabel', type: 'text', defaultValue: 'The Invisible System' },
            { name: 'setupP1', type: 'textarea', defaultValue: "What you're experiencing is not random. How you think, respond, and move through life is shaped by systems — beliefs, patterns, identity, memory, and pressure." },
            { name: 'setupP2', type: 'textarea', defaultValue: "Most of it runs quietly in the background, shaping the world you see and the choices you make." },
          ],
        },
        {
          label: 'Reframes',
          fields: [
            { name: 'reframesTitle', type: 'text', defaultValue: 'The visible struggle is rarely the root issue.' },
            {
              name: 'reframesList',
              type: 'array',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'surface', type: 'text', required: true },
                { name: 'insight', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'The Shift',
          fields: [
            { name: 'shiftLabel', type: 'text', defaultValue: 'The Shift' },
            { name: 'shiftTitle1', type: 'text', defaultValue: "What you're experiencing " },
            { name: 'shiftHighlight', type: 'text', defaultValue: 'is not random.' },
            { name: 'shiftP1', type: 'textarea', defaultValue: 'There are systems within you shaping how you think, respond, and move. When you begin to see them, things start to make more sense.' },
          ],
        },
        {
          label: 'Stories',
          fields: [
            { name: 'storiesLabel', type: 'text', defaultValue: 'System Stories' },
            { name: 'storiesTitle', type: 'text', defaultValue: 'Real examples of how inner systems shape outcomes.' },
            { name: 'storiesDesc', type: 'textarea', defaultValue: 'These are patterns observed in people working through complex professional and personal transitions.' },
            {
              name: 'storiesList',
              type: 'array',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'preview', type: 'textarea', required: true },
                { name: 'full', type: 'textarea', required: true },
                { name: 'metric', type: 'text' },
                { name: 'metricLabel', type: 'text' },
              ],
            },
          ],
        },
        {
          label: 'Go Deeper & Next Paths',
          fields: [
            { name: 'goDeeperLabel', type: 'text', defaultValue: 'Closing' },
            { name: 'goDeeperTitle', type: 'text', defaultValue: 'Ready to understand what is actually shaping your outcomes?' },
            { name: 'goDeeperP1', type: 'text', defaultValue: '' },
            { name: 'goDeeperBtn', type: 'text', defaultValue: 'Start a Conversation' },
            { name: 'goDeeperBtnLink', type: 'text', defaultValue: '/together#contact' },
            { name: 'secondaryCtaLabel', type: 'text', defaultValue: 'Read the thinking behind the life lens' },
            { name: 'secondaryCtaHref', type: 'text', defaultValue: '/thoughts?category=life' },
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
