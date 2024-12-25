/* 
    keyof 可以获取对象类型 key 的联合类型
*/

/* type User = {
    name: string;
    age: number;
    gender: "男" | "女";
};
// 🤔 type UserKeys = "name" | "age" | "gender";
// type UserKeys = keyof User;
// 小技巧：加上 &{} 就可以看到具体的联合类型了
type UserKeys = keyof User & {};
let user: UserKeys = "sex"; // ❌ */

/* 
    typeof 获取对象 key 的类型
*/

/* // 对象字面量类型
const person = {
    name: "张三",
    age: 18,
    gender: "男"
};
// 得到对象的类型
// 🤔 type person = { name: string; age: number; gender: string; }
// 得到对象 key 的联合类型
// 🤔 type person = "name" | "age" | "gender"
type person = keyof typeof person;  */

/* 
    和括号运算符联合使用，获取对象类型所有值的类型
*/

/* type Person = {
    name: string;
    age: number;
    gender: "男" | "女";
};
// 🤔 type PersonValues = string | number
type PersonValues = Person[keyof Person]; */

/* 
    之前使用重载 createElement 函数
*/

/* function createElement(tagName: "div"): HTMLDivElement;
function createElement(tagName: "span"): HTMLSpanElement;
function createElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
} */

/* 
    通过泛型简化流程
*/

type TagName = keyof HTMLElementTagNameMap & {};
function createElement<T extends TagName>(tagName: T): HTMLElementTagNameMap[T] {
    return document.createElement(tagName);
}
// 🤔 let res: HTMLInputElement
let res = createElement("input")