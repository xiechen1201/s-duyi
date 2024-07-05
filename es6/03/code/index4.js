/* 
    模版字符串标记
*/

/* let love1 = '篮球';
let love2 = '足球';
let text = `张三喜欢${love1}，还喜欢${love2}`; */

/* 
    希望对字符串进行一些简单的处理，输出一个新的字符串！
    在``的前面上写函数的名称，会自动调用函数！
    会把函数的返回值赋值给 text 变量！
*/

/* let love1 = '篮球';
let love2 = '足球';
// 会把字符串按照 ${} 进行分割
let text = myTag`张三喜欢${love1}，还喜欢${love2}`;

function myTag() {
    console.log(arguments[0]); // ["张三喜欢", ",还喜欢", ""]
    console.log(arguments[1]); // 篮球
    console.log(arguments[2]); // 足球
}

console.log(text); */

/* 
    告诉模版字符串全是普通字符
*/
/* let text = String.raw`abc\nbcd`;
console.log(text); // "abc\nbcd" */

/* 
    处理用户输入的标签    
*/

/* let oTxt = document.getElementById('txt');
let oBtn = document.getElementById('btn');
let oBox = document.getElementById('container');

oBtn.onclick = function () {
    oBox.innerHTML = String.raw`${oTxt.value}`;
}; */

let oTxt = document.getElementById('txt');
let oBtn = document.getElementById('btn');
let oBox = document.getElementById('container');

oBtn.onclick = function () {
    oBox.innerHTML = safe`${oTxt.value}`;
};

function safe(parts) {
    const values = Array.prototype.slice.apply(arguments).slice(1);
    let str = '';

    for (let i = 0; i < values.length; i++) {
        const v = values[i].replace(/</g, '&lt;').replace(/>/g, '&gt;');
        str += parts[i] + v;

        if (i === values.length - 1) {
            str += parts[i + 1];
        }
    }

    return str;
}
