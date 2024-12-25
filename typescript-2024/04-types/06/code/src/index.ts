type User = {
    readonly id: number;
    name: string;
    age: number;
    email?: string;
    sex: boolean;
};

/* 
    获取类型的属性类型
*/

type ValueType = User["id"]; // number
type ValueTypes = User[keyof User]; // string | number | boolean | undefined

/* 
    泛型
*/

type MyReadeonly<T> = {
    readonly [key in keyof T]: T[key];
};
// { readonly id: number; readonly name: string; ...}
type Test1 = MyReadeonly<User>;

/* 
    数组
    数组是又具体属性的，获取 number 可以使用 number
*/

const arr = ["admin", "user", "guest", 200] as const;
const arr2 = ["admin", "user", "guest", 200];

type ArrType = (typeof arr)[number]; // "admin" | "user" | "guest" | 200
type ArrType2 = (typeof arr2)[number]; // string | number
// 加上 as const 后获取到的是元组的 "admin" | "user" | "guest" | 200 的字面量类型

// 获取具体下标的类型
type FirstArrType = (typeof arr)[0]; // "admin"

/* 
    泛型
    获取元组类型
*/

type GetArrType<T extends readonly any[]> = T[number];
type Test2 = GetArrType<typeof arr>; // "admin" | "user" | "guest" | 200
type Test3 = GetArrType<typeof arr2>; // string | number

/* 
    获取数组长度
*/
type GetArrLen<T extends readonly any[]> = T["length"];
type Len = GetArrLen<typeof arr>; // 4
type Len2 = GetArrLen<typeof arr2>; // number

/* 
    泛型 + 拓展运算符... + [] 方括号运算符
*/

type Concat<T extends any[], U extends any[]> = [...T, ...U];
type Result = Concat<[1, 2], ["a", "b"]>; // [1, 2, "a", "b"]
