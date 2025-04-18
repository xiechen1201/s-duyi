// 同步所有模型
require("./admin.js");
require("./classroom.js");
require("./book.js");
require("./student.js");
const sequelize = require("./db.js");

sequelize.sync({ alter: true }).then(() => {
    console.log("所有模型同步成功");
});