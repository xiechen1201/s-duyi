/* 
    抽象类
    是面向对象的一个概念
    都是为了程序架构而设计的。
    后端常说面向对象的饿三大特征：封装、继承、多态

    子类重写父类的方法
    都是通过 draw 方法来绘制图形，整个结构是非常稳固的

    抽象类的目的不是为了进行实例化，而是为了继承
*/

/* abstract class Foo {} */

/* abstract class Foo {
    // 抽象属性
    abstract name: string;

    // 具有具体实现的方法
    show() {}

    // 抽象方法
    // 抽象方法没有方法体，不能被调用
    abstract draw(): void;

    abstract get newName(): string;
}

// 如果是抽象类继承抽象类，那么子类可以不实现父类的抽象方法
abstract class Foo2 extends Foo {
    abstract age: number;
}

class Bar extends Foo {
    name: string;
    constructor() {
        super();
        this.name = "bar";
    }

    get newName() {
        return this.name;
    }

    // 子类必须实现父类的抽象方法
    // 参数和返回值必须和父类保持一致
    draw() {}
}

class Baz extends Foo2 {} */

/* 
    implements 意为实现，语义化上更加的明确
*/

/* abstract class Foo {
    abstract name: string;
    abstract get newName(): string;
    abstract draw(): void;
    show() {}
}

class Bar implements Foo {
    name: string = "Bar";

    get newName() {
        return this.name;
    }

    draw() {}

    show(){}
} */

/* 
    如果抽象类具有具体的实现方法，那么就不能使用 implements ，必须使用 extends
    否则子类无法调用父类的方法
*/

// ====================

/* 
    abstract 不能和静态方法使用
    必须进行实现
*/

abstract class Foo {
    abstract name: string;
    abstract get newName(): string;
    abstract draw(): void;
    show() {}
    static abstract info(): void;
}

class Bar implements Foo {
    name: string = "Bar";

    get newName() {
        return this.name;
    }

    draw() {}

    show() {}
}

const bar = new Bar();
bar.draw();

/* 
    和继承差不多，但是一定要有抽象类这个概念。
*/
