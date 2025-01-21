"use strict";
/*
    属性装饰器和类装饰器差不多，本身也是一个函数，只是函数的描述不同
    这个函数至少需要两个参数
    参数1: 如果是实例属性，参数1是类的原型，如果是静态属性，参数1是类本身
    参数2: 字符串，属性名
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* function point(target: any, key: string) {
    console.log(target, key);
}

class A {
    @point
    public name: string = "zhangsan";

    @point
    static age: number = 18;
} */
/*
    属性装饰器也可以使用工厂模式
*/
function point(value) {
    return function (target, key) {
        // 如果是实例属性 value 给到原型对象，如果是静态属性 value 给到类本身
        target[key] = value;
    };
}
class A {
    constructor() {
        this.name = "zhangsan";
    }
}
A.age = 18;
__decorate([
    point("hello")
], A.prototype, "name", void 0);
__decorate([
    point("world")
], A, "age", void 0);
console.log(A.prototype);
console.log(A);
