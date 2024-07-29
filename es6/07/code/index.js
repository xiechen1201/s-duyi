/* 
    符号是 ES6 新增的数据类型，他通过使用 Symbol(符号描述) 来创建。
    只能通过 symbol() 来创建符号，不能使用 new Symbol() 来创建符号。
*/

/* const symbol1 = Symbol();
const symbol2 = Symbol('abc');

console.log(symbol1, symbol2); */

/* 
    符号设计的初衷，是为了给对象设置私有属性。 
*/

/* const hero = {
  attack: 30,
  hp: 300,
  defence: 10,
  gongji() {
    const dmg = this.attack + this.getRandmom(1, 100);
    console.log(dmg);
  },
  getRandmom(min, max) {
    return Math.random() * (max - min) + min;
  }
}; */

/* 
    getRandmom() 方法只是想让 hero 对象内部调用，不想暴露给外部使用

    虽然可以把 getRandmom() 方法放到 gongji() 方法的内部变成函数的作用域，但是这样回到吃每次调用都创建一个 getRandmom() 方法，并且本对象内其他成员无法共享！

    所以 ES6 使用符号来创建私有属性。

    私有属性：只能在对象中的内部进行使用，外部无法使用！
*/

/* class Hero {
  constructor(attack, hp, defence) {
    this.attack = attack;
    this.hp = hp;
    this.defence = defence;
  }

  gongji() {
    // ...
  }

  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
} */

/* 
    符号的特点：
    1、没有字面量（所有的类型都不具备的类型），只能通过 Symbol() 来创建
    2、typeof 返回得到的是 symbol

        const symbol1 = Symbol();
        console.log(typeof symbol1); // symbol

    3、每次调用 Symbol() 都会创建一个新的符号，即使传入的参数相同，也会创建一个新的符号
    符号的名称起的是一个调试的作用，调试的时候可以方便知道这个符号的作用。

*/

/* // 永远不相等
const syb1 = Symbol();
const syb2 = Symbol();
console.log(syb1 === syb2); // false

const syb3 = Symbol('testName');
const syb4 = Symbol('testName');
console.log(syb3 === syb4); // false */

/* 
    4、符号可以当作对象的属性名存在，这种属性称为符号属性。
        之前的对象的属性名只能是字符串！
        值可以是任何的东西。
*/

/* const syb = Symbol('testName');

const obj = {
  a: '1',
  b: '2',
  [syb]: '3' // 符号属性
};
console.log(obj); */

/* 
    4.1 开发者通过设计，可以让这些属性无法通过常规的方式被外界访问。
*/

/* const hero = (function () {
  const symbol = Symbol('getRandmom');

  return {
    attack: 30,
    hp: 300,
    defence: 10,
    gongji() {
      const dmg = this.attack + this[symbol](1, 100);
      console.log(dmg);
    },
    [symbol](min, max) {
      return Math.random() * (max - min) + min;
    }
  };
})();

console.log(hero);
hero.gongji(); */

// 非常规的方式进行获取
/* const hero = (function () {
  const symbol = Symbol('getRandmom');

  return {
    attack: 30,
    hp: 300,
    defence: 10,
    gongji() {
      const dmg = this.attack + this[symbol](1, 100);
      console.log(dmg);
    },
    [symbol](min, max) {
      return Math.random() * (max - min) + min;
    }
  };
})();

const symbols = Object.getOwnPropertySymbols(hero);
console.log(symbols[0])
let num = hero[symbols[0]](1, 100);
console.log(num) */

/* 
    4.2 符号属性是不能进行枚举的。因此在 for in 中是无法读取到符号属性的
    Object.keys() 方法也无法读取到符号属性
*/

/* const symbol = Symbol();
const obj = {
  a: 1,
  b: 2,
  [symbol]: 3
};

for (const key in obj) {
  console.log(key); // a b
} */

/* 
    5、Object.getOwnPropertyNames() 虽然可以得到所有的无法枚举的属性，但是仍然无法读取到符号属性！
    6、ES6 提供了 Object.getOwnPropertySymbols() 方法，可以获取到所有的符号属性。
*/

/* const symbol = Symbol();
const obj = {
  a: 1,
  b: 2,
  [symbol]: 3
};
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol() ] */

/* 
    7、符号无法被隐式转化，所以不能进行数学的运算、字符串的拼接或者其他隐式转化的场景。
    但是符号可以进行显式的转化为字符串，通过 String 构造函数转化即可！

*/

/* const symbol = Symbol();
console.log(symbol + 1); // TypeError: Cannot convert a Symbol value to a number
console.log(symbol + 'abc'); // TypeError: Cannot convert a Symbol value to a string */

/* const symbol = Symbol();
console.log(String(symbol) + 'abc'); // Symbol()abc */