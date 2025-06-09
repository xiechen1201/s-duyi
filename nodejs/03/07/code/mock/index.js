// 使用 Mock
var Mock = require("mockjs");
const Classroom = require("../modules/classroom");
const Student = require("../modules/student");

// Mock 示例
/* var data = Mock.mock({
    "name|2": "abc",
    "number|1-100": 100
}); */

function createClassroomDataInsertDB() {
    var data = Mock.mock({
        "datas|16": [
            {
                "id|+1": 1,
                name: "前端第 @id 期",
                openDate: "@date"
            }
        ]
    }).datas;

    Classroom.bulkCreate(data).then(() => {
        console.log("插入成功");
    });
}

function createStudentDataInsertDB() {
    var data = Mock.mock({
        "datas|500-700": [
            {
                "id|+1": 1,
                name: "@cname",
                birthday: "@date",
                "sex|1-2": true,
                "mobile": /1\d{10}/,
                "ClassroomId|1-16": 1
            }
        ]
    }).datas;

    Student.bulkCreate(data).then(() => {
        console.log("插入成功");
    });
}

// createClassroomDataInsertDB();
// createStudentDataInsertDB();
