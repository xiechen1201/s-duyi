/* 
    ## 什么是解构？

    使用 ES6 的一种语法规则，将一个对象或者数组的某个属性提取到某个变量中
    解构不会对被解构的对象产生任何的影响。
*/

/* const user = {
  name: 'zhangsan',
  age: 18,
  sex: '男',
  address: {
    province: '河北',
    city: '石家庄'
  }
};

// 书写起来比较的麻烦
let name, age, sex, address;
name = user.name;
age = user.age;
sex = user.sex;
address = user.address; */

/* 
    使用解构可以快速的进行简写
*/

/* const user = {
  name: 'zhangsan',
  age: 18,
  gender: '男',
  address: {
    province: '河北',
    city: '石家庄'
  }
};

let name, age, gender, address;
// 让整个赋值语句视为一个整体
// 理解为把 user 对象的 name... 属性读取出来，放到同名变量中 name... 中去
({ name, age, gender, address } = user); */

/* 
    两条语句进行合并书写
    表示先定义 4 个同名属性，然后从对象中读取同名的属性，放到变量中
*/

/* let { name, age, gender, address } = user; */

// TODO:=========================

/* 
    如果结构不出来会赋值为 undefined
*/

/* const user = {
  name: 'zhangsan',
  age: 18,
  gender: '男',
  address: {
    province: '河北',
    city: '石家庄'
  }
}; */

/* let { abc } = user;
console.log(abc); */

/* 使用默认值 */

/* let { abc = '默认值' } = user;
console.log(abc); */

/* 
    非同名属性解构
    如果解构的属性名和变量名不一致

    先定义两个变量 userName、age，再从对象 user 读取同名属性赋值（其中 userName 读取的是 name 属性） 
*/

/* let { name: userName, age } = user;
console.log(userName, age); */

/* 
    默认值+重命名
*/

/* let { abc: efg = 123 } = user;
console.log(efg); */

/* 
    深层解构
    解构 user 中的 city

    address: { city } 的 : 不再表示别名，而是表示对象解构，并且 address 也不存在！
*/

/* let {
  name,
  address: { city }
} = user;

console.log(city);
console.log(address); // Error */