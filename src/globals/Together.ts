import type { GlobalConfig } from 'payload';

export const Together: GlobalConfig = {
  slug: 'together',
  label: 'Together Page',
  admin: {
    group: 'Pages',
    description: 'Manage content for the Together (Contact) page',
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
            { name: 'subTitle', type: 'text', defaultValue: 'Work Together' },
            { name: 'mainTitle', type: 'text', defaultValue: 'If this feels familiar, this is a good place to start.' },
            { name: 'description', type: 'textarea', defaultValue: 'Sometimes what is missing is not more effort. It is a clearer understanding of what is actually shaping the outcome. This page is where that understanding turns into conversation.' },
          ],
        },
        {
          label: 'Relevance',
          fields: [
            { name: 'title', type: 'text', defaultValue: 'This may be for you if any of these feel familiar.' },
            { name: 'p1', type: 'textarea', defaultValue: 'You do not need to arrive with the full language for it. Sometimes it is enough to know that something is not adding up.' },
            {
              name: 'recognitionPoints',
              type: 'array',
              fields: [
                { name: 'point', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'Method',
          fields: [
            { name: 'principlesTitle', type: 'text', defaultValue: 'We start by understanding what is actually going on.' },
            { name: 'principlesP', type: 'textarea', defaultValue: 'I do not start by forcing a framework over your situation. I start by listening carefully... helping you see the structure more clearly.' },
            {
              name: 'principles',
              type: 'array',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'body', type: 'textarea', required: true },
              ],
            },
            { name: 'stepsTitle', type: 'text', defaultValue: 'How it starts' },
            { name: 'stepsP', type: 'textarea', defaultValue: 'Simple. Start with a short note about what is not adding up.' },
            {
              name: 'steps',
              type: 'array',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'body', type: 'textarea', required: true },
              ],
            },
          ],
        },
        {
          label: 'Contact',
          fields: [
            { name: 'contactTitle', type: 'text', defaultValue: 'Start a conversation' },
            { name: 'contactP', type: 'textarea', defaultValue: 'If you are trying to make sense of what is not adding up, send a short note. Start where you are. We can work out the rest from there.' },
          ],
        },
        {
          label: 'Context',
          fields: [
            { name: 'contextTitle', type: 'text', defaultValue: 'Where this usually shows up' },
            { name: 'workLabel', type: 'text', defaultValue: 'In work' },
            { name: 'workP', type: 'textarea', defaultValue: 'This may show up in performance, growth, revenue, CRM structure, team alignment, leadership decisions, or the gap between activity and real outcomes.' },
            { name: 'lifeLabel', type: 'text', defaultValue: 'In life' },
            { name: 'lifeP', type: 'textarea', defaultValue: 'This may show up in clarity, identity, internal conflict, repeated patterns, direction, faith, hope, or the sense that something deeper is shaping how you respond.' },
          ],
        },
        {
          label: 'Return Paths',
          fields: [
            { name: 'returnTitle', type: 'text', defaultValue: 'Or keep exploring first.' },
            {
              name: 'returns',
              type: 'array',
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'body', type: 'textarea' },
                { name: 'href', type: 'text' },
                { name: 'label', type: 'text' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
