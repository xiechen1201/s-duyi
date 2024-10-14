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
    // 形式： { deps: [Set, Set, Set] }
    activeEffect.deps.push(deps);

    deps.add(activeEffect);
  }
}

// 依赖派发更新
function trigger(target, key, value) {
  let deps = depMap.get(key);
  deps.forEach((effect) => effect());
}

// 清理依赖
function cleanup(environment) {
  // 获取到当前环境函数的依赖集合
  let deps = environment.deps;
  if (deps.length) {
    // deps 就是 [Set([environment]), ...]
    deps.forEach((dep) => {
      // dep 是 数据对应的依赖 Set 集合
      dep.delete(environment);
      // 如果这个 dep Set 集合被清空了，则从 Map 中删除对应的数据
      if (dep.size === 0) {
        for (const [key, value] of depMap) {
          depMap.delete(key);
        }
      }
    });
  }
}

// 副作用函数
function effect(fn) {
  // 封装一个环境函数
  const environment = () => {
    console.log('环境函数执行了--->>');
    // a，b，c 保存的都是该环境函数，每次更改都会触发环境函数重新执行，环境函数内执行 fn 函数，fn 函数产生了闭包
    activeEffect = environment;
    // 清理依赖
    cleanup(environment);
    // 执行回调函数
    fn();
    activeEffect = null;
  };

  // 用来记录该环境函数被哪在哪些集合 Set 里面
  // 形式： { deps: [Set, Set, Set] }
  environment.deps = [];

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

/* effect(() => {
  console.log('回调函数执行了--->>');
  if (state.a === 1) {
    state.b;
  } else {
    state.c;
  }
  console.log(depMap);
});
state.a = 100; */

// 问题：以下代码会出现无限循环
// 这段代码无异常
/* effect(() => {
  console.log('执行回调函数1==>>');
  if (state.a === 1) {
    state.b;
  } else {
    state.c;
  }
  console.log(depMap);
});

effect(() => {
  console.log('执行回调函数2==>>');
  console.log(state.c);
  console.log(depMap);
});
state.a = 2; */

// 这段代码会进行无限循环
effect(() => {
  console.log('执行回调函数1==>>');
  if (state.a === 1) {
    state.b;
  } else {
    state.c;
  }
  console.log(depMap);
});

effect(() => {
  console.log('执行回调函数2==>>');
  console.log(state.a);
  console.log(state.c);
  console.log(depMap);
});
state.a = 2;