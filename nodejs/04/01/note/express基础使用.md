# express 基础使用

## http 模块的问题

-   根据不同的请求路径、方法，做不同的事情，处理起来比较麻烦

-   读取请求体、写入响应体是通过流的方式，比较麻烦

因此，通常使用的是第三方库来处理请求：

-   express

    -   生态好

-   koa

    -   API 更加友好

```js
const express = require("express");
const app = express();

// 配置一个请求映射
app.get("/", (req, res) => {
    // req 和 res 是被 express 封装过后的对象
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
```
