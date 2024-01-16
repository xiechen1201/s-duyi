// 希望导入的模块结果是一个可用的资源路径
const path = require("./assets/template.jpeg");

console.log(path);

let img = document.createElement("img");
img.src = path.default;
document.body.appendChild(img);
