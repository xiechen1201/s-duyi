"use strict";
/*
    枚举类型是一个特殊的类型
    枚举类型既可以当做类型也可以当做值
    之前的那种类型在编译后类型就会被去除，只剩下值，而枚举类型在编译后会被保留下来
    枚举类型可以参与逻辑业务
*/
Object.defineProperty(exports, "__esModule", { value: true });
console.log(1 /* Direction.Down */);
// 不能使用双向映射
console.log(Direction[1]); // ❌ 只有使用字符串文本才能访问常数枚举成员
