/* 
    混入 + 构造函数类型

    JS 混入的写法 
    1、Object.assign({}, target1, target2)
    2、闭包 + 高阶组件
*/

/* 
    TS 混入的写法（闭包的写法）
*/

type ClassConstractor<T = {}> = new (...args: any[]) => T;

class MyClass {
    constructor(public name: string) {}
}

function Timestamped<T extends ClassConstractor<MyClass>>(target: T) {
    return class extends target {
        timestamp = Date.now();
    };
}

function Printable<T extends ClassConstractor<MyClass>>(target: T) {
    return class extends target {
        print() {
            console.log(this.name);
        }
    };
}

Timestamped(123);
Timestamped({});
Timestamped(MyClass);

const TimeAndPrintMyClass = Printable(Timestamped(MyClass));
const instance = new TimeAndPrintMyClass("hello");
instance.name;
instance.timestamp;
instance.print()