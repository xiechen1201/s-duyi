// a 的类型就是对象字面量类型。
// 🤔：let a: { b: string; c: string; }
let a = {
  b: 'hello',
  c: 'world'
};

// 对象字面量是类型字面量的一种。

let temp1: object = {
  b: 'hello',
  c: 'world'
};
// object 对象上不知道 b 这个属性的存在
console.log(temp1.b); // ❌类型“object”上不存在属性“b”

// 如果非要使用类型标注，要使用对象字面量
// temp2 对象必须包含 b 和 c 属性
// 可选属性需要使用 ?
let temp2: { b: string; c: string; d?: string } = {
  b: 'hello',
  c: 'world',
  d: 'Typescrpt'
};

// 只读属性
// readonly 表示属性是只读的，不可进行修改
let temp3: { readonly b: string; c: string; d?: string } = {
  b: 'hello',
  c: 'world',
  d: 'Typescrpt'
};

temp3.b = 'world'; // ❌无法为“b”赋值，因为它是只读属性