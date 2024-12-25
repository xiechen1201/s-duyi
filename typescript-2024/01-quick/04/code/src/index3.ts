// 对象字面量类型
// 也属于字面量类型

// 推断类型：const person: { id: number; name: string; age: number; }
/* const person = {
  id: 1,
  name: '张三',
  age: 18
};

const person2: { id: number; name: string; age: number } = {
  id: 1,
  name: '张三',
  age: 1
}; */

// 对象数组字面量
/* const arr: { name: string; age: number }[] = [
  { name: '张三', age: 18 },
  { name: '李四', age: 20, sex: '男' } // ❌对象字面量只能指定已知属性，并且“sex”不在类型“{ name: string; age: number; }”中
]; */

/* function getInfo(user: { name: string; age: number }): string {
  return `${user.name} ${user.age}`;
}
getInfo({ name: 'zhangsan', age: 18 });
getInfo({ name: 'zhangsan', age: 18, set: '男' }); // ❌对象字面量只能指定已知属性，并且“set”不在类型“{ name: string; age: number; }”中
// 可以正常运行
let userInfo = { name: 'zhangsan', age: 18, set: '男' };
getInfo(userInfo); */

/* function getInfo(name: string, age: number): { name: string; age: number } {
  return { name, age };
} */

// 对象字面量类型太麻烦了，如果进行自定义类型呢？
// 自定义类型：1类型别名 2接口（80% 的情况都一致）

// 类型别名：创建一个类型的新的名字，可以是任何有效的类型，包括基本类型、联合类型、元组、对象类型等
// 语法：
/* type PersonType = { name: string; age: number; sex?: string }; */

// 接口：接口是面向对象的概念，一般用于定义对象的类型
// 语法：
/* interface PersonInterface {
  name: string;
  age: number;
  sex?: string;
} */

// 示例
/* type PointerType = {
  x: number;
  y: number;
};

const pointer: PointerType = {
  x: 1,
  y: 2
}; */

/* interface PointerInterface {
  x: number;
  y: number;
}

const pointer: PointerInterface = {
  x: 1,
  y: 2,
  z: 10 // ❌对象字面量只能指定已知属性，并且“z”不在类型“PointerInterface”中
}; */

// 有了 type 和 interface 后，在函数和类型声明中就非常方便了

/* type PersonType = {
  name: string;
  age: number;
  sex?: string;
};
function getInfo(user: PersonType): string {
  return `${user.name} ${user.age}`;
}
getInfo({ name: 'zhangsan', age: 18 });
getInfo({ name: 'zhangsan', age: 18, sex: '男' }); */

// 函数的两种不同表现形式：函数声明和函数表达式
/* interface PersonInterface {
  name: string;
  age: number;
  sex?: string;
  eat(food: string): void;
  sleep: (hours: number) => void;
} */