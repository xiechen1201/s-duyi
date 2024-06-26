/* 
    ES6 新增了 let 来声明变量
*/

/* 
    使用let声明的变量不会变为全局变量
*/
/* let a = 'abc';
console.log(window.a); // undefined */

/* 
    使用let声明的变量不允许在当前作用域内重复的定义
*/
/* let a = 123;
// 检查到当前作用于已经声明了变量 a
let a = 456; // Identifier 'a' has already been declared */

// 不同的作用于可以重复声明
/* let a = 123;
function foo() {
    let a = 'abc';
    console.log(a); // 输出 'abc'
}
foo(); */

/* 
    ES6不仅引入了let来解决变量声明的问题，同时引入了块级作用于的概念。
    块级作用域：代码执行的时候遇到花括号，会创建一个块级作用域，花括号结束，销毁块级作用域。
*/
/* // 全局作用域
let a = 123;
{
    // 块级作用域
    let a = 456;
    // 使用的是块级作用域中的a，块外部不能访问，如果块内没有变量a，则查找外部的a
    console.log(a); // 输出  456
} */

/* if (Math.random() < 0.5) {
    // 定义在当前作用域
    let a = 123;
    console.log(a);
} else {
    // 这是另外一个块级作用域
    console.log(a); // Error
}
console.log(a); // Error */

/* 
    使用let不存在变量提示的问题，所以不能再定义let变量之前访问
    底层实现上，let声明的变量也会进行提示，但是提升后会将其放入到「暂时性死区」，如果访问的变量位于暂时性死区，则会报错。当代吗运行到该变量的声明语句时，该变量会从暂时性死区中移除，后续才可以正常的进行访问。
*/
/* console.log(a); // Cannot access 'a' before initialization
let a = 123; */

/* 
    解决之前的问题
    再循环中 let index=0; 会进行特殊的处理，每次进入循环体都会开启一个新的作用域，并且将循环变量绑定到该作用域。
    （每次循环使用的是一个全新的循环变量）
    循环变量会在循环结束后进行销毁
*/
/* let oBox = document.getElementById('box');
// 开启10个作用域，每次都是一个新的块级作用域
for (let index = 0; index < 10; index++) {
    let oBtn = document.createElement('button');
    oBtn.innerHTML = '按钮' + index;
    oBtn.onclick = function () {
        console.log(index);
    }
    oBox.appendChild(oBtn);
} */
