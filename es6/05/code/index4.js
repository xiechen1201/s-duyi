/* 
    ### 类的继承
    如果两个类 A、B，如果可以描述为 B 是 A，则 A 和 B 形成继承关系。
    例如猫是动物，这样构成继承关系。

    形成继承关系后，B 就拥有 A 中的属性和方法。

    如果 B 是 A，则有很多种说法：
    1、B 继承自 A
    2、A 派生 B
    3、B 是 A 的子类
    4、A 是 B 的父类

    如果 A 是 B 的父类，则 B 自动拥有 A 所有的实例成员。
*/

/* function Animal(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.sex = sex;
}
Animal.prototype.run = function () {
    console.log(this.name + ' is running');
};
Object.setPrototypeOf(Dog.prototype, Animal.prototype);
function Dog(name, age, sex) {
    // 借用父类的构造函数
    Animal.call(this, '犬', name, age, sex);
}
const d = new Dog('旺财', 3, '公');
console.log(d); // Dog {type: "犬", name: "旺财", age: 3, sex: "公"}
d.run(); // 旺财 is running */

/* 
    ES6 的写法

    新的关键字：
    1、extends 继承
    2、super 借用父类的构造函数
        2.1 直接当做函数调用，表示父类构造函数
        2.2 如果当作对象使用，则表示父类的原型

    ES6 要求如果定义了 constructor 并且该类是子类，则必须在 constructor 的第一行手动调用父类的构造函数。
    如果不写 constructor 就相当于写了默认 constructor，该构造器的参数和父类一致，并且自动调用父类构造器。

    如果存在同样的方法，则优先调用子类的方法。
*/

/* class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    run() {
        console.log(this.name + ' is running');
    }
}

// 继承
class Dog extends Animal {
    constructor(name, age, sex) {
        // 使用 super 借用父类的属性
        super('犬', name, age, sex);
        this.abc = 'abc';
    }

    eat(){
       console.log(this.name + ' is eating') 
    }
}

const d = new Dog('旺财', 3, '公');
console.log(d); // Dog {type: "犬", name: "旺财", age: 3, sex: "公"}
d.run(); // 旺财 is running */

// 如果当作对象使用，则表示父类的原型
/* class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    print(){
        console.log(`【类型】:${this.type}
            【名字】:${this.name}
            【年龄】:${this.age}
            【性别】:${this.sex}`)
    }
}

// 继承
class Dog extends Animal {
    constructor(name, age, sex) {
        // 使用 super 借用父类的属性
        super('犬', name, age, sex);
        this.love = ['吃骨头'];
    }

    print() {
        super.print();
        console.log(`【爱好】:${this.love}`)
    }
}

const d = new Dog('旺财', 3, '公');
d.print(); */

// TODO:===================

/* 
    ### 冷知识
    1、用 JS 制作抽象类
        什么是抽象类？一般是父类。不能通过该类创建对象。JS 目前没有抽象类的概念。
        下面的代码逻辑存在错误：
        new Animal('犬', '旺财', 3, '公').print();
        因为只存在某只狗，而不存在某个动物！抽象类只是用来抽象公共代码的，而不是直接实例化一个对象！
    2、this 的指向
        正常情况下，this 始终指向具体的类的对象
*/


