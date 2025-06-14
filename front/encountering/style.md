---
outline: deep
---

# 邂逅 CSS

早期的网页都是通过 HTML 来编写的，但是我们希望 HTML 页面可以更加丰富

CSS 的出现是为了美化 HTML 的，并且让结构(HTML)与样式(CSS)分离

## CSS 的编写规则

- 内联样式: 存在于 HTML 元素的 style 属性之中

- 内部样式: 将 CSS 放在 HTML 文件 < head >元素里面的< style >元素之中。

- 外部样式：将 CSS 编写一个独立的文件中，并且通过< link >元素引入进来
  ::: tip 可以通过@import url('地址') 来引入其他的 css 样式
  :::

## link 元素

- link 元素是<mark>外部资源链接</mark>元素,规范了<mark>文档与外部资源</mark>的关系

  - link 元素通常是在 head 元素中

- 最常用的链接是<mark>样式表(css)</mark>

  - 此外也可以被用来创建<mark>站点图标</mark>(比如 "favicon" 图标)

- link 元素常见的属性

  - <mark>href</mark>: 此属性指定被连接资源的 URL,URL 可以是绝对的,也可以是相对的

  - <mark>rel</mark>: **[指定链接类型,常见的链接类型](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Attributes/rel)**

    - icon: 站点图标
    
    - stylesheet: CSS 样式

## 常见的 CSS 属性

- 文本属性

  1.  text-decoration

      none:无任何装饰线，可以去除 a 元素默认的下划线

      underline:下划线

      overline:上划线

      line-through:中划线(删除线)

## 常见的选择器

### 通用选择器 \*

      1. 所有的元素都会被选中,做一些通用性的设置

      2. 效率比较低，尽量不要使用

### 简单选择器

      1. 元素选择器，使用元素的名称

      2. 类选择器，使用.类名

      3. id选择器，使用#id

    ::: danger 注意
    在一个文档里面id的值是唯一的
    :::

### 属性选择器

    1. 拥有某一个属性[att]

    2. 属性等于某个值[att=val]

### 后代选择器

    1. 所有的后代(直接/间接的后代) 选择器之间以空格分割

    2. 直接子代选择器(必须是直接子代)  选择器之间以 > 分割

### 兄弟选择器

- 相邻兄弟选择器
  1. 使用符号 + 连接
- 普遍兄弟选择器
  1.  使用符号 ~ 连接

### 选择器组

- 交集选择器
  1. 需要同时符合两个选择器条件(两个选择器紧密连接)
- 并集选择器
  1. 符合一个选择器条件即可(两个选择器以，分割)

### 动态伪类

- a:link 未访问的连接
- a:visited 已访问的链接
- a:hover 鼠标挪动到连接上
- a:active 激活的连接

## 块级元素水平居中

block box width = width + padding + border + margin

### 伪元素

- ::first-line 可以针对首行文本设置属性
- ::first-letter 可以针对首字母设置属性
- ::before 可以在元素内容前插入内容
- ::after 可以在元素内容后插入内容

## 继承

### inherit 继承父元素的属性

## 选择器权重

- !important 10000
- 内联样式 1000
- id 选择器 100
- 类选择器、伪类选择器、属性选择器 10
- 元素选择器、伪元素选择器 1
- 通配符选择器、子选择器、相邻选择器、同胞选择器 0

## CSS 属性 - display

- block 让元素显示为块级元素
- inline 让元素显示为行内元素
- inline-block 让元素同时具备行内元素和块级元素的特性
- none 让元素不显示

## 元素隐藏方法

- display: none;
  - 元素不显示出来，并且也不占据位置，不占据任何空间
- visibility：hidden
  - 设置为 hidden，虽然元素不可见，但是会占据元素应该占据的空间
  - 默认为 visible，元素是可见的
- rgba 设置颜色，将 a 的值设置为 0
  - rgba 的 a 设置的是 alpha 值，可以设置透明度，不影响子元素
- opacity 设置透明度，设置为 0
  - 设置整个元素的透明度，会影响所有的子元素

## margin 的传递

- margin-top 传递
  - 如果块级元素的顶部线和父元素的顶部线重叠，那么这个快递元素的 margin-top 值会传递给父元素
- margin-bottom 传递
  - 如果块级元素的底部线和父元素的底部线重叠，并且父元素的高度是 auto，那么这个块级元素的 margin-bottom 值会传递给父元素
- 如何防止出现传递问题
  - 给父元素设置 padding-top 或者 padding-bottom
  - 给父元素设置 border
  - 触发 BFC:给父元素设置 overflow:hidden

## 绝对定位(absolute)

**1.1 绝对定位**

1. 会脱离标准流

2. 相对的参照物

   - 最近的祖先定位元素
   - 如果祖先元素都没有定位，相对视口

3. 子绝父相

   - 子元素绝对定位
   - 父元素相对定位

4. 子绝父绝
   - 子元素绝对定位
   - 父元素绝对定位
5. 子绝父固
   - 子元素绝对定位
   - 父元素固定定位

**1.2 position 设置 absolute/fixed 特性**

1. 都属脱离标准流
2. 可以设置任何宽度和高度
3. 默认宽度是包裹内容
4. 不再给父级元素汇报宽度和高度
5. 自己内部依然按照标准流布局
6. 公式
   - 包含块的 width = left + right + margin-left + margin-right + width
     - left0 right0 margin 0 auto width:200px ->水平居中
     - left 0 right 0 margin 0 -> 宽度沾满包含块的宽度
   - 垂直方向也是一样

**1.3 绝对定位案例**

## 浮动

**1.1 浮动规则**

- 规则一：向左浮动或者向右浮动
- 规则二：不能超出包含块
- 规则三：浮动元素不能层叠
- 规则四：浮动元素会将行内级元素内容推出
- 规则五：浮动只能左右浮动，不能超出本行的高度
