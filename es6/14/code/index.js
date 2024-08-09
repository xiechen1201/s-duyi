/* const obj = {
  next() {
    return {
      value: 1,
      done: false
    };
  }
}; */

// TODO:=========================================

/* 
    迭代器案例
*/

/* const arr = [1, 2, 3, 4, 5];

// 循环缺点，一定要关心数据集（arr）,很多场景时没有问题
// 但是如果数据集不一定是真数组（伪数组），换成迭代器就没有这个问题了
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
} */

/* const arr = [1, 2, 3, 4, 5];
// 用于迭代数组
const iterator = {
  i: 0, // 当前数组下标
  next() {
    return {
      value: arr[this.i++],
      done: this.i >= arr.length
    };
  }
};

// 通过 next() 来迭代数据源的每一个数据
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// 想迭代几次就迭代几次，不需要关心数据源
// 实现：让迭代器不断的取出下一个数据，直到没有数据
let data = iterator.next();
while (!data.done) {
  console.log(data.value);
  data = iterator.next();
}
// 虽然感觉不如 for 循环，但是整个循环没有用到数据集，数据集和取数据进行了隔离 */

// TODO:=========================================

/* const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
// 迭代器创建函数
function createIterator(arr) {
  let i = 0; // 当前数组下标
  return {
    next() {
      return {
        value: arr[i++],
        done: i >= arr.length
      };
    }
  };
}

const iter1 = createIterator(arr1);
const iter2 = createIterator(arr2);

console.log(iter1);
console.log(iter1); */

// TODO:=========================================

/* 
    需要依次得到斐波拉契利前面 n 位的值
    1 1 2 3 5 8 13 21 34 55.....
*/

/* // 创建一个斐波拉契数列的迭代器
function createFeiBoIterator() {
  let prev1 = 1; // 当前位置的前一位
  let prev2 = 1; // 当前位置的前两位
  let n = 1; // 当前是第几位

  return {
    next() {
      let value;

      if (n <= 2) {
        value = 1;
      } else {
        value = prev1 + prev2;
      }

      let result = {
        value: value,
        done: false
      };

      prev2 = prev1;
      prev1 = result.value;
      n++
      return result;
    }
  };
}

let iter = createFeiBoIterator();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); */

/* 
    这就是迭代器的优势，可以无限的创建数据！
    内部实现多种多样，但是最终返回的一定是 {next(){}}
*/
