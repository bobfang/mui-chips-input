/* eslint-disable id-denylist */
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MUI chips input',
  tagline: 'A chips input designed for the React library MUI',
  url: 'https://viclafouch.github.io',
  baseUrl: '/mui-chips-input/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'viclafouch', // Usually your GitHub org/user name.
  projectName: 'mui-chips-input', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html gitlang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false
      },
      navbar: {
        title: 'MUI chips input',
        logo: {
          alt: 'MUI chips input',
          src: 'img/logo.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Documentation'
          },
          {
            href: 'https://github.com/viclafouch/mui-chips-input',
            label: 'GitHub',
            position: 'right'
          },
          {
            href: 'https://www.npmjs.com/package/mui-chips-input',
            label: 'NPM',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} by Victor de la Fouchardiere`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
