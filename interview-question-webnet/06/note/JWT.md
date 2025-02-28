# JWT

回顾登录 Cookie 的流程。

Cookie 到底传啥呢？有的公司传递的可能是用户的 ID。

或者一个自定义的对象，set-cookie: token={'userName': '张三', 'userId': 1, max-age: 10000}

问题：

- 非浏览器如何设置令牌的过期时间（例如小程序、APP 客户端）？

- 如何防止令牌被篡改？

JWT 就是为了解决这个问题出现的，为了统一的、安全的令牌格式。

目的是为了得到一个不能被篡改的令牌。

是用什么方式进行传输都可以，开发人员自己协商。

客户端拿到 JWT Token 后可以存储在任何的地方，下次请求的时候带过去就行了，一般是放在请求头中。

一般来说，JWT 是放在响应体中，而不是 set-cookie 中。

下次请求的时候：

```http
GET /api/user/info HTTP/1.1
Authorization: Bearer <token>
```

## JWT 组成

- header：记录 JWT 的类型和加密算法；

- payload：记录保存的主体信息；

- signature：签名，用于校验 JWT 的完整性。

整体：header.payload.signature

例如：eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaWNlbnNlIjoibWFkZSBieSB3YW5neSIsInJhbmRvbS0iOjE3Mzk3NzUzNjM3NzIsInVzZXJfbmFtZSI6IjE2ODkyMTY3OTg0Iiwic2NvcGUiOlsic2VydmVyIl0sImV4cCI6MTczOTg2MTc2MywidXNlcklkIjo1NDAwMDQsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiIsIkNSTV9TTkFJTF9BRE1JTiJdLCJqdGkiOiJjOTg0ZDk2My1iNmMzLTRmZjMtOWRlMC0zYTFlODQwY2M4MjMiLCJjbGllbnRfaWQiOiJwaWcifQ.98E4Ocs35tdw12G9BV3JkoGiiRht3BxIrLmQ5ewYh30

### header

就是一个 JSON 对象

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

- alg 记录的是 signature 使用的加密算法；

对 JSON 对象进行 base64 编码。

> Base64 编码是一种将二进制(任何)数据转换为文本格式的方法，它使用 64 个字符来表示所有可能的字节值(0-9,a-z,+,/)。

JS 也可以直接操作：

```js
const encodedData = window.btoa("Hello, world"); // 编码字符串
const decodedData = window.atob(encodedData); // 解码字符串
```

```js
atob('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
'{"alg":"HS256","typ":"JWT"}'
```

### payload

JWT 的主体信息，仍然是一个 JSON 对象.

继续进行 Base64 编码。

```js
atob('eyJsaWNlbnNlIjoibWFkZSBieSB3YW5neSIsInJhbmRvbS0iOjE3Mzk3NzUzNjM3NzIsInVzZXJfbmFtZSI6IjE2ODkyMTY3OTg0Iiwic2NvcGUiOlsic2VydmVyIl0sImV4cCI6MTczOTg2MTc2MywidXNlcklkIjo1NDAwMDQsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiIsIkNSTV9TTkFJTF9BRE1JTiJdLCJqdGkiOiJjOTg0ZDk2My1iNmMzLTRmZjMtOWRlMC0zYTFlODQwY2M4MjMiLCJjbGllbnRfaWQiOiJwaWcifQ')

// '{"license":"made by wangy","random-":1739775363772,"user_name":"16892167984","scope":["server"],"exp":1739861763,"userId":540004,"authorities":["ROLE_USER","CRM_SNAIL_ADMIN"],"jti":"c984d963-b6c3-4ff3-9de0-3a1e840cc823","client_id":"pig"}'
```

### signature

将 header 和 payload 进行拼接，然后使用 alg 指定的算法进行加密。

加密的密钥之存放于服务端。

得到一个加密的结果，所以 signature 就是一个加密的字符串。

可以防止被篡改。

服务端收到这个 JWT 后，将内容进行拆分，然后加密对比，查看是否一致，可以有效的防止 JWT 被篡改。