/* 
    之前的泛型只有一个，多泛型就是有多个泛型的占位
*/

// 创建一个通用的交换函数，它接受一个包含两个元素的数组，并返回元素交换位置后的数组
// [2, 3] => [3, 2]
// [string, number] => [number, string]

/* function swap<T, U>(arr: [T, U]): [U, T] {
    return [arr[1], arr[0]];
}
const res1 = swap([2, 3]);
const res2 = swap(["a", 3]);
const res3 = swap([{ name: "Jak", age: 18 }, 3]); */

// 案例
// 数组的 map 方法就适合使用多泛型

type Callback<T, U> = (item: T, index?: number) => U;
type MapFn<T, U> = (arr: T[], callback: Callback<T, U>) => U[];

const map: MapFn<number, string> = (array, callback) => {
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const result = callback(element);
        newArray.push(result);
    }
    return newArray;
};

const res = map([1, 2, 3], (item) => `<div>${item}</div>`);
console.log(res);
