const os = require('os');
const path = require('path');
const url = require('url');
const util = require('util');

// TODO:
/* console.log(os.EOL);
console.log(os.arch()); // arm64
console.log(os.cpus());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.tmpdir()); */

// TODO:
/* console.log(path.basename('a/b/c/d/test.html'));
// test.html
console.log(path.basename('a/b/c/d/test'));
// test
// 如果后缀名匹配上，则结果删除后缀名，否则保留
console.log(path.basename('a/b/c/d/test.html', '.html'));
// test
console.log(path.basename('a/b/c/d/test.html', '.js'));
// test.html
console.log(path.sep);
console.log(path.delimiter);
console.log(path.dirname('a/b/c/d/test.js'));
console.log(path.extname('a/b/c/d/test.js'));
// .js
console.log(path.join('a', 'b', 'c'));
// a/b/c
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
// ../../impl/bbb
console.log(path.resolve('a/b/c/test.js'));
// /Users/xiechen/Documents/code-personal/s-duyi/a/b/c/test.js
console.log(path.resolve(__dirname, 'a/b/c/test.js'));
// 相当于当前模块的绝对路径
// /Users/xiechen/Documents/code-personal/s-duyi/nodejs/05/code/a/b/c/test.js */

// TODO:
/* const newUrl = new url.URL(
    'https://nodejs.org:443/dist/latest-v12.x/docs/api/url.html?name=zhangsan&age=20#title'
);
console.log(newUrl);
console.log(newUrl.searchParams.get('name')); */

// TODO:
// 异步函数
/* async function delay(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration);
        }, duration);
    });
}
delay(3000).then((res) => {
    console.log(res);
});

const delayCallback = util.callbackify(delay);
delayCallback(3000, (err, res) => {
    console.log(res);
}); */

/* // 同步函数
function delayCallback(duration, callback) {
    setTimeout(() => {
        callback(null, duration);
    }, duration);
}
let delay = util.promisify(delayCallback);
delay(3000).then((res) => console.log(res)); */

const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: 4
        }
    }
};

const obj2 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: "4"
        }
    }
};
console.log(util.isDeepStrictEqual(obj1, obj2));
