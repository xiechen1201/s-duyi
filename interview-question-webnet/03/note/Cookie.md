# Cookie

## 一个问题

HTTP 是无状态的，所以需要一个标记来标识用户，这个标记就是 Cookie。

登录成功 => 返回 Token => 存储在 Cookie 中 ==> 每次请求都携带 Token

LocalStrorage 是 HTML5 才带来的。

Cookie 的特征：

-   可以存放多个

-   可以设置过期时间

-   可以自动携带

-   设置域名

## Cookies 的组成

-   键

-   值

-   domain 域名

-   path 路径

-   expires 过期时间

-   secure 安全传输

发起一个 HTTP 请求的时候先去本地读取一下 Cookie，将符合条件的 Cookie 携带在请求头中。

-   是否过期

-   域名是否匹配

-   路径是否匹配

    -   / 可以匹配所有路径

-   验证是否安全传输

    -   必须是 HTTPS 传输

至于服务端拿到 Cookie 要干啥，客户端不关心。

## 如何设置 Cookies

1、服务器响应

2、用户设置

### 服务器响应

```http
set-cookie: cookie1
set-cookie: cookie2
set-cookie: cookie3
```

具体格式：

```
键=值; path=?; domain=?; expire=?; max-age=?; secure; httponly
```

只有键值对是必须的，其他都可以有默认值。

-   path 默认当前页面的路径；

-   domain 默认当前域名；

-   过期时间

    -   expire

        -   绝对过期时间，使用的是 CMT 时间

    -   max-age 默认浏览器关闭

        -   相对过期时间，单位是秒

    -   expire 和 max-age 只能选一个。如果两个都没有设置，表示 Cookie 没有过期时间，会在浏览器关闭的时候过期；

-   secure 只能在 HTTPS 的协议协议；

-   httponly 只能用于 HTTP 请求中，不能使用 JS 进行获取；

删除 Cookie？

服务器设置 Cookie 的过期时间为过去的时间。

```
set-cookie: cookie1=1; max-age=-1
```

### 用户设置

使用 JS

```JS
document.cookie = 'cookie1=1; domain=.baidu.com; path=/; max-age=10; secure'
```

删除 Cookie：

```JS
document.cookie = 'cookie1=1; max-age=-1';
```

读取 Cookie：

```JS
// 返回能读取到的所有 Cookie
document.cookie;
```