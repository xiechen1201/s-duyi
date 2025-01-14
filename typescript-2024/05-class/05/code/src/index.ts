// extends

/* class Father {}

class Child extends Father {} */

/* 
    类的继承具有单根性的，具有一个父类
*/

/* class Father {
    constructor(public name: string) {}
} */

/* class Child extends Father {

}
new Child("father"); // 子类和父类的参数类型一致 */

/* class Child extends Father {
    constructor(public name: string, public age: number) {
        super(name);
    }
}
*/

// ==========================================

/* class Father {
    constructor(public name: string) {}

    info() {
        console.log("Father Info", this.name);
    }
}

class Child extends Father {
    constructor(public name: string, public age: number) {
        super(name);
    }

    info() {
        console.log("Child Info", this.name);
    }
}

let c = new Child("Tom", 18);
// 子类的 info 相当于对父类的 info 进行了重写
c.info(); // Child Info Tom */

// TS 新增了 override

/* class Father {
    constructor(public name: string) {}

    info() {
        console.log("Father Info", this.name);
    }
}

class Child extends Father {
    constructor(public name: string, public age: number) {
        super(name);
    }

    // 如果父类不存在 info 方法，会报错
    // 和父类的 info 方法签名一致，也会报错
    // 和父类的 info 方法返回类型不一致，不会报错
    override info(): string {
        console.log("Child Info", this.name);
        return "";
    }
} */

// 如何调用父类的方法，然后再拓展一下

/* class Father {
    constructor(public name: string) {}

    info() {
        console.log("Father Info", this.name);
    }
}

class Child extends Father {
    constructor(public name: string, public age: number) {
        super(name);
    }

    override info(): string {
        super.info();
        console.log("Child Info", this.name);
        return this.name;
    }
}
 */