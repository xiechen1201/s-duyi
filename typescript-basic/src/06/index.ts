/* interface IUser {
  name: string;
  age: number;
}

let u: IUser = {
  name: "xiechen",
  age: 23
}; */

// ====

/* type TUser = {
  name: string;
  age: number;
};
let u: TUser = {
  name: "xiechen",
  age: 23
}; */

// ====

/* interface IUser {
  name: string;
  age: number;
  sayHello: () => void;
} */

/* interface IUser {
  name: string;
  age: number;
  sayHello(): void;
}
let u: IUser = {
  name: "xiechen",
  age: 23,
  sayHello() {
    console.log("hello");
  }
}; */

// ======

/* function sum(numbers: number[], callback: (n: number) => boolean) {
  numbers.forEach;
} */

/* type TCondition = (n: number) => boolean;

function sum(numbers: number[], callback: TCondition) {
  let s = 0;

  numbers.forEach((n) => {
    if (callback(n)) {
      s += n;
    }
  });

  return s
}

const result = sum([3, 4, 5, 6, 7], (n) => n % 2 === 0);
console.log(result) */

/* interface ICondition {
  (n: number): boolean;
}

function sum(numbers: number[], callback: ICondition) {
  let s = 0;

  numbers.forEach((n) => {
    if (callback(n)) {
      s += n;
    }
  });

  return s;
}

const result = sum([3, 4, 5, 6, 7], (n) => n % 2 === 0);
console.log(result); */

// ====

/* interface A {
  T1: string;
}

interface B extends A {
  T2: number;
}

let c: B = {
  T1: "1",
  T2: 1
}; */

/* interface A {
  T1: string;
}

interface B {
  T2: number;
}

interface C extends A, B {
  T3: boolean;
}

let test: C = {
  T1: "1",
  T2: 1,
  T3: true
}; */

// ====

/* type A = {
  T1: string;
};

type B = {
  T2: number;
};

type C = A & B & {
    T3: boolean;
  };

let test: C = {
  T1: "1",
  T2: 1,
  T3: true
}; */

// =======

/* interface User {
  id: string;
  name: string;
  age: number;
}

let u: User = {
  id: "123",
  name: "xiechen",
  age: 1
};
u.id = "456"; // 不合理的操作 */

/* interface User {
  readonly id: string;
  name: string;
  age: number;
}

let u: User = {
  id: "123",
  name: "xiechen",
  age: 1
};
u.id = "456"; // ❌无法为“id”赋值，因为它是只读属性 */

// ====

/* type User = {
  readonly id: string;
  name: string;
  age: number;
}; */

// ===

/* let arr: number[] = [1, 2, 3];
arr = [4, 5, 6]; */

/* let arr: readonly number[] = [1, 2, 3];
arr = [4, 5, 6];
arr[0] = 4; // ❌类型“readonly number[]”中的索引签名仅允许读取
arr.push("1"); // ❌类型“readonly number[]”上不存在属性“push”
console.log(arr); */

// ====

/* type User = {
  readonly id: string;
  name: string;
  age: number;
  readonly arr: number[];
};

let u: User = {
  id: "123",
  name: "xiechen",
  age: 1,
  arr: [1, 2, 3]
};
u.arr.push(4);
u.arr = [4, 5, 6]; // ❌无法为“arr”赋值，因为它是只读属性 */

// ====

/* type User = {
  readonly id: string;
  name: string;
  age: number;
  readonly arr: readonly number[];
};

let u: User = {
  id: "123",
  name: "xiechen",
  age: 1,
  arr: [1, 2, 3]
};
u.arr.push(4);
u.arr = [4, 5, 6]; // ❌无法为“arr”赋值，因为它是只读属性 */

// ====

/* interface Duck {
  sound: "嘎嘎嘎";
  swin(): void;
}

let person = {
  name: "伪装成鸭子的人",
  age: 50,
  sound: "嘎嘎嘎" as "嘎嘎嘎", // 断言为字符串的"嘎嘎嘎"类型
  swin() {
    console.log(this.name + "在游泳，并发出了" + this.sound + "的声音");
  }
};

let duck: Duck = person; // 完成赋值，正常执行 */

// =====

// 假设有个函数，用于得到服务器的某个接口的返回结果，是一个用户对象，对象有100个属性，使用的时候只会用到一点点属性
// 如果严格的模块来要求，那么 ResponseUser 得定义多少属性啊

/* interface ResponseUser {
  loginId: string;
  nickName: string;
  gender: "男" | "女";
}

let u = ...
let user: ResponseUser = u; */

// ====

/* interface Duck {
  sound: "嘎嘎嘎";
  swin(): void;
}

let duck: Duck = {
  name: "伪装成鸭子的人", // ❌不能将类型“{ name: string; age: number; sound: "嘎嘎嘎"; swin(): void; }”分配给类型“Duck”
  age: 50,
  sound: "嘎嘎嘎" as "嘎嘎嘎", // 断言为字符串的"嘎嘎嘎"类型
  swin() {
    console.log(this.name + "在游泳，并发出了" + this.sound + "的声音");
  }
}; */

// =====

/* interface User {
  name?: string;
  age: number;
}

let u: User = {
  nema: "xiechen", // 防止这种情况的出现
  age: 1
} */

// ====

/* type TCondition = {
  (n: number, i: number): boolean;
};

function sum(numbers: number[], callback: TCondition) {
  let s = 0;

  numbers.forEach((el, index) => {
    if (callback(el, index)) {
      s += el;
    }
  });

  return s;
}

const result = sum([3, 4, 5, 6, 7], (el) => el % 2 === 0); // 传递一个参数不会报错
console.log(result); */

// ====

// 推断 forEach 方法：
// Array<number>.forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
/* [1, 2, 3, 4].forEach((el) => {
  console.log(el);
}); */

// ====

/* type TCondition = {
  (n: number, i: number): boolean;
};

function sum(numbers: number[], callback: TCondition) {
  let s = 0;

  numbers.forEach((el, index) => {
    if (callback(el, index)) {
      s += el;
    }
  });

  return s;
}

const result = sum([3, 4, 5, 6, 7], (el) => el % 2); // ❌不能将类型“number”分配给类型“boolean”
console.log(result); */

// ====

[1, 2, 3].forEach((el) => el * 2);
