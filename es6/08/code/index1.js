/* new Promise((resolve, reject) => {
  reject(new Error('发送错误'));
}).then(null, (error) => {
  console.log(error);
}); */

// TODO:================================

/* 
    链式调用
*/

/* const pro1 = new Promise((resolve, reject) => {
  console.log('学习');
  resolve();
});

const pro2 = pro1.then((data) => {
  console.log('考试');
});

// console.log(pro2);

const pro3 = pro2.then((data) => {
  console.log('出成绩');
});

console.log(pro3); */

// TODO:================================

/* const pro1 = new Promise((resolve, reject) => {
  console.log('学习');
  console.log('中奖了，不用学习了');
  reject();
});
// 没有处理失败的情况
const pro2 = pro1.then((data) => {
  console.log('考试');
});
// 导致 pro2 的状态也跟着失败，因为后续无法进行了
console.log(pro2); // rejected */

/* const pro1 = new Promise((resolve, reject) => {
  console.log('学习');
  resolve();
});
const pro2 = pro1.catch((data) => {
  console.log('学习失败了');
});
console.log(pro2); // fulfilled */

// TODO:================================

/* const pro1 = new Promise((resolve, reject) => {
  console.log('学习');
  setTimeout(() => {
    resolve();
  }, 2000);
});
const pro2 = pro1.catch((data) => {
  console.log('学习失败了');
});
console.log(pro2); // pending */

// TODO:================================

/* const pro1 = new Promise((resolve, reject) => {
  console.log('学习');
  resolve();
});
const pro2 = pro1.then((data) => {
  // 不产生错误，则 pro2 的状态即为成功！
  console.log('考试'); 
  return '100分'
});
console.log(pro2); // fulfilled 值为:100分 */

/* const pro1 = new Promise((resolve, reject) => {
  console.log('学习');
  resolve();
});
const pro2 = pro1.then((data) => {
  console.log('考试');
  // 如果发送错误，则 pro2 的状态即为失败
  throw new Error('考试睡着了！');
});
console.log(pro2); // rejected 值为:考试睡着了！ */

/* const pro1 = new Promise((resolve, reject) => {
  console.log('学习');
  reject('中奖了，不用学习了');
});
const pro2 = pro1.catch((error) => {
  // 处理的过程中不报错，pro2 的状态即为成功
  console.log('在家养老吧');
});

console.log(pro2); // fulfilled */

/* const pro1 = new Promise((resolve, reject) => {
  console.log('学习');
  reject('中奖了，不用学习了');
});
const pro2 = pro1.catch((error) => {
  // 处理的过程中报错，pro2 的状态即为失败
  throw new Error('颁奖的机构跑路了');
});

console.log(pro2); // rejected */

// TODO:================================

/* const pro1 = new Promise((resolve, reject) => {
  console.log('学习');
  resolve();
});
const pro2 = pro1.then((data) => {
  // pro2 的状态和 new Promise() 的状态一致！
  return new Promise((resolve, reject) => {
    reject();
  });
});

console.log(pro2); // rejected */

// TODO:================================

/* function sendMessage(name) {
  // 返回一个任务对象
  return new Promise((resolve, reject) => {
    console.log(`向 ${name} 发送了表白信息`);
    console.log(`等待${name}回复...`);

    setTimeout(() => {
      if (Math.random() <= 0.1) {
        // 将异步任务更改为 fulfilled 状态
        resolve(`${name} 同意了表白！✅`);
      } else {
        // 将异步任务更改为 rejected 状态
        reject(`${name} 拒绝了表白！❌`);
      }
    }, 3000);
  });
} */

/* sendMessage('小丽')
  .catch((error) => {
    console.log(error);
    return sendMessage('小芳');
  })
  .catch((error) => {
    console.log(error);
    return sendMessage('小华');
  })
  .then(
    (data) => {
      console.log(data);
      console.log('小明终于找到了自己的伴侣');
    },
    (error) => {
      console.log(error);
      console.log('注定孤独终老！🤭');
    }
  ); */

// TODO:================================

/* 
    练习题
*/

/* const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(100), 1000);
});

const pro2 = pro1.then((data) => {
  console.log(data);
  return data + 10;
});

const pro3 = pro2.then((data) => {
  console.log(data);
});

console.log(pro1, pro2, pro3); // pending pending pending

setTimeout(() => {
  console.log(pro1, pro2, pro3); // fulfilled fulfilled fulfilled
}, 2000); */

/* new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((data) => {
    console.log(data);
    return 2;
  })
  .catch((error) => {
    throw 3;
  })
  .then((data) => console.log(data)); */

// pro 的状态取决于最后一个 .then() 的状态
// 和 xxx.aaa().bbb().ccc().ddd() 一个道理！
/* const pro = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((data) => {
    console.log(data);
    return 2;
  })
  .catch((error) => {
    throw 3;
  })
  .then((data) => console.log(data)); */

/* // fulfilled
new Promise((resolve, reject) => {
  resolve();
})
  // rejected
  .then((data) => {
    data.toString();
    return 2;
  })
  // fulfilled
  .catch((err) => {
    return 3;
  })
  // fulfilled
  .then((res) => {
    console.log(res);
  });
// 结果：3 */

/* // rejected
new Promise((resolve, reject) => {
  throw new Error(1);
})
  // rejected
  .then((res) => {
    console.log(res);
    return new Error(2);
  }) // rejected
  .catch((err) => {
    throw err;
  }) // rejected
  .then((res) => console.log(res)); */
