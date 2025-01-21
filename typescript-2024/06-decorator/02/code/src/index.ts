/* 
    装饰器的本质就是一个函数，可以用来修饰类、属性、方法、参数
    装饰器是 ES 的内容，是需要参与运行的。

    由于装饰器还没有形成正式的规范，所以 TS 需要进行配置
    "experimentalDecorators": true
*/

/* // 修饰类需要一个构造函数类型，Function 太宽泛了，不太推荐
function classDecorator(target: new (...args: any[]) => any) {
    console.log(target);
    target.prototype.name = "A";
}

@classDecorator
class A {}

console.log(A.prototype); */

/* 
    使用泛型
*/

/* type Constructor<T = any> = new (...args: any[]) => T;

type User = {
    id: number;
    name: string;
    info(): void;
};

function classDecorator<T extends Constructor<User>>(target: T) {
    console.log(target);
}

@classDecorator
class A {
    constructor(public id: number, public name: string) {}

    info() {}
} */

/* 
    如何调用装饰器？
    闭包的形式，可以传递值

    装饰器工厂模式
*/

/* type Constructor<T = any> = new (...args: any[]) => T;

function classDecorator<T extends Constructor>(value: string) {
    // 返回出去的函数才是真正的装饰器
    return function (target: T) {
        target.prototype.tag = value;
    };
}

@classDecorator("A")
class A {}

console.log(A.prototype) */

/* 
    装饰器能不能直接返回一个类呢？
*/

/* type Constructor<T = any> = new (...args: any[]) => T;

function classDecorator<T extends Constructor>(target: T) {
    return class extends target {
        newName: string = "newName";
        newShow() {
            console.log(this.newName);
        }
    };
}

@classDecorator
class A {
    name: string = "Jack";
    show() {
        console.log(this.name);
    }
}

console.log(Object.getPrototypeOf(new A())); */

/* 
    多个装饰器
    从下到上执行
*/

function classDecorator1<T extends new (...args: any[]) => any>(value: string) {
    return function (target: T) {
        console.log("classDecorator1" + value);
    }
}

function classDecorator2<T extends new (...args: any[]) => any>(target: T) {
    console.log("classDecorator2");
}

@classDecorator1("A")
@classDecorator2
class A {}
