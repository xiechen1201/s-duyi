/* 
    条件类型和泛型
*/

// 写一个工具，判断一个类型是不是 string

/* type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
type C = IsString<"Hello">; // false */

// 实现一个 if 类型工具，接受条件，如果类型为真返回 T（条件只能是 true或者false 类型），否则返回类型 F

/* type If<T extends boolean, V1, V2> = T extends true ? V1 : V2;
type A = If<true, "a", "b">; // a
type B = If<false, "a", "b">; // b
type C = If<true, number, string>; // number */

// 对象复合结构化类型

/* // 🤔 type Result = true
type Result = { a: string; b: boolean } extends { a: string } ? true : false; */

//

/* type ObjectLength = {
    length: number;
};

function getObject<T extends ObjectLength>(obj: T): T {
    return obj;
}

getObject("Hello World");
getObject({ length: 1 });
getObject([1, 2, 3]); */

// 获取对象属性的类型

/* type Message<T extends { message: unknown }> = T["message"];

const Person = {
    id: 1,
    message: "Hello World"
};

type PersonMessage = Message<typeof Person>; // string */

// 如果不对 T 进行约束，那么 T["message"] 会报错，因为 T 可能为空
// 使用条件类型对 T 进行约束

/* type Message<T> = T extends { message: unknown } ? T["message"] : never;

const Person = {
    id: 1,
    message: "Hello World"
};

type PersonMessage = Message<typeof Person>; // string
type EmptyMessage = Message<{}>; // never */

// 方括号运算符提取数组的属性
// 写一个类型工具，提取具体的类型

/* type Flatten<T> = T extends any[] ? T[number] : T;
type Str = Flatten<string>; // string
type Num = Flatten<number[]>; // number
type Tup = Flatten<[1, 2, 3, "4", true]>; // true | 1 | 2 | 3 | "4"

const arr = [
    {
        id: 1,
        name: "张三"
    },
    {
        id: 2,
        name: "李四"
    }
];

type Arr = Flatten<typeof arr>; // { id: number; name: string; } */

/* 
    难度升级，条件类类型潜逃
*/

/* type GetType<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : "unknown";

type A = GetType<"Hello">; // string
type B = GetType<123>; // number
type C = GetType<true>; // unknown */

// 实现类型工具，merge 将两个类型何冰为一个类型
// 如果 key 冲突，则后面的类型覆盖前面的类型

type Merge<T1, T2> = {
    // [P in keyof T1 | keyof T2]: T1[P] | T2[P];
    // 遍历所有的 key，联合类型会自动的去重
    [K in keyof T1 | keyof T2]: K extends keyof T2
        ? T2[K] // 获取 T2 的类型，为了保证后面的类型覆盖前面的类型
        : K extends keyof T1
        ? T1[K]
        : never;
};

type Foo = {
    name: string;
    age: number;
};

type Bar = {
    age: number;
    sex: string;
};

type Result = Merge<Foo, Bar>;
