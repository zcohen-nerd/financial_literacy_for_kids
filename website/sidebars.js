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
        'checkpoint-1',
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
        'checkpoint-2',
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
        'checkpoint-3',
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
        'checkpoint-4',
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
        'checkpoint-5',
        'capstone-rubric',
      ],
    },
    'curriculum-overview',
    {
      type: 'category',
      label: 'Explore Other Literacies',
      items: [
        {
          type: 'link',
          label: 'Literacy for Kids Hub',
          href: 'https://literacy-for-kids.github.io/literacy_for_kids/',
        },
        {
          type: 'link',
          label: 'Decision Literacy',
          href: 'https://literacy-for-kids.github.io/decision_literacy_for_kids/',
        },
        {
          type: 'link',
          label: 'Computer Literacy',
          href: 'https://literacy-for-kids.github.io/computer_literacy_for_kids/',
        },
        {
          type: 'link',
          label: 'Media Literacy',
          href: 'https://literacy-for-kids.github.io/media_literacy_for_kids/',
        },
        {
          type: 'link',
          label: 'Financial Literacy',
          href: 'https://literacy-for-kids.github.io/financial_literacy_for_kids/',
        },
        {
          type: 'link',
          label: 'Civic Literacy',
          href: 'https://literacy-for-kids.github.io/civic_literacy_for_kids/',
        },
      ],
    },
  ],
};

export default sidebars;
