/* 
    泛型确实可以给我们带来方便，但是有的时候约束力不太够
*/

/* function add<T>(a: T, b: T): T {
    return a + b; // ❌ 运算符“+”不能应用于类型“T”和“T”
} */

// 我想让 number 或者 string 都可以，但是 T 表示的类型是很宽泛的，但是 + 运算符只能用于 number 和 string
// 如果适当的缩小泛型的范围呢（受限的泛型）
// TS 使用 extends 关键字来约束泛型

// 必须是一个对象类型，限制了 T 只能是 object 或者 object 的子类
/* function getObj<T extends object>(obj: T) {
    return obj;
}

getObj(1);
getObj({}); */

/* // 将 T 限制至少有一个 length 属性的对象
function getLength<T extends { length: number }>(obj: T) {
    return obj.length;
}
getLength("123");
getLength([1, 2, 3]);
getLength({ length: 10 });
getLength({ name: "123" }); // ❌ 对象字面量只能指定已知属性，并且“name”不在类型“{ length: number; }”中 */

// 多泛型案例
// 封装一个函数，函数的两个参数的长度相减，获取长度的差

/* type Length = {
    length: number;
};

function compareLength<T extends Length, U extends Length>(x: T, y: U) {
    return Math.abs(x.length - y.length);
}
compareLength("123", "456");
compareLength([1, 2, 3], [1, 2, 3, 4]); */

// 对象字面量

/* type TreeNode = {
    value: string;
};

type LeafNode = TreeNode & {
    isLeaf: true;
};

type InnerNode = TreeNode & {
    children: TreeNode[];
};

const a: TreeNode = {
    value: "a"
};

const b: LeafNode = {
    value: "b",
    isLeaf: true
};

const c: InnerNode = {
    value: "c",
    children: [a, b]
};

function mapNode<T extends TreeNode>(
    node: T,
    calback: (value: string) => string
) {
    return {
        ...node,
        value: calback(node.value)
    };
}

mapNode(b, (value) => value.toUpperCase());
mapNode(c, (value) => value.toUpperCase()); */

/* 
    extends 相当于是对泛型的一种类型守卫
*/

// ===================================

/* 
    方括号运算符
*/

/* type User = {
    id: number;
    name: string;
    sex: "男" | "女";
};

// 获取 User 中的 id 属性的类型
// 🤔 type A = number
type A = User["id"]; */

// 方括号 + 泛型

/* // 获取 message 的类型
type Message<T extends { message: any }> = T["message"];
const person = {
    id: 1,
    message: "hello"
};
// 得到 person 的对象字面量类型
type B = typeof person;
// 得到 message 的类型
type PersonMessage = Message<B>; */

// 根据受限的泛型可以做成更好的处理，元组类型的推导
// 元组类型的类型不能在赋值的时候自动被推导出来的

/* // 🤔 const arr: number[]
const arr = [1, 2];
// as [number, number]; 类型断言
// as const; */

/* function myTuple<T>(...args: T[]) {
    return args;
}
const t = myTuple<number>(1, 2, 3); */

// 得到元组类型
function myTuple<T extends any[]>(...args: T) {
    return args;
}
// 🤔 const t: [number, number, number]
const t = myTuple(1, 2, 3);
// 🤔 const u: [string, number, boolean]
const u = myTuple("lisi", 22, true);