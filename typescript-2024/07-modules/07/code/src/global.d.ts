declare global {
    interface Animal {
        name: string;
        age: number;
    }
}

// 内置的 string 类型添加一个方法

declare interface String {
    point(value: string): void;
}

export {};
