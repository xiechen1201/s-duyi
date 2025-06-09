# HTTP 缓存

客户端请求服务器，服务器返回响应头。

```http
http/1.1 200 OK
Cache-Control: max-age=3600
RTag: 123456789
Date: Fri, 01 Jan 2010 12:40:00 GMT
Last-Modified: Fri, 01 Jan 2010 02:10:00 GMT
```

[](http://mdrs.yuanjin.tech/img/image-20200430210430455.png)

## 客户端缓存指令

带缓存的请求在狭义上被称为协商缓存。

### 缓存无效

进行协商缓存。

- 文件变化，缓存无效

- 无变化，缓存有效

    - 304，不包含响应体，使用本地缓存，更新缓存时间

## 细节

cache-control 的其他值：

- public

- private

- no-cache

- no-store

- max-age

expires:

- 

记录缓存的有效期：

- 

Pragma:

- 和 no-cache 相同 

Vary:

- 使用 Cookie 为例，不一样使用 Cookie

使用版本号或 hash：

- 