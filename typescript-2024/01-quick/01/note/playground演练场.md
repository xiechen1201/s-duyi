# playground 演练场

TS 是一个编译时的强类型的静态语言。

为什么需要编译？因为浏览器只认识 JS，TS 是给开发人员用的。

node 和浏览器并不能识别 TS 代码，所以需要编译成 JS 代码。

在编译为 JS 代码之前，TS 会进行静态类型检查，如果发现类型错误，编译会失败。

静态类型：类型是在编写代码的时候指定的，而不是在运行时确定的。这样才能更好的捕获类型错误。

强类型：拥有更加严格的类型检查。

JS 的类型：String、Number、Boolean、Undefined、Null、Symbol、BigInt、Object

详见 ../code/index.ts