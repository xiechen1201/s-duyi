/* 
    递归遍历复用
*/

/* type A = "12345"; // 转化为联合类型

type StringToUnion<T extends string> =
    T extends `${infer One}${infer Two}${infer Three}${infer Four}${infer Five}`
        ? One | Two | Three | Four | Five
        : never;

type B = StringToUnion<A>; // "1" | "2" | "3" | "4" | "5" */

// 如果字符串的长度不固定怎么办？

/* type StringToUnion<T extends string> = T extends `${infer One}${infer Rest}` ? One | StringToUnion<Rest> : never;

// 第一次 1 2345
// 第二次 2 345
// 第三次 3 45
// 第四次 4 5
// 第五次 5
type C = StringToUnion<"12345">; // "1" | "2" | "3" | "4" | "5" */

// 示例：数组元素类型进行反转

/* type A = [1, 2, 3, 4, 5];

type ReverseArr<T extends any[]> = 
    T extends [infer One, ...infer Rest]
    ? [...ReverseArr<Rest>, One]
    : T;

type B = ReverseArr<A>; // [5, 4, 3, 2, 1] */

// 示例：类型工具，获取一个字符串字面量类型的长度

/* type LengthOfString<S extends string, T extends string[] = any[]> = 
    S extends `${infer F}${infer R}`
    ? LengthOfString<R, [...T, F]> 
    : T['length'];

type S = LengthOfString<"hello">; // number */

// 示例，编写类型工具实现映射类型的深层级的 readonly

type User = {
    id: number;
    name: string;
    address: {
        province: string;
        city: {
            name: string;
            street: string;
        };
    };
};

// 只会把第一层的属性变为 readonly
type ReadonlyUser = Readonly<User>;

// 实现深层的 readonly
type DeepReadonly<T extends Record<string, any>> = {
    readonly [K in keyof T]: T[K] extends Record<string, any>
        ? DeepReadonly<T[K]>
        : T[K];
};

type DeepReadonly1<T extends Record<string, any>> = T extends any
    ? {
          readonly [K in keyof T]: T[K] extends Record<string, any>
              ? DeepReadonly<T[K]>
              : T[K];
      }
    : never;

type DeepReadonlyUser = DeepReadonly<User>;
type DeepReadonlyUser1 = DeepReadonly1<User>;

/* 
    显示的是 DeepReadonly 而不是具体的层级
    {
        readonly id: number;
        readonly name: string;
        readonly address: DeepReadonly<{
            province: string;
            city: {
                name: string;
                street: string;
            };
        }>;
    }


    DeepReadonly1 好像没有生效！
    
*/
