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
// proxyObj.info.job;

// 设置属性
// proxyObj.age = 20;

// 新增属性
// proxyObj.gender = "男";

// 删除属性
// delete proxyObj.info.address;
// delete proxyObj.info.job.seniority;

// 是否存在属性
// "info" in proxyObj;

// 遍历属性
for (const key in proxyObj) {
}
