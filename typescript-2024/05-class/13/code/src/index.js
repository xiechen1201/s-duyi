"use strict";
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
class MyMap {
    constructor() {
        this.state = {};
    }
    get(key) {
        return this.state[key];
    }
    set(key, value) {
        this.state[key] = value;
    }
    keys() {
        return Object.keys(this.state);
    }
    values() {
        return Object.values(this.state);
    }
    static of(...entries) {
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
console.log(m2.keys());
