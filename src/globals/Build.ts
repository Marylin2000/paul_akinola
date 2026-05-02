import type { GlobalConfig } from 'payload';
import { buildDefault } from '../lib/defaults-cms';

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
            { name: 'heroBadge', type: 'text', defaultValue: buildDefault.heroBadge },
            { name: 'heroTitle1', type: 'text', defaultValue: buildDefault.heroTitle1 },
            { name: 'heroTitle2', type: 'text', defaultValue: buildDefault.heroTitle2 },
            { name: 'heroP1', type: 'textarea', defaultValue: buildDefault.heroP1 },
            { name: 'heroP2', type: 'textarea', defaultValue: buildDefault.heroP2 },
          ],
        },
        {
          label: 'What I Build',
          fields: [
            { name: 'whatIBuildTitle', type: 'text', defaultValue: buildDefault.whatIBuildTitle },
            {
              name: 'buildItems',
              type: 'array',
              defaultValue: buildDefault.buildItems,
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea' },
                { name: 'icon', type: 'text', defaultValue: 'Database' },
                { 
                  name: 'size', 
                  type: 'select', 
                  options: ['large', 'medium', 'small'],
                  defaultValue: 'small' 
                },
                { name: 'gradient', type: 'text' },
                { name: 'color', type: 'text' },
              ],
            },
          ],
        },
        {
          label: 'Proof Points',
          fields: [
            { name: 'proofTitle', type: 'text', defaultValue: buildDefault.proofTitle },
            {
              name: 'statsList',
              type: 'array',
              defaultValue: buildDefault.statsList,
              fields: [
                { name: 'value', type: 'text', required: true },
                { name: 'suffix', type: 'text' },
                { name: 'label', type: 'text' },
                { name: 'description', type: 'textarea' },
                { name: 'icon', type: 'text', defaultValue: 'Trophy' },
                { name: 'gradient', type: 'text', defaultValue: 'from-amber-500 to-orange-600' },
              ],
            },
            {
              name: 'industriesList',
              type: 'array',
              defaultValue: buildDefault.industriesList,
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'company', type: 'text' },
                { name: 'color', type: 'text' },
                { name: 'icon', type: 'text', defaultValue: 'Briefcase' },
              ],
            },
          ],
        },
        {
          label: 'System Stories',
          fields: [
            { name: 'storiesTitle', type: 'text', defaultValue: buildDefault.storiesTitle },
            {
              name: 'storiesList',
              type: 'array',
              defaultValue: buildDefault.storiesList,
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'pain', type: 'textarea' },
                { name: 'change', type: 'textarea' },
                {
                  name: 'metrics',
                  type: 'array',
                  fields: [{ name: 'value', type: 'text' }],
                },
                { name: 'icon', type: 'text' },
                { name: 'gradient', type: 'text' },
                { name: 'accentColor', type: 'text' },
              ],
            },
          ],
        },
        {
          label: 'Tools Built',
          fields: [
            { name: 'toolsTitle', type: 'text', defaultValue: buildDefault.toolsTitle },
            {
              name: 'toolsList',
              type: 'array',
              defaultValue: buildDefault.toolsList,
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'category', type: 'text' },
                { name: 'description', type: 'textarea' },
                { name: 'icon', type: 'text', defaultValue: 'Award' },
                {
                  name: 'tags',
                  type: 'array',
                  fields: [{ name: 'value', type: 'text' }],
                },
                { name: 'gradient', type: 'text', defaultValue: 'from-violet-500 to-purple-600' },
              ],
            },
          ],
        },
        {
          label: 'CTA',
          fields: [
            { name: 'ctaTitle', type: 'text', defaultValue: buildDefault.ctaTitle },
            { name: 'ctaBtn', type: 'text', defaultValue: buildDefault.ctaBtn },
          ],
        },
      ],
    },
  ],
};
