/* 
    将 User 中的某些属性提取出来，形成一个单独的类型
*/

type User = {
    readonly id: number;
    name: string;
    tel: string;
    isActive: boolean;
    address?: string;
};

type UserPick = {
    name: string;
    tel: string;
};

/* type MyPick<T, K extends keyof any> = {
    // 因为这里的 K 可能不在 T 中
    // K 应该是 T 泛型中的 key
    [key in K]: T[K]; // ❌ 类型“key”无法用于索引类型“T” 
}; */

type MyPick<T, K extends keyof T> = {
    [key in K]: T[key];
};

// 🤔 type Test = { name: string; tel: string; isActive: boolean; }
type Test = MyPick<User, "name" | "tel" | "isActive">;

/* function myPick(obj, key) {
    // 返回一个新属性的对象
    return {};
} */
