const sequlize = require("./db.js");
const { DataTypes } = require("sequelize");
const Student = require("./student.js");

const Classroom = sequlize.define(
    "Classroom",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        openDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        paranoid: true
    }
);

module.exports = Classroom;
