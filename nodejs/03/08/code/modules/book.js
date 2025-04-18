const sequlize = require("./db.js");
const { DataTypes } = require("sequelize");

module.exports = sequlize.define(
    "Book",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        publishDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        paranoid: true
    }
);
