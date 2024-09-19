// 先写一个 mini 版的 ref 和 reactive 的实现

function isObject(value) {
  return typeof value === 'object' && value !== null;
}

class RefImpl {
  constructor(value) {
    // 判断是否是对象
    this._value = isObject(value) ? reactive(value) : value;
  }

  get value() {
    console.log(`value被读取了～`);
    return this._value;
  }

  set value(newValue) {
    console.log(`value 被设置为${newValue}了～`);
    this._value = newValue;
  }
}

// 深层代理
function deepProxy(value) {
  return new Proxy(value, {
    get(target, key) {
      console.log(`${key}被读取了～`);

      // 如果读取的是对象，则递归代理
      if (isObject(target[key])) {
        return deepProxy(target[key]);
      }
      return Reflect.get(target, key);
    },
    set(target, key, newValue) {
      console.log(`${key}被设置为${newValue}了～`);
      return Reflect.set(target, key, newValue);
    },
    deleteProperty(target, key) {
      console.log(`${key}被删除了～`);
      return Reflect.deleteProperty(target, key);
    }
  });
}

function reactive(value) {
  return deepProxy(value);
}

function ref(value) {
  return new RefImpl(value);
}

// TODO:=================

/* let state = ref(100);
state; // 不会触发代理
console.log(state); // 不会触发代理
console.log(state.value); // 会触发代理
console.log(state.a); // 不会触发代理，因为 state 不存在 a 属性
state.a = 3; // 不会触发代理，因为 state 不存在 a 属性
state.value = 200; // 会触发代理
delete state.value; // 不会触发代理，因为 value 只会针对读取和设置进行拦截
state = 3; // 不会触发更新，因为 statue 只会针对 value 进行拦截 */

// TODO:=================

/* let state = ref({ abc: 123 });
console.log(state.value); 

state; // 不会触发代理，因为不操作对象的属性
console.log(state); // 不会触发代理
console.log(state.value); // 会触发代理
console.log(state.a); // 不会触发代理，因为 state 不存在 a 属性 
console.log(state.value.abc); // 会触发代理，触发两次，因为 value 和 abc 都会触发代理
state.a = 456; // 不会触发代理
state.value.a = 456; // 会触发代理，触发两次，因为 value 和 a 都会触发代理
delete state.value.a; // 会触发代理，触发两次，因为 value 和 abc 都会触发代理
state.value = 456; // 会触发代理
delete state.value; // 不会触发代理，因为 value 只会针对读取和设置进行拦截
state = 456; // 不会触发更新，因为 statue 只会针对 value 进行拦截 */

// TODO:=================

/* let state = reactive({});
state; // 不会触发代理，因为不操作对象的属性
console.log(state); // 不会触发代理
console.log(state.abc); // 会触发代理
state.abc = 123; // 会触发代理
state.a = {
  b: {
    c: 3
  }
}; // 会触发代理，拦截到 a 属性的 set 操作
console.log(state.a.b.c); // 会3次触发代理
delete state.a.b; // 会触发代理，拦截到 a.b 属性的 delete 操作 */

// TODO:=================

/* const state = ref({ a: 1 });
const k = state.value; // 触发 value 的 get
console.log(k); // 不会触发，k 返回的是一个代理对象，这里没有对代理对象进行操作
k.a = 2; // 触发 a 的 set
const n = k.a; // 触发 a 的 get
console.log(n); // 不会触发，n 返回的是一个原始值，这里没有对原始值进行操作 */

// TODO:=================

/* const state = reactive([1, 2, 3]);
state; // 不会触发
state.length; // 会触发，因为访问了 length 属性
state[0]; // 会触发，因为访问了 0 属性
state[0] = 4; // 会触发 0 的 set
state.push(5); // 会触发，并且触发的比较多 */