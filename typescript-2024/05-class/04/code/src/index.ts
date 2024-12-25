/* 
    和 JS 基本没有区别
*/

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    // 静态属性
    static kingdom = "Animal";

    // 静态方法
    static showKingdom(): string {
        // this 指向类本身，写法不太好，最好使用 Animal，而不是 this
        // this: typeof Animal
        console.log(this.kingdom);
        return `The kingdom is ${Animal.kingdom}`;
    }
}

console.log(Animal.showKingdom());
