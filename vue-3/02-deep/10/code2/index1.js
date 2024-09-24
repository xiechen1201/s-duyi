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
}

// 依赖派发更新
function trigger(target, key, value) {
  let deps = depMap.get(key);
  deps.forEach((effect) => effect());
}

// 副作用函数
function effect(fn) {
  // 封装一个环境函数
  const environment = () => {
    console.log('环境函数执行了--->>');
    // a，b，c 保存的都是该环境函数，每次更改都会触发环境函数重新执行，环境函数内执行 fn 函数，fn 函数产生了闭包
    activeEffect = environment;
    fn();
    activeEffect = null;
  };

  environment();
}

function reactive(target) {
  return new Proxy(target, {
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
}

let obj = {
  a: 1,
  b: 2,
  c: 3
};

let state = reactive(obj);

effect(() => {
  console.log('回调函数执行了--->>');
  if (state.a === 1) {
    state.b;
  } else {
    state.c;
  }
  console.log(depMap);
});
state.a = 100;

// 问题：触发 state.a = 100 的时候， state.b 的依赖没有清除。
