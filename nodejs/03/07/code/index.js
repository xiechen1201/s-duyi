/* require("./modules/ralation");
require("./modules/sync");
require("./mock/index"); */

// 查询
const {
    login,
    getAdminById,
    getAllAdmins
} = require("./services/admin-service-2");
const {
    getStudentByPage,
    getStudentById
} = require("./services/student-service");

// login("admin", "admin").then((res) => {
//     console.log(res.dataValues);
// });

// getAdminById("2").then((res) => {
//     console.log(res.dataValues);
// });

// getAllAdmins().then((res) => {
//     console.log(res);
// });

// getStudentByPage(1, 10, null, "马").then((res) => {
//     console.log(JSON.stringify(res, null, 4));
// });

// getStudentByPage(1, 20).then((res) => {
//     console.log(JSON.stringify(res, null, 4));
// });

getStudentById(6).then((res) => {
    console.log(JSON.stringify(res, null, 4));
});
