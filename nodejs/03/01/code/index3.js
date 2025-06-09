// 导入模块
import mysql from "mysql2/promise";

// 创建连接池，设置连接池的参数
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "00000000",
    database: "yuanLaoShiTestDB",
    waitForConnections: true, // 等待空闲的连接
    connectionLimit: 10, // 
    maxIdle: 10, // 最大空闲连接数，默认等于 `connectionLimit`
    idleTimeout: 60000, // 空闲连接超时，以毫秒为单位，默认值为 60000 ms
    queueLimit: 0, // 连接不够用，队列中的最大等待连接数，默认值为 0，表示不限制
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});
