const Admin = require("../models/Admin");
const md5 = require("md5");

// 登录
function login(loginId, loginPwd) {
    return Admin.findOne({
        where: {
            loginId,
            loginPwd: md5(loginPwd)
        }
    }).then((res) => {
        if (res && res.loginId === loginId && res.loginPwd === md5(loginPwd)) {
            return res;
        } else {
            return null;
        }
    });
}

module.exports = {
    login
};
