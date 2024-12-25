// 交叉两个基础类型会得到 type A = never; 类型
// 表示绝不、永不的类型
// type A = string & number;

/* 
  null undefined void 三个类型的意义？
  never 就表示一个真正的空类型
*/

// 可以利用never的特性与类型的控制流分析，让typescript做出更合理的处理
// 使用 if 将类型进行缩小

/* type Method = 'GET' | 'POST';

function request(url: string, method: Method) {
  if (method === 'GET') {
    console.log(`GET ${url}`);
  } else if (method === 'POST') {
    console.log(`POST ${url}`);
  } else {
    // 这里永远不会执行，所以类型是 never 类型
    // 🤔 (parameter) method: never
    console.log(`Method ${method} is not supported`)
  }
} */

/* 
  (parameter) method: never 有什么意义呢？
  假如后期想要新加字面量类型 method，"PUT" | "DELETE" | "PATCH"
  这个方法是无感的，不会提示任何的问题。
  我们可以利用 never 的特性，让ts帮我们做类型检查
  任何类型不能赋值给 never 类型
*/

/* type Method = 'GET' | 'POST' | "DEL";

function request(url: string, method: Method) {
  if (method === 'GET') {
    console.log(`GET ${url}`);
  } else if (method === 'POST') {
    console.log(`POST ${url}`);
  } else {
    const _nerverCheck: never = method; // ❌ 不能将类型“string”分配给类型“never”
    console.log(`Method ${_nerverCheck} is not supported`);
  }
} */

// ==================================================

// 某些情况下，也适合显示的注明 never 类型

function fn(): never {
  // do something...
  throw new Error('error');
}

function foo(n: number) {
  if (n > 10) {
    fn();
    // 如果显式的注明 never 类型，后续代码不会执行
    let name = 'foo'; // 🤔 检测到无法访问的代码
    // do something...
  }
}
