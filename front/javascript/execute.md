# JavaScript执行原理

## JavaScript代码的执行
- 浏览器的内核由两部分组成，以webkit为例
  - WebCore：负责HTML解析 布局 渲染等等相关工作
  - JavaScriptCore：解析 执行JavaScript代码

## V8引擎的执行原理
- V8使用C ++编写的Google开源高性能JavaScript和WebAssembly引擎，它用于Chrome和Node.js等
- V8可以独立运行，也可以嵌入到任何C++应用程序中

## V8引擎的架构
- Parse模块会将JavaScript代码转换成AST(抽象语法树)，这是因为解释器并不直接认识JavaScript代码
  - 如果函数没有被调用，那么是不会被转换成AST的
- Ignition是一个解释器，会将AST转换成ByteCode(字节码)
  - 同时会收集TurboFan优化所需要的信息(比如函数参数的类型信息，有了类型才能进行真实的运算)
  - 如果函数只调用一次，Ignition会解释执行ByteCode
- TurboFan是一个编译器，可以将字节码编译为CPU可以直接执行的机器码
  - 如果一个函数被多次调用，那么就会被标记为热点函数，那么就会经过TurboFan转换成优化的机器码，提高代码的执行性能
  - 但是机器码也会被还原为ByteCode，这是因为如果后续执行函数的过程中，类型发生了变化(比如sun函数原来执行的是number类型，后来执行变成了string类型)，之前优化的机器码并不能正确的处理运算，就会逆向的转成字节码


## 初始化全局对象
- js引擎会在`执行代码之前`,会在`堆内存中创建一个全局对象`: Global Object (GO)
  - 该对象`所有的作用域`都可以访问
  - 里面会包含`Date` `Array` `String` `Number` `setTimout` `setInterval` 等等 
  - 其中还有一个`window属性`指向自己