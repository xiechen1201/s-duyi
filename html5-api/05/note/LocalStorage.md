# LocalStorage

存到 cookie 有一个缺点，每次请求都会把 cookie 发送给服务端。

所以出现了 localStorange，仅用于前端的数据存储。

localStorange 只能存储字符串，如果存储的是数组会调用 .toString() 方法。

和 localStorange 类似于的有一个 seesionStorange, 不过 sessionStorange 仅在浏览器会话期间有效（窗口关闭的时候）。

localStorange 存储的数据是永久性的，无论窗口是否被关闭，除非手动删除。