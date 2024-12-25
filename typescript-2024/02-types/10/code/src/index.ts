// 类型别名就是给类型一个别名

/* type Age = number;

type Person = {
  name: string;
  // 类型别名相互嵌套
  age: Age;
};

// 不能重复声明
// ❌标识符“Person”重复
type Person = {};

let user: Person = {
  name: 'Alice',
  age: 18
}; */

/* // 类型别名也具有作用域
// 但是一般来说，类型都是集中在一块，不建议 JS 逻辑和 TS 类型混在一起
type Color = 'blue';

if (true) {
  type Color = 'red';
  let color: Color = 'blue'; // ❌不能将类型“"blue"”分配给类型“"red"”
} */

/* type Address = {
  province: string;
  city: string;
};

type User = {
  name: string;
  age: number;
  address: Address;
};

let user: User = {
  name: 'Alice',
  age: 18,
  address: {
    province: 'Beijing',
    city: 'Beijing'
  }
};

let user2: User = {
  name: 'Bob',
  age: 20,
  address: {
    province: 'Shanghai',
    city: 'Shanghai'
  }
};

function getUser() {
  // 默认下，该函数会推断返回值为 { name: string; age: number; address: { province: string; city: string; }; }
  // 是一个新的对象字面量类型，会和 User 类型不匹配
  // 可以进行类型断言
  return {
    name: 'Alice',
    age: 18,
    address: {
      province: 'Beijing',
      city: 'Beijing'
    }
  } as User;
}
 */

// 书写约定
// 类型别名一般首字母大写

// 变量是根据值来进行编程，类型别名可以认为是在类型系统中的编程

// 接口是一个面向对象的概念，但是应对这种复杂的类型，接口和类型别名基本差不多
// 接口的后面不需要添加 =
// 接口不能声明基础类型，比如 number、string、boolean 等

interface Address {
  readonly province: string;
  readonly city: string;
}

interface User {
  name: string;
  age: number;
  address: Address;
  tel?: string;
}

let user: User = {
  name: 'Alice',
  age: 18,
  address: {
    province: 'Beijing',
    city: 'Beijing'
  }
};
