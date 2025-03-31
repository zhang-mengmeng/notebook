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