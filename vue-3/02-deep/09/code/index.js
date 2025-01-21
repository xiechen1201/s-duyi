import { reactive } from "./reactive.js";

const obj = {
    name: "张三",
    age: 18,
    info: {
        address: "北京",
        job: {
            name: "前端工程师",
            salary: 10000
        }
    }
};

const proxyObj = reactive(obj);

// 读取属性
// proxyObj.name;
// skillProxy;

// 设置属性
// proxyObj.age = 20;

// 新增属性
// proxyObj.gender = "男";

// 删除属性
// delete proxyObj.info.address;
// delete skillProxy.seniority;

// 是否存在属性
// "info" in proxyObj;

// 遍历属性
// for (const key in proxyObj) {
// }

let skill = ["html", "css", "js", obj];
let skillProxy = reactive(skill);

// 数组的操作

// === 读取行为 ===
// skillProxy[0];
// skillProxy.length;
// for (const index in skillProxy) {
//     skillProxy[index];
// }

// 方法操作
// skillProxy.includes("html");
// skillProxy.indexOf("js");
// skillProxy.push("vue");

// 查找对象
// console.log(skillProxy.includes(obj));

// === 写入行为 ===
// skillProxy[0] = "vue";
// skillProxy[4] = "vue";

// skillProxy.length = 5;
// skillProxy.length = 2;
