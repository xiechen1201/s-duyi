// require("./modules/sync");

const { addAdmin, delAdmin, updateAdmin } = require("./services/admin-service");

/* addAdmin({
    loginId: "admin3",
    loginPwd: "admin3",
    name: "超级管理员3"
}); */

/* delAdmin(4); */

updateAdmin(2, { loginId: "admin2" });
