/* 
    之前写对象字面量的时候有很多，并不能直接使用 object 描述一个对象，object 只是一个最上层的对对象的描述
    如果对象字面量内的属性不一样，那么这个对象就不一样
    函数也是同样的道理，function 也可以描述所有的函数，但是函数的参数类型、返回值类型都不一样，也不能直接就使用一个 function 描述，应该让每一个函数都有自己的函数类型声明
    这种写法一般就称为调用签名
*/

// 函数声明的时候没有写函数的类型是什么，TS 会根据函数的返回值推断出函数的类型
// 因此不需要我们进行类型标注
/* function add(x: number, y: number): number {
    return x + y;
} */

/* 
    如何自己书写函数的调用签名
    类型别名
    接口
*/

// 接口别名
/* type AddT = (a: number, b: number) => number;
function add(x, y) {
    return x + y;
}
// 自动推断出 a b 的类型都是 number
// 感觉还不如写成函数声明的方式，这种方式写成对象的时候比较好用
const add2: AddT = (a, b) => a + b; */

// 函数调用签名
/* type User = {
    userId: number;
    info: () => void;
};

let obj: User = {
    userId: 1,
    info() {
        console.log(this.userId);
    }
}; */

/* 
    函数的调用签名只包含类型层面的代码，即只有类型，没有值。因此，函数的调用签名可以表示参数的类型、this的类型、返回值的类型。剩余参数的类型和可选参数的类型，但是无法表示默认值（因为默认值是值，不是类型）。调用签名没有函数体，无法推导出返回类型，所以必须显式的注解
*/

// ======================================================

// 有了 TS 之后我们的函数调用签名更加的方面

/* type Log = (userId: number, message?: string) => void;
const log: Log = (userId, message = "default message") => {
    console.log(`userId: ${userId}, message: ${message}`);
};

type SumFn = (...numbers: number[]) => number;
const sumFn: SumFn = (...numbers) => {
    return numbers.reduce((prev, current) => prev + current, 0);
}; */

// 如何根据已有的函数得到函数签名？使用 typeof

/* const sumResult = (...numbers: number[]) => {
    return numbers.reduce((prev, current) => prev + current, 0);
};

// 🤔 type SumFn = (...numbers: number[]) => number
type SumFn = typeof sumResult; */

// ======================================================

// 接口实现函数调用签名

/* // 如果仅仅是将一个函数的调用签名改写，这里不能写成箭头函数的方式
interface Add {
    (x: number, y: number): number;
}

const add: Add = (x, y) => {
    return x + y;
};

// 如果是对象字面量，那么就可以使用箭头函数
interface User {
    userId: number;
    info: (name: string) => void;
} */

// ======================================================

// 复杂的函数：带回调函数
/* function handleData(
    data: string,
    callback: (err: Error | null, result: string) => void
): void {
    // do something...
    callback(null, data);
} */

// 将回掉函数的签名提取出来
/* type Callback = (err: Error | null, result: string) => void;
function handleData(data: string, callback: Callback): void {
    // do something...
    callback(null, data);
} */

// 将两个函数的签名全部抽离
/* type Callback = (err: Error | null, result: string) => void;
type HandleData = (data: string, callback: Callback) => void;
const handleData: HandleData = (data, callback) => {
    // do something...
    callback(null, data);
}; */

// 使用 interface
/* interface Callback {
    (err: Error | null, result: string): void;
}
interface HandleData {
    (data: string, callback: Callback): void;
}
const handleData: HandleData = (data, callback) => {
    // do something...
    callback(null, data);
}; */

// ======================================================

// 上下文类型推导
type Fn = (index: number) => void;
function times(fn: Fn, n: number) {
    for (let i = 0; i < n; i++) {
        fn(i);
    }
}
times((n) => console.log(n), 10);

// 根据上下文推导就能知道 n 的类型，不需要显式的标柱类型
// 不可以传递其他的类型
// 这种上下文推导只能在同一个函数内

const fn = (n) => console.log(n);
times(fn, 10);
