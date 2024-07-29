# 01 Fetach 的概述

Fetch 并不是 ES6 的新增而是使用了 ES6 的 Promise API。

Fetach 就是用来进行 Ajax 请求的。

## HMLHttpRequest 的问题

1、使用繁琐，所有的功能全部集中在同一个对象上，容易写出混乱不易维护的代码。

2、采用传统的事件驱动模式，无法适配新的 Promise API。

## Fetch 的特点

1、并非取代 HMLHttpRequest，而是对 AJAX 传统 API 的优化。

2、精细的功能分割：头部信息、请求信息、响应信息等分不到不同的对象中去，更利于处理各种复杂的 Ajax 场景。

3、使用 Promise API，更利于异步代码的书写。

4、Fetch API 并非 ES6 的内容，属于 HTML5 新增的 WebAPI。

5、需要掌握网络通信的知识。