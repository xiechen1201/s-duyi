/* 
    基本类型：
    string number boolean null undefined symbol bigint object
*/

/* let str: string = 'Hello World'; */

// any 类型可以赋值任何类型
/* let a: any = 'Hello World';
a = 123; */

/* 
    any 是兜底类型，某些时候不太好处理数据的类型，就可以使用 any，any 类型不能乱用
    使用 any 类型后，没有了类型检查，失去了 ts 的优势，没有方法提示
*/

// 字面量类型

// b 的类型就只能是 const b: "abc" 类型，不能赋值为其他类型
/* let b:'abc'
b = '456'; // ❌不能将类型“"456"”分配给类型“"abc"” */

// 联合类型

/* 
    类型可能不只一个类型，可以使用联合类型
*/

/* let v1:string | number = 123;
v1 = 'Hello World';
v1 = true; // ❌不能将类型“boolean”分配给类型“string | number” */

// 字面量类型 + 联合类型来限制赋值范围
// 从类型就认定是安全的

/* let sex: '男' | '女' = '男';
sex = '女';
sex = '未知'; // ❌不能将类型“"未知"”分配给类型“"男" | "女"” */

// 数组类型
// 有两种表示方式：类型[] Array<泛型>

/* let arr1: number[] = [1, 2, 3, 4, 5];
arr1.push('6'); // ❌类型“string”的参数不能赋给类型“number”的参数

let arr2: Array<number> = [1, 2, 3, 4, 5];
arr2.push('6'); // ❌类型“string”的参数不能赋给类型“number”的参数 */

// 空数组赋值，在 strict 严格检查下，默认是 any 类型
// 推断为 let arr3: any[] 的类型
/* let arr3 = [];
arr3.push('Hello World');
arr3.push(1, 2, 3);
 */

// 数组也能使用联合类型
/* let arr4: (number | string)[] = [1, '2', 3, '4', 5];
arr4.push('6');
arr4.push(7);
arr4.push(true); // ❌类型“boolean”分配给类型“string | number”

let arr5: Array<number | string> = [1, '2', 3, '4', 5];
arr5.push('6');
arr5.push(7); */

// 注意和下面的写法进行区分
// 要么全是 number 类型，要么全是 string 类型
/* const arr8:string[] | number[] = [1, '2', 3, '4', 5]; */

// 元组类型
// 把数组中每一个值类型和长度都确定下来，规定的更加严格
/* let arr6: [number, string] = [1, '2']; */

// 使用场景：坐标
// 更加严格的限制了数组的长度和类型
/* let position: [number, number] = [39.5436, 117.215]; */

// 一个容易混淆的赋值情况，某些时候不知道有什么类型，但是想赋值为一个数组
// 如果这么写就会认为是一个元祖类型，也就是一个空的元祖
let tuple3: [] = [];
tuple3.push(1); // ❌类型“number”的参数不能赋给类型“never”的参数

// 要和如下的形式进行区分
let values = [];
