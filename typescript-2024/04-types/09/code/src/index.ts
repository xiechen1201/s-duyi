/* 
    或者称为分发式特性
    如何触发？
*/

/* type Test<T> = string | number extends T ? true : false;
type Test1 = Test<true>; // true */

/* type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false
type C = IsString<"abc">; // true
type D = IsString<123>; // false
// 得到一个 boolean 类型，而不是一个具体的 true 或 false
// 触发分布式的特性
type E = IsString<"abc" | 123>; // boolean */

// 示例

/* type MyInculde<T, U> = T extends U ? T : never;
type A = MyInculde<string, Object>; // string
// hello 和 world 分别和 U 进行比较
type B = MyInculde<"hello" | "world", string>; // "hello" | "world"
// 先是 a 和 a b 进行比较
type C = MyInculde<"a" | "b" | "c", "a" | "b">; // "a" | "b"
// 注意需要满足三个条件才会触发分布式条件 1、条件类型 2、联合类型 3、泛型
// 以下不会触发
type D = "a" | "b" extends "a" | "b" | "c" ? 1 : 2; */

// 示例
/* type MyExculde<T, U> = T extends U ? never : T;

type A = MyExculde<"a" | "b" | "c", "a" | "b">; // "c"
type B = MyExculde<"a" | "b", "a" | "b" | "c">; // never

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
}; */

// ===========

/* interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type MyPice<T, K extends keyof T> = {
    [Key in K]: T[Key];
};

type MyOmit<T, K> = MyPice<T, Exclude<keyof T, K>>;

// 包含
// 🤔 { title: string; completed: boolean; }
type TodoPreview = MyPice<Todo, "title" | "completed">;
// 排除
// 🤔 { description: string; }
type TodoTitle = MyOmit<Todo, "title" | "completed">; */

// 示例：实现部分属性实现可选操作

/* type User = {
    id: number;
    name: string;
    age: number;
    tel: string;
    address: string;
};

// 如何将指定的 key 设置为可选的？
// 🤔 { id: number; name: string; age?: number; tel?: string; address?: string; }
type User2 = OptionalPick;

// 🤔 { id: number; name: string; }
type RequiredPick = Omit<User, "age" | "tel" | "address">;
// 🤔 { age?: number | undefined; tel?: string | undefined; address?: string | undefined; }
type PartialPick = Partial<Pick<User, "age" | "tel" | "address">>;
type OptionalPick = RequiredPick & PartialPick;

const user: User2 = {
    id: 1,
    name: "zhangsan"
}; */

// 优化
// 结合函数进行理解
// Omit 排除属性
// Partial 将属性设置为可选的属性
// Pick 提取属性

/* type OptionalPick<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type User = {
    id: number;
    name: string;
    age: number;
    tel: string;
    address: string;
};

type User2 = OptionalPick<User, "age" | "tel" | "address">; */

/* 
    分布式特性的要素：
    1、条件类型
    2、联合类型
    3、泛型

    另外一个要注意的点：
        泛型参数不能被包裹
*/

type ABB<T> = T extends any ? T[] : never;
type ACC<T> = [T] extends any ? T[] : never;

type F = ABB<string | number>; // string[] | number[]
type G = ACC<string | number>; // (string | number)[]
