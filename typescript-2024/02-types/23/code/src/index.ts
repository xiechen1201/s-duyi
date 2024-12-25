/* 
    satisfies 主要是用来做类型检查的
    是 TS4.9 新增的一个类型运算符
    和类型断言 as 功能比较类似，但是比类型断言更加的安全和更加的智能
    因为他能够在满足类型安全的前提下，自动帮我们做类型缩小和类型提示
*/

/* interface IConfig {
    a: string | number;
}
const elgacy: IConfig = {}; // ❌ 类型 "{}" 中缺少属性 "a"，但类型 "IConfig" 中需要该属性
console.log(elgacy.a); // ✅ 可以正常提示 */

/* interface IConfig {
    a: string | number;
}
const elgacyAs = {} as IConfig; // ✅ 可以正常提示
console.log(elgacyAs.a); // ✅ 可以正常提示 */

// 如果类型不安全，通过 satisfies 转换会提示错误
// 访问 .a 属性的时候也会报错
/* interface IConfig {
    a: string | number;
}
const elgacyAs = {} satisfies IConfig; // ❌ 类型 "{}" 中缺少属性 "a"，但类型 "IConfig" 中需要该属性
console.log(elgacyAs.a); // ❌ 不可以正常提示 */

/* 
    更加智能
*/

/* interface IConfig {
    a: string | number;
}

const currentWithValue: IConfig = { a: 2 };
currentWithValue.a.toFixed(); // ❌ 类型“string”上不存在属性“toFixed”

// 🤔 const currentWithValue2: IConfig
const currentWithValue2 = { a: 2 } as IConfig;
currentWithValue2.a.toFixed(); // ❌ 类型“string”上不存在属性“toFixed”

// 🤔 const currentWithValue3: { a: number; }
const currentWithValue3 = { a: 2 } satisfies IConfig;
currentWithValue3.a.toFixed(); // ✅ 可以正常提示 */

/* 
    类型提示
*/

type MyElement = {
    tagName: string;
    src: string;
    [key: string]: any;
};

/* const element: MyElement = {
    tagName: "img",
    src: "https://www.baidu.com",
    alt: "Example Image",
    width: 100,
    height: 100
};
console.log(element.alt); // 没有类型提示 */

/* const element = {
    tagName: "img",
    src: "https://www.baidu.com",
    alt: "Example Image",
    width: 100,
    height: 100
} as MyElement;
console.log(element.alt); // 没有类型提示 */

const element = {
    tagName: "img",
    src: "https://www.baidu.com",
    alt: "Example Image",
    width: 100,
    height: 100
} satisfies MyElement;
console.log(element.alt); // 有类型提示