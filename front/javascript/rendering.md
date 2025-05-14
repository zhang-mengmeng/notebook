# 浏览器的渲染原理

## URL加载过程

- 在URL中输入域名，通过DNS解析，拿到服务器地址，服务器返回数据到浏览器

## 浏览器页面渲染的流程

### HTML解析过程
- 默认情况下服务器会给浏览器返回index.html文件，所以解析HTML是所有步骤的开始
- 解析HTML，会构建DOM Tree

### 生成CSS规则
- 在解析的过程中，如果遇到CSS的link元素，那么会由浏览器负责下载对应的CSS文件
  - 下载CSS文件是不会影响DOM的解析的
- 浏览器下载完CSS文件后，就会对CSS文件进行解析，`解析出对应的规则树`
  - 我们可以称之为`CSSOM`(CSS Object Model, CSS对象模型)

### 构建Render Tree
- 当有了DOM Tree和 CSSOM Tree后，就可以两个结合构建`Render Tree`了
- `link元素不会阻塞DOM Tree的构建过程`，但是`会阻塞Render Tree的构建过程`
  - 这是因为Render Tree在构建时，需要对应的CSSOM Tree
- `Render Tree和DOM Tree并不是一一对应的关系`,比如对于display为none的元素，压根不会出现在render tree中。

### 布局（layout）
- 在渲染树上运行布局，计算每个节点的几何体
- 渲染树会表示显示哪些节点以及其他样式，但是`不表示每个节点的尺寸、位置`等信息
- 布局就确定渲染树中`所有节点的宽度、高度和位置信息`

### 绘制（Paint）
- 在绘制阶段，浏览器将布局阶段计算的`每个frame转为屏幕上实际的像素点`
- 包括`将元素的可见部分进行绘制`，比如`文本 颜色 边框 阴影 替换元素(img)`

### 特殊解析 - composite合成
- 绘制的过程，可以将布局后的元素绘制到多个合成图层中
  - 这是浏览器的一种优化手段
- 默认情况下，标准流中的内容都是被绘制在同一个合成图层中的
- 而一些特殊的属性，会创建一个新的合成层，并且新的图层可以利用GPU来加速绘制
  - 因为每个合成层都是单独渲染的
- 生成新的合成层的一些属性
  - 3D transforms
  - video canvas iframe
  - opacity动画转换时
  - position: fixed
  - will-change：一个实验性的属性，提前告诉浏览器元素可能发生哪些变化
  - animation 或 transition 设置了 opacity transform
- 分层确实可以提高性能，但是它以内存管理为代价，因此不应作为web性能优化策略的一部分过度使用

## 回流（reflow)
- 第一次确定节点的大小和位置，称之为布局（layout）
- 之后对节点的大小、位置修改重新计算称之为回流。

### 什么情况下引起回流
- 比如DOM结构发生改变（添加新的节点或者移除节点）
- 比如改变了布局（修改了 width height padding font-size）
- 比如窗口resize（修改了窗口的尺寸）
- 比如调用getComputedStyle方法获取尺寸，位置信息

### 如何避免回流
- 修改样式时尽量一次性修改
  - 比如通过css Text修改，比如通过添加class修改
- 尽量避免频繁的操作DOM
  - 我们可以在一个DocumentFragment或者父元素中将要操作的DOM操作完成，再一次性的操作

- 尽量避免通过getComputedStyle获取尺寸，位置等信息
- 对某些元素使用position的absolute或者fixed
  - 并不是不会引起回流，而是开销相对较小，不会对其他元素造成影响。

## 重绘
- 第一次渲染内容称之为绘制
- 之后重新渲染称之为重绘
### 什么情况下会引起重绘
- 比如修改背景色 文字颜色 边框颜色 样式等

## script和页面解析的关系

### 了解
- JavaScript在哪里
  - 浏览器在解析HTML的过程中，遇到了script元素是不能继续构建DOM树的
  - 它会停止继续构建，首先下载JavaScript代码，并且执行JavaScript脚本
  - 只有等到JavaScript脚本结束后，才会继续解析HTML,构建DOM树
- 为什么这样做
  - 这是因为JavaScript的作用之一就是操作DOM，并且可以修改DOM
  - 如果我们等到DOM树构建完成并且渲染再执行JavaScript，会造成严重的回流和重绘，影响页面的性能
  - 所以会在遇到script元素时，优先下载和执行JavaScript代码，再继续构建DOM树
- 但是在现代页面开发中
  - 脚本往往比HTML页面更"重"，处理时间需要更长
  - 所以会造成页面的解析阻塞，在脚本下载执行完成之前，用户在界面上什么都看不到
- 为了解决这个问题，script元素给我提供了两个属性(attribute): defer和async

### defer属性
- defer属性告诉浏览器不要等待脚本下载，而是继续解析HTML,构建DOM Tree
  - 脚本会由浏览器进行下载，但是不会阻塞DOM Tree的构建过程
  - 如果脚本提前下载好了，它会等待DOM Tree构建完成，在DOMConentLoaded事件之前先执行defer中的代码
- DOMContentLoaded总会等待defer中的代码先执行完成
- 多个带defer的脚本是可以保持正确的顺序执行的
- 从某种角度来说，defer可以提高页面的性能，并且推荐放到head元素中
- defer仅适用于外部脚本，对于script默认内容会被忽略

### async属性
- async 特性与defer有些类似，它能够让脚本不阻塞页面
- async是让一个脚本完全独立的
  - 浏览器不会因为async脚本而阻塞DOM树的构建
  - async脚本不能保证顺序，它是独立下载，独立运行，不会等待其他脚本
  - async不会能保证在DOMContentLoaded之前或者之后执行
- defer通常用于需要在文档解析后操作AOM的JavaScript代码，并且对多个script文件有顺序要求的
- async通常用于独立的脚本，对其他脚本，甚至DOM没有依赖的