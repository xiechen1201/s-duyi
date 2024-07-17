/* export var a = 1;
export default 2; */

// 这种情况比较少见
/* var a = 1;
export { a as default }; */

export default {
  name: "This is default module",
  sayName: function () {}
};
