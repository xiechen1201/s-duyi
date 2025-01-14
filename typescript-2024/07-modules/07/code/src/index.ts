/* import lodash from "lodash";

lodash.add(1, 2); */

// 对图片的处理

/* import templateImg from "./assets/template.jpeg";
console.log(templateImg); */

// 命名空间

// 全局
/* const user: User.User = {
    name: "zhangsan",
    age: 18,
    address: {
        street: "123",
        city: "beijing",
        country: "china"
    }
}; */

// 模块化
/* import { User } from "./types";
const user: User.User = {
    name: "zhangsan",
    age: 18,
    address: {
        street: "123",
        city: "beijing",
        country: "china"
    }
}; */

// declare global
// declare global 必须在一个模块化文件内
/* let animal: Animal = {
    name: "dog",
    age: 3
}; */

/* // 内置的 string 类型添加一个方法

if(!String.prototype.point) {

} */

// ===========================

/* type A = {
    id: number;
};

interface A {
    name: string;
} */

interface A {
    name: string;
}

class A {
    constructor(public id: number) {}
}

const a: A = {
    id: 1,
    name: "zhangsan"
};
