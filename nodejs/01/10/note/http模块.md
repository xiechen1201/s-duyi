# http 模块

## http 模块是建立在 net 模块之上的

-   无需手动管理 socket

-   无需手动组装消息格式

## http 发送请求

`http.request(url[, options][, callback])`

参数：

- url 地址

- options 可选配置

    - method

    - headers

- callback 回调函数

    - 参数 IncomingMessage 对象


回调函数内可以拿到响应的状态码和响应头信息，但是拿不到响应体的内容！因为服务返回的内容可能会很大，所以不提供获取响应体的属性，需要使用流读取的方式。

> 详见 index.js 文件

## http 创建服务

`http.createServer([options][, requestListener])`

- options 可选配置

- 监听函数

    - request 请求对象（IncomingMessage）

    - response 响应对象（ServerResponse）

> 详见 index.js 文件

## 案例：静态文件服务器