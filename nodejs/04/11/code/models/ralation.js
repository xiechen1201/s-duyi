// 设置模型关系
const Classroom = require("./classroom");
const Student = require("./student");

Classroom.hasMany(Student);
Student.belongsTo(Classroom);