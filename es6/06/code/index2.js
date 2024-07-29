/* 
    参数的解构和对象解构、数组解构一致
*/

/* let user = {
  name: '张三',
  age: 18,
  address: {
    city: '北京',
    detail: '西城区'
  }
};

foo(user);
function foo({ name, age, address: { city } }) {
  console.log(name, age, city);
} */

/* 
    不能从 undefinef 或 null 中进行解构
*/

/* foo();
function foo({ name, age, address: { city } }) {
  // Error: Cannot destructure property 'name' of 'undefined' or 'null'.
  console.log(name, age, city);
} */
