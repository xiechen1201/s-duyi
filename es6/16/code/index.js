/* 
    ## Map 集合
*/

/* 
    Map 集合是专门用于储存多个键值对的集合。
    在 Map 出现之前，使用的是对象的方式来存储键值对。
        键值对数据集合的特点：键不可重复。

    使用对象存储有以下几个问题：
        1、键名只能是字符串或 Symbol，不能是其他类型。
        2、获取数据的数量不方便
        3、键名容易和原型上的名称冲突
*/

/* 
    1、如何创建 Map

    new Map();
    new Map(iterable); // 创建一个具有初始内容的 Map 集合，初始内容来自于可迭代对象每一次迭代的结果，他要求每次迭代的结果必须是一个长度为 2 的数组，第一项表示键，第二项表示值。
*/

/* let m = new Map(); // 创建一个空的 Map 集合
console.log(m); */

/* let m = new Map([
  ['name', '张三'],
  ['age', 18],
  ['gender', '男']
]);
console.log(m); */

/* 
    2、Map 集合的方法

    size 属性，获取 Map 集合中键值对的数量。
    set(key, value)，向 Map 集合中添加键值对，键和值可以是任何的类型
        如果键不存在，则添加一项
        如果键存在，则修改对应的值
    get(key)，获取指定键对应的值
    has(key)，判断指定键是否在 Map 集合中存在
    delete(key)，删除指定键值对，返回是否删除成功
    clear()，清空 Map 集合
*/

/* let m = new Map();

m.set('name', ' 张三');
m.set({}, '李四');
m.set('name', '王五');
 
console.log(m.get('name'));
console.log(m.get('abc'));

console.log(m.has('name'));

console.log(m.size);

console.log(m); */

/* 
    Map 转化为数组
*/

/* let m = new Map([
  ['name', '张三'],
  ['age', 18],
  ['gender', '男']
]);
console.log(m)
let arr = [...m];
console.log(arr); */

/* 
    3、遍历
    for-of 每次迭代得到的是一个长度为 2 的数组
    forEach 每次迭代得到的是一个长度为 2 的数组
*/

/* let m = new Map([
  ['name', '张三'],
  ['age', 18],
  ['gender', '男']
]);

for (const element of m) {
  console.log(element);
}

m.forEach((value, key, map) => {
  console.log(key, value, map);
}); */