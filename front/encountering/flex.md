# flex布局

## 邂逅flex布局
### 认识flexbox
- **flexbox翻译为弹性盒子**
  - 弹性盒子是一种用于按行或按列布局元素的一维布局方法
  - 元素可以膨胀以填充额外的空间，收缩以适应更小的空间
  - 通常我们使用flexbox来进行布局的方案称之为flex布局
- **flex布局是目前web开发中使用最多的布局方案**
  - 目前在移动端已经完全普及
  - 在pc端也几乎已经完全普及和使用，只有非常少数的网站也依然在用浮动来布局
- **为什么需要flex布局**
  - 长久以来，css布局中唯一可靠且跨浏览器兼容的布局工具只有floats和positioning
  - 但是这两种方法本身存在很大的局限性，并且他们用于布局实在是无奈之举
- **原先的布局存在的痛点**
  - 在父内容里面垂直居中一个块内容
  - 使容器的所有子项等分可用宽度/高度，而不管有多少宽度/高度可用
  - 使用多列布局中所有列采用相同的高度，即使它们包含的内容量不同
## flex布局概念
### flex布局特性
- **重要概念**
  - 开启了flex布局的元素叫flex container
  - flex container 里面的直接子元素叫做flex item
- **当flex container中的子元素变成了flex item时，具备以下特点**
  - flex item的布局将受flex container属性的设置来进行控制和布局
  - flex item不再严格区分块级元素和行内元素
  - flex item默认情况下是包裹内容的，但是可以设置宽度和高度
- **设置 display 属性为 flex 或者 inline-flex 可以成为flex container**
  - flex: flex container以block-level形式存在
  - inline-flex: flex container 以 inline-level形式存在
### flex模型
- **主轴 or 交叉轴**
  - main axis是主轴 main start 是主轴开始 main end 是主轴结束
  - cross axis是交叉轴 cross start是交叉轴开始 cross end 是交叉轴结束 
### flex相关属性
#### 应用在flex container 上的css属性
- **flex-direction**
  - flex items 默认都是沿着 main axis 从 main start 开始往 main end 方向排布
  - flex-direction决定了main axis的方向，有4个取值 row(默认值) row-reverse column column-reverse
- **flex-wrap**
  - nowrap(默认)：单行
  - wrap：多行
  - wrap：多行(对比 wrap cross start与cross end 相反)
- **flex-flow**
  - flex-flow属性是flex-direction 和 flex-wrap 的简写 顺序任何，并且都可以省略
#### 应用在flex items 上的css属性
