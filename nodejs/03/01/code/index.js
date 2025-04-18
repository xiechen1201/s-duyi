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
    const [results, fields] = await connection.query("SELECT * FROM `company`");
    console.log(results); // 结果集
    console.log(fields); // 额外的元数据（如果有的话）
} catch (err) {
    console.log(err);
}

/* // 增加数据
try {
    const result = await connection.query(
        "INSERT INTO `company` (`name`,`location`,`buildDate`) VALUES ('abc','这是一个测试地址',curdate())"
    );
    console.log(result);
} catch (error) {
    console.log(err);
} 

// 修改数据
try {
    const result = await connection.query(
        "UPDATE `company` SET `name`='bcd' WHERE `id`=4"
    );
    console.log(result);
} catch (error) {
    console.log(err);
} 

// 删除数据
try {
    const result = await connection.query(
        "DELETE FROM `company` WHERE `id`=4"
    );
    console.log(result);
} catch (error) {
    console.log(err);
} */

/* // 使用占位符
try {
  const [results] = await connection.query(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    ['Page', 45]
  );

  console.log(results);
} catch (err) {
  console.log(err);
} */

// 断开数据库连接
connection.end();
