/* 
    使用 var 声明变量的问题：
    1、重复声明，导致数据被覆盖
*/

/* var a = 1;
function print() {
    console.log(a);
}
// 假设这里有 1000 行代码
var a = 2;
print(); // 2 */

// 2、变量提升，怪异的数据访问
// else 中的 a 访问到的是变量提升后的 a
/* if (Math.random() > 0.5) {
    var a = 'abc';
    console.log(a);
} else {
    console.log(a);
}
console.log(a); */

// 闭包问题
/* var oBox = document.getElementById('box');
for (var i = 0; i < 10; i++) {
    var oBtn = document.createElement('button');
    oBtn.innerText = '按钮' + i;
    oBtn.onclick = function () {
        // 点击全部输出的是9
        console.log(i);
    };

    oBox.appendChild(oBtn);
} */
// 这是因为 var i; 存在变量提升，每次使用的都是同一个 i

// 使用立即执行函数解决
/* var oBox = document.getElementById('box');
for (var i = 0; i < 10; i++) {
    var oBtn = document.createElement('button');
    oBtn.innerText = '按钮' + i;
    oBox.appendChild(oBtn);
    (function (i) {
        oBtn.onclick = function () {
            // 点击全部输出的是9
            console.log(i);
        };
    })(i);
} */

// 3、全局变量挂载到全局对象 window 上，导致全局对象成员污染的问题
/* var abc = '123';
console.log(window.abc); // 123

var console = 'abc';
console.log(window.console); // error */
