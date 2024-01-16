/* class User {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
} */

/* 
    TS 认为构造函数写出来后具有哪些属性应该是非常清晰的
    认为创建属性的功能应该单独的书写，而不是动态的创建
*/

// =====

/* class User {
  name: string; // 这两个东西只会存在于 TS 中，表示这个类就有这两个属性
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const u = new User("xiaoming", 18);
const u2 = new User("xiaoming", 18, "男"); // ❌应有 2 个参数，但获得 3 个 */

// ====

/* class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
  }
}
const u = new User("zhangsan", 22); */

// ====

/* class User {
  name: string;
  age: number;
  gender: "男" | "女" = "男";
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const u = new User("zhangsan", 22);
console.log(u); */

// =====

/* class User {
  name: string;
  age: number;
  gender: "男" | "女" = "男";
  pid?: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const u = new User("zhangsan", 22);
console.log(u);
u.pid = "123";
console.log(u); // User { gender: '男', name: 'zhangsan', age: 22, pid: '123' } */

// ====

/* class User {
  readonly id: number; // 不能被更改，相当于 const
  name: string;
  age: number;
  gender: "男" | "女" = "男";
  pid?: string;

  constructor(name: string, age: number) {
    this.id = Math.random();
    this.name = name;
    this.age = age;
  }
}
const u = new User("zhangsan", 22);
console.log(u);
u.id = 345; // ❌无法为“id”赋值，因为它是只读属性
console.log(u); */

// ====

/* class User {
  readonly id: number;
  name: string;
  age: number;
  gender: "男" | "女" = "男";
  pid?: string;
  private publicNumber: number = 3; // 每天总共可以发布的文章数量
  private curNumber: number = 0; // 当前可以发布的文章数量

  constructor(name: string, age: number) {
    this.id = Math.random();
    this.name = name;
    this.age = age;
  }

  publish(title: string) {
    if (this.curNumber < this.publicNumber) {
      console.log("发布一篇文章：" + title);
      this.curNumber++;
    } else {
      console.log("发布失败，当前文章数量已达到上限");
    }
  }
}
const u = new User("zhangsan", 22);
u.publicNumber = 300; // ❌属性“publicNumber”为私有属性，只能在类“User”中访问
console.log(u); */

// =====

/* class User {
  readonly id: number;
  //   name: string;
  //   age: number;
  gender: "男" | "女" = "男";
  pid?: string;

  //   constructor(name: string, age: number) {
  //     this.id = Math.random();
  //     this.name = name;
  //     this.age = age;
  //   }

  constructor(public name: string, public age: number) {
    this.id = Math.random();
  }
}

const u = new User("zhangsan", 22);
console.log(u); */

// =====

class User {
  readonly id: number;
  name: string;
  private _age: number;
  gender: "男" | "女" = "男";
  pid?: string;
  private publicNumber: number = 3;
  private curNumber: number = 0;

  constructor(name: string, age: number) {
    this.id = Math.random();
    this.name = name;
    this._age = age;
  }

  set age(val: number) {
    if (val < 0) {
      this._age = 0;
    } else if (val > 100) {
      this._age = 100;
    } else {
      this._age = val;
    }
    console.log("set age", val);
  }

  get age() {
    console.log("get age");
    return this._age;
  }

  publish(title: string) {
    if (this.curNumber < this.publicNumber) {
      console.log("发布一篇文章：" + title);
      this.curNumber++;
    } else {
      console.log("发布失败，当前文章数量已达到上限");
    }
  }
}

let u = new User("zhangsan", 22);