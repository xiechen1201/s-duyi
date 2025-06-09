const { addAdmin, login } = require("./services/admin-service");

/* addAdmin({
    loginId: "admin",
    loginPwd: "admin",
    name: "超级管理员"
}); */

login("admin", "admin").then((res) => {
    console.log("Login success! Welcome " + res.loginId + "!");
});