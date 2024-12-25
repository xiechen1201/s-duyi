/* 
    也就是创建泛型的时候指定一个默认的类型。
    类似函数的默认参数
*/

/* function createArray<T = string>(length: number, value: T): T[] {
    return new Array(length).fill(value);
}
// 默认就是 string 类型
const resut = createArray(3, "x");
const resut2 = createArray<number>(3, 100); */

// 类型别名

/* type User<T = string> = {
    id: T;
    name: string;
    age: number;
};

const user1: User = {
    id: "1",
    name: "张三",
    age: 18
};

const user2: User<number> = {
    id: 101,
    name: "张三",
    age: 18
}; */

/* type MyEvent<T = HTMLButtonElement | null> = {
    target: T;
    type: string;
}; */
