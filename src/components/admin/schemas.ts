export const globalSchemas: Record<string, any> = {
  hero: {
    label: 'Hero Section',
    fields: [
      { name: 'titlePrefix', label: 'Title Prefix', type: 'text' },
      { name: 'titleItalic', label: 'Title Italic', type: 'text' },
      { name: 'titleSuffix', label: 'Title Suffix', type: 'text' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'quote', label: 'Quote Card', type: 'text' },
      {
        name: 'image',
        label: 'Main Image',
        type: 'group',
        fields: [
          { name: 'url', label: 'URL', type: 'text' },
          { name: 'alt', label: 'Alt Text', type: 'text' },
        ],
      },
    ],
  },
  offerings: {
    label: 'Work Offerings',
    fields: [
      {
        name: 'offerings',
        type: 'array',
        fields: [
          { name: 'title', type: 'text' },
          { name: 'lede', type: 'textarea' },
          {
            name: 'details',
            type: 'array',
            fields: [
              { name: 'headline', type: 'text' },
              { name: 'body', type: 'textarea' },
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
      },
    ],
  },
  recognition: {
    label: 'Recognition Section',
    fields: [
      { name: 'titlePrefix', label: 'Title Prefix', type: 'text' },
      { name: 'titleSuffix', label: 'Title Suffix', type: 'text' },
      {
        name: 'lines',
        label: 'Insight Lines',
        type: 'array',
        fields: [
          { name: 'text', label: 'Text', type: 'text' },
          { name: 'insight', label: 'Insight', type: 'text' },
        ],
      },
      { name: 'footerTitle', label: 'Footer Title', type: 'text' },
      { name: 'footerBody', label: 'Footer Body', type: 'textarea' },
    ],
  },
  'personal-anchor': {
    label: 'Personal Anchor Section',
    fields: [
      { name: 'headline', label: 'Headline', type: 'text' },
      { name: 'body', label: 'Body Text', type: 'textarea' },
      {
        name: 'image',
        label: 'Visualisation',
        type: 'group',
        fields: [
          { name: 'url', label: 'Image URL', type: 'text' },
          { name: 'alt', label: 'Alt Text', type: 'text' },
        ],
      },
    ],
  },
  about: {
    label: 'About Page',
    fields: [
      {
        name: 'tabs',
        type: 'tabs',
        tabs: [
          {
            label: 'Hero',
            fields: [
              { name: 'heroTitlePrefix', type: 'text' },
              { name: 'heroTitleItalic', type: 'text' },
              { name: 'heroDescription', type: 'textarea' },
              {
                name: 'heroStats',
                type: 'array',
                fields: [
                  { name: 'num', type: 'text' },
                  { name: 'label', type: 'text' },
                ],
              },
              {
                name: 'heroImage',
                type: 'group',
                fields: [
                  { name: 'url', type: 'text' },
                  { name: 'quote', type: 'text' },
                ],
              },
            ],
          },
          {
            label: 'Worldview',
            fields: [
              { name: 'worldviewTitle', type: 'text' },
              { name: 'worldviewTitleItalic', type: 'text' },
              { name: 'worldviewDescription', type: 'textarea' },
              { name: 'worldviewQuote', type: 'textarea' },
              {
                name: 'worldviewCards',
                type: 'array',
                fields: [
                  { name: 'title', type: 'text' },
                  { name: 'shortTitle', type: 'text' },
                  { name: 'content', type: 'textarea' },
                  { name: 'colorA', type: 'text' },
                  { name: 'colorB', type: 'text' },
                ],
              },
            ],
          },
          {
            label: 'Journey',
            fields: [
              { name: 'journeyTitle', type: 'text' },
              {
                name: 'realizationCard',
                type: 'group',
                fields: [
                  { name: 'title', type: 'text' },
                  { name: 'p1', type: 'textarea' },
                  { name: 'quote', type: 'text' },
                  { name: 'p2', type: 'textarea' },
                ],
              },
              {
                name: 'shiftCard',
                type: 'group',
                fields: [
                  { name: 'title', type: 'text' },
                  { name: 'content', type: 'textarea' },
                ],
              },
              {
                name: 'beyondWorkCard',
                type: 'group',
                fields: [
                  { name: 'title', type: 'text' },
                  { name: 'content', type: 'textarea' },
                ],
              },
              {
                name: 'expressionCard',
                type: 'group',
                fields: [
                  { name: 'quote', type: 'textarea' },
                ],
              },
            ],
          },
          {
            label: 'Values',
            fields: [
              { name: 'valuesTitle', type: 'text' },
              {
                name: 'valuesList',
                type: 'array',
                fields: [
                  { name: 'title', type: 'text' },
                  { name: 'description', type: 'textarea' },
                ],
              },
            ],
          },
          {
            label: 'Gallery & Mechanics',
            fields: [
              {
                name: 'galleryImages',
                type: 'array',
                fields: [
                  { name: 'url', type: 'text' },
                  { name: 'alt', type: 'text' },
                ],
              },
              { name: 'mechanicsTitle', type: 'text' },
              { name: 'mechanicsP1', type: 'textarea' },
              { name: 'mechanicsP2', type: 'textarea' },
              { name: 'mechanicsQuote', type: 'textarea' },
              {
                name: 'workAreas',
                type: 'array',
                fields: [
                  { name: 'id', type: 'text' },
                  { name: 'label', type: 'text' },
                  { name: 'desc', type: 'text' },
                ],
              },
            ],
          },
          {
            label: 'Site Meaning & Next Paths',
            fields: [
              { name: 'siteMeaningTitle', type: 'text' },
              { name: 'siteMeaningContent', type: 'textarea' },
              { name: 'nextPathsTitle', type: 'text' },
              {
                name: 'nextPathsList',
                type: 'array',
                fields: [
                  { name: 'title', type: 'text' },
                  { name: 'desc', type: 'text' },
                  { name: 'href', type: 'text' },
                  { name: 'btnText', type: 'text' },
                ],
              },
              { name: 'closingLine', type: 'text' },
              { name: 'footerLine', type: 'text' },
            ],
          },
        ],
      },
    ],
  },
  work: {
    label: 'Work Page',
    fields: [
      {
        name: 'tabs',
        type: 'tabs',
        tabs: [
          {
            label: 'Hero',
            fields: [
              { name: 'heroPrefix', type: 'text' },
              { name: 'heroTitleStatic', type: 'text' },
              { name: 'heroTitleHighlight', type: 'text' },
              { name: 'heroP1', type: 'textarea' },
              { name: 'heroP2', type: 'textarea' },
              { name: 'heroStatValue', type: 'text' },
              { name: 'heroStatLabelTop', type: 'text' },
              { name: 'heroStatLabelBot', type: 'text' },
            ],
          },
          {
            label: 'Surface vs Root',
            fields: [
              { name: 'surfaceLabel', type: 'text' },
              { name: 'surfaceTitle', type: 'textarea' },
              { name: 'surfaceDesc', type: 'textarea' },
            ],
          },
          {
            label: 'Reframes',
            fields: [
              { name: 'reframesTitle', type: 'text' },
              { name: 'reframesDesc', type: 'textarea' },
              {
                name: 'reframesList',
                type: 'array',
                fields: [
                  { name: 'surfaceProblem', type: 'text' },
                  { name: 'rootCause', type: 'text' },
                ],
              },
            ],
          },
          {
            label: 'The Shift',
            fields: [
              { name: 'shiftLabel', type: 'text' },
              { name: 'shiftTitle1', type: 'text' },
              { name: 'shiftHighlight', type: 'text' },
              { name: 'shiftP1', type: 'textarea' },
              { name: 'shiftP2', type: 'textarea' },
            ],
          },
          {
            label: 'Examples',
            fields: [
              { name: 'storiesLabel', type: 'text' },
              { name: 'storiesTitle', type: 'text' },
              { name: 'storiesDesc', type: 'textarea' },
              {
                name: 'storiesList',
                type: 'array',
                fields: [
                  { name: 'title', type: 'text' },
                  { name: 'context', type: 'textarea' },
                  { name: 'intervention', type: 'textarea' },
                  { name: 'outcome', type: 'textarea' },
                ],
              },
            ],
          },
          {
            label: 'Go Deeper & Next',
            fields: [
              { name: 'goDeeperLabel', type: 'text' },
              { name: 'goDeeperTitle', type: 'text' },
              { name: 'goDeeperP1', type: 'text' },
              { name: 'goDeeperBtn', type: 'text' },
              { name: 'goDeeperBtnLink', type: 'text' },
              { name: 'nextPathsTitle', type: 'text' },
              {
                name: 'nextPathsList',
                type: 'array',
                fields: [
                  { name: 'title', type: 'text' },
                  { name: 'description', type: 'textarea' },
                  { name: 'href', type: 'text' },
                  { name: 'label', type: 'text' },
                  { name: 'color', type: 'text' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  'inner-life': {
    label: 'Inner Life Page',
    fields: [
      {
        name: 'tabs',
        type: 'tabs',
        tabs: [
          {
            label: 'Hero',
            fields: [
              { name: 'heroPrefix', type: 'text' },
              { name: 'heroTitleStatic', type: 'text' },
              { name: 'heroTitleHighlight', type: 'text' },
              { name: 'heroP1', type: 'textarea' },
              { name: 'heroP2', type: 'textarea' },
              { name: 'heroQuote', type: 'textarea' },
            ],
          },
          {
            label: 'Setup',
            fields: [
              { name: 'setupLabel', type: 'text' },
              { name: 'setupP1', type: 'textarea' },
              { name: 'setupP2', type: 'textarea' },
            ],
          },
          {
            label: 'Reframes',
            fields: [
              { name: 'reframesTitle', type: 'text' },
              {
                name: 'reframesList',
                type: 'array',
                fields: [
                  { name: 'title', type: 'text' },
                  { name: 'surface', type: 'text' },
                  { name: 'insight', type: 'text' },
                ],
              },
            ],
          },
          {
            label: 'The Shift',
            fields: [
              { name: 'shiftLabel', type: 'text' },
              { name: 'shiftTitle1', type: 'text' },
              { name: 'shiftHighlight', type: 'text' },
              { name: 'shiftP1', type: 'textarea' },
            ],
          },
          {
            label: 'Stories',
            fields: [
              { name: 'storiesLabel', type: 'text' },
              { name: 'storiesTitle', type: 'text' },
              { name: 'storiesDesc', type: 'textarea' },
              {
                name: 'storiesList',
                type: 'array',
                fields: [
                  { name: 'title', type: 'text' },
                  { name: 'preview', type: 'textarea' },
                  { name: 'full', type: 'textarea' },
                  { name: 'metric', type: 'text' },
                  { name: 'metricLabel', type: 'text' },
                ],
              },
            ],
          },
          {
            label: 'Go Deeper & Next',
            fields: [
              { name: 'goDeeperLabel', type: 'text' },
              { name: 'goDeeperTitle', type: 'text' },
              { name: 'goDeeperP1', type: 'text' },
              { name: 'goDeeperBtn', type: 'text' },
              { name: 'goDeeperBtnLink', type: 'text' },
              { name: 'nextPathsTitle', type: 'text' },
              {
                name: 'nextPathsList',
                type: 'array',
                fields: [
                  { name: 'title', type: 'text' },
                  { name: 'description', type: 'textarea' },
                  { name: 'href', type: 'text' },
                  { name: 'label', type: 'text' },
                  { name: 'color', type: 'text' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  build: {
    label: 'Build Page',
    fields: [
      {
        name: 'tabs',
        type: 'tabs',
        tabs: [
          {
            label: 'Hero',
            fields: [
              { name: 'heroBadge', type: 'text' },
              { name: 'heroTitle1', type: 'text' },
              { name: 'heroTitle2', type: 'text' },
              { name: 'heroP1', type: 'textarea' },
              { name: 'heroP2', type: 'textarea' },
            ],
          },
          {
            label: 'What I Build',
            fields: [
              { name: 'whatIBuildTitle', type: 'text' },
              {
                name: 'buildItems',
                type: 'array',
                fields: [
                  { name: 'title', type: 'text' },
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
              { name: 'proofTitle', type: 'text' },
              {
                name: 'statsList',
                type: 'array',
                fields: [
                  { name: 'value', type: 'text' },
                  { name: 'suffix', type: 'text' },
                  { name: 'label', type: 'text' },
                  { name: 'description', type: 'textarea' },
                ],
              },
              {
                name: 'industriesList',
                type: 'array',
                fields: [
                  { name: 'name', type: 'text' },
                ],
              },
            ],
          },
          {
            label: 'System Stories',
            fields: [
              { name: 'storiesTitle', type: 'text' },
              {
                name: 'storiesList',
                type: 'array',
                fields: [
                  { name: 'title', type: 'text' },
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
              { name: 'toolsTitle', type: 'text' },
              {
                name: 'toolsList',
                type: 'array',
                fields: [
                  { name: 'name', type: 'text' },
                  { name: 'category', type: 'text' },
                  { name: 'description', type: 'textarea' },
                ],
              },
            ],
          },
          {
            label: 'CTA',
            fields: [
              { name: 'ctaTitle', type: 'text' },
              { name: 'ctaBtn', type: 'text' },
            ],
          },
        ],
      },
    ],
  },
  together: {
    label: 'Together Page',
    fields: [
      {
        name: 'tabs',
        type: 'tabs',
        tabs: [
          {
            label: 'Hero',
            fields: [
              { name: 'subTitle', type: 'text' },
              { name: 'mainTitle', type: 'text' },
              { name: 'description', type: 'textarea' },
            ],
          },
          {
            label: 'Relevance',
            fields: [
              { name: 'title', type: 'text' },
              { name: 'p1', type: 'textarea' },
              {
                name: 'recognitionPoints',
                type: 'array',
                fields: [
                  { name: 'point', type: 'text' },
                ],
              },
            ],
          },
          {
            label: 'Method',
            fields: [
              { name: 'principlesTitle', type: 'text' },
              { name: 'principlesP', type: 'textarea' },
              {
                name: 'principles',
                type: 'array',
                fields: [
                  { name: 'title', type: 'text' },
                  { name: 'body', type: 'textarea' },
                ],
              },
              { name: 'stepsTitle', type: 'text' },
              { name: 'stepsP', type: 'textarea' },
              {
                name: 'steps',
                type: 'array',
                fields: [
                  { name: 'title', type: 'text' },
                  { name: 'body', type: 'textarea' },
                ],
              },
            ],
          },
          {
            label: 'Contact',
            fields: [
              { name: 'contactTitle', type: 'text' },
              { name: 'contactP', type: 'textarea' },
            ],
          },
          {
            label: 'Context',
            fields: [
              { name: 'contextTitle', type: 'text' },
              { name: 'workLabel', type: 'text' },
              { name: 'workP', type: 'textarea' },
              { name: 'lifeLabel', type: 'text' },
              { name: 'lifeP', type: 'textarea' },
            ],
          },
          {
            label: 'Return Paths',
            fields: [
              { name: 'returnTitle', type: 'text' },
              {
                name: 'returns',
                type: 'array',
                fields: [
                  { name: 'title', type: 'text' },
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
  },
};
