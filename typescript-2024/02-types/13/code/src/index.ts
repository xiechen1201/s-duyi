/* type Width = number | string;
const width1: Width = 100;
const width2: Width = '100px';

type Color = 'red' | 'blue' | 'green';
const color1: Color = 'red';
const color2: Color = 'blue';
const color3: Color = 'green'; */

type Student = { name: string; score: number };
type Teacher = { name: string; age: number; subject: string };
type Person = Student | Teacher;

const person1: Person = { name: 'jack', score: 100 };
const person2: Person = { name: 'jack', age: 18, subject: 'math' };
const person3: Person = { name: 'jack', age: 18, subject: 'math', score: 100 };
const person4: Person = { name: 'jack' }; // error

console.log(person3.name);
console.log(person3.age); // error 类型Person上不存在属性age
console.log(person3.score); // error 类型Person上不存在属性score

/* 
  使用的时候，Student 上有的属性，Teacher 不一定有，反之亦然。
  所以，TS 就不知道 person3 里面到底有没有 age、scrore 属性，所以会报错。是一个出于安全性的考虑。
  也就是说如果是对象字面量的联合类型，如果属性不相交，那么值就能属于并集类型中的某一个成员的属性。
*/

// 如果非要获取需要使用类型断言或者非空
console.log(person3.name);
console.log((person3 as Teacher).age);
console.log((person3 as Student).score);

// 函数联合类型
function foo(x: number | string) {
  if (Math.random() > 0.5) {
    return Number(x) * 2;
  }
}
