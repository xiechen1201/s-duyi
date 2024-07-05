/* 
    ### 传统构造函数的问题
    1、属性和原型方法定义是分开的，降低了代码的可读性
    2、原型成员是可以被枚举的
    3、默认情况下，构造函数仍然可以被当作普通函数进行调用
*/

/* // 构造函数
function Animal(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.sex = sex;
}
// 中间存在其他的代码，降低了可读性，从逻辑上讲，上下的东西是一个整体
// 在面向对象中，将上下两段代码所有的对象成员的定义，统称为类
// 定义实例方法（原型方法）
Animal.prototype.print = function () {
    console.log(this.type, this.name, this.age, this.sex);
};

var dog = new Animal('dog', 'wangcai', 3, 'male');
dog.print();

// 原型成员是可以被枚举的
for (const key in dog) {
    console.log(key);
} */

/* 
    ES6 对类进行了改造
*/

/* // 类的名称
class Animal {
    // 构造器
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    // 实例方法（原型方法）
    // 和对象方法简写一致
    print() {
        console.log(this.type, this.name, this.age, this.sex);
    }
}

// 这样的代码类才是一个整体

let dog = new Animal('dog', 'wangcai', 3, 'male');
dog.print();
console.log(dog);

for (const key in dog) {
    console.log(key);
}

// 不能当作普通函数进行调用
Animal(); // Class constructor Animal cannot be invoked without 'new' */

// TODO:====================

/* 
    ### 类的特点
    1、类的声明不会进行提升，和 let const 一样 存在暂时性死区（先定义再使用）
    2、类的所有代码都在严格模式下执行
    3、类的所有方法都是不可枚举的
    4、类的所有方法都无法当作构造函数被使用
    const p = new dog.print(); // 报错
    5、类的构造函数必须使用new调用
*/