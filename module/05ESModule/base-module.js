// 类似 CommonJS 的 exports.name = ""
export const name = "This is base module.";

// exports.sayName = function(){}
export function sayName() {
  return name;
}

let age = 20;

// 将 age 变量的名称作为导出的名称
// 不能把 {} 当作对象！！！
export { age };
/* 
相对于 export let age = 20;
*/
