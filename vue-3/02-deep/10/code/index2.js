// 记录当前的函数
let activeEffect = null;
// 保存数据和函数的依赖关系
const depsMap = new Map();

// 收集器
function track(target, key) {
  // 建立依赖关系
  // console.log('收集器：', target, key);
  if (activeEffect) {
    // 根据属性值获取依赖的函数集合
    let deps = depsMap.get(key);

    if (!deps) {
      // 如果没有，则创建一个新的集合
      deps = new Set();
      depsMap.set(key, deps);
    }

    activeEffect.deps.push(deps);
    // 将依赖的函数添加到集合中
    deps.add(activeEffect);
  }

  console.log(depsMap);
}

// 派发器
function trigger(target, key) {
  //   console.log('派发器：', target, key);

  const deps = depsMap.get(key);
  if (deps) {
    deps.forEach((fn) => fn());
  }
}

function cleanup(environment) {
  // 拿到当前环境函数的依赖集合
  let deps = environment.deps;
  if (deps.length) {
    deps.forEach((dep) => {
      dep.delete(environment);
      if (dep.size === 0) {
        for (const [key, value] of depsMap) {
          depsMap.delete(key);
        }
      }
    });
    deps.length = 0;
  }
}

/**
 * @description 聚焦点，副作用函数
 * @param {Function} fn 回调函数
 */
function effect(fn) {
  const environment = () => {
    activeEffect = environment;
    // 清理依赖
    cleanup(environment);
    fn();
    // 清空
    activeEffect = null;
  };

  // 用来记录该环境函数在哪些集合里面
  environment.deps = [];

  environment();
}

// 原始对象
const data = {
  a: 1,
  b: 2,
  c: 3
};

// 代理对象
const state = new Proxy(data, {
  get(target, key) {
    track(target, key);
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    let result = Reflect.set(target, key, value);
    trigger(target, key);
    return result;
  }
});

/* effect(() => {
  console.log('函数执行了～');
  // 第一次运行依赖只有 .a 和 .b
  if (state.a === 1) {
    state.b;
  } else {
    // 第二次运行依赖只有 .a 和 .c
    state.c;
  }
});
// 这里在修改 .a 属性，会触发 set 进行派发
state.a = 10; */

// 问题：代码会进行无限的循环
effect(() => {
  if (state.a === 1) {
    state.b;
  } else {
    state.c;
  }
  console.log('执行了函数1');
});

effect(() => {
  console.log(state.a);
  console.log(state.c);
  console.log('执行了函数2');
});
state.a = 2;
