const { Sequelize } = require("sequelize");

// 新建对象，传入配置
const sequelize = new Sequelize("orm_myschool_db_2", "root", "00000000", {
    host: "localhost", // 服务地址
    dialect: "mysql", // 数据库的类型
    // logging: false, // 是否打印日志
});

module.exports = sequelize;