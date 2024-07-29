/* const pro = new Promise((resolve, reject) => {
  console.log(1);
  resolve();
  console.log(2);
});

pro.then(() => {
  console.log(3);
});

console.log(4); */

/* 
    1 2 4 3
    Promise 的回调函数是不会进入回调队列的，而是直接执行的！
    pro.then 回调函数会放在微队列中去
*/

// TODO:===========================

/* const pro = new Promise((resolve, reject) => {
  console.log(1);

  setTimeout(() => {
    console.log(2);
    resolve();
    console.log(3);
  }, 0);
});

pro.then(() => console.log(4));

console.log(5); */

/* 
    1 5 2 3 4
    setTimeout 回调函数会放在宏队列中去，所以 pro 的状态没有落定
    pro.then 必须要等 pro 的状态落定后才会进入微队列
    同步执行完成，执行 setTimeout 的回调，更改 pro 的状态，pro.then 进行微队列
*/

// TODO:===========================

/* const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

const pro2 = pro1.catch(() => {
  return 2;
});

console.log('promise1', pro1);
console.log('promise2', pro2);

setTimeout(() => {
  console.log('promise1', pro1);
  console.log('promise2', pro2);
}, 2000); */

/* 
    pending pending fulfilled fulfilled

*/

// TODO:===========================

/* async function m() {
  console.log(0);
  const n = await 1;
  console.log(n);
}
m();
console.log(2); */

/* 
    0 2 1

    async 函数的返回值会被包装成 Promise 对象

    function m() {
        console.log(0);
        return new Promise((resolve, reject)=>{
            resolve(1)
        }).then(n=>console.log(n))
    }
    m();
    console.log(2);
*/

// TODO:===========================

/* async function m() {
  console.log(0);
  const n = await 1;
  console.log(n);
}

(async () => {
  await m();
  console.log(2);
})();

console.log(3); */

/* 
    0 3 1 2
    执行 await 1 的时候会放到微队列中等待执行。
    await m() 必须等到 m() 函数内部执行完成才能继续执行！
    只要遇到 await，后续的代码就会放到微队列！
*/

// TODO:===========================

/* async function m1() {
  return 1;
}

async function m2() {
  const n = await m1();
  console.log(n);
  return 2;
}

async function m3() {
  const n = m2();
  console.log(n);
  return 3;
}

m3().then((n) => console.log(n));

m3();

console.log(4); */

/* 
    Promise{ pending } Promise{ pending } 4 1 3 1

    有个有点绕：

     先执行 line:132 的 m3() 函数，m3() 函数内部执行 m2 函数，m2 函数 await m1()，后续代码进入微任务队列。
     回到 m3() 内部，因为没有使用 await 等待 m2()，所以直接输出 Promise，函数执行完成

     再执行 line:134 的 m3() 函数，流程同上！

*/

// TODO:===========================

/* Promise.resolve(1).then(1).then(Promise.resolve(2)).then(console.log); */

/* 
    1
    如果 .then 的参数不是一个函数，则会被忽略，类似于 .then(null) 然后继续向后处理
*/

// TODO:===========================

/* var a;
var b = new Promise((resolve, reject) => {
  console.log('promise1');
  setTimeout(() => {
    resolve();
  }, 1000);
})
  .then(() => console.log('promise2'))
  .then(() => console.log('promise3'))
  .then(() => console.log('promise4'));

a = new Promise(async (resolve, reject) => {
  console.log(a);
  await b;
  console.log(a);
  console.log('after1');
  await a;
  resolve(true);
  console.log('after2');
});

console.log('end'); */

/* 
    promise1 undefined end promise2 promise3 promise4 Promise{ padding } after1 after2

    执行顺序解析

	1.	同步执行部分
	•	声明变量 a 和 b。
	•	创建 b 的 Promise 实例，立即执行传入的函数。
	•	console.log('promise1') 输出 promise1。
	•	设置 setTimeout，它将在 1000 毫秒后执行 resolve。
	•	为 b 添加 .then 链，在 b 解析后按顺序执行这些回调函数。
	•	创建 a 的 Promise 实例，立即执行传入的函数。
	•	console.log(a) 输出 undefined，因为此时 a 尚未赋值。
	•	await b 暂停 a 的执行，直到 b 完成。
	•	console.log('end') 输出 end。
	2.	1000 毫秒后，setTimeout 的回调被执行
	•	resolve 执行后，b 的状态从 pending 变为 fulfilled。
	•	b 的第一个 .then 回调函数被推入微任务队列。
	3.	微任务队列
	•	当前事件循环结束后，微任务队列开始执行。
	•	第一个 .then 回调执行，console.log('promise2') 输出 promise2。
	•	随后第二个 .then 回调执行，console.log('promise3') 输出 promise3。
	•	最后第三个 .then 回调执行，console.log('promise4') 输出 promise4。
	4.	继续执行 a 的异步函数
	•	await b 结束，b 已经完成。
	•	console.log(a) 输出 a 的当前状态，此时 a 是 Promise 实例。
	•	console.log('after1') 输出 after1。
	•	await a 暂停执行，等待 a 自身完成（这会导致死锁，因为 a 永远不会完成）。


    b 的赋值过程分为：变量申明、表达式赋值
*/

// TODO:===========================

/* async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
});

async1();

new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});

console.log('script end'); */

/* 
    script start
    async1 start
    async2
    promise1
    script end
    async1 end
    promise2
    setTimeout
*/

/* 
    async2() 函数内部没有延时，所以立马状态为 fulfilled
    await async2() 后续代码进行微队列
    new Promise 状态马上完成，.then 进入微队列
*/