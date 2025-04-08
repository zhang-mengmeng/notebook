# JavaScript执行原理

## 初始化全局对象
- js引擎会在`执行代码之前`,会在`堆内存中创建一个全局对象`: Global Object (GO)
  - 该对象`所有的作用域`都可以访问
  - 里面会包含`Date` `Array` `String` `Number` `setTimout` `setInterval` 等等 
  - 其中还有一个`window属性`指向自己