/* 
    模版字符串
    在 ES6 之前处理字符串繁琐的两个方面：
        1. 多行字符串
        2. 字符串拼接
*/

/* var text = '\n\
    <ul>\n\
        <li>first</li>\n\
        <li>second</li>\n\
        <li>third</li>\n\
    </ul>\n\
';
console.log(text); */

/* var name = 'zhangsan';
var age = 20;
var info = 'name is ' + name + ', age is ' + age;
console.log(info); */

/* 
    ES6 提供了模版字符串的书写方式！
    可以非常方便的进行换行和拼接，将""和''改为``即可！ 
*/

/* var text = `
<ul>
    <li>first</li>
    <li>second</li>
    <li>third</li>
</ul>
`;
console.log(text) */

/* let name = 'zhangsan';
let age = 20;
// 表达式可以是任何有意义的数据
let info = `name is ${name}, age is ${age}, num is ${1 + 2 + 3}`;
console.log(info); */

// 表达式是可以进行嵌套的！
/* let info = `name is ${`zhang` + `san` + `${1 + 2 + 3}`}.`;
console.log(info); */

// 将 ${} 进行转义
/* let str = `在ES6中使用\${表达式}进行文本插值！`;
console.log(str); */