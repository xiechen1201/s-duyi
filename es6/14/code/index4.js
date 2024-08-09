/* 
    模拟 async/await
*/

/* function* task() {
  let d = yield 1;
  console.log(d);
  let resp = yield fetch('https://www.douyin.com/');
  console.log(resp);
  let text = yield resp.text();
  console.log(text);
}

run(task);

function run(generatorFunc) {
  let generator = generatorFunc();

  let result = generator.next(); // 启动任务
  console.log(result); // {value: 1, done: false}
  handleResult();

  // 对 result 进行处理
  function handleResult() {
    if (result.done) {
      // 迭代完成，不进行处理
      return;
    } else {
      // 迭代未完成

      if (typeof result.value.then === 'function') {
        // 1、如果迭代的数据是一个 Promise，等待 Promise 完成后再进行下一次的迭代
        result.value.then(
          (res) => {
            result = generator.next(res);
            handleResult();
          },
          (err) => {
            result = generator.throw(err);
            handleResult();
          }
        );
      } else {
        // 2、如果迭代的数据是其他数据，直接进行下一次迭代
        result = generator.next(result.value);
        handleResult(); // 递归调用
      }
    }
  }
} */
