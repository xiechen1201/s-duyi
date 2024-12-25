// 本文内容仅在 v5.5.4 之前有效

/* function foo(input: string | number) {
  if (typeof input === 'string') {
    console.log(input.toUpperCase());
  } else {
    console.log(input.toFixed());
  }
} */

// 某些时候，这个类型判断可能是不够的，我们希望传递到一个函数中进行判断

/* function isString(input: any) {
  return typeof input === 'string';
}
function isNumber(input: any) {
  return typeof input === 'number';
}

function foo(input: string | number) {
  if (isString(input)) {
    console.log(input); // 依然是 string | number
  } else if (isNumber(input)) {
    console.log(input); // 依然是 string | number
  }
} */

// 能够谓语动词来帮我们解决

/* // input is string 表示函数返回 true，就将 input 更改为 string 类型
function isString(input: any): input is string {
  return typeof input === 'string';
}
// input is number 表示函数返回 true，就将 input 更改为 nunber 类型
function isNumber(input: any): input is number {
  return typeof input === 'number';
}

function foo(input: string | number) {
  if (isString(input)) {
    console.log(input); // string
  } else if (isNumber(input)) { 
    console.log(input); // number
  }
} */

// =====================================================

// 自定义类型守卫在我做一些比较复杂类型判断的时候比较有用

type Box = {
  _v_isBox: boolean;
  value: any;
};

function isBox(box: any): box is Box {
  return box && box._v_isBox === true;
}

function unWrapBox(box: Box) {
  return isBox(box) ? box.value : box;
}
