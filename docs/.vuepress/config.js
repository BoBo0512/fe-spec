import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '前端编程规范',
  bundler: viteBundler(),
  theme: plumeTheme({
    appearance: false,
    autoFrontmatter: false,
    blog: false,
    notes: false,
    footer: false,
    readingTime: false,
    navbar: [
      { text: '首页', link: '/index.md' },
      {
        text: '规范文档',
        items: [
          {
            text: '编码规范',
            items: [
              {
                text: 'HTML 编码规范',
                link: '/coding/html.md'
              },
              {
                text: 'CSS 编码规范',
                link: '/coding/css.md'
              },
              {
                text: 'JavaScript 编码规范',
                link: '/coding/javascript.md'
              },
              {
                text: 'TypeScript 编码规范',
                link: '/coding/typescript.md'
              },
              {
                text: 'Node 编码规范',
                link: '/coding/node.md'
              },
            ]
          },
          {
            text: '工程规范',
            items: [
              {
                text: '文档通用规范',
                link: '/engineering/doc.md'
              },
              {
                text: 'Git 相关规范',
                link: '/engineering/git.md'
              },
              {
                text: 'CHANGELOG 规范',
                link: '/engineering/changelog.md'
              },
            ]
          },
        ]
      },
      {
        text: '相关工具',
        items: [
          {
            text: 'NPM包',
            items: [
              { text: '@fe-spec/commitlint-config', link: '' },
              { text: '@fe-spec/markdownlint-config', link: '' }
            ]
          },
          {
            text: '脚手架CLI',
            items: [
              { text: 'fe-spec-lint-cli', link: '' }
            ]
          }
        ]
      }
    ],
    sidebar: {
      '/': {
        items: [
            {
              text: '编码规范',
              prefix: '/coding/',
              collapsed: false,
              items: [
                {
                  text: 'HTML 编码规范',
                  link: 'html.md'
                },
                {
                  text: 'CSS 编码规范',
                  link: 'css.md',
                },
                {
                  text: 'JavaScript 编码规范',
                  link: 'javascript.md',
                },
                {
                  text: 'Typescript 编码规范',
                  link: 'typescript.md',
                },
                {
                  text: 'Node 编码规范',
                  link: 'node.md',
                },
              ],
            },
            {
              text: '工程规范',
              prefix: '/engineering/',
              collapsed: false,
              items: [
                {
                  text: 'Git 相关规范',
                  link: 'git.md',
                },
                {
                  text: '文档通用规范',
                  link: '/engineering/doc.md'
                },
                {
                  text: 'CHANGELOG 规范',
                  link: 'changelog.md',
                },
              ],
            },
            {
              text: 'NPM包',
              prefix: '/coding/',
              collapsed: false,
              items: [
                { text: '@fe-spec/commitlint-config', link: '' },
                { text: '@fe-spec/markdownlint-config', link: '' }
              ]
            },
            {
              text: '脚手架CLI',
              prefix: '/coding/',
              // collapsed: false,
              items: [
                { text: 'fe-spec-lint-cli', link: '' }
              ]
            },
        ]
      },
    },
    social: [
      { icon: 'github', link: 'https://github.com/zhangsan' },
    ],
    plugins: {
      shiki: {
        languages: ['javascript', 'typescript', 'vue', 'tsx', 'html', 'css', 'less', 'sass', 'stylus', 'markdown', 'json', 'jsx', 'wasm', 'bash', 'sh'], 
        // theme: { light: 'snazzy-light', dark: 'plastic' }, 
      }
    }
  }),
})