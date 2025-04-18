const Admin = require("../modules/admin");

exports.login = function (loginId, loginPwd) {
    return Admin.findOne({
        where: {
            loginId,
            loginPwd
        }
    }).then((res) => {
        if (res && res.loginId === loginId && res.loginPwd === loginPwd) {
            return res;
        } else {
            return null;
        }
    });
};

exports.getAdminById = function (id) {
    return Admin.findByPk(id);
};

exports.getAllAdmins = function () {
    return Admin.findAll();
}