import { effect } from "./effect/effect.js";
import { reactive } from "./reactive.js";

const person = {
    name: "张三",
    age: 18,
    info: {
        address: "北京",
        job: {
            name: "前端工程师",
            salary: 10000
        }
    }
};

const state = reactive(person);

// 测试 1：
/* function fn() {
    console.log("fn");
    state.age = state.age + 1;
}

effect(fn);

state.age = 100; */

// 测试 2：
/* effect(() => {
    if (state.age === 18) {
        state.name;
    } else {
        state.info;
    }
    console.log("执行了函数1");
});

effect(() => {
    state.info.address;
    console.log("执行了函数2");
});

state.age = 100;
state.info.address = "上海"; */

// 懒执行
/* function fn() {
    console.log("fn");
    state.age = state.age + 1;
}

const effectFn = effect(fn, {
    lazy: true
});

state.age = 100;

// 执行 effectFn 函数后才会建立依赖关系
effectFn(); */

// 用户添加回调，指定依赖含税如何处理

function fn() {
    console.log("fn");
    state.age = state.age + 1;
}

let isRun = false;
const effectFn = effect(fn, {
    lazy: true,
    shcheduler: (effect) => {
        // 用户决定什么时候执行
        Promise.resolve().then(() => {
            if (!isRun) {
                isRun = true;
                effect();
            }
        });
    }
});

state.age = 100;

effectFn();
state.age++;
state.age++;
state.age++;
