/* function Person(name, age) {
    this.name = name;
    this.age = age;
    this.info = `他的名字是${name}, 年龄是${age}`;
}

let p1 = new Person('张三', 22);
let p2 = Person('李四', 23);
console.log(p1, p2, window.info); */

/* 
    因为函数可以进行实例化的调用，也可以进行普通的调用，容易造成混乱
    进行判断，是不是使用 new 来进行调用的？
*/

// ES6 之前
/* function Person(name, age) {
    if (!(this instanceof Person)) {
        throw new Error('必须使用 new 来进行调用');
    }
    this.name = name;
    this.age = age;
    this.info = `他的名字是${name}, 年龄是${age}`;
}

let p1 = new Person('张三', 22);
// 绕开判断的限制
Person.call(new Person(), '李四', 23)
let p2 = Person('李四', 23);
console.log(p1, p2, window.info); */

/* 
    ES6 提供了一个特殊的 api，可以是使用该 api 在函数内部判断该函数是否使用了 new 来进行调用
    new.target 该表达式，得到的是如果没有使用 new 来调用函数则返回 undefined，如果使用 new 来调用函数则返回该函数
*/
/* function Person(name, age) {
    console.log(new.target);

    if (new.target === undefined) {
        throw new Error('必须使用 new 来进行调用');
    }

    this.name = name;
    this.age = age;
    this.info = `他的名字是${name}, 年龄是${age}`;
}

let p1 = new Person('张三', 22);
let p2 = Person('李四', 23);
let p3 = Person.call();

console.log(p1, p2, window.info); */
