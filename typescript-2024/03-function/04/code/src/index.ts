/* 
    泛型在 TS 中是一个非常重要的概念

    用 TS 封装一个函数，传入什么类型就返回什么类型，对于 TS 需要考虑类型的问题
*/

/* // 联合类型并不能真正的解决这个问题
function identify(value: number | string): number | string {
    return value;
}
// 返回联合类型，调用者需要自己判断返回值类型
identify("hello world"); */

/* // 使用重载可以解决这个问题
function identify1(value: number): number;
function identify1(value: string): string;
function identify1(value: boolean): boolean;
function identify1(value: any): any {
    return value;
}
// 🤔 let result1: string
let result1 = identify1("hello world"); */

/* 
    书写起来比较的麻烦
    如果后期需要将 value 改成数组的类型，就需要写多个重载

    泛型可以解决这个问题
*/

/* // T 是一个占位符，代表任意类型，调用的时候再明确 T 的类型
function identify<T>(value: T): T {
    return value;
}
const s1 = identify<string>("hello world");
const n1 = identify<number>(123);
type User = {
    id: number;
    name: string;
}
const u1 = identify<User>({ id: 1, name: "张三" });
console.log(u1.name); */

/* // 传入相同类型的两个参数，得到这个类型的数组
function getTuple<T>(value1: T, value2: T) {
    return [value1, value2];
}
// 🤔 const result: [number, number]
const result = getTuple<number>(1, 2); */

/* 
    T 就是 T，就是一个占位，只要是有效的变量名，这里是什么都可以
*/

// 函数表达式也可以
const identify = <T>(value: T): T => {
    return value;
};
