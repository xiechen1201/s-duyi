// 导入模块
import mysql from "mysql2/promise";

// 创建一个数据库连接
const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "00000000",
    database: "yuanLaoShiTestDB"
});

// 查询数据
try {
    // const [results, fields] = await connection.execute("SELECT * FROM `company` WHERE `id` = ?", [1]);
    // 模糊查询不能再使用?
    // const [results, fields] = await connection.execute("SELECT * FROM `employee` WHERE `name` LIKE ?", ["%袁%"]);
    const [results, fields] = await connection.execute( "SELECT * FROM `employee` WHERE `name` LIKE CONCAT('%', ?, '%')", ["袁"]);
    console.log(results);
} catch (err) {
    console.log(err);
}

// 断开数据库连接
connection.end();
