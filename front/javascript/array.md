#  数组

### 认识数组
- 对象允许`存储键值集合`，但是在`某些情况下使用键值对来访问并不方便`
- 这个时候我们需要`一种有序的集合`，里面的元素是`按照某一个顺序来排列的`
- 这个`有序的集合`，我们可以通过索引来获取到它，这个结构就是数组
- `数组也是一个特殊的对象`
### 创建数组的方式

#### 字面量的方式创建
```js
var names = ['zhang', 'kobe', 'james', 'curry']
```

#### 类 Array
```js
var names = new Array('zhang', 'kobe', 'james', 'curry')
console.log('names',names)
```

#### 设置数组的长度
```js
var arr = new Array(5)  //[empty × 5]
```

### 数组的基本操作
**``push/pop``方法运行的比较快，而``shift/unshift``比较慢**
#### 访问数组中的元素

```js
// at(i)  如果 i >= 0,则与arr[i] 完全相同
// 如果 i 为负数，则从数组的尾部向前数 
var names = ['abc', 'cba', 'nba']
console.log(names[0])
console.log(names.at(-1))
```
#### 修改数组中的元素

```js
var names = ['abc', 'cba', 'nba']
names[0] = 'zhangmeng'
```

#### 新增数组中的元素
```js
var names = ['abc', 'cba', 'nba']
// 通过下标新增
names[3] = 'zhangmeng'
// 末尾新增
names.push('kobe', 'james')
// 头部新增
names.unshift('kobe', 'james')
```

#### 删除数组中的元素

```js
var names = ['abc', 'cba', 'nba']
// 通过下标删除
delete names[0]
// 末尾删除
var item = names.pop()   
// 头部删除
names.shift()
```

#### splice方法
-  参数一: start，从什么位置开始操作元素
-  参数二：deleteCount，删除元素的个数
- splice操作的是原数组
##### 添加元素
```js
var names = ['abc', 'cba', 'nba']
names.splice(1, 0, 'kobe', 'james')
``` 

##### 删除元素
```js
var names = ['abc', 'cba', 'nba']
names.splice(0, 3)
```

##### 修改
```js
var names = ['abc', 'cba', 'nba']
names.splice(1, 1, 'kobe', 'james')
```

### length属性

- length属性是可写的
- 如果我们`手动增加一个大于默认length的数值`，那么`会增加数组的长度`
- 如果我们`减少它，数组就会被截断`
- 清空数组的方法就是`arr.length = 0`

### 数组遍历

#### 普通的for循环
```js
for (var i = 0; i < names.length; i++) {
  console.log(names[i])
}
```
#### for...in
```js
for (var index in names) {
  console.log(index, names[index])
}
```

#### for...of
```js
for (var item of names) {
  console.log(item)
}
```

### 数组方法
#### slice
`用于对数组进行截取`
```js
// slice方法: 不会修改原数组
// start: 从什么位置开始
// end: 结束位置，不包含end本身
var newNames = names.slice(2, 4)
```
#### concat
`创建一个新数组，其中包含来自于其他数组和其他项的值`
```js
var names1 = ['abc', 'cba']
var names2 = ['nba', 'mba']
var names3 = ['zzm', 'koba']
var newNames = names1.concat(names2, names3, "zhang")
console.log(newNames)
```
#### join
`将一个数组的所有元素连接成一字字符串并返回这个字符串`
```js
var names = ['abc', 'cba', 'nba', 'mba']
console.log(names.join("^"))
```

### 查找数组中的元素

#### indexOf
`查找某个元素的索引，如果找到返回对应的索引，如果没找到返回-1`
`也有对应的从最后的位置开始查找的lastIndexOf方法`
#### includes
`判断数组中是否包含某个元素，如果找到返回true，否则返回false`
#### find 和 findIndex
`直接查找元素或者元素的索引 (ES6 新增)`

### 查找数组中的元素
#### sort/reverse
`用于对数组进行排序，并且生成一个排序后的新数组`

### 其他高阶方法
#### ForEach
`遍历数组，并且让数组中的每一个元素都执行一次对应的方法`

#### map
`创建一个新的数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成`

#### filter
`创建一个新的数组，这个新数组中只包含每个元素调用函数返回为true的元素`

#### reduce
`用于计算数组中所有元素的总和`

`对数组中的每个元素按顺序执行一个reducer函数`

`每一次运行reducer会将先前元素的计算结果作为参数传入，最后将结果汇总为单个返回值`