"use strict";
/* type Person = {
  name: string;
  age: number;
};

type Animal = {
  name: string;
  age: number;
};

const person: Person = {
  name: 'John',
  age: 30
};

const animal: Animal = {
  name: 'Dog',
  age: 2
};

// 只要结构相同，就可以赋值
// 可以将 person 类型的对象赋值给 animal 类型的变量
const animal2: Animal = person;

function greet(person: Person): void {
  console.log(`Hello, ${person.name}!`);
}

// 只要结构一样，就正常执行
greet(person);
greet(animal);
greet({ name: 'John', age: 30 });
greet({ name: 'John', age: 30, address: 'Beijing' }); // ❌对象字面量只能指定已知属性，并且“address”不在类型“Person”中
let newPerson = { name: 'John', age: 30, address: 'Beijing' };
greet(newPerson); */
Object.defineProperty(exports, "__esModule", { value: true });
// 鸭子类型对于面向对象也一样
/* class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
} */
// 简写
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
let a = new User('John', 'Doe', 30);
let b = new Person('lily', 'Doe', 30);
console.log(a);
console.log(b);
// 可以正常赋值
a = b;
