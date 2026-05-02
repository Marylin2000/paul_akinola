import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  label: 'About Page',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Pages',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            { name: 'heroTitlePrefix', type: 'text', required: true, defaultValue: 'I try to arrive empty.' },
            { name: 'heroTitleItalic', type: 'text', defaultValue: '' },
            { name: 'heroDescription', type: 'textarea', required: true, defaultValue: 'I pay attention to how things work—in systems, in people, and in myself. This is the simplest place to understand the person behind the lens.' },
            {
              name: 'heroStats',
              type: 'array',
              required: true,
              minRows: 3,
              maxRows: 3,
              fields: [
                { name: 'num', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
              ]
            },
            {
              name: 'heroImage',
              type: 'group',
              fields: [
                { name: 'url', type: 'text', required: true, defaultValue: '/images/bg-clean.png' },
                { name: 'quote', type: 'text', required: true, defaultValue: 'Systems shape outcomes' }
              ]
            }
          ]
        },
        {
          label: 'Worldview',
          fields: [
            { name: 'worldviewTitle', type: 'text', required: true, defaultValue: 'How I see the' },
            { name: 'worldviewTitleItalic', type: 'text', required: true, defaultValue: 'world' },
            { name: 'worldviewDescription', type: 'textarea', required: true, defaultValue: "A lens that helps me make sense of what's really happening—beneath the surface, beyond the obvious, behind the noise." },
            { name: 'worldviewQuote', type: 'textarea', required: true, defaultValue: 'Most visible problems are being shaped by something deeper.' },
            {
              name: 'worldviewCards',
              type: 'array',
              required: true,
              minRows: 3,
              maxRows: 3,
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'shortTitle', type: 'text', required: true },
                { name: 'content', type: 'textarea', required: true },
                { name: 'colorA', type: 'text', required: true },
                { name: 'colorB', type: 'text', required: true }
              ]
            }
          ]
        },
        {
          label: 'Journey',
          fields: [
            { name: 'journeyTitle', type: 'text', required: true, defaultValue: 'My Journey' },
            {
              name: 'realizationCard',
              type: 'group',
              fields: [
                { name: 'title', type: 'text', required: true, defaultValue: 'The Visible vs. The Real' },
                { name: 'p1', type: 'textarea', required: true, defaultValue: 'I did not start with this language. I started by trying to make things work—growth, teams, decisions, outcomes, momentum.' },
                { name: 'quote', type: 'text', required: true, defaultValue: '"The visible problem is rarely the real one."' },
                { name: 'p2', type: 'textarea', required: true, defaultValue: 'That changed how I worked. I began paying closer attention to structure, signal, behaviour, and what was happening underneath the surface.' }
              ]
            },
            {
              name: 'shiftCard',
              type: 'group',
              fields: [
                { name: 'title', type: 'text', required: true, defaultValue: 'The Shift' },
                { name: 'content', type: 'textarea', required: true, defaultValue: 'From surface metrics to underlying systems. From quick fixes to structural clarity.' }
              ]
            },
            {
              name: 'beyondWorkCard',
              type: 'group',
              fields: [
                { name: 'title', type: 'text', required: true, defaultValue: 'Beyond Work' },
                { name: 'content', type: 'textarea', required: true, defaultValue: 'That shift moved beyond work—into faith, formation, and the inner life.' }
              ]
            },
            {
              name: 'expressionCard',
              type: 'group',
              fields: [
                { name: 'quote', type: 'textarea', required: true, defaultValue: '"This site is an expression of that journey. Not a finished answer. A clearer way of seeing."' }
              ]
            },
            { name: 'professionalBlock', type: 'textarea', defaultValue: 'Professionally I work as a Revenue Architect, building the systems between marketing, sales and product that make growth visible and trustworthy. Over ten years in B2B SaaS and technology. The same lens I apply to organisations I apply to people. It has always been the same work.' }
          ]
        },
        {
          label: 'Values',
          fields: [
            { name: 'valuesTitle', type: 'text', defaultValue: 'What Matters' },
            {
              name: 'valuesList',
              type: 'array',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'description', type: 'textarea' }
              ]
            }
          ]
        },
        {
          label: 'Gallery & Mechanics',
          fields: [
            {
              name: 'galleryImages',
              type: 'array',
              fields: [
                { name: 'url', type: 'text' },
                { name: 'alt', type: 'text' }
              ]
            },
            { name: 'mechanicsTitle', type: 'text', defaultValue: 'How I work' },
            { name: 'mechanicsP1', type: 'textarea', defaultValue: 'I work with individuals, teams, and organisations who are trying to make sense of what is really shaping their outcomes.' },
            { name: 'mechanicsP2', type: 'textarea', defaultValue: 'Sometimes that shows up in performance, growth, revenue, or structure. Sometimes it shows up more personally—clarity, direction, or the tension between what someone intends and how they are actually living.' },
            { name: 'mechanicsQuote', type: 'textarea', defaultValue: '"I am most useful where something important is happening, but the real issue has not been named clearly enough yet."' },
            {
              name: 'workAreas',
              type: 'array',
              fields: [
                { name: 'id', type: 'text' },
                { name: 'label', type: 'text' },
                { name: 'desc', type: 'text' }
              ]
            }
          ]
        },
        {
          label: 'Site Meaning & Next Paths',
          fields: [
            { name: 'siteMeaningTitle', type: 'text', defaultValue: 'What this site is' },
            { name: 'siteMeaningContent', type: 'textarea' },
            { name: 'nextPathsTitle', type: 'text', defaultValue: 'Where to next?' },
            {
              name: 'nextPathsList',
              type: 'array',
              fields: [
                { name: 'title', type: 'text' },
                { name: 'desc', type: 'text' },
                { name: 'href', type: 'text' },
                { name: 'btnText', type: 'text' }
              ]
            },
            { name: 'closingLine', type: 'text', defaultValue: 'I’m still learning. Still paying attention. Still connecting the dots.' },
            { name: 'footerLine', type: 'text', defaultValue: 'Clarity on the systems that shape how we live, lead, and grow.' }
          ]
        }
      ]
    }
  ],
}
