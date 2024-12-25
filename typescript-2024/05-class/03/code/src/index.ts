/* 
    为什么需要访问器属性？
    后端语言中属性基本约定属性为私有的，通过访问器属性可以对属性进行更多的操作
    直接访问属性，不方便对属性进行进行控制
    所以 JS 和 TS 中提供了访问器属性
 */

/* class Animal {
    name: string;
    age: number;
    private _color: string;
    #_type: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this._color = "";
        this.#_type = "";
    }

    set color(color: string) {
        // 可以在这里对属性进行控制
        // if (color === "white") {...}
        this._color = color;
    }

    get color() {
        return this._color;
    }

    set type(type: string) {
        this.#_type = type;
    }

    get type() {
        return this.#_type;
    }
}

let a = new Animal("Jack", 2);
a.color = "white";
console.log(a.color);

a.type = "cat";
console.log(a.type); */

/* 
    细节：
    访问器属性如果有 set，默认 get 返回具体的类型（set 什么类型，get 就要返回什么类型）
    所以将本身属性可选这种写法和访问器属性 get set 一起写就会产生逻辑冲突
*/

class Animal {
    name: string;
    age: number;
    private _color?: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this._color = "";
    }

    set color(color: string) {
        this._color = color;
    }

    get color() {
        return this._color; // ❌ 不能将类型“string | undefined”分配给类型“string”
    }
}

let a = new Animal("Jack", 2);
a.color = "white";
console.log(a.color);

/* 
    解决方式：
    1、将属性设置为必填
    2、添加对 undefinde 的判断
*/