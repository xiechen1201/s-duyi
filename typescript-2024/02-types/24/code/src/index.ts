/* 
    枚举类型是一个特殊的类型
    枚举类型既可以当做类型也可以当做值
    之前的那种类型在编译后类型就会被去除，只剩下值，而枚举类型在编译后会被保留下来
    枚举类型可以参与逻辑业务
*/

/* 
    为什么要使用枚举？
*/

/* type Gender = "男" | "女";
type Color = "red" | "blue" | "green";
type Direction = "up" | "down" | "left" | "right";
type Status = "success" | "error" | "warning";
type Weekday = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

function fn1(color: Color) {
    switch (color) {
        case "red":
            console.log(color);
            // todo...
            break;
        case "blue":
            console.log(color);
            // todo...
            break;
        case "green":
            console.log(color);
            // todo...
            break;
    }
} */

/* 
    switch 内的逻辑表达和 type 的类型产生了混淆，会导致修改类型的时候会对下面的逻辑产生影响
    例如将
    type Color = "red" | "blue" | "green";
    修改为
    type Color = "红" | "蓝" | "绿";
*/

// ========================================================================

/* 
    使用枚举定义离散的值
    枚举通常都是首字母大写的，枚举的值默认从 0 开始递增
*/

// 枚举创建好之后，本身就有映射
// 字符串=》数字 字符串=》字符串
/* enum Color {
    Red = 0,
    Blue = 1,
    Green = 2
}

function foo(color: Color) {
    switch (color) {
        case Color.Red:
            console.log(color);
            break;
        case Color.Blue:
            console.log(color);
            break;
        case Color.Green:
            console.log(color);
            break;
    }
}

foo(Color.Green); */

// 其他的值
/* enum Color {
    Red = "red",
    Blue = "blue",
    Green = "green"
} */

/* 
    一般情况下，如果值为 number，会自动递增
*/

/* enum Color {
    Red = 100,
    Blue, // 🤔 Color.Blue = 101
    Green = 2,
    Yellow // 🤔 Color.Yellow = 3
} */

// 如果值都是字符串，则需要手动指明值，因为 TS 不知道后续的值应该是什么
/* enum Color {
    Red = "red",
    Blue = "blue",
    Green // ❌ 枚举成员必须具有初始化表达式
} */

// ======================================================================

/* enum Direction {
    Up,
    Down,
    Left,
    Right
}

const upValue = Direction.Up;
console.log(upValue); // 0（得到值）
const downValue = Direction[1]; // Down（得到键） */

/* 
    因为编辑结果是
    {}

    仅仅是数字枚举成员的时候才能具有双向的映射
    如果是字符串还是单向的映射
*/

/* enum Direction {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
} */

// ===============================

/* 
    枚举的问题：
    1、简单写的时候没有问题，但是前端提倡摇树优化，立即执行函数存在副作用
    2、
*/

// ===============================

/* 
    常量枚举类型
    编译后的结果也不同，不会产生任何的 JS 代码，支持变成一个值
*/

const enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Down);
// 不能使用双向映射
console.log(Direction[1]); // ❌ 只有使用字符串文本才能访问常数枚举成员