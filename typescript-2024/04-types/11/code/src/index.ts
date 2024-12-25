/* 
    infer 可以推断类型
*/

/* type Flatten<T> = T extends any[] ? T[number] : T;

type T1 = Flatten<number[]>; // number
type T2 = Flatten<string[]>; // string
type T3 = Flatten<[1, 2, 3, 4]>; // 1 | 2 | 3 | 4
const arr = [{ id: 1, name: "zhangsan" }];
type T4 = Flatten<typeof arr>; */

// 使用 infer 对上面的代码进行优化
// 推断 U 类型，可以将 U 简单的理解为 any
/* type Flatten<T> = T extends (infer U)[] ? U : T;

type T1 = Flatten<number[]>; // number
type T2 = Flatten<string[]>; // string
type T3 = Flatten<[1, 2, 3, 4]>; // 1 | 2 | 3 | 4
type T4 = Flatten<"hello">; // "hello" */

// 示例，获取第一个元素的类型

// 之前的方式
/* type First<T> = T extends any[] ? T[0] : never;
type First2<T> = T extends (infer U)[] ? U : never; */

/* // 现在的方式
type First<T extends any[]> = T extends [] ? never : T[0];
// infer F 获取第一位，...infer R 获取剩余的
type First2<T extends any[]> = T extends [infer F, ...infer R] ? F : never;

type Arr = ["a", "b", "c"];
type Arr2 = [1, 2, 3];

type F1 = First<Arr>; // "a"
type F2 = First2<Arr2>; // 1 */

// 示例，实现元组两个位置上类型的交换

type Swap<T extends any[]> = T extends [infer A, infer B] ? [B, A] : T;

type Arr = Swap<["a", "c"]>; // ["c", "a"]
type Arr2 = Swap<[1, 3]>; // [3, 1]
type Arr3 = Swap<[1, 2, 3]>; // [1, 2, 3] 不满足条件，返回自身

type Swap2<T extends any[]> = T extends [infer A, ...infer R, infer B]
    ? [B, ...R, A]
    : T;

type Arr4 = Swap2<[1, 2, 3, 4]>; // [4, 3, 2, 1]

type GetReturnType<T extends (...args: any[]) => any> = T extends (
    ...args: any[]
) => infer R
    ? R
    : never;

type A = GetReturnType<() => number>; // number
type B = GetReturnType<() => string>; // string
type C = GetReturnType<(n: number) => number>; // number
