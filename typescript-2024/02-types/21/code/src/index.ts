/* const arr = [1, 2, 3, 4, 5]
console.log(arr[1])

const a = 'name'
const obj = {
    id: 1,
    name: 'jack'
} */

/* 
  在 TS 中 [] 还可以进行类型的计算，取出对象类型的键对应的值类型
*/

/* type Person = {
    id: number;
    name: string;
};

// 获取 Person 中 id 的类型
// 🤔 type ID = number
type ID = Person["id"];
// 🤔 type ObjValueType = string | number
type ObjValueType = Person["id" | "name"];
type Sex = Person["sex"]; // ❌ 类型“Person”上不存在属性“sex” */

// 除了对象数组也可以进行类型计算

/* const arr: string[] = ["a", "b", "c"];
// 得到数组本身的类型
// 🤔 type ArrValueType = string
type ArrValueType = typeof arr[number]
// 下标就相当于数组中的一个键，键的类型是 number 类型，然后获取值的类型 */

/* type User = {
    id: number;
    name: string;
    age: number;
};

const users: User[] = [
    { id: 1, name: "jack", age: 18 },
    { id: 2, name: "tom", age: 19 }
];

// 🤔 type ObjType = { id: number; name: string; age: number; }
type ObjType = typeof users[number]; */

// ## 元组也可以

/* const p: [number, string] = [1, "a"];
// 得到联合类型
// 🤔 type TupleType = string | number
type TupleType = (typeof p)[number];

const roles: ["Admin", "User", "Guest"] = ["Admin", "User", "Guest"];
// 🤔 type RolesType = "Admin" | "User" | "Guest"
type RolesType = typeof roles[number]; */

// 数组转元组
// 使用 as const 将数组转化为元组

// 🤔 const roles: string[]
const roles = ["角色列表", "角色管理", "角色权限", "角色添加"] as const;
// 🤔 type Role = string
type Role = (typeof roles)[number];

