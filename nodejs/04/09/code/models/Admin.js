const sequelize = require("./db.js");
const { DataTypes } = require("sequelize");

const Admin = sequelize.define(
    "Admin",
    {
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
    },
    // {
    //     paranoid: true
    // }
    // { tableName: "admin" }
);

/* Admin.sync({ alter: true }).then(() => {
    console.log("Admin表同步成功");
}); */

module.exports = Admin;
