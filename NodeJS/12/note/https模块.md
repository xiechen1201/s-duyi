# https 模块

## 服务器结构

本章内容：浏览器请求 node 服务器，node 监听 443 端口

实际的工作：浏览器请求 nginx 服务器，nginx 使用 https 协议

> nginx 请求转发不会被第三方所截取，因为这是在服务区内部完成的。

## 证书准备

方式一：网上购买权威机构的证书

- 例如在阿里云

方式二：本地产生证书

- 安装 openssl

- 生成 CA 私钥

    - `openssl genrsa -des3 -out ca-pri-key.pem 1024`

    - 生成一个密钥对，使用 genrsa 算法生成一个私钥，在使用 des3 进行对称加密，例如我使用的密码是 123123，这个时候 code 目录下就生成一个 .pem 的文件，是一个私钥文件

- 生成公钥（证书请求）

    - `openssl req -new -key ca-pri-key.pem -out ca-pub-key.pem`

    - 生成公钥文件

- 生成 CA 证书

    - `openssl x509 -req -in ca-pub-key.pem -signkey ca-pri-key.pem -out ca-cert.crt`

    - 生成 .crt 文件

- 生成服务器的私钥

    - `openssl genrsa -out server-key.pem 1024`

- 生成服务器的公钥

    - `openssl req -new -key server-key.pem -out server-scr.pem`

- 生成服务器证书

    - `openssl x509 -req -CA ca-cert.crt -CAkey ca-pri-key.pem -CAcreateserial -in server-scr.pem -out server-cert.crt`

## https 模块