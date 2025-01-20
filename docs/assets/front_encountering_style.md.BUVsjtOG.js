import{_ as e,c as l,a4 as i,o as t}from"./chunks/framework.DJY4F8Kc.js";const p=JSON.parse('{"title":"邂逅 CSS","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"front/encountering/style.md","filePath":"front/encountering/style.md","lastUpdated":null}'),r={name:"front/encountering/style.md"};function o(n,a,d,h,s,c){return t(),l("div",null,a[0]||(a[0]=[i(`<h1 id="邂逅-css" tabindex="-1">邂逅 CSS <a class="header-anchor" href="#邂逅-css" aria-label="Permalink to &quot;邂逅 CSS&quot;">​</a></h1><p>早期的网页都是通过 HTML 来编写的，但是我们希望 HTML 页面可以更加丰富</p><p>CSS 的出现是为了美化 HTML 的，并且让结构(HTML)与样式(CSS)分离</p><h2 id="css-的编写规则" tabindex="-1">CSS 的编写规则 <a class="header-anchor" href="#css-的编写规则" aria-label="Permalink to &quot;CSS 的编写规则&quot;">​</a></h2><ul><li><p>内联样式: 存在于 HTML 元素的 style 属性之中</p></li><li><p>内部样式: 将 CSS 放在 HTML 文件 &lt; head &gt;元素里面的&lt; style &gt;元素之中。</p></li><li><p>外部样式：将 CSS 编写一个独立的文件中，并且通过&lt; link &gt;元素引入进来</p></li></ul><h2 id="常见的-css-属性" tabindex="-1">常见的 CSS 属性 <a class="header-anchor" href="#常见的-css-属性" aria-label="Permalink to &quot;常见的 CSS 属性&quot;">​</a></h2><ul><li><p>文本属性</p><ol><li><p>text-decoration</p><p>none:无任何装饰线，可以去除 a 元素默认的下划线</p><p>underline:下划线</p><p>overline:上划线</p><p>line-through:中划线(删除线)</p></li></ol></li></ul><h2 id="常见的选择器" tabindex="-1">常见的选择器 <a class="header-anchor" href="#常见的选择器" aria-label="Permalink to &quot;常见的选择器&quot;">​</a></h2><h3 id="通用选择器" tabindex="-1">通用选择器 * <a class="header-anchor" href="#通用选择器" aria-label="Permalink to &quot;通用选择器 \\*&quot;">​</a></h3><pre><code>  1. 所有的元素都会被选中,做一些通用性的设置

  2. 效率比较低，尽量不要使用
</code></pre><h3 id="简单选择器" tabindex="-1">简单选择器 <a class="header-anchor" href="#简单选择器" aria-label="Permalink to &quot;简单选择器&quot;">​</a></h3><pre><code>  1. 元素选择器，使用元素的名称

  2. 类选择器，使用.类名

  3. id选择器，使用#id

::: danger 注意
在一个文档里面id的值是唯一的
:::
</code></pre><h3 id="属性选择器" tabindex="-1">属性选择器 <a class="header-anchor" href="#属性选择器" aria-label="Permalink to &quot;属性选择器&quot;">​</a></h3><pre><code>1. 拥有某一个属性[att]

2. 属性等于某个值[att=val]
</code></pre><h3 id="后代选择器" tabindex="-1">后代选择器 <a class="header-anchor" href="#后代选择器" aria-label="Permalink to &quot;后代选择器&quot;">​</a></h3><pre><code>1. 所有的后代(直接/间接的后代) 选择器之间以空格分割

2. 直接子代选择器(必须是直接子代)  选择器之间以 &gt; 分割
</code></pre><h3 id="兄弟选择器" tabindex="-1">兄弟选择器 <a class="header-anchor" href="#兄弟选择器" aria-label="Permalink to &quot;兄弟选择器&quot;">​</a></h3><ul><li>相邻兄弟选择器 <ol><li>使用符号 + 连接</li></ol></li><li>普遍兄弟选择器 <ol><li>使用符号 ~ 连接</li></ol></li></ul><h3 id="选择器组" tabindex="-1">选择器组 <a class="header-anchor" href="#选择器组" aria-label="Permalink to &quot;选择器组&quot;">​</a></h3><ul><li>交集选择器 <ol><li>需要同时符合两个选择器条件(两个选择器紧密连接)</li></ol></li><li>并集选择器 <ol><li>符合一个选择器条件即可(两个选择器以，分割)</li></ol></li></ul><h3 id="动态伪类" tabindex="-1">动态伪类 <a class="header-anchor" href="#动态伪类" aria-label="Permalink to &quot;动态伪类&quot;">​</a></h3><ul><li>a:link 未访问的连接</li><li>a:visited 已访问的链接</li><li>a:hover 鼠标挪动到连接上</li><li>a:active 激活的连接</li></ul>`,22)]))}const S=e(r,[["render",o]]);export{p as __pageData,S as default};
