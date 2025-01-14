import { computed } from "./computed.js";
import { reactive } from "./reactive.js";
import { effect } from "./effect/effect.js";

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

const stateComputed = computed(() => {
    console.log("计算机开始计算了～");
    return state.name + ":" + state.age;
});

/* console.log(stateComputed.value);
state.age = 20;
console.log(stateComputed.value); */

// 测试 computed 的缓存
/* console.log(stateComputed.value);
console.log(stateComputed.value);
console.log(stateComputed.value);
state.age = 20;
console.log(stateComputed.value); */

// 测试某个函数依赖 computed 的值，让函数重新执行
effect(() => {
    console.log("render", stateComputed.value);
});

state.age = 20;
