// 同步所有模型
require("./Admin.js");
require("./Classroom.js");
require("./Book.js");
require("./Student.js");
const sequelize = require("./db.js");

sequelize.sync({ alter: true }).then(() => {
    console.log("所有模型同步成功");
});