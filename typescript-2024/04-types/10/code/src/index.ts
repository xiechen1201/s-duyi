/* 
    映射类型 + as
*/

/* type User = {
    readonly id: number;
    name: string;
    tel: string;
    address: string;
};

type A<T> = {
    // 对 P 进行从映射
    [P in keyof T as "aaa"]: T[P];
};

// 🤔 {readonly aaa: string | number;}
type User2 = A<User>; */

// extends 约束
// 使用 as 重映射实现 exclude

/* type MyOmit<T, K> = {
    [P in keyof T as P extends K ? never : P]: T[P];
};

type User = {
    id: number;
    name: string;
    tel: string;
    address: string;
};

type User2 = MyOmit<User, "tel" | "address">; // {id: number; name: string;} */

/* 
    把每个属性都进行兼容的判断
    id extends "tel" | "address" ? never : id   
    如何返回的是 never，那么这个属性就会被忽略
*/

// 示例，取出 User 类型的值的类型是 string 类型的

type User = {
    id: number;
    name: string;
    tel: string;
    address: string;
};

type MyOmit<T> = {
    [P in keyof T as T[P] extends string ? P : never]: T[P];
};

// 🤔 { name: string; tel: string; address: string; }
type User2 = MyOmit<User>;
