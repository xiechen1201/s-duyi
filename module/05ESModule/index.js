import { name, sayName, age } from "./base-module.js";


console.log(name, sayName, age );

// 模块内的代码不会污染全局变量
var a = 1;
