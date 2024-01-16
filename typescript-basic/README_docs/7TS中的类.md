# 7 TS 中的类

## 新增的类语法

```ts
class User {
  constructor(name: string, age: number) {
    this.name = name; // ❌类型“User”上不存在属性“name”
    this.age = age; // ❌类型“User”上不存在属性“age”
  }
}

/* 
    TS 认为构造函数写出来后具有哪些属性应该是非常清晰的
    认为创建属性的功能应该单独的书写，而不是动态的创建
*/
```

属性：要求使用属性列表来描述类中的属性。

```ts
class User {
  name: string; // 这两个东西只会存在于 TS 中，表示这个类就有这两个属性
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const u = new User("xiaoming", 18);
const u2 = new User("xiaoming", 18, "男"); // ❌应有 2 个参数，但获得 3 个
```

属性的初始化检查：

如果没有书写构造函数，也没有进行赋值,那么属性的值就是 undefined，导致类型描述不一致。

```ts
class User {
  name: string;
  age: number;
}
const u = new User();
```

或者忘记给属性赋值，希望 TS 能明确的进行提示：

```ts
class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
  }
}
const u = new User("zhangsan", 22);
```

这个时候可以配置 compilerOptions.strictPropertyInitialization = true 来进行约束。

```ts
class User {
  name: string;
  age: number; // ❌属性“age”没有初始化表达式，且未在构造函数中明确赋值
  constructor(name: string, age: number) {
    this.name = name;
  }
}
const u = new User("zhangsan", 22);
```

属性的默认值：

每次创建对象都需要创建 3 个参，如何做到性别默认为男？

```ts
class User {
  name: string;
  age: number;
  gender: "男" | "女";
  constructor(name: string, age: number, gender: "男" | "女") {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const u = new User("zhangsan", 22, "男");

// ====>

class User {
  name: string;
  age: number;
  gender: "男" | "女";
  constructor(name: string, age: number, gender: "男" | "女" = "男") {
    this.name = name;
    this.age = age;
  }
}
const u = new User("zhangsan", 22);

// ===>

class User {
  name: string;
  age: number;
  gender: "男" | "女" = "男";
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const u = new User("zhangsan", 22);
console.log(u); // User { gender: '男', name: 'zhangsan', age: 22 }
```

属性可以修饰为可选的：

身份证号不是必须要存在的。

```ts
class User {
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
console.log(u); // User { gender: '男', name: 'zhangsan', age: 22, pid: '123' }
```

有的属性一旦完成初始化之后就不能在改变了：

```ts
class User {
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
console.log(u);
```

有些属性，我们是不希望外部能够读取到：

在 JS 中通过 symbol 来实现。

在 TS 中可以通过访问修饰符来实现，访问修饰符可以控制类中的某个成员（方法、属性）的访问权限。

- public，默认的访问修饰，表示公开的权限，所有的代码可以访问。

- private，表示私有的权限，只有类内部可以访问。

- protected，表示受保护的权限，只有类内部和子类可以访问。

```ts
class User {
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
    } else {
      console.log("发布失败，当前文章数量已达到上限");
    }
  }
}
const u = new User("zhangsan", 22);
u.publicNumber = 300; // ❌属性“publicNumber”为私有属性，只能在类“User”中访问
console.log(u);
```

所以某些危险的操作是不能暴露给外部使用的！

某些时候我们写代码发现属性都用一个特点，name 属性都是通过参数传递进来的，然后也没有进行其他的处理，直接进行赋值，是一个机械化的劳动，TS 提供了一个语法糖。

属性简写：如果某个属性通过构造函数的参数进行传递并且不做任何处理的赋值给改属性，可以进行简写。

```ts
class User {
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
console.log(u);
```

这就完成了简写。

## 访问器

作用：用于控制属性的读取和赋值。

例如年龄这个属性不能是小数、不能为负数，那么我们可以通过访问器来控制。
