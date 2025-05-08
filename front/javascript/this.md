
# this
## 认识 this

- 函数在调用时，JavaScript 会默认给 this 绑定一个值
- this 的绑定和编写的位置没有关系
- this 的绑定的调用方式以及调用的位置有关系
- this 是在运行时被绑定的

## this 的绑定规则

### 默认绑定

1.普通的函数被独立调用

```js
function foo() {
  console.log("foo:", this);
}
foo();
```

2.函数定义在对象中，但是独立调用

```js
var obj = {
    name: 'Zzm'
    bar: function() {
        console.log('bar', this)
    }
}
var baz = obj.bar
baz()
```

3.高阶函数

```js
var obj = {
    name: 'Zzm'
    bar: function() {
        console.log('bar', this)
    }
}

function foo(fn) {
    fn()
}
foo(obj.bar)
```

- 注意：严格模式下，独立调用的 this 指向 undefined

```js
"use strict";
function foo() {
  console.log("foo:", this);
}
foo();
```

### 隐式绑定

```js
function foo() {
  console.log("foo", this);
}

var obj = {
  bar: foo,
};
obj.bar();
```

### new 绑定

- **使用 new 关键字来调用函数，会执行如下的操作:**
  - 创建一个全新的对象
  - 这个新对象会被执行 prototype 链接
  - 这个新对象会绑定到函数调用的 this 上
  - 如果函数没有返回其他对象，表达式会返回这个新对象

```js
function foo() {
  console.log("foo", this);
}

new foo();
```

### 显示绑定

#### call 和 apply

JavaScript 所有的函数都可以使用 call 和 apply 方法

- 第一个参数是相同的，要求传入一个对象
  - 在调用这个函数时，会将 this 绑定到这个传入的对象上
- 后面的参数，apply 为数组，call 为参数列表
- apply 调用

```js
function foo(...age) {
  console.log("foo函数被调用：", this);
  console.log("打印参数：", ...age);
}

foo.apply("zz", ["aa", "bb", "cc"]);
```

- call 调用

```js
function foo(...age) {
  console.log("foo函数被调用：", this);
  console.log("打印参数：", ...age);
}

foo.call("zz", "aa", "bb", "cc");
```

#### bind 方法

bind()方法创建一个新的绑定函数

```js
function foo(name, age, hright, address) {
  console.log("foo", this);
}
// 1.基本使用
var obj = { name: "Zzm" };
var bar = foo.bind(obj);
bar();

//2.参数传递
var bar = foo.bind(obj, "Zzm", 18, 1.88);
bar("zz");
```

## 内置函数的绑定

setTimeout 中 this 指向 window

```js
// 1.定时器
setTimeout(function () {
  console.log("定时器函数", this); // window
}, 1000);
```

div 点击中 this 指向点击本身

```js
<button>按钮</button>;
// 2.按钮点击监听
var btnE1 = document.querySelector("button");
btnE1.onclick = function () {
  console.log("按钮监听", this === btnE1); // true
};
```

数组中的 forEach
如果没有明确指定 this，则指向 window

```js
// 3.数组中的forEach
var names = ["zz", "mm", "nba"];
names.forEach(function (item) {
  console.log("forEach", this); // window
});

var names = ["zz", "mm", "nba"];
names.forEach(
  function (item) {
    console.log("forEach", this);
  },
  {
    name: "张萌",
  }
);
```

## this 绑定的优先级

1. 默认绑定的优先级最低，存在其他规则时，就会通过其他规则的方式来绑定 this
2. 显示绑定的优先级高于隐式绑定

```js
function foo() {
  console.log("foo", this); // abc
}

var obj = { foo: foo };
obj.foo.call("abc");
obj.foo.apply("abc");
```

```js
function foo() {
  console.log("foo", this); // aaa
}
var obj = { foo: foo };
var bar = obj.foo.bind("aaa");
bar();
```

3. new 绑定优先级高于隐式绑定

```js
var obj = {
  foo: function () {
    console.log("foo", this); // foo
  },
};
new obj.foo();
```

4. new 绑定优先级高于 bind

   new 绑定和 call、apply 是不允许同时使用的，所以不存在谁的优先级更高

   new 绑定可以和 bind 一起使用，new 绑定优先级更高

```js
function foo() {
  console.log("foo", this);
}

var bindFn = foo.bind("aaa");
new bindFn();
```

5. bind 优先级高于 call、apply

```js
function foo() {
  console.log("foo", this);
}

var bindFn = foo.bind("aaa");
bindFn.apply("bbb");
```

## this 绑定之外的情况

1. 如果在显示绑定中，传入一个 null 或者 undefined

非严格模式

```js
function foo() {
  console.log("this", this); // window
}
foo.apply(null);
foo.apply(undefined);
```

严格模式

```js
// 'use strict'
function foo() {
  console.log("this", this); // 基本数据类型
}
foo.apply(null);
foo.apply(undefined);
```

2. 间接函数引用

```js
// 2. 间接函数引用
var obj = {
  name: "zz",
  foo: function () {
    console.log("foo", this); // window
  },
};
var obj2 = {
  name: "mm",
};
(obj2.foo = obj.foo)();
```
## 箭头函数(ES6)
### 认识箭头函数
箭头函数是ES6之后增加的一种编写函数的方法，并且它比函数表达式要更加简洁

    箭头函数不会绑定this、arguments属性
    箭头函数不能作为构造函数来使用
