/* 
    ## 观察者模式
*/

/* 
    没有学习代理之前
*/

/*

// 创建一个观察者
function Observer(target) {
  const oDiv = document.getElementById('container');
  const ob = {};
  const props = Object.keys(target);

  for (const prop of props) {
    Object.defineProperty(ob, prop, {
      get() {
        return target[prop];
      },
      set(value) {
        target[prop] = value;
        render();
      },
      enumerable: true
    });
  }

  render();
  function render() {
    let html = '';

    for (const prop of Object.keys(ob)) {
      html += `<p><span>${prop}: </span><span>${ob[prop]}</span></p>`;
    }

    oDiv.innerHTML = html;
  }

  return ob;
}

// 通过 Observer 函数创建一个新的对象，该对象和原对象具有相同的属性，并且可以监听属性的变化
// 新的对象是一个观察者
const target = {
  a: 1,
  b: 2
};
const obj = Observer(target);

// 以后不能直接修改 target，而是使用 obj 来修改

*/

/* 
  缺点：
  1、出现了两个对象，一个 target、一个 obj
  2、如果 target 新增了属性，obj 是不会知道的
  3、
*/

// TODO:==========================================

/* 
  使用代理
*/

/* function Observer(target) {
  const oDiv = document.getElementById('container');
  const proxy = new Proxy(target, {
    get(target, prop) {
      return Reflect.get(target, prop);
    },
    set(target, prop, value) {
      Reflect.set(target, prop, value);
      render();
    }
  });

  render();
  function render() {
    let html = '';

    for (const prop of Object.keys(target)) {
      html += `<p><span>${prop}: </span><span>${target[prop]}</span></p>`;
    }

    oDiv.innerHTML = html;
  }

  return proxy;
}

const obj = Observer({
  a: 1,
  b: 2
});

console.log(obj) */

/* 
  给 obj 新增一个属性，Proxy 是可以捕获到的
*/
