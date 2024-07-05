/* 
    ### 可计算的成员名
*/

/* const printName = 'print';

class Person {
    constructor(name) {
        this.name = name;
    }

    // 名字不确定
    [printName]() {
        console.log(`Hello, ${this.name}`);
    }
}
var p = new Person('John');
p[printName](); // 输出 "Hello, John" */

// TODO:====================

/* 
    ### getter 和 setter

    对应的是 ES5 中的 Object.defineProperty 可定义某个对象属性的读取和设置，略嫌麻烦
*/

// age 不像是一个属性了，而是通过一个方法进行操作了
/* class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.setAge(age);
        this.sex = sex;
    }

    getAge() {
        return this._age + '岁';
    }

    setAge(val) {
        if (val < 0) {
            val = 0;
        } else if (val > 100) {
            val = 100;
        }
        this._age = val;
    }

    print() {
        console.log(`${this.name} is a ${this.age} year old ${this.sex} ${this.type}`);
    }
}

console.log(new Animal('cat', 'Tom', 200, 'male')); */

/* class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    // 使用 getter 和 setter 控制的属性不在原型上
    // 创建 age 属性，并给他加上 getter，读取这个属性的时候会调用这个函数
    get age() {
        return this._age + '岁';
    }

    // 创建 age 属性，并给他加上 setter，给这个属性赋值的时候会调用这个函数
    set age(val) {
        if (val < 0) {
            val = 0;
        } else if (val > 100) {
            val = 100;
        }
        // this._age 用于在对象内部存储 age 的实际值，而不是直接将 age 公开
        this._age = val;
    }

    print() {
        console.log(`${this.name} is a ${this.age} year old ${this.sex} ${this.type}`);
    }
}

let dog = new Animal('cat', 'Tom', 200, 'male');
console.log(dog, dog.age); */

// TODO:====================

/* 
    ### 静态成员
    函数的本身也是对象，可以给函数本身添加一些属性。
    构造函数本身的成员成为静态成员。

    使用 static 定义的成员即为静态成员，只能通过构造函数来访问，不能通过实例来访问
*/

/* function Animal(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.sex = sex;
}
// 静态成员
Animal.print = function () {
    console.log('Animal.print');
};
Animal.print(); */

/* class Animal{
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    static width = 100;
    static height = 100;
    // 静态成员
    static print() {
        console.log('Animal.print');
    }
}

Animal.print(); */

// TODO:====================

/* 
    ### 字段初始化器（ES7）
    static 也是字段初始化器，ES6 是支持静态方法的，但是不支持静态属性。
    ES7 支持了静态属性。

    有些时候属性本身就具有默认值，又不需要再构造函数内进行初始化。

    注意：
        1、使用 static 的字段初始化器，添加的是静态成员
        2、没有使用 static 的字段初始化器，添加的成员位于对象上
        3、箭头函数在字段在初始化器位置上，指向的是当前对象
*/

/* class Test {
    constructor() {
        this.a = 1;
        this.b = 2;
        this.c = 3;
    }
}

console.dir(new Test()); */

/* // 是在实例对象上，而不是原型对象上
class Test {
    a = 1;
    b = 2;
    c = 3;

    constructor() {
        this.d = this.b + this.c;
    }
}
console.log(new Test()); */

/* class Test {
    a = 1;
    b = 2;
    c = 3;

    constructor() {
        this.d = this.b + this.c;
    }

    // 通过这样方式定义的 print 方法会导致定义在实例上，而不是原型上
    print = () => {
        console.log(this.a);
    };
}

const t = new Test();
console.log(t); // {a:1, b:2, c:3, d:5, p:fun}
const p = t.print;
p(); // 1 */

// TODO:====================

/* 
    ### 类表达式
*/

// 匿名类
/* const A = class {
    a = 1;
    b = 2;
};
console.log(new A()); */

// TODO:====================

/* 
    ### 装饰器(ES7)


    如果一个方法过期了，我们不希望删除这个方法，这是一个典型的横切关注的的问题。
    日志记录、权限控制，最合适的就是使用装饰器，标记已过期

    装饰器的本质就是一个函数 function(target, mothodName, descriptor)
*/

/* function obsolete(target, mothodName, descriptor){
    console.log(target, mothodName, descriptor); // function Test print {value: function print(){} ...}

    const oldValue = descriptor.value;
    descriptor.value = function(...args){
        console.warn(`${mothodName}已过时`);
        oldValue.call(this, ...args);
    }
}

class Test {
    @obsolete
    print() {
        console.warn('print 方法已过期！');
        console.log('print 方法！');
    }
}

console.log(new Test().print()) */