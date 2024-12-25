/* 
    ConstructorParameters<Type>
    用户构造函数参数的类型
*/

/* class User {
    constructor(public name: string, public age: number) {}
}

// typeof User 得到的是 User 的构造函数类型
type UserConstructorParams = ConstructorParameters<typeof User>; // [name: string, age: number]

// 自己实现
type MyConstructorParameters<T extends new (...args: any[]) => any> =
    T extends new (...args: infer R) => any ? R : never;
type UserConstructorParams2 = MyConstructorParameters<typeof User>; // [name: string, age: number]
 */

/* 
    拓展 ConstructorParameters 的使用
*/

/* class Book {
    title: string;
    content: string;
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }
}

class CreateInstance<T extends new (...args: any[]) => any> {
    private ClassContructor: T;
    constructor(classContructor: T) {
        this.ClassContructor = classContructor;
    }

    getInstance(...args: ConstructorParameters<T>): InstanceType<T> {
        return new this.ClassContructor(...args);
    }
}

const instanceCreator = new CreateInstance<typeof Book>(Book);
const bookInstance = instanceCreator.getInstance(
    "TypeScript",
    "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
);
console.log(bookInstance.title);
console.log(bookInstance.content); */

/* 
    TS 中是否可以将构造函数当作类进行使用？
    函数具有二义性，既可以是类，也可以是函数。所以 ES6 才有了 Class 和箭头函数的区分。
    TS 中的类型安全要使用类就要使用 class，普通函数就要使用普通函数。
*/

/* function Person(this: {}, id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
}

interface Person {
    id: number;
    name: string;
    age: number;
}

interface PersonConstructor {
    new (id: number, name: string, age: number): Person;
    readonly prototype: Person;
}

const person: Person = new (Person as any)(1, "TypeScript", 18); // ❌ 其目标缺少构造签名的 "new" 表达式隐式具有 "any" 类型。

// 这种做法是不推荐的

// 通过构造函数类型获取实例化类型
type PersonInstance = InstanceType<PersonConstructor>; */

// ==============================

/* 
    Awaited<Type>
*/

/* new Promise((resolve, reject) => {});

type a = {
    new <T>(
        executor: (
            resolve: (value: T | PromiseLike<T>) => void,
            reject: (reason?: any) => void
        ) => void
    ): Promise<T>;
}; */

/* 
    模拟一个实用的异步场景
    库给我们提供了接口（返回 Promise），但是没有具体的类型，我们又想使用这个类型
*/

interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

async function fetchUser(): Promise<User> {
    const data = await fetch("www.baidu.com").then((res) => res.json());
    return data;
}

// 上面的是第三方库的，能得到的只是 fetchUser 接口，如何获取 Promise<User> 的 User 类型？

// 🤔 type UserInstance = User
type UserInstance = Awaited<ReturnType<typeof fetchUser>>;

const data: UserInstance = {
    id: 1,
    firstName: "TypeScript",
    lastName: "TypeScript",
    age: 18
};

type A = Awaited<Promise<string>>; // string
type B = Awaited<Promise<Promise<number>>>; // number