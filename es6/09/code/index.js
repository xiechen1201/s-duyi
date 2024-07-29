/* 
    ## async 

    async 关键字是用来修饰函数的，必须书写在函数的前面。
    async ()=>{}
    async function(){}
    (async function(){})()

    被他修饰的函数，一定返回的是 Promise 异步任务。

    本身就是一个语法糖（本质上没有功能性的变化，只是写起来比较舒服）。
*/

/* function m(){}
console.log(m()); // undefined

async function m1(){}
console.log(m1()); // Promise {<fulfilled>: undefined} */

/* 
    返回值是 Promise Fulfilled 状态的数据
*/

/* async function m1() {
  return 'hello';
}
console.log(m1()); // Promise {<fulfilled>: 'hello'} */

// 等价于
/* function m1() {
  return new Promise((resolve, reject) => resolve('hello'));
} */

/* 
   如果 async 方法内返回一个 Promise ，那么这个 Promise 的状态会决定 async 方法的状态。
*/

/* async function foo() {
  return Promise.reject('错误！');
}
console.log(foo()); // Promise {<rejected>: '错误！'} */

/* 
    如果 async 函数内发生报错，则 Promise 的状态为 rejected
*/
/* async function foo() {
  throw new Error('错误！');
}
console.log(foo()); // Promise {<rejected>: Error: 错误！} */

// TODO:====================

/* 
    ## await

    表示等待某个 Promise 完成，他必须用于 async 函数内部！
    然后得到会 Promise fulfilled 状态的数据！
    只有 await 完成后续的代码才可以执行！
*/

/* function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('数据');
    }, 1000);
  });
}

async function foo() {
  // 类似于 getList().then(res=>console.log(res));
  // await 方便了我们的写法
  let result = await getList();
  console.log(result);
}
foo(); */

/* 
    await 也可以等待其他的数据
*/

/* async function foo() {
  // 如果等待的不是 Promise，会转换为 Promise
  // 等于 await Promise.resolve(100);
  const n = await 100;
  console.log(n);
}
foo(); */

/* 
    如果 await 的任务失败了，需要使用 try catch 来进行捕获
*/

/* async function foo() {
  try {
    await Promise.reject('错误！');
  } catch (error) {
    console.log(error);
  }
}
foo(); */

// TODO:====================

/* 
    邓哥的完美解决方案
*/

/* // 女神名字列表
const girls = ['小丽', '小红', '小芳', '小丽', '小红', '小芳'];

function sendMessage(name) {
  return new Promise((resolve, reject) => {
    console.log('发送短信...');

    setTimeout(() => {
      if (Math.random() <= 0.1) {
        resolve(`${name}同意了表白`);
      } else {
        reject(`${name}拒绝了表白`);
      }
    }, 1000);
  });
}

(async () => {
  let isSuccess = false;

  for (const name of girls) {
    try {
      let result = await sendMessage(name);
      isSuccess = true;
      console.log(result);
      break;
    } catch (error) {
      console.log(error);
    }
  }

  if (isSuccess) {
    console.log('成功！');
  } else {
    console.log('失败！');
  }
})(); */

// TODO:====================

/* 
    练习题
*/

/* function changeLight(color, duration) {
  return new Promise((resolve) => {
    console.log(color);
    setTimeout(resolve, duration);
  });
}

function trafficLightCycle() {
  changeLight('Red', 3000)
    .then(() => changeLight('Green', 2000))
    .then(() => changeLight('Yellow', 1000))
    .then(trafficLightCycle); // 递归调用，实现循环
}

// 开始红绿灯循环
trafficLightCycle(); */
