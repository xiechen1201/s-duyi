"use strict";
/*
    装饰器的本质就是一个函数，可以用来修饰类、属性、方法、参数
    装饰器是 ES 的内容，是需要参与运行的。

    由于装饰器还没有形成正式的规范，所以 TS 需要进行配置
    "experimentalDecorators": true
*/
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
function classDecorator1(value) {
    return function (target) {
        console.log("classDecorator1" + value);
    };
}
function classDecorator2(target) {
    console.log("classDecorator2");
}
let A = (() => {
    let _classDecorators = [classDecorator1("A"), classDecorator2];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var A = _classThis = class {
    };
    __setFunctionName(_classThis, "A");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        A = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return A = _classThis;
})();
