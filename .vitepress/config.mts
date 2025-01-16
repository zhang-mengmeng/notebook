
// 1. 导入 defineConfigWithTheme 函数
import { defineConfigWithTheme } from 'vitepress'

import { nav } from './relaConf';
// 2. 导入需要继承的配置对象
import escookConfig from '@escook/vitepress-theme/config'
// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  // 3. 通过 extends 指定要继承的配置
  extends: escookConfig,
  title: "小张的笔记本",

  description: "A VitePress Site",
  outDir:"docs",
  base:'/notebook/',
  themeConfig: {
    // 4. 通过此配置项，关闭鼠标点击的 confetti 效果
    confetti: true,
    logo: '/微信图片_20250116224513.jpg', // 表示docs/public/avartar.png
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite:{
    ssr:{
      noExternal:['@escook/vitepress-theme','vitepress']
    }
  }
})

