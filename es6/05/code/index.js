/* 
    ## 成员速写
    
    ES5 之前
*/

/* function createUser(loginId, loginPwd, nickName) {
    // 参数的名称和变量的名称一样，写法没有问题，但是比较啰嗦
    return {
        loginId: loginId,
        loginPwd: loginPwd,
        nickName: nickName,
        id: Math.random()
    };
} */

/* 
    ES6 之后
    如果对象字面量初始化的时候，成员的名称来自于一个变量，并且和变量的名称相同，可以进行简写
*/

/* function createUser(loginId, loginPwd, nickName) {
    // 即表示属性名，也可以进行赋值
    // 只是提供了一个语法糖

    const sayHello = function () {
        console.log('hello');
    }
    return {
        loginId,
        loginPwd,
        nickName,
        sayHello,
        id: Math.random()
    };
} */

// TODO:====================

/* 
    ## 方法速写
    对象字面量初始化的时候，方法可以省略冒号和 function 关键字
*/

// 也是一种语法糖，本质上没有发生任何的变化
/* const user = {
    loginId: 'admin',
    loginPwd: '123456',
    nickName: 'admin',
    sayHello() {
        console.log('hello', this.nickName);
    }
};
user.sayHello(); */

// TODO:====================

/* 
    ## 计算属性名
    有的时候初始化对象时，某些属性名可能来自于某个表达式的值，在ES6中可以使用[]来表示该属性名通过计算得到的
*/

// ES5 的时候无法做到属性名来自于一个表达式，一个变量的

/* const prop1 = 'loginId';
const prop2 = 'loginPwd';
const prop3 = 'sayHello';

const user = {};
user[prop1] = 'admin'; */

// ES6 可以直接进行使用

/* const prop1 = 'loginId';
const prop2 = 'loginPwd';
const prop3 = 'sayHello';

const user = {
    [prop3]: 'admin',
    [prop2]: '123456',
    nickName: 'admin',
    [prop3]() {
        console.log('hello', this.nickName);
    }
};
console.log(user); */