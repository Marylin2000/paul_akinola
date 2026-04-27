import type { GlobalConfig } from 'payload'

export const Offerings: GlobalConfig = {
  slug: 'offerings',
  label: 'Work / Offerings Section',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'offerings',
      type: 'array',
      label: 'Offerings',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'lede', type: 'textarea', required: true },
        {
          name: 'details',
          type: 'array',
          label: 'Detail Blocks',
          fields: [
            { name: 'headline', type: 'text', required: true },
            { name: 'body', type: 'textarea', required: true },
          ],
        },
        {
          name: 'image',
          type: 'group',
          fields: [
            { name: 'url', type: 'text' },
            { name: 'alt', type: 'text' },
          ],
        },
      ],
      defaultValue: [
        {
          title: 'Individuals',
          lede: 'Work often begins beneath performance—where habits, fear, and identity meet pressure. That layer is data, not noise.',
          details: [
            { headline: 'Awareness', body: 'See what you avoid, what drains you, and what steers choices before you rationalise—or you keep fixing the wrong layer.' },
            { headline: 'Clarity', body: 'Tell what is happening apart from what you fear is happening, so shame gives way to something workable.' },
            { headline: 'Direction', body: 'Align who you are becoming with values, energy, and next decisions—not only the role you were trained to fill.' },
            { headline: 'Growth', body: 'Build capacity under strain: steadier judgement, repaired trust, and honesty when resources get tight.' },
            { headline: 'Personal transformation', body: 'The slower work of identity, belief, and meaning—what actually decides whether change lasts.' },
          ],
          image: { url: '/images/32.png', alt: 'Calm mountain vista suggesting space for reflection' },
        },
        {
          title: 'Teams',
          lede: 'Talent is rarely the whole story—teams crack when purpose blurs, incentives tug apart, and collaboration systems eat good intent.',
          details: [
            { headline: 'Shared purpose', body: 'A reason beyond tasks—sharp enough to test in trade-offs when priorities collide and pressure spikes.' },
            { headline: 'Better decisions', body: 'Trade-offs and dissent land better when flow, ownership, and rewards are visible—not only heroic judgement.' },
            { headline: 'Aligned effort', body: 'Aim energy at the same risks instead of scattering it across vague mandates and hidden bottlenecks.' },
            { headline: 'Healthier ways of working together', body: 'Safety without avoidance, accountability without cruelty—feedback and conflict people can actually sustain.' },
          ],
          image: { url: '/images/9a.png', alt: 'Team collaborating around a table' },
        },
        {
          title: 'Organisations',
          lede: 'Beneath charts lie living systems—structures, rituals, and signals—that quietly make outcomes more or less likely.',
          details: [
            { headline: 'Structure for performance', body: 'Roles, cadence, handoffs, and feedback people can keep under load—grounded in real constraints.' },
            { headline: 'Growth', body: 'Match pace to capability: what to scale, simplify, or slow before drag silently wins.' },
            { headline: 'Revenue', body: 'Pipeline truth over forecast theatre—signal, lifecycle, and definitions leadership can trust.' },
            { headline: 'Systems that support better outcomes', body: 'Tools, rituals, incentives, and weekly narratives—worthy of the same scrutiny as strategy slides.' },
          ],
          image: { url: '/images/2.png', alt: 'City buildings representing organisational structure' },
        },
      ],
    },
  ],
}
