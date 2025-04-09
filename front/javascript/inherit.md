# ES5普通对象的原型

## 认识对象的原型

- JavaScript当中每个对象都有一个特殊的内置属性[[prototype]]，这个特殊的对象可以指向另外一个对象

- 作用

  - 当我们通过引用对象的`属性key来获取一个value`时，它会`触发[[Get]]`的操作

  - 这个操作会`首先检查该对象是否有对应的属性`，如果有的话就使用它

  - `如果对象中没有该属性，那么会访问对象[[prototype]]内置属性指向的对象上的属性`

- 获取的方式有两种

  - 方式一：通过对象的 `__proto__`属性可以获取到
  - 方式二：通过 Object.getPrototypeOf 方法可以获取到

## 认识函数的原型

- 所有的函数都有一个prototype的属性
- 作用
  - 当多个对象拥有共同的值时，我们可以将它放到构造函数对象的显示原型
  - 由构造函数创建出来的所有对象，都会共享这些属性

### new操作符

- 在内存中创建一个新的空对象

- 这个对象内部的[[`__proto__`]]属性会被赋值为该构造函数的prototype属性

- 通过构造函数创建出来的所有的对象的[[`__prototype__`]]属性都指向该构造函数的prototype

  ```js
  function Student(name, age, sno) {// [!code focus]
      this.name = name// [!code focus]
      this.age = age// [!code focus]
      this.sno = sno// [!code focus]
      this.running = function() {
          console.log(this.name + 'running')
      }
      this.eating = function() {
          console.log(this.name + 'eating')
      }
      this.studying = function() {
          console.log(this.name + 'studying')
      }
  }// [!code focus]
  
  Student.prototype.running = function() {// [!code focus]
      console.log(this.name + 'running')// [!code focus]
  }// [!code focus]
  Student.prototype.eating = function() {// [!code focus]
      console.log(this.name + 'eating')// [!code focus]
  }// [!code focus]
  Student.prototype.studying = function() {
      console.log(this.name + 'studying')// [!code focus]
  }// [!code focus]
  
  var stu1 = new Student('kobe',30,112)// [!code focus]
  ```

  

### constructor

- 事实上原型对象上面是有一个属性的：constructor
  - 默认情况下原型上都会添加一个属性叫做constructor，这个constructor指向当前的函数对象

### 重写函数原型对象
- 每创建一个函数，就会同时创建它的prototype对象，这个对象也会自动获取constructor属性
- 这里相当于给prototype重新赋值了一个对象，那么这个新对象的constructor属性，会指向Object构造函数，而不是Person构造函数了
- 如果希望constructor指向P尔松，那么可以手动添加
  - 默认情况下，原生的constructor属性是不可枚举的
  - 如果希望解决这个问题，可以使用Object.defineProperty()函数

```js
function Person() {

}

Person.prototype = {
  name: "kobe",
  age: 18,
  eating: function() {
    console.log(this.name + "在吃东西")
  }
}
```

## 面向对象的特性 - 继承
- 面向对象有三大特性: 封装 继承 多态
  - 封装: 将属性和方法封装到一个类中，称之为封装的过程
  - 继承: 继承是面向对象中非常重要的，不仅仅可以减少重复代码的数量，也是多态前提(纯面向对象中)
  - 多态: 不同的对象在执行时表现出不同的形态

### 继承
- 继承可以帮助我们将重复的代码和逻辑抽取到父类中，子类只需要直接继承过来使用即可

### 原型链
- 从一个对象上获取属性，如果在当前对象中没有获取到就会去它的原型上面获取

### 组合借用继承的问题

- 组合继承最大的问题就是无论在什么情况下，都会`调用两次父类构造函数`
  - 一次是在创建子类原型的时候
  - 另一次在子类构造函数内部(也就是每次创建子类实例的时候)

- 所有的子类实例事实上会拥有两份父类的属性
  - 一份是当前的实例自己里面，另一份在子类对应的原型对象中
  - 默认情况下访问的是实例本身这一部分

### 寄生组合式继承

- 