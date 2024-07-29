# 5、ESModule 模块化

## 简介

ECMA 组织查考了众多社区的模块化标准，终于在 2015 年，ES6 发布了官方的模块化标准

ES6 模块化的特点：

1、使用依赖「预声明」的方式导入模块

和 require() 不一样，它是依赖延迟声明

优点：某些时候可以提高效率

缺点：无法在一开始就确定模块的依赖关系（相对比较模糊）

```js
if (true) {
  require("a.js");
} else {
  require("b.js");
}
```

依赖预声明

优点：一开始的时候就可以确认模块的依赖关系

缺点：某些时候效率比较低

ES6 模块化是「依赖预声明」

2、灵活的多种导入导出的方式

3、规范的路径表示发，以 ./ 或者 ../ 开头

## 基本的导入导出

在 script 上使用 type="module" 表示一个 ES6 模块文件，模块内的代码不会污染全局变量

```html
<script type="module" src="./index.js"></script>
<script>
  // a is not defined
  console.log(a);
</script>
```

1、基本的导入导出

基本导出可以有多个，导出必须有名称

```js
export 声明表达式;
// 或者
export {
    具名符号（具有名称的数据）;
}
```

由于 ESModule 使用的是预依赖加载，所以，导入任何模块都必须放在所有代码之前

```js
import { name, sayName, age } from "./base-module.js";
```

{} 也不是对象，但是可以理解为对象，也不是结构。

不会形成 script 标签！

当所有的依赖关系都导入完成后才会执行代码。

如果把把 import 放在下面，浏览器预编译阶段会把 import 提示到顶部

```js
console.log(name, sayName, age);
import { name, sayName, age } from "./base-module.js";
```

更不能把 import 放在逻辑判断中。因为 impoer 是预模块加载。

细节：

1、导入的时候使用 as 对模块进行重命名

```js
import { name as myName, sayName, age as myAge } from "./base-module.js";
```

2、导入的时候符合的是常量，不可进行更改

```js
import { name } from "./base-module.js";

// 错误🙅
name = "hello";
```

3、使用 \* 表示导入所有的基本导出，形成一个对象，然后使用 as 重命名

```js
import * as baseModule from "./base-module.js";
console.log(baseModule.name);
console.log(baseModule.sayName);
console.log(baseModule.age);
```

也存在缓存机制，多次引入同一个模块，模块内代码之后执行一次

如果不想导入任何内容，只想让模块执行

```js
import "./module.js";
```

仅运行模块代码，不使用任何导出的内容

## 默认导入导出

除了基本导出，还可以默认导出，可以同时存在

类似 module.exports，由于只有一个默认导出，所以不需要设置名称

```js
export default 默认导出的数据;

// 或者

export { 默认导出的数据 as default }
```

默认导出只能存在一个！基本导出可以多个

默认导入：

```js
import 变量名称 from "模块路径";
```

类似

```js
let name = require("./module.js");
```

```js
// 把 module 默认导出的内容，复制给 data 常量
import data from "./module.js";
```

如果一个模块同时存在基本导出和默认导出：

```js
export var a = 1;
export default 10;
```

```js
import { a } from "module.js";

// 或者

import module from "module.js";

// 或者

import * as module from "module.js";
console.log(module.a);
console.log(module.default);

// 或者

import module, { a } from "module.js";
```

`*` 会把所有基本导出和默认导出聚合到一个对象中，默认导出会作为 default 属性

## ES6 模块化的细节

1、导出的值尽量不要变化，使用 const 定义常量

```js
export var name = "123";

export default function () {
  name = "456";
}
```

```js
import changeName, { name } from "./module.js";

console.log(name); // 123
changeName();
console.log(name); // 456
```

2、可以使用无绑定的导入用于执行一些初始化代码

```js
import "./module.js";
```

3、使用绑定再导出，来重新导出来着另一个模块的内容

```js
export { 绑定的标识符 } from "模块路径";
```
