/* 
    数组本质上还是对象！
    所以解构数组可以按照解构对象一样的形式！
*/

/* const arrs = ['a', 'b', 'c', 'd']; */

/* const { 0: n1, 1: n2 } = arrs;
console.log(n1, n2); */

// ES6 提供了更加简便的方式

// 进行解构
/* let n1, n2;
[n1, n2] = arrs;
console.log(n1, n2); */

// 合并解构
/* const [n1, n2] = arrs;
console.log(n1, n2); */

/* // 只解构第一项和最后一项
// 可以设置默认值
let [n1, , , n4, n5, n6 = '默认值'] = arrs;
console.log(n1, n4, n5, n6); */

// 嵌套的解构
/* const arrs = ['a', 'b', 'c', 'd', [1, 2, 3, 4]];
const [n1, n2, n3, n4, [n5, n6, n7, n8]] = arrs;
console.log(n1, n2, n3, n4, n5, n6, n7, n8) */

// TODO:====================

/* 
    补充：剩余项的解构
    解构出 name，剩余的参数放在新的对象中
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

const { name, ...obj } = user;
console.log(name, obj); */

/* const arrs = ['a', 'b', 'c', 'd'];
const [n1, ...newArr] = arrs;
console.log(n1, newArr); // a ['b', 'c', 'd'] */

// TODO:====================

/* 
    数据交换

    a b 组成一个数组 [1, 2]
    左边进行解构 [b, a]，1 赋值给 b，2 赋值给 a
*/

/* let a = 1;
let b = 2;
[b, a] = [a, b];
console.log(a, b); */

// TODO:====================

/* 
    练习
*/

/* const article = {
  title: '文章标题',
  content: '文章内容',
  comments: [
    {
      content: '评论内容1',
      user: {
        id: 1,
        name: '张三'
      }
    },
    {
      content: '评论内容2',
      user: {
        id: 2,
        name: '李四'
      }
    }
  ]
};

let {
  comments: [
    ,
    {
      content,
      user: { name }
    }
  ]
} = article;

console.log(content, name); */
