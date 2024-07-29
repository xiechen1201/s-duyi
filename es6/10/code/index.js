/* setTimeout(function () {
  console.log(1);
}, 0);

console.log(2); */

/* 
    打印：
        2
        1
    解析：
*/

// TODO:======================

/* function delay(duration) {
  var start = Date.now();
  while (Date.now() - start < duration) {}
}

setTimeout(function () {
  console.log(1);
}, 0);

delay(1000);

console.log(2) */

/* 
    打印：
        2
        1
    解析：
*/

// TODO:======================

/* setTimeout(function () {
  console.log(1);
}, 0);

Promise.resolve().then(function () {
  console.log(2);
});

console.log(3); */

/* 
    打印：
        3
        2
        1
    解析：
*/

// TODO:======================

/* function fn1() {
  console.log(1);
  Promise.resolve().then(function () {
    console.log(2);
  });
}

setTimeout(function () {
  console.log(3);
  Promise.resolve().then(fn1);
}, 0);

Promise.resolve().then(function () {
  console.log(4);
});

console.log(5); */

/* 
    打印：
        5
        4
        3
        1
        2
    解析：
*/

// TODO:======================

/* function fn1() {
  console.log(1);
  Promise.resolve().then(function () {
    console.log(2);
  });
}

setTimeout(function () {
  console.log(3);
}, 0);

Promise.resolve().then(fn1);

console.log(5); */

/* 
    打印：
        5
        1
        2
        3
    解析：
        一定是所有的微任务执行完成后才能执行延时队列。
*/
