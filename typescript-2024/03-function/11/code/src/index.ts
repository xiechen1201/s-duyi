/* type Animal = {
    eat(): void;
};

type Pet = Animal & {
    run(): void;
};

type Dog = Pet & {
    bark(): void;
};

let a: Animal = {
    eat() {
        console.log("animal eat");
    }
};

let p: Pet = {
    eat() {
        console.log("pet eat");
    },
    run() {
        console.log("pet run");
    }
};

let d: Dog = {
    eat() {
        console.log("dog eat");
    },
    run() {
        console.log("dog run");
    },
    bark() {
        console.log("dog bark");
    }
};

function feed(pet: Pet) {
    pet.run();
    return pet;
}

feed(a); // ❌
feed(p);
feed(d); */

/* 
    为什么结构化类型只支持协变，不支持逆变？
    只有 feed 传递的是 Pet 或者 Dog 类型才会有 .run() 方法，所以协变是安全的
    Animal 没有 .run() 方法，所以不能传递
*/

// =====================================

/* 
    在 TS class 也是结构化类型
*/

/* class Animal {
    eat() {
        console.log("eat");
    }
}

class Pet extends Animal {
    run() {
        console.log("run");
    }
}

class Dog extends Pet {
    bark() {
        console.log("bark");
    }
}

let a = new Animal();
let p = new Pet();
let d = new Dog();

function feed(pet: Pet) {
    pet.run();
    return pet;
}

feed(a); // ❌
feed(p);
feed(d); */

/* 
    结果是一样的，类也是结构化类型，支持协变
*/

// =====================================

/* 
    函数的类型兼容类型非常的特殊
*/

/* class Animal {
    eat() {
        console.log("eat");
    }
}

class Pet extends Animal {
    run() {
        console.log("run");
    }
}

class Dog extends Pet {
    bark() {
        console.log("bark");
    }
}

function clone(callback: (p: Pet) => Pet): void {
    // do something...
}

// 下面有几个不用的函数

function petToPet(p: Pet): Pet {
    // do something...
    return new Pet();
}

function petToDog(p: Pet): Dog {
    // do something...
    return new Dog();
}

function petToAnimal(p: Pet): Animal {
    // do something...
    return new Animal();
}

clone(petToPet);
clone(petToDog);
clone(petToAnimal); // ❌ */

/* 
    在参数个数、类型相同的情况下，函数的返回值类型是支持协变的
    （如果一个函数的返回类型是另外一个函数返回类型的子类型，这个函数的类型是协变的）

    这样很好理解，例如在 clone 内实现
    let p = new Pet();
    let c = f(p); 
    // 不安全的调用
    c.run();

    如果是逆变，c 是没有 .run() 方法的，所以不能传递
*/

// =====================================

class Animal {
    eat() {
        console.log("eat");
    }
}

class Pet extends Animal {
    run() {
        console.log("run");
    }
}

class Dog extends Pet {
    bark() {
        console.log("bark");
    }
}

function animalToPet(a: Animal): Pet {
    // do something...
    return new Pet();
}

function dogToPet(d: Dog): Pet {
    // do something...
    d.bark();
    return new Pet();
}

function petToPet(p: Pet): Pet {
    // do something...
    return new Pet();
}

function clone(callback: (p: Pet) => Pet): void {
    // do something...
}

clone(petToPet);
clone(animalToPet);
clone(dogToPet); // ❌

/* 
    函数的参数支持的是逆变
    必须传递的是父类型，不能传递子类型

    如果函数返回的类型一致的情况下，那么函数的参数支持的是逆变
    只能传递父类型的参数

    如果 dogToPet 方法内调用 .bark() 方法，那么调用方调用 .bark() 方法的时候，会报错
    因为 pet 方法没有这个属性

    TS 函数默认对 this 进行协变
*/


/* 
    总结：
    1、在不考虑 this 的情况下，满足以下条件可以说函数A是函数B的子类型：
        1）函数A的参数数量 <= 函数B的参数数量
        2）函数A的返回类型是函数B返回类型的子类型，也就是支持协变
        3）函数A的各个参数的类型是函数B相应参数的父类型，也就是逆变
*/