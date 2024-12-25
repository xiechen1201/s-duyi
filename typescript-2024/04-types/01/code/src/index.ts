/* 
    类型编程

    映射类型（Mapped types）
    也叫做索引签名类型，就是对象字面量类型
 */

// JS 的写法，但是 TS 中范围太广了
/* let obj = {};
obj = 1;
obj = "1"; */

// 所以有 object 类型，object 是一个上层的类型，因此没有 name 属性
/* let obj: object = {};
obj.name = "Ben"; */

// 使用类型别名
/* type User = {
    name: string;
    age: number;
};

let obj: User = {
    name: "Ben",
    age: 18
};
obj.type = "admin" */

// 但是这样又显的太死板了，改成可选属性，如果新增一个属性依然报错
// 本身就不知道对象包含哪些类型，所以需要映射类型

// 设置 User 的 key 是 string | number 类型
/* type User = {
    [key: string]: string | number;
};

const user: User = {
    name: "Ben",
    age: 18
};
user.type = "admin"; */

// 虽然代码没有提示了，至少是可以运行的，拥有了一定的灵活性也丢失了安全性

/* type User = {
    [key: string]: string | number;
};
// 对象的键可以是 string、number、symbol
const user: User = {
    name: "Ben",
    age: 18,
    "123": 123,
    [Symbol()]: "Hello"
}; */

// =====================================

/* 
    注意事项
*/

// 定义已知的属性

/* type User = {
    name: string;
    age: number; // ❌
    // 因为索引签名已经规定了所有的属性都是 string 类型
    // 将索引的值更改为联合类型
    [key: string]: string;
}; */

// 适应场景，不知道对象有哪些 key 值的类型是什么

/* type AnyTypeObj = {
    [key: string]: any;
};

let obj: AnyTypeObj = {};
obj.age = 10;
obj.name = "Ben"; */

/* 
    比 obj: any 范围小，比 obj: obj 范围大

    TS 提供了索引签名的工具类型 Record
    Record 的作用就是将 K 的类型作为对象的 key，将 T 的类型作为对象的 value
*/

/* interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" }
}; */

const user: Record<string, any> = {
    name: "Ben",
    age: 20
};
