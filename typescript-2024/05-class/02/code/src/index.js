"use strict";
/*
    和 JS 基本一致，只不过多了类型安全的验证
    属性：类似于变量，加上类型标注，也能通过值的类型推断
    构造函数：类似于函数，加上参数的类型和返回类型
    方法
    存取器
    +访问修饰符
    +装饰器
    +关键字
*/
/* class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    showName() {
        console.log(this.name);
    }
}

const a = new Animal("Jack");
a.name; */
/*
    为什么可以直接访问 .name 属性？
    因为访问修饰符可以修饰属性和方法，默认是 public
    可以在类、类的子类、类和子类的实例对象中访问
*/
/* class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    showName() {
        console.log(this.name);
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    info() {
        console.log(this.name);
    }
}

let c = new Cat("Tom");
c.name; */
/*
    访问修饰符
    public：默认，可以在类、类的子类、类和子类的实例对象中访问
    protected：可以在类、类的子类中访问
    private：只能在类中访问
*/
/* class Animal {
    name: string;
    protected color: string;
    private age: number;

    constructor(name: string, color: string, age: number) {
        this.name = name;
        this.color = color;
        this.age = age;
    }

    showName() {
        console.log(this.name);
    }
}

class Cat extends Animal {
    constructor(name: string, color: string, age: number) {
        super(name, color,age);
    }

    showColor() {
        console.log(this.color);
    }

    showAge(){
        console.log(this.age); // ❌
    }
}

let a = new Animal("Jack", "white", 2);
a.color; // error */
/*
    访问修饰符是 TS 新增的，编译为 JS 后都会被去掉

    ES2022 新增了一个私有属性用法 #name
*/
/* class Animal {
    #name: string;
    constructor(name: string) {
        this.#name = name;
    }

    showName() {
        console.log(this.#name);
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    showName() {
        console.log(this.#name); // ❌
    }
} */
// ==========================
/*
    简写
*/
class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    showName() {
        console.log(this.name);
    }
}
let a = new Animal("Jack", "white");
a.showName();
