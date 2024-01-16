/* function take(arr: any[], n: number): any[] {
  if (n > arr.length) {
    return arr;
  }

  const newArr: any = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
const result = take([1, 3, 4, 6], 2);
const result1 = take(["a", "v", "c", "o"], 2);

result1.forEach((item) => item.toUpperCase());

console.log(result);
console.log(result1); */

// ====

/* function take<T>(arr: T[], n: number): T[] {
  if (n > arr.length) {
    return arr;
  }

  const newArr: any = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
const result = take<number>([1, 3, 4, 6], 2);
const result1 = take<string>(["a", "v", "c", "o"], 2);

result1.forEach((item) => item.toLocaleUpperCase());

console.log(result);
console.log(result1); */

/* function take<T>(arr: T[], n: number): T[] {
    if (n > arr.length) {
      return arr;
    }
  
    const newArr: any = [];
    for (let i = 0; i < n; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  const result = take([1, 3, 4, 6], 2);
  const result1 = take(["a", "v", "c", "o"], 2);
  
  result1.forEach((item) => item.toLocaleUpperCase());
  
  console.log(result);
  console.log(result1); */

// =====

/* function take<T>(arr: T[], n: number): T[] {
  if (n > arr.length) {
    return arr;
  }

  const newArr: any = [];
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
const result = take([1, 3, 4, 6], 2);
const result1 = take(["a", "v", "c", "o"], 2);

result1.forEach((item) => item.toLocaleUpperCase());

console.log(result);
console.log(result1); */

// ====

/* type callback<T> = (n: T, i: number) => boolean;

function filter<T>(arr: T[], callback: callback<T>): T[] {
  const newArr: T[] = [];

  arr.forEach((item, index) => {
    if (callback(item, index)) {
      newArr.push(item);
    }
  });
  return newArr;
}
console.log(filter(["a", "s", "r", "t"], (item) => item.length >= 1));
console.log(filter([1, 2, 3, 4, 5, 6, 7], (item) => item % 2 === 1)); */

// ====

/* interface callback<T> {
  (n: T, i: number): boolean;
}

function filter<T>(arr: T[], callback: callback<T>): T[] {
  const newArr: T[] = [];

  arr.forEach((item, index) => {
    if (callback(item, index)) {
      newArr.push(item);
    }
  });
  return newArr;
}
console.log(filter(["a", "s", "r", "t"], (item) => item.length >= 1));
console.log(filter([1, 2, 3, 4, 5, 6, 7], (item) => item % 2 === 1)); */

// ====

/* export class ArrayHelper<T> {
  arr: T[];

  constructor(arr: T[]) {
    this.arr = arr;
  }

  take(n: number): T[] {
    if (n >= this.arr.length) {
      return this.arr;
    }

    const newArr: T[] = [];
    for (let i = 0; i < this.arr.length; i++) {
      newArr.push(this.arr[i]);
    }
    return newArr;
  }

  shuffle(): T[] {
    return this.arr.sort(() => Math.random() - 0.5);
  }
}

const helper = new ArrayHelper<number>([1, 2, 3, 4, 5, 6, 7]).take(3);
console.log(helper); */

// ====

/* // 将某个对象的 name 属性的每个单词的首字母进行大写，然后将该对象返回
function nameToUpperCase<T>(obj: T): T {
  obj.name // ❌类型“T”上不存在属性“name”
}

const o = {
  name: "kevin yuan",
  age: 22,
  gender: "男"
};
console.log(nameToUpperCase(o)); // Kevin Yuan */

// =====

/* interface hasNameProperty {
  name: string;
}

// 继承接口，表示 T 至少拥有接口内的 name 属性
function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
  obj.name = obj.name
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
  return obj;
}

const o = {
  name: "kevin yuan",
  age: 22,
  gender: "男"
};
console.log(nameToUpperCase(o)); // Kevin Yuan */

// =====

// 将两个数组进行混合 [1, 3, 4] + ["a", "b", "c"] = [1, "a", 3, "b", 4, "c"]
function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
  if (arr1.length != arr2.length) {
    throw new Error("arr1 and arr2 must have the same length!");
  }

  const newArr: (T | K)[] = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }

  return newArr;
}

let result = mixinArray([1, 2, 3], ["a", "b", "c"]);
console.log(result);
