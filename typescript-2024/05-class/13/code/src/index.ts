/* 
    1、TS 中类是结构化类型，但是需要注意访问修饰符会触发 TS 类型检查
*/

/* class User {
    constructor(public id: number, public name: string, public age: number) {}

    show(address: string) {
        console.log(address);
    }
}

class Person {
    constructor(public id: number, private name: string, public age: number) {}

    show(address: string) {
        console.log(this.id + "---" + address);
    }
}

function desc(user: User) {
    user.show("北京市");
}

const u = new User(1, "张三", 20);
const p = new Person(2, "李四", 30);
const a = {
    id: 3,
    name: "王五",
    age: 40,
    show(address: string) {
        console.log("hello " + address);
    }
};

desc(u); // ✅
desc(p); // ✅ ❌
desc(a); // ✅ */

/* 
    2、在 TS 中类即声明值也声明类型，而且类的类型有两种：实例化对象类型，类构造函数类型
*/

/* class MyMap {
    state: Record<string, string> = {};

    get(key: string): string | undefined {
        return this.state[key];
    }

    set(key: string, value: string) {
        this.state[key] = value;
    }

    keys(): string[] {
        return Object.keys(this.state);
    }

    values(): string[] {
        return Object.values(this.state);
    }

    static of(...entries: [string, string][]): MyMap {
        const map = new MyMap();
        entries.forEach((entry) => map.set(entry[0], entry[1]));
        return map;
    }
}

const m1 = new MyMap();
m1.set("id", "1");
m1.set("name", "张三");
console.log(m1.get("id"));
console.log(m1.values());

const m2 = MyMap.of(["id", "1"], ["name", "张三"]);
console.log(m2.keys()); */

/* 
    m1 的类型是 MyMap 类型。
    类即是类型也是值。
    MyMap 的类型是一个构造函数的类型 constructor MyMap(): MyMap
*/

/* class User {
    constructor(public id: number, public name: string, public age: number) {}

    show(address: string) {
        console.log(address);
    }
}

// 接受一个 User 类型的对象
function method1(target: User) {
    console.log(target.id);
    target.show("北京市");
}

// 接受的是一个类的构造函数类型，在函数内不进行实例化
// 如何表示是一个构造函数？
function method2(target: new (id: number, name: string) => User) {
    // new (id: number, name: string) => User
    // new (...args: any[]) => any
    // 这种写法就是类的构造函数类型

    const t = new target(1, "张三");
    t.show("北京市");
}

// 构造函数类型的表示
type MyMapConstructor =  typeof User;

// 通过构造函数类型的到实例化类型
type MyMapInstance = InstanceType<MyMapConstructor>;

let u: MyMapInstance = new User(1, "张三", 20); */

// ====================

/* 
    MyMap 的实例化类型
*/

interface MyMap {
    state: Record<string, string>;
    get(key: string): string | undefined;
    set(key: string, value: string): void;
    values(): string[];
    keys(): string[];
}

/* 
    MyMap 构造函数类型
*/

interface MyMapConstructor {
    new (): MyMap;
    of(...entries: [string, string][]): MyMap;
    readonly prototype: MyMap;
}

let m: MyMapConstructor;
type M1 = typeof m; // MyMapConstructor
type M2 = InstanceType<M1>; // MyMap

class Person {
    constructor(public name:string){}
}

type PersonInstance = InstanceType<typeof Person>; // 实例化类型 Person