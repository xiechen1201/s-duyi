/* 
    展开运算符的练习
*/

/* function getInputValues() {
    const numbers = [];
    const oInputs = document.querySelectorAll('input');

    oInputs.forEach((input) => {
        numbers.push(Number(input.value));
    });
    return numbers;
}

document.querySelector('button').addEventListener('click', () => {
    const numbers = getInputValues();
    const maxNum = Math.max(...numbers);
    const minNum = Math.min(...numbers);

    document.querySelector('#max').innerHTML = maxNum;
    document.querySelector('#min').innerHTML = minNum;
}) */

/* 
    剩余参数的练习
*/

/* function cal(a, b, c, d) {
    return a + b * c - d;
}
console.log(cal(1, 2, 3, 4));
console.log(cal(1, 2, 4, 5));
console.log(cal(1, 2, 5, 6)); */

/* function cal(a, b, c, d) {
    return a + b * c - d;
}

// curry 函数是一个柯里化的函数，用于固定某个函数的前面的参数，得到一个新的函数，新的函数调用的时候接受剩余的参数
function curry(fun, ...args) {
    return function (...subArgs) {
        const allArgs = [...args, ...subArgs];

        if (allArgs.length >= fun.length) {
            // 参数够了
            return fun(...allArgs);
        } else {
            // 参数不够
            return curry(fun, ...allArgs);
        }
    };
}

const newCal = curry(cal, 1, 2);

console.log(newCal(3, 4));
console.log(newCal(4, 5));
console.log(newCal(5, 6));

const newCal2 = newCal(8);
console.log(newCal2(9)); */
