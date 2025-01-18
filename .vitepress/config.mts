
// 1. 导入 defineConfigWithTheme 函数
import { defineConfigWithTheme } from 'vitepress'

import { nav,sidebar } from './relaConf';
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
    logo: 'https://github.com/zhang-mengmeng/notebook/blob/main/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250116224513.jpg?raw=true', // 表示docs/public/avartar.png
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: sidebar,
    // 最后修改时间
    lastUpdated:{
      text:'最后更改时间',
      formatOptions:{
        dateStyle:'full',
        timeStyle:'short'
      }
    },
    // 搜索
    search:{
      provider:"local"
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    outline: {
      level: [2, 6],
      label: '目录结构'
    }

  },
  vite:{
    ssr:{
      noExternal:['@escook/vitepress-theme','vitepress']
    }
  }
})

