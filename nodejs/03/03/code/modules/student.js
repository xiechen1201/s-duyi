const sequlize = require("./db.js");
const { DataTypes } = require("sequelize");

module.exports = sequlize.define(
    "Student",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false
        },
        sex: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        mobile: {
            type: DataTypes.STRING(11),
            allowNull: false
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        paranoid: true
    }
);
