// 临时存储活动的副作用函数
let activeEffect = null;
// 依赖收集器
// 形式：{ a: Set([fn, fn]), b: ...}
let depMap = new Map();

// 依赖收集器
function track(target, key) {
  // 如果有活动副作用函数，则进行依赖收集
  if (activeEffect) {
    let deps = depMap.get(target);
    if (!deps) {
      deps = new Set();
      depMap.set(key, deps);
    }
    deps.add(activeEffect);
  }
  console.log(depMap);
}

// 依赖派发更新
function trigger(target, key, value) {
  let deps = depMap.get(key);
  deps.forEach((effect) => effect());
}

// 副作用函数
function effect(fn) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}

function reactive(target) {
  return new Proxy(target, {
    get(target, key) {
      track(target, key);
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      trigger(target, key, value);
      return Reflect.set(target, key, value);
    }
  });
}

let obj = {
  a: 1,
  b: 2,
  c: 3
};

let state = reactive(obj);

/* effect(() => {
  console.log('函数执行了--->>');
  console.log(state.a);
});

state.a = 100; */

// 问题：每一次运行回调函数的时候，都应该确定新的依赖关系。
// 期望第一次：Map(2) { a: Set([fn]), b: Set([fn]) }
// 期望第二次：Map(2) { a: Set([fn]), c: Set([fn]) }
effect(() => {
  console.log('函数执行了--->>');
  if (state.a === 1) {
    state.b;
  } else {
    state.c;
  }
});
state.a = 100;