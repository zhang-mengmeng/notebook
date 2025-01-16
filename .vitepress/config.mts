import { defineConfig } from 'vitepress'
// 1. 导入 defineConfigWithTheme 函数
import { defineConfigWithTheme } from 'vitepress'
// 2. 导入需要继承的配置对象
import escookConfig from '@escook/vitepress-theme/config'
// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  // 3. 通过 extends 指定要继承的配置
  extends: escookConfig,
  title: "My Awesome Project",
  description: "A VitePress Site",
  outDir:"docs",
  base:'/notebook/',
  themeConfig: {
    // 4. 通过此配置项，关闭鼠标点击的 confetti 效果
    confetti: true,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

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

