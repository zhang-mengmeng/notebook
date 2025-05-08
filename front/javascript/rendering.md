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