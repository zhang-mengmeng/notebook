import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/' // 表示docs/index.md
  },
  {
    text: '前端基础',
    items: [
      {
        text: 'HTML',
        link: '/front/encountering/indexA.md' // 表示docs/column/Travel/index.md
      },
      {
        text: 'CSS',
        link: '/front/css/' // 表示docs/column/Travel/index.md
      },
      {
        text: 'JavaScript',
        link: '/front/javascript/function.md' // 表示docs/column/Travel/index.md
      },
    ]
  },
  {
    text: '数据结构与算法',
    items: [
      {
        text: '常见',
        link: '/algorithm/common/' // 对应docs/column/Algorithm下的idnex.md文件
      },
      {
        text: '进阶',
        link: '/algorithm/high-level/' // 对应docs/column/Algorithm下的idnex.md文件
      }
    ]
  },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/Jacqueline712' },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/3131845139247960/posts'
      },
      {
        text: '飞书社区',
        link: 'https://pzfqk98jn1.feishu.cn/wiki/space/7193915595975491587?ccm_open_type=lark_wiki_spaceLink'
      }
    ]
  }
];

export const sidebar: DefaultTheme.Sidebar = {
    // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
    '/algorithm/common/': [
       // 第一部分
      {
        text: '栈和队列',
        items: [
          {
            text: '栈-深拷贝和浅拷贝',
            link: '/algorithm/common/000_meet.md'
          },
        //   {
        //     text: '队列-事件循环',
        //     link: '/column/Algorithm/002_Queue'
        //   }
        ]
      },
      // 第二部分
      {
        text: '字典和树',
        items: [
          {
            text: '字典和集合-Set和Map',
            link: '/column/Algorithm/003_Dictionary'
          },
          {
            text: '树-深/广度优先遍历',
            link: '/column/Algorithm/004_Tree'
          }
        ]
      }
    ],
    // 前端开发
    '/front/encountering/':[
      {
        text: '软件开发-HTML结构-元素刨析',
        items: [
          {
            text: '软件开发',
            link: '/front/encountering/indexA.md'
          },
          {
            text: 'HTML',
            link: '/front/encountering/page.md'
          },
          {
            text:'flex布局',
            link:'/front/encountering/flex.md'
          }
        ]
      },
            {
        text: 'HTML',
        items: [
          {
            text: 'HTML',
            link: '/front/encountering/page.md'
          },
          {
            text: 'CSS',
            link: '/front/encountering/style.md'
          },
          {
            text:'flex布局',
            link:'/front/encountering/flex.md'
          }
        ]
      },
    ],
    '/front/css/':[
      {
        text: 'css样式',
        items: [
          {
            text: 'HTML',
            link: '/front/encountering/page.md'
          },
          {
            text: 'CSS',
            link: '/front/encountering/style.md'
          },
          {
            text:'flex布局',
            link:'/front/encountering/flex.md'
          }
        ]
      },
    ],
    // javascript
    '/front/javascript/':[
      {
        text: 'JavaScript基础12312',
        items: [
          {
            text: '函数',
            link: '/front/javascript/function.md'
          },
          {
            text: '对象',
            link: '/front/javascript/object.md'
          },
          {
            text: '内置类',
            link: '/front/javascript/class.md'
          },
          {
            text: '数组',
            link: '/front/javascript/array.md'
          },
          {
            text:'DOM',
            link:'/front/javascript/dom.md'
          },
          {
            text:'BOM',
            link:'/front/javascript/bom.md'
          }
        ]
      },
      {
        text: 'JavaScript高级',
        items: [
          {
            text: '函数中this指向',
            link: '/front/javascript/this.md'
          },
          {
            text: '浏览器的渲染原理',
            link: '/front/javascript/rendering.md'
          },
          {
            text: 'JavaScript的执行原理',
            link: '/front/javascript/execute.md'
          },
          {
            text: 'JavaScript的函数增强',
            link: '/front/javascript/fnenhance.md'
          },
          {
            text: '面向对象原型继承',
            link: '/front/javascript/inherit.md'
          },
        ]
      }
    ]
  };
  
