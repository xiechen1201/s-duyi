/* if (Math.random()) {
    // 动态依赖
  const a = require("./utils/a");
  console.log(a);
} */

// ===========
/* 
const moduleName = document.getElementById("#txt").value;
if (Math.random()) {
  const a = require("./utils/" + moduleName);
  console.log(a);
} */

// ==============

// require("./utils/" + module); =>>
const context = require.context("./utils");
const a = context("./a.js");
console.log(a);
console.log(context.keys());

// ==============

/* const context = require.context("./utils", true, /\.js/);
console.log(context.keys());

for (const key of context.keys()) {
  let filename = key.substr(2);
  filename = filename.substr(0, filename.length - 3);
  module.exports[filename] = context(key);
} */
