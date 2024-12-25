/* 
    接口映射签名引发的问题
*/

/* type Params = {
    id: string;
}; */

/* interface Params {
    id: string;
}

let p: Params = {
    id: "1"
};

// 🤔 type A = Params
type A = typeof p; */

/* 
    为什么显示的是 Params 类型而不是具体的对象字面量类型？
    interface 具有声明合并的特性，如果再定义一个 interfce Params，编辑器也不知道具有有几个属性
*/

/* type MyRecord = {
    [key: string]: string;
    age: number; // ❌
};

const record: MyRecord = {
    name: "1",
    age: 1
}; */

/* type MyRecord = {
    [key: string]: string;
    // age: number; // ❌
};

interface MyInterfce {
    name: string;
}

type MyType = {
    name: string;
};

const example1: MyInterfce = {
    name: "example"
};

const example2: MyType = {
    name: "example"
};

let record: MyRecord = {};
record = example1; // ❌
record = example2; */

/* 
    interface 是可以声明合并的，不确定 interface 是否会合并一个 age: number 属性
*/

// ================================

interface MyInterfce {
    name: string;
}

type MyType = {
    name: string;
};

function useParams<
    ParamsOrKey extends string | Record<string, string | undefined>
>() {
    // ...
}

useParams<MyType>();
useParams<MyInterfce>(); // ❌
