const sequelize = require("./db.js");
const { DataTypes } = require("sequelize");

// 定义模型（首字母大写）
const Admin = sequelize.define(
    "Admin",
    {
        // 不需要配置id，会自动生成

        loginId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        loginPwd: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    // { tableName: "admin" }
);

/* Admin.sync({ alter: true }).then(() => {
    console.log("Admin表同步成功");
}); */

module.exports = Admin;
