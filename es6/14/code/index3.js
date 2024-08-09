/* function* test() {}
let t = test();
console.log(t);
console.log(t.next());

for (const element of t) {
  console.log(element);
} */

// TODO:=================================

/* // 这是一个生成器函数，调用函数只是简单的得到一个生成器，不会运行函数内部的代码
function* test() {
  console.log(123); // 不会运行
}
let iter = test();
console.log(iter); */

/* 
    函数内部是给生成器提供迭代数据的

    每次调用生成器的 next() 方法，将导致生成器函数运行到下一个 yield 关键字位置。

    yield 是一个关键字，该关键字只能在生成器函数内部使用，意为产生一个迭代数据。
*/

/* function* test() {
    console.log("第一次运行");
    yield 1;
    console.log("第二次运行");
    yield 2;
    console.log("第三次运行");
}
let iter = test(); // 函数不运行
console.log(iter.next()); // 开始迭代，开始运行函数代码
console.log(iter.next()); 
console.log(iter.next()); */

// TODO:=================================

/* 
    改写之前数组迭代器的案例
*/

/* const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

function* createIterator(arr) {
  for (const element of arr1) {
    yield element;
  }
}

const iter = createIterator(arr1);
console.log(iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); */

// TODO:=================================

/* function* createFeiBoIterator() {
  let prev1 = 1;
  let prev2 = 1;
  let n = 1;

  while (true) {
    if (n <= 2) {
      yield 1;
    } else {
      const newValue = prev1 + prev2;
      prev2 = prev1;
      prev1 = newValue;

      yield newValue;
    }

    n++;
  }
}

const iter = createFeiBoIterator();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); */

// TODO:=================================

/* 
    ## 生成器有哪些需要注意的细节？
*/

/* 
    1、生成器函数可以有返回值，返回值出现在第一个 done 为 true 时的 value 属性中。
*/

/* function* test() {
    console.log("第一次运行");
    yield 1;
    console.log("第二次运行");
    yield 2;
    console.log("第三次运行");
    return 10;
}
let iter = test(); 
console.log(iter.next());
console.log(iter.next()); 
console.log(iter.next()); */

// 第三次运行
// { value: 10, done: true }

//  return 结束函数，迭代也就结束了，所以 done 为 true，value 为 return 的值。
// 适用于提前结束迭代的情况。

/* 
    2、调用生成器的 next() 方法可以传递参数，传递的参数会交给 yield 表达式的返回值
*/

/* function* test() {
  console.log('第一次运行');
  let info = yield 1;
  console.log('info:', info);

  console.log('第二次运行');
  info = yield 2 + info;
  console.log('info:', info);

  console.log('第三次运行');
}
let iter = test();
console.log(iter.next());
console.log(iter.next(10));
console.log(iter.next()); */

/* 
    第一次调用 next() 方法，得到 {value:1, done:false}
    第二次调用 next(10) 方法，得到 {value:12, done:false}
        传递的参数 10，会作为上一次 yield 1 表达式的返回值，赋值给 info 变量
    第三次调用 next() 方法，没有传递参数，info 为 undefined，得到 {value:undefined, done:true}

*/

/* 
    3、第一次调用 next() 方法时，传递参数是无效的（没有任何意义），因为上一次没有 yield 表达式

    4、生成器函数内部可以调用其他生成器，但是要注意加上 * 号
*/

/* function* test1() {
  yield 'a';
  yield 'b';
}

function* test2() {
  // test1(); // 无法得到 a（因为简单调用生成器函数不会导致内部的代码执行）
  // yield test1(); // {value: test1, done: false} 得到生成器对
  yield* test1(); // 表示函数内部也会参与迭代，{value: 'a', done: false}

  yield 1;
  yield 2;
}

const generator = test2();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); */

// TODO:=================================

/* 
    ## 生成器的其他 API
*/

/* 
    - return 方法，调用该方法可以结束生成器函数，从而提前让整个迭代过程结束
*/

/* function* test() {
  yield 1;
  yield 2;
  yield 3;
}
const generator = test();
console.log(generator.next());
// console.log(generator.return());
console.log(generator.return(20));
console.log(generator.next()); */

/* 
    - throw 方法，调用该方法可以在生成器中产生一个错误
*/

/* function* test() {
  yield 1;
  yield 2;
  yield 3;
}
const generator = test();
console.log(generator.next());
console.log(generator.throw(new Error("出错了")));
console.log(generator.next());
 */