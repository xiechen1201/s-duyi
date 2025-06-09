const mysql = require("mysql2/promise");
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "00000000",
    database: "yuanLaoShiTestDB"
});

// 登录
function login(username, password) {
    return pool.query(
        "SELECT * FROM `user` WHERE `loginId` = ? AND `loginPwd` = ?",
        [username, password]
    );
}

function getAllEmployee() {
    return pool.query("SELECT * FROM `employee`");
}

module.exports = {
    login,
    getAllEmployee
};
