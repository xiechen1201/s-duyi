// 对两个对象进行浅比较，查看是否相等
export function objectEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  return Object.keys(obj1).every((key) => obj1[key] === obj2[key]);
}
