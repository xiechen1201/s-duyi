/* 
    ES6 同时新增了 const 关键字，和 let 的区别比较小，仅在于用 const 声明的变量必须在声明的时候进行赋值而且不可以更改，一般用来定义常量。
    使用 const 定义的值可以保证变量的值不被随意的被更改。
*/
/* const a; // Missing initializer in const declaration */

/* const a = 123;
a = 456; // Assignment to constant variable. */

/* 
    注意：
    1、常量不可变是指声明常量的内存空间不可变，并不保证内存空间中的地址指向的其他空间不可变。
*/
/* const person = {
    name: '张三',
    age: 20
};

person.name = '李四'; // 修改成功
person.age = 30; // 修改成功

console.log(person); // { name: '李四', age: 30}

person = {}; // Assignment to constant variable. */

/* 
    2、常量的命名：
        特殊的常量：从字面意义上一定是不可变的，例如圆周率，通常变量的名称全部大写，多个单词之间使用下划线分割 const PI = 3.14;
        普通的常量：不确定能否被改变，使用和之前普通的命名即可；
    3、在循环中不可以使用常量
*/
