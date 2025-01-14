/**
 * @fileoverview effect 函数 Version 3.0 的实现
 * 在 trigger 函数内添加一些机制，防止重复触发同一个 effect 函数
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
        // 将集合添加到函数的 deps 属性中
        // 形式：activeEffect.deps = [Set]
        activeEffect.deeps.push(deps);
    }

    console.log(deepsMap);
}

function trigger(target, key) {
    // 拿到一个 Set 集合
    const deps = deepsMap.get(key);

    if (deps) {
        // 复制一份
        const effectToRun = new Set(deps);
        effectToRun.forEach((effect) => effect());
    }
}

// 重点函数，副作用函数
function effect(callback) {
    // 创建一个函数
    const environment = () => {
        activeEffect = environment;
        // 执行回调函数之前先清理一下旧的依赖
        cleanup(environment);

        callback();
        activeEffect = null;
    };
    // 用于记录改函数被哪些属性依赖
    environment.deeps = [];
    environment();
}

function cleanup(environment) {
    // 拿到当前环境函数的依赖
    // environment 可能被多个属性依赖
    let deps = environment.deeps;

    if (deps.length) {
        deps.forEach((deep) => {
            deep.delete(environment);

            if (deep.size === 0) {
                for (const [key, value] of deepsMap) {
                    deepsMap.delete(key);
                }
            }
        });
        deps.length = 0;
    }
}

// 以下代码正常执行 ✅

/* effect(() => {
    debugger;
    if (state.a === 1) {
        state.b;
    } else {
        state.c;
    }
    console.log("执行了函数1");
});

state.a = 100;

effect(() => {
    console.log(state.c);
    console.log("执行了函数2");
});

console.log(deepsMap); */

// 以下代码循环调用 ❌

effect(() => {
    if (state.a === 1) {
        state.b;
    } else {
        state.c;
    }
    console.log("执行了函数1");
});

effect(() => {
    console.log(state.a);
    console.log(state.c);
    console.log("执行了函数2");
});

state.a = 2;
