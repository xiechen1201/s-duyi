/* 
    ## Set 集合的应用
*/

/* 
    求两个数组的交集、并集、差集
*/

/* const arr1 = [33, 22, 55, 33, 11, 33, 55];
const arr2 = [22, 55, 77, 88, 88, 99, 99];

// 并集，结果不能有重复项
const union = [...new Set([...arr1, ...arr2])];
console.log(union);

// 交集（arr1 arr2 共有的数据）
const s1 = new Set(arr1);
const s2 = new Set(arr2);
const result = [...s1].filter((item) => s2.has(item));
console.log(result);

// 差集（非公共数据）
const result2 = [...new Set([...arr1, ...arr2])].filter((item) => {
  return (
    (arr1.includes(item) && !arr2.includes(item)) ||
    (!arr1.includes(item) && arr2.includes(item))
  );
});
console.log(result2); */
