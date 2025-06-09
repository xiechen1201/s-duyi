const Admin = require("../modules/admin");
const md5 = require("md5");

exports.addAdmin = async function (adminObj) {
    // 业务逻辑xxx，例如判断是否存在，是否符合要求
    adminObj.loginPwd = md5(adminObj.loginPwd);
    const instance = await Admin.create(adminObj);
    return instance.toJSON();
};

exports.delAdmin = async function (adminId) {
    // 业务逻辑xxx，例如判断是否剩下一个管理员
    // 方式一:使用实例直接删除
    // const instance = await Admin.findByPk(adminId);
    // instance && (await instance.destroy());

    // 方式二：
    await Admin.destroy({
        where: {
            id: adminId
        }
    });
};

exports.updateAdmin = async function (adminId, adminObj) {
    if (adminObj.loginPwd) {
        adminObj.loginPwd = md5(adminObj.loginPwd);
    }
    Admin.update(adminObj, {
        where: {
            id: adminId
        }
    });
};

exports.login = async function (loginId, loginPwd) {
    const instance = await Admin.findOne({
        where: {
            loginId,
            loginPwd: md5(loginPwd)
        }
    });
    return instance && instance.toJSON();
};