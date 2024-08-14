/* 
    ## WeakMap 和 WeakSet
*/

/* 
    Weak 软弱的，弱引用
*/

/* let obj = {
  name: '张三',
  age: 18
};
let set = new Set();
set.add(obj);

obj = null;

console.log(set) */

/* 
    set 是有值的
    因为 set.add(obj) 的时候，set的第一项是引用了 obj，地址指向了堆内存地址
    obj = null 的时候，但是 set 的第一项还引用了 obj 的地址。所以，数据不会被进行垃圾回收
*/

/* 
    使用 WeakSet 可以实现和 set 一样的功能，区别在于：
    1、它内部的存储的地址不会影响垃圾回收

*/

/* let obj = {
  name: '张三',
  age: 18
};
let set = new WeakSet();
set.add(obj);

obj = null;

console.log(set.size) */

/* 
    obj = null; 引擎发现没有任何变量引用了，所以会进行垃圾回收
    垃圾回收机制完全不考虑 WeakSet 是否引用了数据
*/

/* 
    基于这个特点，可以用来记录一些对象是否被回收了
*/

/* let obj = {
  name: '张三',
  age: 18
};
let obj2 = obj;

let set = new WeakSet();
set.add(obj);

obj = null;
obj2 = null

console.log(set);
 */

/* 
    2、只能添加对象（因为就是来检测对象的）
    3、不能使用遍历（不是可迭代的对象）、没有 size 属性、没有 forEach 方法
*/

/* 
    ## WeakMap

    和 WeakSet 差不多，类似于 Map 的集合，不同的是：
        1、他的键存储的地址不会影响垃圾回收
        2、他的键只能是对象
        3、不能使用遍历（不是可迭代的对象）、没有 size 属性、没有 forEach 方法
*/

/* let obj = {
  name: '张三',
  age: 18
};

let wm = new WeakMap();
wm.set(obj, 123);

obj = null;

console.log(wm) */

/* let wp = new WeakMap();
let lis = document.querySelectorAll('li');

for (const element of lis) {
  wp.set(element, {
    id: element.innerHTML,
    name: '姓名' + element.innerHTML
  });
}

lis[0].remove();
lis = null;

console.log(wp); */
