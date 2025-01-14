/**
 * @fileoverview effect 函数 Version 1.0 的实现
 */

const data = {
    a: 1,
    b: 2,
    c: 3
};

const state = new Proxy(data, {
    get(target, key) {
        const result = Reflect.get(target, key);
        track(target, key);
        return result;
    },
    set(target, key, value) {
        const result = Reflect.set(target, key, value);
        trigger(target, key);
        return result;
    }
});

// ======================

// 记录当前的函数
let activeEffect = null;
// 存储数据和函数之间的依赖关系
let deepsMap = new Map();

function track(target, key) {
    if (activeEffect) {
        // 根据属性值去获取依赖的函数
        let deps = deepsMap.get(key);

        // 如果 deps 是空的，那么久创建一个集合
        // 因为一个属性可能依赖多个函数
        // 形式：Map{ 'a' => Set([Function]) }
        if (!deps) {
            deps = new Set();
            deepsMap.set(key, deps);
        }

        // 将函数添加到集合中
        deps.add(activeEffect);
    }
}

function trigger(target, key) {
    // 拿到一个 Set 集合
    const deps = deepsMap.get(key);
    for (const fn of deps) {
        fn();
    }
}

// 重点函数，副作用函数
function effect(callback) {
    activeEffect = callback;
    callback();
    activeEffect = null;
}

effect(() => {
    // 访问 a 属性
    // 期望 a 属性和 ()=> 建立关系
    console.log(state.a);
});

state.a = 100;
