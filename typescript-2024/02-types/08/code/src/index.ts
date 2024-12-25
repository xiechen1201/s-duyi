/* // function fn1(): void
function fn1() {}

// function fn2(): void
function fn2() {
  return;
}

// function fn3(): undefined
function fn3() {
  return undefined;
}

// let m1: void
let m1 = fn1();

// let m2: void
let m2 = fn2();

// let m3: undefined
let m3 = fn3();
console.log(m1, m2, m3); */

// void 是 undefined 的父类型
function fn1(): void {
  return undefined;
}
function fn2(): void {
  return null;
}
