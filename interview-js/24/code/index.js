/* const start = Date.now();
setTimeout(function f1() {
    console.log("setTimeout", Date.now() - start);
}, 200);

const fs = require("fs");

fs.readFile("./index.js", "utf-8", function f2() {
    console.log("readFile");
    const start = Date.now();
    // 强行延时 500 毫秒
    while (Date.now() - start < 500) {}
}); */

// =======

/* const start = Date.now();
setTimeout(function f1() {
    console.log("setTimeout", Date.now() - start);
}, 200);

const fs = require("fs");

fs.readFile("./index.js", "utf-8", function f2() {
    console.log("readFile1");
    const start = Date.now();
    while (Date.now() - start < 500) {}
});

fs.readFile("./index.js", "utf-8", function f2() {
    console.log("readFile2");
    const start = Date.now();
    while (Date.now() - start < 500) {}
}); */

// =======

/* console.log("start");
setTimeout(() => {
    console.log("timer1");
    Promise.resolve().then(function () {
        console.log("promise1");
    });
}, 0);
setTimeout(() => {
    console.log("timer2");
    Promise.resolve().then(function () {
        console.log("promise2");
    });
}, 0);
Promise.resolve().then(function () {
    console.log("promise3");
});
console.log("end"); */

/* 
   start
   end
   promise3
   timer1
   promise1
   timer2
   promise2
*/

// =======

/* setTimeout(function timeout() {
    console.log("timeout");
}, 0);

setImmediate(function immediate() {
    console.log("immediate");
}); */

// ======

/* const fs = require("fs");

fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log("timeout");
    }, 0);

    setImmediate(() => {
        console.log("immediate");
    });
}); */

/* 
    immediate
    timeout
*/

// ==========

/* setTimeout(() => {
    console.log("timer1");
    Promise.resolve().then(function () {
        console.log("promise1");
    });
}, 0);

process.nextTick(() => {
    console.log("nextTick");
    process.nextTick(() => {
        console.log("nextTick");
        process.nextTick(() => {
            console.log("nextTick");
            process.nextTick(() => {
                console.log("nextTick");
            });
        });
    });
}); */

/* 
    timer 队列：setTimeout
    微任务队列：nextTick、nextTick、nextTick、nextTick

*/

// nextTick => nextTick => nextTick => nextTick => timer1 => promise1

// ==========

setTimeout(() => {
    console.log("timer1");
    Promise.resolve().then(function () {
        console.log("promise1");
    });
    process.nextTick(() => {
        console.log("nexttick");
    });
}, 0);

setTimeout(() => {
    console.log("timer2");
    Promise.resolve().then(function () {
        console.log("promise2");
    });
}, 0);

/* 
    timer 队列：setTimeout、setTimeout
    微任务队列：promise、process
*/

// timer1、nexttick、promise1、timer2、promise2
