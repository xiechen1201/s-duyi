/* 

*/

type User = {
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

const u1: AdminUser = {
    id: 1,
    name: "user1",
    role: "admin"
};

// 触发协变
deleteUser(u1);

// 触发协变
let u2: User = u1;

let u3: User = {
    id: 3,
    name: "user3",
    role: "admin" // ❌ 对象字面量只能指定已知属性，并且“role”不在类型“User”中。
};

deleteUser({ id: 4, name: "user4", role: "admin" }); // ❌ 对象字面量只能指定已知属性，并且“role”不在类型“User”中。

/* 
    报错？
    直接字面量 + 类型只要不匹配就会触发多余属性的检查。
    子类型变量赋值给父类型的变量，没问题
    直接写一个对象的问题：TS 会帮我们进行检查，检查是否满足 User 的类型。
    既希望 TS 能帮我进行类型的检查，又希望进行协变
    如果只要将一个直接字面量对象赋值给变量，方法参数，或者构造函数参数就会触发多余参数检查。

    可以使用类型断言进行解决。
*/
