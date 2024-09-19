import { ref, watchEffect } from 'vue';

/* const state = ref({ a: 1 });
const k = state.value;
const n = k.a;

watchEffect(() => {
  // 首先判断依赖关系
  console.log('运行');
  state; // 无依赖产生
  state.value; // 产生依赖，依赖 .value 属性
  state.value.a; // 产生依赖，依赖 .value.a 属性
  n; // 无依赖产生
});

setTimeout(() => {
  state.value = { a: 3 }; // 会触发 watchEffect
}, 500); */

// TODO:=================

/* const state = ref({ a: 1 });
const k = state.value;
const n = k.a;

watchEffect(() => {
  // 首先判断依赖关系
  console.log('运行');
  state; // 无依赖产生
  state.value; // 产生依赖，依赖 .value 属性
  state.value.a; // 产生依赖，依赖 .value.a 属性
  n; // 无依赖产生
});

setTimeout(() => {
  state.value; // 不会触发 watchEffect，只是会触发拦截，但是数据没有变化，所以不会触发 watchEffect
  state.value.a = 1; // 不会触发 watchEffect，同样是因为数据没有返回变化
}, 500); */

// TODO:=================

/* const state = ref({ a: 1 });
const k = state.value;
const n = k.a;

watchEffect(() => {
  // 首先判断依赖关系
  console.log('运行');
  state; // 无依赖产生
  state.value; // 产生依赖，依赖 .value 属性
  state.value.a; // 产生依赖，依赖 .value.a 属性，如果将本行注释掉，则不会触发 watchEffect
  n; // 无依赖产生
});

setTimeout(() => {
  k.a = 2; // 会触发 watchEffect，相当于是操作了 Proxy 对象的 .a 属性
}, 500); */

// TODO:=================

/* const state = ref({ a: 1 });
const k = state.value;
let n = k.a;

watchEffect(() => {
  // 首先判断依赖关系
  console.log('运行');
  state; // 无依赖产生
  state.value; // 产生依赖，依赖 .value 属性
  state.value.a; // 产生依赖，依赖 .value.a 属性
  n; // 无依赖产生
});

setTimeout(() => {
  n++; // 不会触发 watchEffect
}, 500); */

// TODO:=================

/* const state = ref({ a: 1 });
const k = state.value;
const n = k.a;

watchEffect(() => {
  // 首先判断依赖关系
  console.log('运行');
  state; // 无依赖产生
  state.value; // 产生依赖，依赖 .value 属性
  state.value.a; // 产生依赖，依赖 .value.a 属性
  n; // 无依赖产生
});

setTimeout(() => {
  state.value.a = 100; // 会触发 watchEffect
}, 500); */

// TODO:=================

/* let state = ref({ a: 1 });
const k = state.value;
const n = k.a;

watchEffect(() => {
  // 首先判断依赖关系
  console.log('运行');
  state; // 无依赖产生
  state.value; // 产生依赖，依赖 .value 属性
  state.value.a; // 产生依赖，依赖 .value.a 属性
  n; // 无依赖产生
});

setTimeout(() => {
  state = 100; // 不会触发 watchEffect
}, 500); */

// TODO:=================

/* const state = ref({ a: 1 });
const k = state.value;
const n = k.a;

watchEffect(() => {
  console.log('运行');
  state;
  state.value;
  n;
});

setTimeout(() => {
  state.value.a = 100; // 不会触发 watchEffect
}, 500); */

// TODO:=================

/* const state = ref({ a: 1 });
const k = state.value;
const n = k.a;

watchEffect(() => {
  console.log('运行');
  state.value.a; // 依赖数据 .value 和 .a 属性
});

setTimeout(() => {
  // state.value = {}; // 会触发 watchEffect
  state.value = { a: 1 }; // 会触发 watchEffect，因为引用类型的内存地址不一样了
}, 500); */

// TODO:=================

/* const state = ref({ a: 1 });
const k = state.value;
const n = k.a;

watchEffect(() => {
  console.log('运行');
  state.value.a = 2; // 注意这里的依赖仅仅只有 .value 属性（读取操作才会被拦截）
});

setTimeout(() => {
  // state.value.a = 100; // 不会触发 watchEffect
  state.value = {}; // 会触发 watchEffect
}, 500); */

// TODO:=================

/* const state = ref({ a: 1 });
const k = state.value;
const n = k.a;

watchEffect(() => {
  console.log('运行');
  state; // 无依赖产生
  state.value.a; // 产生依赖，依赖 .value.a 属性
  n; // 无依赖
});

setTimeout(() => {
  state.value.a = 2; // 会触发 watchEffect
}, 500);

setTimeout(() => {
  // k.a = 3; // 会触发 watchEffect，相当于是操作了 Proxy 对象的 .a 属性
  k.a = 2; // 不会触发 watchEffect，因为值没有改变
}, 500); */

// TODO:=================

/* const state = ref({ a: 1 });
const k = state.value;
const n = k.a;

watchEffect(() => {
  console.log('运行');
  state; // 无依赖产生
  state.value.a; // 产生依赖，依赖 .value.a 属性
});

setTimeout(() => {
  state.value = { a: 1 }; // 会触发 watchEffect
}, 500);

setTimeout(() => {
    console.log(k)
  k.a = 3; // 不会触发 watchEffect，因为前面更改了 state.value，导致 k 和 state.value 不再指向同一个对象
}, 500); */

// TODO:=================

/* const state = ref({ a: 1 });
const k = state.value;
const n = k.a;

watchEffect(() => {
  console.log('运行');
  state; // 无依赖产生
  state.value.a; // 产生依赖，依赖 .value.a 属性
});

setTimeout(() => {
  state.value = { a: 1 }; // 会触发 watchEffect
}, 500);

setTimeout(() => {
  state.value.a = 2; // 会触发 watchEffect
}, 500); */

// TODO:=================

/* const state = ref({ a: 1 });
const k = state.value;
const n = k.a;

watchEffect(() => {
  console.log('运行');
  state.value.a; // 产生依赖，依赖 .value.a 属性
});

setTimeout(() => {
  state.value = { a: 1 }; // 会触发 watchEffect
}, 500);

setTimeout(() => {
  state.value.a = 1; // 不会触发 watchEffect，因为值没有变化
}, 500); */

// TODO:=================

/* const state = ref({ a: 1 });
const k = state.value;
const n = k.a;

watchEffect(() => {
  console.log('运行');
  state.value.a; // 产生依赖，依赖 .value.a 属性
  k.a; // 产生依赖，依赖 .a 属性
});

setTimeout(() => {
  state.value = { a: 1 }; // 会触发 watchEffect
}, 500);

setTimeout(() => {
  k.a = 3; // 会触发 watchEffect，因为 k.value 产生了依赖
}, 500);

setTimeout(() => {
  state.value.a = 4; // 会触发 watchEffect
}, 500); */
