// 记录当前的函数
let activeEffect = null;
// 保存数据和函数的依赖关系
const depsMap = new Map();
// 保存函数栈
const effectStack = [];

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
  // console.log('派发器：', target, key);

  const deps = depsMap.get(key);
  if (deps) {
    const effecttoRun = new Set(deps);
    effecttoRun.forEach((fn) => fn());
  }
}

function cleanup(environment) {
  // 拿到当前环境函数的依赖集合
  let deps = environment.deps;
  if (deps.length) {
    deps.forEach((dep) => {
      // 删除依赖
      dep.delete(environment);
      if (dep.size === 0) {
        for (const [key, value] of depsMap) {
          if (value === dep) {
            depsMap.delete(key);
          }
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
    // 将环境函数推入栈（其实就是在模拟真实的函数栈）
    effectStack.push(environment);
    // 清理依赖
    cleanup(environment);
    fn();

    // 清空
    // activeEffect = null;

    effectStack.pop();
    activeEffect = effectStack[effectStack.length - 1];
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

effect(() => {
  effect(() => {
    console.log('执行了函数2');
    state.a;
  });
  console.log('执行了函数1');
  state.b;
});
