// 交叉类型
// 就是讲多个类型合并为一个类型
// 类型A & 类型B & 类型C

/* type A = {
  id: number;
  name: string;
};

type B = {
  gender: string;
  age: string;
};

// 把 A 和 B 合并成一个类型
// 也就是把两个对象字面量类型合并为一个类型
type C = A & B;

// A 和 B 的类型必须都存在
const obj: C = { // ❌类型“{ id: number; name: string; }”缺少类型“B”中的以下属性: gender, age
  id: 1,
  name: '张三'
}; */

// 和联合类型的区别
// 联合类型是 |，表示可以是多个类型中的任意一个

// =======================================================================================

// 类型断言
// TS 会根据上下文进行推测，但有时候推测的不准确，需要手动告诉编译器
// 类型断言就是告诉编译器，你比它更清楚某个值的类型，请按照我的类型来处理
// 语法：值 as 类型

/* // 类型推断：let oDiv: HTMLDivElement | null
let oDiv = document.querySelector('div');
oDiv.offsetHeight; //  ❌“oDiv”可能为 “null” */

/* let oDiv = document.querySelector('div');
// (oDiv as HTMLDivElement).offsetHeight; //  ✅
(<HTMLDivElement>oDiv).offsetHeight; */

// 两种方式都可以，推荐使用 as，因为 React 中的 JSX 语法和(<HTMLDivElement>)的方式可能会产生歧义。

// =======================================================================================

// 非空断言
// 也就是说这个值的类型一定不是空的，当确定某个值的类型不是 null 或 undefined 的时候，可以直接使用非空断言。
// 语法：值!

/* let oDiv = document.querySelector('div');
oDiv!.offsetHeight; */

/* function getRandom(len?: number): string | undefined {
  if (!len) {
    return undefined;
  }
  return Math.random().toString(36).slice(-len);
}
let s = getRandom(6);
s.charAt(0); // “s”可能为“未定义”
s!.charAt(0); */

// ========================================================================================

// 可选链操作符
// 是 ES2020 新增的特性，用于简化非空断言

/* let oDiv = document.querySelector('div');
// 可选链操作符，如果 oDiv 为 null 或 undefined，则返回 undefined，否则返回 offsetHeight
oDiv?.offsetHeight; */

type StudentType = {
  name: string;
  address?: {
    city: string;
    street: string;
    zipcode: string;
  };
};

const student: StudentType = {
  name: '张三',
  address: {
    city: '北京',
    street: '长安街',
    zipcode: '100000'
  }
};

let city = student.address?.city;
