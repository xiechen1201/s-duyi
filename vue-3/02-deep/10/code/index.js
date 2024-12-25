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

/**
 * @description 聚焦点，副作用函数
 * @param {Function} fn 回调函数
 */
function effect(fn) {
  activeEffect = fn;
  fn();
  // 清空
  activeEffect = null;
}

/* effect(() => {
  console.log('执行了函数～');
  // 这里在访问 .a 属性，会触发 get 进行依赖收集
  console.log(state.a);
});
// 这里在修改 .a 属性，会触发 set 进行派发
state.a = 10; */

// 问题：每一次运行回调函数的时候，都应该确定新的依赖关系。
effect(() => {
  if (state.a === 1) {
    state.b;
  } else {
    state.c;
  }
  console.log('执行了函数');
});
state.a = 10;
