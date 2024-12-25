"use strict";
/*
    this 在 TS 中可以作为值也可以作为类型

    实现一个简化版的 set 数据结构
*/
class SimpleSet {
    constructor() {
        this.elements = new Map();
    }
    // add(element: number): SimpleSet {
    add(element) {
        this.elements.set(element, true);
        return this;
    }
    has(element) {
        return this.elements.has(element);
    }
    delete(element) {
        return this.elements.delete(element);
    }
    values() {
        return Array.from(this.elements.keys());
    }
}
let mySet = new SimpleSet();
mySet.add(1).add(2).add(3); // 链式调用
console.log(mySet.values()); // [1, 2, 3]
class MutableSet extends SimpleSet {
    show() {
        console.log("MutableSet Class");
    }
}
let myMutableSet = new MutableSet();
// 无法调用子类的方法，因为返回的是 SimpleSet 类型
// myMutableSet.add(1).add(2).add(3).show(); // ❌
// 将 add 方法返回值改为 this，可以链式调用子类的方法
myMutableSet.add(1).add(2).add(3).show(); // ✅
