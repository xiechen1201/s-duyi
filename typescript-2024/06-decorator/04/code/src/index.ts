/* 
    方法和属性一样，也可以被装饰器装饰
    参数1:如果是原型方法，target 为类的原型（对象类型），如果是静态方法，target 为类本身（类的构造函数类型）
    参数2:字符串，表示方法名
    参数3:方法的属性描述符（其实就是 JS 的 Object.defineProperty 属性描述对象）
*/

/* function methodDecorator1(target: object, key: string, descriptor: PropertyDescriptor) {
    console.log(target, key, descriptor)
}

function methodDecorator2(target: new(...args: any[])=>any, key: string, descriptor: PropertyDescriptor) {
    console.log(target, key, descriptor)
}

class A {
    prop1: string = "prop1";
    static prop2: string = "prop2";

    @methodDecorator1
    method1(): void {
        console.log("method1");
    }

    @methodDecorator2
    static method2(): void {
        
    }
} */

/* 
    工厂模式
*/

/* function methodDecoratorFactory(value: string) {
    return function (
        target: object,
        key: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = true;
    };
}

function noUse(target: object, key: string, descriptor: PropertyDescriptor) {
    descriptor.value = function () {
        console.log("这个方法被废弃了！");
    }
}

class A {
    prop1: string = "prop1";
    static prop2: string = "prop2";

    @noUse
    @methodDecoratorFactory("method1")
    method1(): void {}
}

console.log(Object.keys(A.prototype));
A.prototype.method1(); */

// ========================

/* 
    示例 方法拦截
*/

function methodDecoratorFactory(value: string) {
    return function (
        target: object,
        key: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = true;
    };
}

function noUse(target: object, key: string, descriptor: PropertyDescriptor) {
    descriptor.value = function () {
        console.log("这个方法被废弃了！");
    };
}

function intercaptor(str: string) {
    return function (
        target: object,
        key: string,
        descriptor: PropertyDescriptor
    ) {
        const temp = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(this)
            console.log("前置拦截" + str);
            temp.call(this, ...args);
            console.log("后置拦截" + str);
        };
    };
}

class A {
    prop1: string = "prop1";
    static prop2: string = "prop2";

    @noUse
    @methodDecoratorFactory("method1")
    method1(): void {}

    @intercaptor("Jack")
    method2(str: string): void {
        console.log("正在执行 method2 " + str);
    }
}

A.prototype.method2("Hello World");
