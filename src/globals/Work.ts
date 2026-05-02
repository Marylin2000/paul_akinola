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
            { name: 'heroTitleStatic', type: 'text', defaultValue: "Do you know what's driving your pipeline, what's slowing it down, and what needs to change before it costs you?" },
            { name: 'heroTitleHighlight', type: 'text', defaultValue: "" },
            { name: 'heroP1', type: 'textarea', defaultValue: "I work with B2B organisations to find what is actually shaping their pipeline: the architecture, the signals, the gaps between teams. Then build the infrastructure that makes growth visible, trustworthy and repeatable." },
            { name: 'heroP2', type: 'textarea', defaultValue: "" },
            { name: 'heroStatValue', type: 'text', defaultValue: '95%' },
            { name: 'heroStatLabelTop', type: 'text', defaultValue: 'Systems drive' },
            { name: 'heroStatLabelBot', type: 'text', defaultValue: 'of outcomes' },
          ],
        },
        {
          label: 'Surface vs Root',
          fields: [
            { name: 'surfaceLabel', type: 'text', defaultValue: 'Surface vs Root Cause' },
            { name: 'surfaceTitle', type: 'textarea', defaultValue: "The data exists. The visibility doesn't." },
            { name: 'surfaceDesc', type: 'textarea', defaultValue: "Most revenue teams are not short of data. They are short of signal. Because the data that should tell the full story is scattered across six places that rarely talk to each other." },
            {
              name: 'sources',
              type: 'array',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'body', type: 'textarea', required: true },
              ],
            },
            { name: 'surfaceClosingLine', type: 'textarea', defaultValue: "When these six don't connect, no one can see what is driving revenue, what to scale, what to kill, or what is coming next." },
          ],
        },
        {
          label: 'Reframes',
          fields: [
            { name: 'reframesTitle', type: 'text', defaultValue: 'Your system is either working for your revenue, or quietly working against it.' },
            { name: 'reframesBody1', type: 'textarea', defaultValue: 'The starting point is always an audit. Not of effort or headcount, but of what exists, how it is being used, how it connects, and where the signal breaks down before it reaches the people who need it.' },
            { name: 'reframesBody2', type: 'textarea', defaultValue: 'When you can see that clearly, the picture changes. You stop fixing symptoms and start building infrastructure that actually supports how revenue moves.' },
            { name: 'reframesClosingLine', type: 'text', defaultValue: 'That is the work.' },
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
            { name: 'storiesLabel', type: 'text', defaultValue: 'Case Studies' },
            { name: 'storiesTitle', type: 'text', defaultValue: 'Real examples. Real outcomes.' },
            { name: 'storiesDesc', type: 'textarea', defaultValue: '' },
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
            { name: 'goDeeperLabel', type: 'text', defaultValue: 'Closing' },
            { name: 'goDeeperTitle', type: 'text', defaultValue: 'Ready to see what is actually shaping your pipeline?' },
            { name: 'goDeeperP1', type: 'text', defaultValue: '' },
            { name: 'goDeeperBtn', type: 'text', defaultValue: 'Start a Conversation' },
            { name: 'goDeeperBtnLink', type: 'text', defaultValue: '/together#contact' },
            { name: 'secondaryCtaLabel', type: 'text', defaultValue: 'Read the thinking behind the work' },
            { name: 'secondaryCtaHref', type: 'text', defaultValue: '/thoughts?category=work' },
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
