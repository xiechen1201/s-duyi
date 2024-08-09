# 2 可迭代协议和 for-of 循环

## 克迭代协议

概念回顾：

- 迭代器（iterator）：是一个具有 next 方法的对象，next 方法方法返回下一个数据并且能够指示是否迭代完成

- 迭代器创建函数（iterator creator）：一个返回迭代器的函数

可迭代协议：

ES6 规定，如果一个对象具有知名符号属性 Symbol.iterator，并且属性值是一个迭代器创建函数，则该对象是可迭代（iterable）。

```js
var obj = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: 1,
          done: false
        };
      }
    };
  }
};
```

数组就有这个方法：详见代码。

如何遍历一个可迭代对象呢？

# for-of 循环

for-of 专门用于遍历可迭代对象：

```js
for(const iter of iterable){
    // iter 每次迭代的得到的数据
    // iterable 可迭代对象
}
```

## 展开运算符和可迭代对象

展开运算符可以作用于可迭代对象，这样就可以轻松的将可迭代对象转化为数组。

```js
// 将迭代器转换为数组
const arr = [...obj];
console.log(arr);

// 将迭代器作为参数传递
test(...obj);
function test(a, b){
    console.log(a, b);
}
```