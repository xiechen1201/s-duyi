/* var obj = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: 1,
          done: false
        };
      }
    };
  }
}; */

/* const arr = [5, 7, 9];
console.log(arr);
// Symbol.iterator 是一个迭代器创建方法
const iter = arr[Symbol.iterator]();
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); */

// TODO:=========================================

/* 
    遍历迭代器
*/

/* const arr = [5, 7, 9];
const iter = arr[Symbol.iterator]();
let result = iter.next();
while (!result.done) {
  const item = result.value;
  console.log(item);
  result = iter.next();
} */

/* const arr = [5, 7, 9];
for (const iterator of arr) {
  console.log(iterator);
} */

/* let obj = {
  a: 1,
  b: 2,
  [Symbol.iterator]: function () {
    const keys = Object.keys(this);
    let i = 0;

    return {
      next: () => {
        const result = {
          value: {
            propName: keys[i],
            propValue: this[keys[i]]
          },
          done: i >= keys.length
        };
        i++
        return result;
      }
    };
  }
};

for (const iterator of obj) {
  console.log(iterator);
} */

/* 
    这样1一以来不仅限制于数组，任何可以迭代的数据都可以使用 for...of 进行遍历
*/

// TODO:=========================================

/* let obj = {
  a: 1,
  b: 2,
  [Symbol.iterator]: function () {
    const keys = Object.keys(this);
    let i = 0;

    return {
      next: () => {
        const result = {
          value: {
            propName: keys[i],
            propValue: this[keys[i]]
          },
          done: i >= keys.length
        };
        i++;
        return result;
      }
    };
  }
};

// 将迭代器转换为数组
const arr = [...obj];
console.log(arr);

// 将迭代器作为参数传递
test(...obj);
function test(a, b){
    console.log(a, b);
} */