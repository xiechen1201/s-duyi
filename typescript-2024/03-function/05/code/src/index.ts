/* 
    只要是能够使用类型标注的地方大多数都可以使用泛型。
*/

// 数组泛型
/* function uniqueArray<T>(arrar: T[]): Array<T> {
    return Array.from(new Set(arrar));
}
const result = uniqueArray<number>([1, 2, 3, 3, 4, 5, 5, 6]); */

/* // 类型别名使用泛型（泛型别名）
type User = {
    id: string;
    name: string;
    age: number;
    sex: string;
};

type ResultData = {
    message: string;
    code: number;
    // 如果写成 User 就规定死了不灵活
    data: User;
}; */

/* // 将 User 类型抽离为泛型
type ResultData<T> = {
    message: string;
    code: number;
    data?: T;
};

type User = {
    id: string;
    name: string;
    age: number;
    sex: string;
};

const userResultData: ResultData<User> = {
    message: "success",
    code: 200,
    data: {
        id: "1",
        name: "张三",
        age: 18,
        sex: "男"
    }
}; */

// 案例：自定义事件类型
/* type MyEvent<T> = {
    target: T;
    type: string;
};

const myEvent: MyEvent<HTMLButtonElement | null> = {
    target: document.querySelector("button"),
    type: "click"
}; */

// 案例：泛型传递
/* type MyEvent<T> = {
    target: T;
    type: string;
};

type TimeEvent<T> = {
    event: MyEvent<T>;
    form: Date;
    to: Date;
};

const myEvent: TimeEvent<HTMLButtonElement | null> = {
    event: {
        target: document.querySelector("button"),
        type: "click"
    },
    form: new Date(),
    to: new Date()
}; */

// 接口使用泛型
/* interface MyEvent<T> {
    target: T;
    type: string;
}

interface TimeEvent<T> {
    event: MyEvent<T>;
    form: Date;
    to: Date;
}

const myEvent: TimeEvent<HTMLButtonElement | null> = {
    event: {
        target: document.querySelector("button"),
        type: "click"
    },
    form: new Date(),
    to: new Date()
}; */

// 类型别名 + 泛型写代码的时候可以带来一些方便

/* let str: string = "hello world";
str = null; // ❌ */

/* type Nullable<T> = T | null | undefined;
let str: Nullable<string> = "hello world";
str = null; // ✅ */

// 函数调用签名使用泛型

/* type Filter<T> = (
    arr: T[],
    callback: (item: T, index?: number) => boolean
) => T[];

const filter: Filter<number> = (arr, callback) => {
    let newArr: number[] = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const result = callback(element, index);
        result && newArr.push(element);
    }
    return newArr;
};

const res = filter([1, 2, 3, 4, 5, 6], (item) => item % 2 === 0);
console.log(res); */

// 泛型不可以滥用

function add<T>(a: T, b: T): T {
    return a + b; // ❌ 运算符“+”不能应用于类型“T”和“T”
}

type Add<T> = (a: T, b: T) => T;
const add2: Add<number> = (a, b) => {
    return a + b;
};