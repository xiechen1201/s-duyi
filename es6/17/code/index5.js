/* 
    ## 可验证的函数参数
*/

// 对函数的参数的类型有要求
function sum(a, b) {
  return a + b;
}

function validatorFunction(fun, ...types) {
  return new Proxy(fun, {
    apply(target, thisArg, argumentsList) {
      types.forEach((type, index) => {
        if (typeof argumentsList[index] !== type) {
          throw new TypeError(`参数「${index}」的类型不是「${type}」`);
        }
      });

      return Reflect.apply(target, thisArg, argumentsList);
    }
  });
}

const newFun = validatorFunction(sum, 'number', 'number');
console.log(newFun(1, '2'));
