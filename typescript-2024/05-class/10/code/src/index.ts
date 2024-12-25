/* 
    接口的面向对象特征（之前学习是的是结构化特征）

    接口的面向对象特征：
    1、接口是比抽象类还要抽象的概念，接口中只能有抽象的属性和方法，相当于就只能声明结构，不能有具体的实现
    2、接口不能使用访问修饰符，接口中的属性默认都是 public 的
    3、类和接口的实现使用 implements 关键字
    4、接口可以多实现(类具有单根性，但是接口不是)
    5、接口和接口之间使用 extends 关键字进行继承
*/

/* interface Foo {
    name: string;
    get newName(): string;
    changeName(name: string): void;
    // public age:number; // ❌ “public”修饰符不可出现在类型成员上
}

interface Bar {
    show(address: string): void;
}

// 类实现接口，不能使用 extends 关键字
// abstract 要求也必须全部实现接口中的抽象成员
// abstract class Baz implements Foo {
class Baz implements Foo, Bar {
    name: string = "Baz";

    get newName() {
        return this.name;
    }

    changeName(name: string) {
        this.name = name;
    }

    show(address: string) {
        console.log(address);
    }
} */

/* interface User {
    id: number;
    name: string;
}

interface Person extends User {
    age: number;
}

class Admin implements Person {
    id: number = 1;
    name: string = "admin";
    age: number = 18;
} */

// ========================================

/* 
    接口和类型别名可以进行混用
*/

/* interface User {
    id: number;
    name: string;
}

interface Person extends User {
    age: number;
}

type Action = {
    type: string;
    get(): string;
    set(value: string): void;
};

interface Admin extends Action, Person {
    sex: "男" | "女";
}

class AdminImpl implements Admin {
    sex: "男" | "女" = "男";
    id: number = 1;
    name: string = "admin";
    age: number = 18;
    type: string = "add";

    get() {
        return this.name;
    }

    set(value: string) {
        this.name = value;
    }
} */

// 接口是可以进行合并的

interface User {
    id: number;
    name: string;
}

// 不会报错，因为接口是可合并的
// 如果是类型别名，同名的话就会报错
interface User {
    // 虽然可以进行合并，但是不能有类型冲突
    // 如果 key 一致，但是类型不一致的情况会报错
    name: age; 
    age: number;
}

const user: User = {
    id: 1,
    name: "user",
    age: 18
};
