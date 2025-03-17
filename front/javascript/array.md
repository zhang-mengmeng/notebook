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