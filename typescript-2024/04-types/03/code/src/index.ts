/* 
    in 可以在映射类型中遍历联合类型的每一个成员类型
*/

/* type Foo = {
    [key: string]: string;
}; */

// key 的范围太广了，如何缩小 key 的范围呢？

/* type Foo = {
    [key in "a" | "b" | "c"]: string;
};

// 等同于

type Foo2 = {
    a: string;
    b: string;
    c: string;
};

let foo: Foo = {
    a: "a",
    b: "b",
    c: "c",
    d: "d" // ❌
}; */

// 示例

/* type Person = {
    name: string;
    age: number;
    gender: "male" | "female";
};

type PersonKeys = keyof Person & {};

type Admin = {
    [kes in PersonKeys]: Person[kes];
};

let admin: Admin = {
    name: "admin",
    age: 18,
    gender: "male",
    role: "admin" // ❌
}; */

/* type User = {
    readonly id: number;
    name: string;
    tel: string;
    address?: string;
};

// 🤔 type UserKeys = "id" | "name" | "tel" | "address"
type UserKeys = keyof User & {};

// id 和 address 的特性丢失了
type CopyUser = {
    [key in UserKeys]: User[key];
};

let u1: CopyUser = {
    id: 1,
    name: "u1",
    tel: "123456789",
    address: "beijing"
};
u1.id = 2; // ✅ */

// 如何完整的 copy User 的类型呢？

/* type User = {
    readonly id: number;
    name: string;
    tel: string;
    address?: string;
};

// 直接使用 key in keyof User 就会保留 User 类型的属性特性
type CopyUser = {
    [key in keyof User]: User[key];
};

let u1: CopyUser = {
    id: 1,
    name: "u1",
    tel: "123456789",
    address: "beijing"
};
u1.id = 2; // ✅ */

// 示例 给我一个什么类型，我就copy一个什么类型

/* type CopyType<T extends object> = {
    [key in keyof T]: T[key];
};

type User = {
    readonly id: number;
    name: string;
    tel: string;
    address?: string;
};

let u1: CopyType<User> = {
    id: 1,
    name: "u1",
    tel: "123456789",
    address: "beijing"
};
u1.id = 2; //

type Animal = {
    type: "cat" | "dog";
    name: string;
    width: number;
    height: number;
};

let a1: CopyType<Animal> = {
    type: "cat",
    name: "dudu",
    width: 100,
    height: 200
}; */

/* 
    keyof T 键名的类型可以得到一个联合类型 string | number | symbol
    后面的映射类型，可能会联合模版字符串一起操作，可能会要求要求 keyof T 的类型必须是 string 类型
    使用交叉类型
*/

type Test = keyof any;
type Test2 = keyof any & string;
