# AJAX

AJAX 是浏览器赋予 JS 的一套 API，通过该 API 让 JS 具有网络通信的能力。

## 历史

浏览器本身具有网络通信的能力，但是没有开放给 JS。

最早的时候是微软在 IE 中把网络通信的能力开放给 JS，让 JS 在代码中可以实现网络请求，并命名为 AJAX(Asynchronous JavaScript and XML)。

在 IE 中主要是用一个构造函数来完成的 HMLHttpRequest，简称为 XHR，也称为 XHR API。

因为 XHR 有很多的缺陷，在 H5 和 ES6 发布之后，出现了一个新的 API 叫 Fetch API。

无论是 xhr 还是 fetch 都是实现 AJAX 的技术手段，只是 api 不同。

## XHR API

AJAX 为什么是异步的？

如果网络不响应，那么后续的操作都无法进行，所以等待网络的响应。

JS 是一个异步的语言，不用等网络的响应，可以继续执行后续的代码。等什么时候可以执行了再回头执行。

```js
// 创建 xhr 对象，用来发送网络请求
var xhr = new XMLHttpRequest();

// 监听网络请求的状态，当请求状态发生变化时触发
xhr.onload = function () {};
xhr.onreadystatechange = function () {
    // xhr.readyState 请求状态
    //      0 请求未初始化
    //      1 服务器连接已建立，调用 open 方法后
    //      2 请求已接收，调用 send 方法后
    //      3 请求处理中，正在接收响应消息体
    //      4 请求已完成，且响应已就绪
    // xhr.status 响应状态码
    //      200 请求成功
    //      404 请求失败，未找到请求的资源
    //      500 服务器错误
    // xhr.responseText 响应体，纯文本格式
    // xhr.responseXML 响应体，XML 格式
    // xhr.getResponseHeader('Content-Type') 获取响应头
    // xhr.getAllResponseHeaders() 获取所有响应头
};

// 设置请求的方法和 URL
xhr.open('GET', 'https://study.duyiedu.com/api/herolist');
// 设置请求的头部
xhr.setRequestHeader('Content-Type', 'application/json');
// 设置请求体，并发送请求
// 没有请求体传入一个 null
xhr.send(null);
```

## fetch

```js
// 发送 POST 请求
// 返回一个 Promise
// 当接收到服务器返回的「响应头」之后便会把状态进行落定为解决
fetch('https://study.duyiedu.com/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: 'admin',
        password: 'admin'
    })
})
    .then(function (response) {
        console.log(response);
        // 当接收到服务器返回的「响应体」之后便会把状态进行落定为解决
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
```
