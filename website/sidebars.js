// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  curriculumSidebar: [
    'intro',
    'license',
    {
      type: 'category',
      label: 'Value Foundations',
      description: 'Weeks 1–4: The Mechanics of Trade and "The Why"',
      collapsed: false,
      items: [
        'week01-understanding-value',
        'week02-trade-and-barter',
        'week03-why-money-exists',
        'week04-the-household-economy',
      ],
    },
    {
      type: 'category',
      label: 'The Flow of Resources',
      description: 'Weeks 5–8: Circulation and Digital Friction',
      items: [
        'week05-how-money-moves',
        'week06-ways-we-pay',
        'week07-digital-money',
        'week08-friction-and-spending',
      ],
    },
    {
      type: 'category',
      label: 'Strategy & Planning',
      description: 'Weeks 9–11: Resource Allocation and Risk',
      items: [
        'week09-opportunity-cost',
        'week10-budgeting',
        'week11-risk-and-emergency-funds',
      ],
    },
    {
      type: 'category',
      label: 'Economic Systems',
      description: 'Weeks 12–14: Banking, Interest, and Macro Mechanics',
      items: [
        'week12-banks',
        'week13-interest',
        'week14-inflation',
      ],
    },
    {
      type: 'category',
      label: 'The Value Creation Project',
      description: 'Weeks 15–18: Entrepreneurship and Application',
      items: [
        'week15-finding-problems-and-opportunities',
        'week16-designing-a-solution',
        'week17-resources-and-costs',
        'week18-sharing-value',
      ],
    },
    'curriculum-master',
  ],
};

export default sidebars;