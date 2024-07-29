/* 
    一个人同时进行三个任务：做饭、洗衣粉、打扫卫生
    和表白的场景不一样，这里需要同时进行。
*/

/* function cook() {
  return new Promise((resolve, reject) => {
    console.log('打开了电饭煲');
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('做饭成功') : reject('做饭失败');
    }, 2000);
  });
}

function wash() {
  return new Promise((resolve, reject) => {
    console.log('打开了洗衣机');
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('洗衣服成功') : reject('洗衣服失败');
    }, 2500);
  });
}

function sweep() {
  return new Promise((resolve, reject) => {
    console.log('打开了扫地机器人');
    setTimeout(() => {
      Math.random() > 0.5 ? resolve('扫地成功') : reject('扫地失败');
    }, 3000);
  });
} */

/* 
    如何同时进行呢？
    这就是简单的并行执行。
    但是如何进行汇总呢？（所有任务都完成的时候）
*/

/* cook();
wash();
sweep(); */

/* 
    Promise.resolve() 直接返回一个完成状态的任务
    等价于 new Promise((resolve, reject)=> resolve());
*/

/* const pro = Promise.resolve(100);
console.log(pro); */

/* 
    Promise.reject() 直接返回一个拒绝状态的任务
*/

/* const pro = Promise.reject('失败');
console.log(pro); */

/* 
    Promise.all() 返回一个任务，任务全部成功则成功，任务一个失败则失败
*/

/* const pro = Promise.all([
  Promise.resolve('成功'),
  Promise.resolve('成功'),
  Promise.resolve('成功')
]);
setTimeout(() => console.log(pro), 0); */

/* const pro = Promise.all([
  Promise.resolve('成功'),
  Promise.reject('失败'),
  Promise.resolve('成功')
])

setTimeout(() => console.log(pro), 0); */

/* 
    Promise.any(任务数组)
    返回一个任务，任务数组中有一个成功则成功，任务数组中全部失败则失败
*/

/* const pro = Promise.any([
  Promise.resolve('成功'),
  Promise.reject('失败'),
  Promise.resolve('成功')
]);
setTimeout(() => console.log(pro), 0); */

/* const pro = Promise.any([
  Promise.reject('失败'),
  Promise.reject('失败'),
  Promise.reject('失败')
]);

pro.catch(error=>{
  console.log(error.errors) // // 返回一个错误对象.errors
}) 

setTimeout(() => console.log(pro), 0); */

/* 
    Promise.allSettled()
    返回一个任务，全部的任务状态落定则成功，该任务不会失败
*/

/* const pro = Promise.allSettled([
  Promise.reject('失败'),
  Promise.resolve('成功'),
  Promise.resolve('成功')
]);
setTimeout(() => console.log(pro), 0); */

/* 
    Promise.race(任务数组)
    返回一个任务，任意一个任务状态落定，则任务状态和其一致
*/

/* const pro = Promise.race([
  Promise.reject('失败'),
  Promise.resolve('成功'),
]);
setTimeout(() => console.log(pro), 0); */

// TODO:=================================

/* 
    ## 练习题
*/

/* function fetchStudents(page) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error('请求失败，获取第' + page + '页数据失败！'));
        return;
      }

      const stus = new Array(10).fill(null).map((el, index) => ({
        id: `NO.${(page - 1) * 10 + index + 1}`,
        name: `学生${(page - 1) * 10 + index + 1}`
      }));
      resolve(stus);
    }, Math.floor(Math.random() * 5000));
  });
} */

// 任意一个任务失败，任务则不进行继续
/* Promise.all([
  fetchStudents(1),
  fetchStudents(2),
  fetchStudents(3),
  fetchStudents(4),
  fetchStudents(5)
]).then(
  (results) => {
    console.log(results.flat(Infinity));
  },
  (err) => {
    console.log(err);
  }
); */

// 如果某页码的数据异常，就不加入该数据即可！
/* Promise.allSettled([
  fetchStudents(1),
  fetchStudents(2),
  fetchStudents(3),
  fetchStudents(4),
  fetchStudents(5)
]).then((results) => {
  let arr = results.filter((el) => el.status === 'fulfilled').map((el) => el.value).flat();
  console.log(arr)
}); */

// 打印最先获取到结果的数据，如果全部都失败，则打印所有的错误信息
/* Promise.any([
  fetchStudents(1),
  fetchStudents(2),
  fetchStudents(3),
  fetchStudents(4),
  fetchStudents(5)
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors);
  }); */

// 输出最先得到的结果
/* Promise.race([
  fetchStudents(1),
  fetchStudents(2),
  fetchStudents(3),
  fetchStudents(4),
  fetchStudents(5)
]).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
); */

// TODO:=================================

/* 
    邓哥的解决方案。
*/
