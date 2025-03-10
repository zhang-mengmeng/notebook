# JavaScript内置类

## 原始类型的包装类

- JavaScript原始类型并非对象类型，所以从理论上来说，它们是没有办法获取属性或者调用方法的
- 但是JavaScript为了可以使其获取属性和调用方法，对其封装了对应的包装类型
- 常见的包装类型有：``String``、``Number``、``Boolean``、``Symbol``、``BingInt``类型

## 原始类型的使用过程
- 根据原始值，创建一个原始类型对应的包装类型对象
- 调用对应的属性或者方法，返回一个新的值
- 创建的包装类对象被销毁
- 通常JavaScript引擎会进行很多的优化，它可以跳过创建包装类的过程在内部直接完成属性的获取或者方法的调用

## Number类型

### 类属性
```js
console.log(Number.MAX_SAFE_INTEGER)  JavaScript 中最大的安全整数
console.log(Number.MIN_SAFE_INTEGER)  JavaScript 中最小的安全整数
```
### 实例方法
```js
var str = 3.1415926
console.log(toString(base)) 将数字转成字符串，并且按照base进制执行转化，base的范围可以从2到36，默认情况下是10
console.log(toFixed(digits)) 格式化一个数字，保留digits位的小数，digits的范围是0到20(包含)之间
```
### 类方法
```js
var str = '3.1415'
console.log(Number.parseInt(str))  将字符串解析成整数,也有对应的全局方法parseInt
console.log(Number.parseFloat(str)) 将字符串解析成浮点数，也有对应的全局方法parseFloat
```

## Math对象
**``Math``是一个``内置对象``**，它``拥有一些数字常数属性和数学函数方法``

### Math常见的属性
- Math.PI: 圆周率，约等于3.14159

### Math常见的方法
- ``Math.floor``: 向下舍入取整
- ``Math.ceil``: 向上舍入取整
- ``Math.round``: 四舍五入取整
- ``Math.random``：生成0-1的随机数(包含0，不包含1)
- ``Math.pow``：返回x的y次幂

## String类型
### 常见的属性
- ``length``：获取字符串的长度
### 常见的方法
#### 访问字符串的字符
- 方法一: 通过字符串的索引 ``str[0]``
- 方法二：通过``str.charAt(pos)``方法
- 区别：索引的方式没有找到会返回undefined，而charAt没有找到会返回空字符串
#### 字符串的遍历
```js
var message = 'Hello Word'
// for循环遍历
for (var i = 0; i < message.length; i++) {
  console.log(message[i])
}
// for...for  String对象内部是将字符串变成了一个可迭代对象
for (var char of message) {
  console.log(char)
}
```
#### 修改字符串
- 字符串在定义后是``不可以修改``的,所以，我们改变很多字符串的操作中，都是生成了一个新的字符串
- ``toLowerCase()``: 将所有的字符串转成小写
- ``toUpperCase()``: 将所有的字符转成大写
#### 查找字符串
- 查找字符串的位置 indexOf

  - 搜索到，返回搜索字符串的索引位置
  - 没有搜索到，返回-1

- 是否包含字符串 includes

  - 根据情况返回true跟false

- 以xxx开头 startsWith(searchString, position)

  - 从position位置开始，判断字符串是否以searchString开头

- 以xxx开头 endsWith(searchString, position)

  - 从position位置开始，判断字符串是否以searchString结尾

- 替换字符串 str.replace(regexp, newSubStr)

  - 查找到对应的字符串，并且使用新的字符串进行替代

#### 获取子字符串

| 方法       |      选择方式      |  负值参数 |
| ------------- | :-----------: | ----: |
| slice(start, end)      | 从 start 到 end (不含 end) | 允许 |
| substring(start, end)      |   从 start 到 end (不含 end)    | 负值代表0 |
| substr(start, length) |   从 start 开始获取长为 length 的字符串    |   允许 start 为负数 |

#### 字符串的拼接
``+``、``concat``
```js
var str1 = "hello"
var str2 = "word"
var str3 = "kobe"
// 使用 +
var newString = str1 + str2 + str3
// 使用concat
var newString2 = str1.concat(str2).concat(str3)
var newString3 = str1.concat(str2, str3, "abc", "cba")
```
#### 删除首尾空格
``trim()``
```js
console.log("   zhangmeng   ".trim())
```

#### 字符串的切割 
``split``
```js
var message = "nba-cba-abc"
var items = message.split('-')
var str = items.join('*')
console.log(str)
```


