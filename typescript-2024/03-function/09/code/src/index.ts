/* 
    型变
*/

/* type User = {
    id?: number;
    name: string;
};

type Animal = {
    id?: number;
    name: string;
};

type AdminUser = {
    id?: number;
    name: string;
    role: string;
};

function deleteUser(user: User) {
    console.log(user);
}

const a1: Animal = {
    id: 1,
    name: "animal1"
};

const u1: AdminUser = {
    id: 2,
    name: "user2",
    role: "admin"
};

deleteUser(a1); // ✅
deleteUser(u1); // ✅ */

/* 
    两个类型里面的结构属性，属性类型一致，则认为两个类型是兼容的
    u1 多了一个 role 属性，也可以？
    不仅仅是基本的类型可以区分父类型和子类型，结构也可以。
    什么时候去分一个类型是一个类型的子类型呢？
    多了一个 role 属性，就可以认为 AdminUser 是 User 的子类型

    这种方式其实就是型变

    和 User 的类型是不兼容的
    {
        id: number | string;
        name: string;
    }
*/

/* 
    结构类型是不支持「逆变」的，只有函数的参数才可以进行逆变。
*/

type Pet = {
    name: string;
};

type Dog = Pet & {
    breed: string;
};

const dogs: Dog[] = [
    {
        name: "Mitzie",
        breed: "Terrier"
    },
    {
        name: "Spot",
        breed: "Dalmatian"
    }
];

const pet: Pet[] = dogs; // ✅
