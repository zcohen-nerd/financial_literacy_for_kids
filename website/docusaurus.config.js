// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import path from 'path';
import {createRequire} from 'module';
import {fileURLToPath} from 'url';
import {themes as prismThemes} from 'prism-react-renderer';
import navbarItems from 'literacy-site-theme/navbarItems';
import footerConfig from 'literacy-site-theme/footerConfig';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const literacySiteThemeSrc = path.resolve(
  __dirname,
  'node_modules/literacy-site-theme/src',
);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Financial Literacy for Kids',
  tagline: 'A free, open 18-week curriculum that teaches ages 8–12 how money and financial systems actually work',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zcohen-nerd.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it should match your repo name
  baseUrl: '/financial_literacy_for_kids/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zcohen-nerd', // Usually your GitHub org/user name.
  projectName: 'financial_literacy_for_kids', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['literacy-site-theme'],

  plugins: [
    function transpileLiteracySiteTheme() {
      return {
        name: 'transpile-literacy-site-theme',
        configureWebpack(config, isServer, utils) {
          return {
            module: {
              rules: [
                {
                  test: /\.[jt]sx?$/,
                  include: [literacySiteThemeSrc],
                  use: [
                    utils.getJSLoader({
                      isServer,
                      babelOptions: {
                        presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
                        plugins: [
                          require.resolve('@babel/plugin-transform-modules-commonjs'),
                        ],
                      },
                    }),
                  ],
                },
              ],
            },
          };
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zcohen-nerd/financial_literacy_for_kids/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zcohen-nerd/financial_literacy_for_kids/tree/main/website/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/hero-image.png',
      navbar: {
        title: 'Financial Literacy for Kids',
        logo: {
          alt: 'Financial Literacy Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'curriculumSidebar',
            position: 'left',
            label: 'Curriculum',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          ...navbarItems,
          {
            href: 'https://github.com/zcohen-nerd/financial_literacy_for_kids',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: footerConfig,
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;
