# MySQL驱动程序

## 什么是驱动程序？

1、连接内存和其他存储介质的桥梁

2、MySQL 驱动程序是连接内存数据和 MySQL 数据库的桥梁

Node 通常使用：

- mysql

- mysql2（推荐）

    - 优化好，运行效率高

    - https://sidorares.github.io/node-mysql2/zh-CN/docs

## 使用

详见 ../code/index.js

## 防止 SQL 注入

[图片]

mysql2 默认不能运行多条 SQL 语句。

先查询，然后删除数据。

总结：用户通过输入 SQL 语句到最终查询中，导致整个 SQL 与预期行为不符。

如何避免？

1、不实用字符串拼接的方式，而是使用变量，变量的内容不作为任何 SQL 关键字。

运行的事 execute() 方法，而不是 query() 方法。

```js
// 查询数据
try {
    const [results, fields] = await connection.execute("SELECT * FROM `company` WHERE `id` = ?", [1]);
    console.log(results);
} catch (err) {
    console.log(err);
}
```

详见 ../code/index2.js

使用 ? 进行占位，后面的数组按照 ? 的顺序进行填充。

## 连接池

一次用户的请求太多，驱动和数据库开启了太多的连接，导致数据库连接数过多，连接池可以解决这个问题。

连接池如果不释放就会导致问题。

想象为一个数组，里面存放了很多连接，帮我们进行管理。

数组有个最大长度，进行排队，空闲了才会分配，避免资源占占用，绝大多数应该使用连接池，而不是使用连接。

详见 ../code/index3.js