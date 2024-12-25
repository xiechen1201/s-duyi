/* 
    和 JS 中一样，区别就是 TS 操作的是类型
*/

/* type World = "world";
type Greeting = `Hello ${World}`; // "Hello world" */

// 模版字符串类型 + 联合类型 = 交叉相乘的结果

/* type Direction = "left" | "right" | "top" | "bottom";
// 🤔 "Box-left" | "Box-right" | "Box-top" | "Box-bottom"
type BoxModel = `Box-${Direction}`;  */

// 和对象的属性名一起使用

/* const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
}

type PersonKeys = keyof typeof person; // "firstName" | "lastName" | "age"
type EventPersonChange = `${PersonKeys}Changed`; // "firstNameChanged" | "lastNameChanged" | "ageChanged" */

// 和映射类型 + as 对键名的重映射

/* type A = {
    foo: number;
    bar: string;
};
// 🤔 { fooId: number; barId: string; }
type B = {
    [Key in keyof A as `${Key}Id`]: A[Key]
} */

/* // 模版字符串类型不支持 Symbol 类型的
type AddID<T> = {
    // ❌ 不能将类型“symbol”分配给类型“string | number | bigint | boolean | null | undefined”
    // Key 可能是 string number symbol，可以使用 & 来解决
    // [Key in keyof T as `${Key}Id`]: T[Key];
    [Key in keyof T as `${Key & string}Id`]: T[Key];
};

type A = {
    foo: number;
    bar: string;
};

type B = AddID<A>; // { fooId: number; barId: string; } */

/* 
    一般来说 都可以和 string 进行交叉，确保 key 就是 string 类型
*/

// 示例，增加函数类型

type User = {
    name: string;
    age: number;
    address: string;
};

type AddGetter<T> = {
    [Key in keyof T as `get${Capitalize<Key & string>}`]: () => T[Key];
};

type AddSetter<T> = {
    [Key in keyof T as `set${Capitalize<Key & string>}`]: (
        value: T[Key]
    ) => void;
};

// 🤔 { getName: () => string; getAge: () => number; getAddress: () => string; }
type UserGetter = AddGetter<User>;
// 🤔 { setName: (value: string) => void; setAge: (value: number) => void; setAddress: (value: string) => void; }
type UserSetter = AddSetter<User>;

type NewUser = User & UserGetter & UserSetter;

let user: NewUser = {
    name: "John",
    age: 30,
    address: "123 Main St",
    getAddress: () => "123 Main St",
    getAge: () => 30,
    getName: () => "John",
    setAddress: (value) => {
        user.address = value;
    },
    setAge: (value) => {
        user.age = value;
    },
    setName: (value) => {
        user.name = value;
    }
};
