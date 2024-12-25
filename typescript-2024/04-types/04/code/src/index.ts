/* type CopyType<T extends object> = {
    [key in keyof T]: T[key];
};

type User = {
    readonly id: number;
    name: string;
    tel: string;
    address?: string;
};

// 将所有的 key 都设置为只读的
type MyReadeonly<T> = {
    readonly [key in keyof T]: T[key];
};
// 🤔 type Test1 = { readonly id: number; readonly name: string; ...}
type Test1 = MyReadeonly<User>;

// 将所有的 key 都设置为可选的
type MyPartical<T> = {
    [key in keyof T]?: T[key];
};

// 🤔 type Test2 = { id?: number; name?: string; ...}
type Test2 = MyPartical<User>;

// 将可选、只读的 key 编程必选，非只读的
type MyRequired<T> = {
    -readonly [key in keyof T]-?: T[key];
};
// 🤔 type Test3 = { id: number; name: string; ... }
type Test3 = MyRequired<User>; */

/* 
    如何理解对泛型的编程？

    对于值得编程我们可以写一个函数
*/

/* function myPartial(type) {
    // todo...
    const newType = getOtherOptional(type);
    return newType;
}

const type = { xxx: xxx };
const newType = myPartial(type); */

/* 
    如何对类型进行编程？
    不能编写函数，只能编写一个类型别名
*/

/* type MyPartical<Type> = {
    // doto...
}
// 得到一个新的类型
type PersianUser = MyPartical<User>; */

/* 
    实现 TS 工具类型 Record
*/

type MyRecord<K extends keyof any, V> = {
    [key in K]: V;
};

type Keys = "id" | "name" | "tel";
type Values = number | string;
type User = MyRecord<Keys, Values>;

let user: User = {
    id: 1,
    name: "张三",
    tel: "123456789"
};
