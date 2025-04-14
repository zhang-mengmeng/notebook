## 函数增强

### 函数对象的属性

__属性name__:一个函数的名词我们可以通过name来访问

__属性length__:属性length用于返回函数参数的个数

- rest参数是不参与参数的个数的
- 参数如果有默认值也不参与个数

### arguments

__arguments__是一个对应于 传递给函数的参数 的 类数组(array-like)对象

__array-like__意味着它不是一个数组类型，而是一个对象类型

- 但是它却拥有数组的一些特性，比如：length，比如可以通过index索引来访问
- 但是它却没有数组的一些方法，比如：filter、map等

#### arguments转为Array 

__常见的转换方式__

- 方式一

  ```js
  var newArguments = []
  for (var arg of arguments) {
      newArguments.push(arg)
  }
  ```

- 方式二

  ```js
  var newArgs1 = Array.form(arguments)
  
  
  var newArgs2 = [...arguments]
  ```

- 方式三

  ```js
  var newArgs1 = [].slice.apply(arguments)     
  
  var newArgs2 = Array.prototype.slice.apply(arguments)
  ```

#### 箭头函数没有arguments

__箭头函数是不绑定arguments的，所以我们在箭头函数中使用arguments会去上层作用域查找:__

```js
var foo = (x, y, z) => {
    console.log(arguments)
}

foo(10, 20, 30)

function bar(m, n) {
    return (x, y, z) => {
        console.log(arguments)
    }
}

var fn = bar(20, 30)
fn(10, 20, 30)
```

#### 函数的剩余 (rest) 参数

__ES6中引用了rest parameter，可以将不定数量的参数放入到一个数组中__

- 如果最后一个参数是...为前缀的，那么它会将剩余的参数放到该参数中，并且作为一个数组

  ```js
  function foo(m, n, ...args) {
      console.log(m, n)
      console.log(args)
  }
  ```

- 剩余参数和arguments的区别
  - 剩余参数只包含那些`没有对应形参的实参`，而`arguments对象包含了传给函数的所有实参`
  - `arguments对象不是一个真正的数组`，而`rest参数是一个真正的数组`，可以进行数组的所有操作
  - rest参数是`ES6中提供`并且希望以此来代替arguments的

- __剩余参数必须放到最后一个位置，否则会报错。__

### 纯函数

### 函数柯里化

### 组合函数