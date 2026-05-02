import type { GlobalConfig } from 'payload';

const defaultSources = [
  { title: 'The CRM', body: 'Where deals live, but not always why they move or stall' },
  { title: 'The product', body: 'Where behaviour happens, but rarely reaches the people responsible for pipeline' },
  { title: 'Web analytics', body: 'Where intent shows up, but disconnected from revenue outcomes' },
  { title: 'Campaign tools', body: 'Where activity is tracked, but attribution stays murky' },
  { title: 'The spreadsheet', body: 'Where someone built the truth, outside every system' },
  { title: 'The conversation', body: 'Where real intelligence lives, in Slack threads and email chains that never get recorded' },
];

const defaultStories = [
  {
    num: '01',
    metric: '+196%',
    metricLabel: 'Subscriber Growth',
    title: 'When the growth motion does not fit the business',
    preview: 'The motion was built for acquisition. The business needed activation. Changing the system changed everything.',
    slug: 'growth-motion-fits-business',
  },
  {
    num: '02',
    metric: '+40%',
    metricLabel: 'Pipeline Growth',
    title: 'When CRM architecture blocks revenue clarity',
    preview: 'The CRM was recording activity. It was not supporting decisions. Rebuilding the architecture changed what leadership could see and trust.',
    slug: 'crm-structure-revenue-outcomes',
  },
  {
    num: '03',
    metric: '96%',
    metricLabel: 'Faster Insights',
    title: 'When revenue systems hide what matters',
    preview: 'The dashboards existed. But the foundation underneath them was not built for clarity. Fixing the structure fixed the reporting.',
    slug: 'revenue-system-truth',
  },
  {
    num: '04',
    metric: '+50%',
    metricLabel: 'Activation',
    title: 'When product signal never becomes go-to-market action',
    preview: 'Product data existed. It just never reached the people responsible for pipeline. Connecting the systems changed what sales could act on.',
    slug: 'pipeline-volume-hides-weak-signal',
  },
];

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
              defaultValue: defaultSources,
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
          label: 'Examples',
          fields: [
            { name: 'storiesLabel', type: 'text', defaultValue: 'Case Studies' },
            { name: 'storiesTitle', type: 'text', defaultValue: 'Real examples. Real outcomes.' },
            { name: 'storiesDesc', type: 'textarea', defaultValue: '' },
            {
              name: 'storiesList',
              type: 'array',
              defaultValue: defaultStories,
              fields: [
                { name: 'num', type: 'text' },
                { name: 'metric', type: 'text' },
                { name: 'metricLabel', type: 'text' },
                { name: 'title', type: 'text', required: true },
                { name: 'preview', type: 'textarea', required: true },
                { name: 'slug', type: 'text' },
              ],
            },
          ],
        },
        {
          label: 'Closing CTA',
          fields: [
            { name: 'goDeeperLabel', type: 'text', defaultValue: 'Closing' },
            { name: 'goDeeperTitle', type: 'text', defaultValue: 'Ready to see what is actually shaping your pipeline?' },
            { name: 'goDeeperP1', type: 'text', defaultValue: '' },
            { name: 'goDeeperBtn', type: 'text', defaultValue: 'Start a Conversation' },
            { name: 'goDeeperBtnLink', type: 'text', defaultValue: '/together#contact' },
            { name: 'secondaryCtaLabel', type: 'text', defaultValue: 'Read the thinking behind the work' },
            { name: 'secondaryCtaHref', type: 'text', defaultValue: '/thoughts?category=work' },
            { name: 'footerLine', type: 'text', defaultValue: 'Clarity on the systems that shape how we live, lead, and grow.' },
          ],
        },
      ],
    },
  ],
};
