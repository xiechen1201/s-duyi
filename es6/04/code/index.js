/* 
    ES6 之前传入默认值
*/
/* function sum(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}
var result = sum(1, undefined, 3);
console.log(result); */

/* 
    ES6 的参数默认值
    书写形参的时候，直接给形参赋值默认值
    这样一来，调用函数的时候如果没有给对应的参数赋值，则会自动使用默认值！
    形参和实参要一一对应
*/

/* function sum(a = 0, b = 0, c = 0) {
    return a + b + c;
}
var result = sum(1, undefined, 3);
console.log(result); */

/**
 * @param {*} name 元素的名称
 * @param {*} container 元素的父元素
 * @param {*} content 元素的内容
 */
/* function createElement(
    name = 'div',
    container = document.getElementById('container'),
    content = ''
) {
    let el = document.createElement(name);
    if (content) {
        el.innerHTML = content;
    }
    container.appendChild(el);
}
createElement('div', document.getElementById('container'), 'hello world');
createElement('button', undefined, 'this is button element'); */

// TODO:==========

/* 
    对 argument 的影响
*/

/* function test(a, b) {
    console.log('arguments:', arguments); // [1, 2]
    console.log('a & b:', a, b); // 1 2

    // 更改 a 的值
    a = 3;

    // 形参和 arguments 都会发生变化！
    console.log('arguments:', arguments); // [3, 2]
    console.log('a & b:', a, b); // 3 2
}
test(1, 2); */

/* 
    如果给函数添加了默认值，那么该函数会自动采用严格模式下的规则，让 argument 和形参脱离！
*/

/* function test(a = '一', b = "二") {
    console.log('arguments:', arguments); // [1, 2]
    console.log('a & b:', a, b); // 1 2

    a = 3;

    console.log('arguments:', arguments); // [1, 2]
    console.log('a & b:', a, b); // 3 2
}
test(1, 2); */

// TODO:==========

/* 
    留意暂时性死区

    形参和 ES6 中的 let const 具有作用域，并且根据参数的声明顺序具有暂时性死区
*/

/* function test(a, b = a) {
    console.log(a, b); // 1 1
}
test(1);

function test2(a = b, b) {
    // Cannot access 'b' before initialization
    console.log(a, b); // 1 1
}
test2(undefined, 2); */

/* function test(a, b = a) {
    let a = 10; // Identifier 'a' has already been declared
}
test(1); */
