/* 
    A 要向 4 个女孩表白，串行发送
*/

/* function sendMessage(name, onFulfilled, onRejected) {
  console.log(`向 ${name} 发送了表白信息`);
  console.log(`等待${name}回复...`);

  setTimeout(() => {
    if (Math.random() <= 0.1) {
      onFulfilled(`${name} 同意了表白！✅`);
    } else {
      onRejected(`${name} 拒绝了表白！❌`);
    }
  }, 1000);
}

sendMessage(
  '小丽',
  (msg) => {
    console.log(msg);
  },
  (msg) => {
    console.log(msg);

    sendMessage(
      '小芳',
      (msg) => {
        console.log(msg);
      },
      (msg) => {
        console.log(msg);

        sendMessage(
          '小华',
          (msg) => {
            console.log(msg);
          },
          (msg) => {
            console.log(msg);
            console.log('注定孤独终老！🤭')
          }
        );
      }
    );
  }
); */

/* 
    以上的代码产生了回调地狱！
    ES6 提供了 Promise 来解决回调地狱

    Promise A+ 规范：
    详见 ../note/Promise.md
*/

/* 
    Promise API
    ES6 提供了 API 实现了 Promise A+ 规范
*/

/* const pro = new Promise((resolve, reject) => {
  // 该函数会立即执行
  // 调用 resolve() 会从 pending 变为 fulfilled
  // 调用 reject() 会从 pending 变为 rejected
  if (Math.random() <= 0.1) {
    resolve('小丽 同意了表白！✅');
  } else {
    reject('小丽 拒绝了表白！❌');
  }
});

console.log(pro);

// then 有两个参数均为函数，参数1:成功之后 参数2:失败之后
// 函数1的参数为 resolve 回来的数据
// 函数2的参数为 reject 回来的数据
pro.then(
  (res) => console.log(res),
  (err) => console.log(err)
); */

// TODO:===========================

/* 
    改造最开始的问题
*/

/* function sendMessage(name) {
  // 返回一个任务对象
  return new Promise((resolve, reject) => {
    console.log(`向 ${name} 发送了表白信息`);
    console.log(`等待${name}回复...`);

    setTimeout(() => {
      if (Math.random() <= 0.1) {
        resolve(`${name} 同意了表白！✅`);
      } else {
        reject(`${name} 拒绝了表白！❌`);
      }
    }, 3000);
  });
}

sendMessage('小丽').then(
  (res) => console.log(res),
  (err) => {
    console.log(err);

    sendMessage('小芳').then(
      (res) => console.log(res),
      (err) => {
        console.log(err);

        sendMessage('小华').then(
          (res) => console.log(res),
          (err) => {
            console.log(err);
            console.log('注定孤独终老！🤭');
          }
        );
      }
    );
  }
); */

/* 
    回调地狱的问题没有被解决！
*/

// TODO:===========================

/* 
    练习题
*/

/* 
    延迟执行
*/

/* function delay(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('延迟成功！🎉');
    }, duration);
  });
}

delay(1000)
  .then((result) => console.log(result))
  .catch((err) => console.warn(err)); */

/* 
    返回返回一个 Promise
    创建一个图片
    图片加载成功后执行 resolve 失败加载 reject
*/

/* function createImage(imgUrl) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgUrl;
    img.width = '500';

    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
  });
}

createImage('https://element.eleme.cn/static/theme-index-blue.c38b733.png').then((res) =>
  document.body.appendChild(res)
); */
