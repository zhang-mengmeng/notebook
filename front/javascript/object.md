# 面向对象

## 认识对象类型

  - 对象类型是一种``存储键值对（key-value）``的复杂数据类型

  - 键值对可以是属性和方法，其中``key是字符串``，``value可以是任何类型``，包括基本数据类型，函数类型，对象类型等

## 创建对象的三种方式

### 字面量创建

```js [字面量创建]
var obj1 = {
  name: "张萌"
}
```
### 构造函数创建

```js [构造函数创建]
var obj2 = new Object()
obj2.name = "张萌"
```

### new 其他类创建

```js [new 其他类创建]
function Person()
var obj3 = new Person()
```

## 对象的常见操作

### 访问对象的属性

```js
var info = {
  name: "张萌",
  height: 1.88,
  age: 18,
  friend: {
    name: "kobe",
    age: 30
  },
  running: function() {
    console.log("running~")
  }
}
// 访问对象的属性
console.log(info.running)
```

### 修改对象的属性

```js
var info = {
  name: "张萌",
  height: 1.88,
  age: 18,
  friend: {
    name: "kobe",
    age: 30
  },
  running: function() {
    console.log("running~")
  }
}
// 修改对象的属性
info.name = "kobe"
info.age = 30
```

### 添加对象的属性

```js
var info = {
  name: "张萌",
  height: 1.88,
  age: 18,
  friend: {
    name: "kobe",
    age: 30
  },
  running: function() {
    console.log("running~")
  }
}
// 添加对象的属性
info.address = "洛杉矶"
info.height = 1.98
```

### 删除对象的属性: delete操作符

```js
var info = {
  name: "张萌",
  height: 1.88,
  age: 18,
  friend: {
    name: "kobe",
    age: 30
  },
  running: function() {
    console.log("running~")
  }
}
// 删除对象的属性
delete info.age
```

## 对象的方括号的使用

```js
var info = {
  name: "张萌",
  height: 1.88,
  age: 18,
  "my friend": "kobe",
  running: function() {
    console.log("running~")
  }
}
console.log(info["my friend"])
```

## 对象的遍历方式

### 普通for循环遍历
**``Object.keys()``方法会返回一个由一个给定对象的自身可枚举属性组成的数组**
```js
var info = {
  name: "张萌",
  height: 1.88,
  age: 18,
  "my friend": "kobe",
  running: function() {
    console.log("running~")
  }
}

var infoKeys = Object.keys(info)
for (var i = 0; i < infoKeys.length; i++) {
  var key = infoKeys[i]
  var value = info[key]
  console.log(`key: ${key}, value: ${value}`)
}
```

### for in 遍历方法

```js
var info = {
  name: "张萌",
  height: 1.88,
  age: 18,
  "my friend": "kobe",
  running: function() {
    console.log("running~")
  }
}

for (var key in info) {
  var value = info[key]
  console.log(`key: ${key}, value: ${value}`)
}
```