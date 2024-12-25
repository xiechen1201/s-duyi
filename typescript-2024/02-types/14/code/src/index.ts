/* 
  交叉类型 & 就是 and 的意思。
*/

/* type Student = { name: string; score: number };
type Teacher = { name: string; age: number; subject: string };
// Person 就是一个交叉类型，具有 Student 和 Teacher 的所有属性。
// 也就是 C 的类型既要符合 A 的类型，也要符合 B 的类型。
type Person = Student & Teacher;

const user: Person = {
  name: '张三',
  score: 100,
  age: 30,
  subject: '数学'
}; */

// 以下的类型是 never，因此基础类型不能使用 & 进行交叉。
// 交叉类型不能直接使用字面量和基础类型
// 🤔 type Width = never
/* type Width = number & string; */

// 对象字面量也需要注意
// 两个类型的属性类型不一样会产生冲突，也是 never
/* type P = {
  name: string;
  sex: string;
};
type T = {
  name: number;
  age: number;
};
type PT = P & T;

const pt: PT = {
  name: '张三',
  sex: '男',
  age: 18
}; */

/* // 小技巧
type Params = string | number | boolean;
// 得到的就是一个 string 类型
type A = Params & string; */

// 在对象也存在这个问题
/* type P = {
  name: string;
  sex: string;
};
type T = {
  name: string | number | undefined;
  age: number;
};
type PT = P & T;

const pt: PT = {
  name: '张三',
  sex: '男',
  age: 18
}; */

/* 
  交叉类型实现类似于继承的类型
*/

/* type Goods = {
  id: number;
  name: string;
  price: number;
};

type Card = {
  id: number;
  name: string;
  price: number;
  count: number;
}; */

// 以上的写法比较麻烦

type Goods = { id: number; name: string; price: number };

type Card = Goods & { count: number };

type Order = Goods & Card & { totalCount: number; totalPrice: number };
