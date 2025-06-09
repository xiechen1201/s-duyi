// const Admin = require("./modules/admin");

/* // 构建模型实例
const instace = Admin.build({
    loginId: "admin",
    loginPwd: "admin",
    name: "超级管理员"
});

// 调用 save() 方法保存到数据库
instace.save().then(() => {
    console.log("数据添加成功");
}); */

/* Admin.create({
    loginId: "admin2",
    loginPwd: "admin2",
    name: "超级管理员2"
}).then(() => {
    console.log("数据添加成功");
}); */

// =======================

const Admin = require("../modules/admin");

exports.addAdmin = async function (adminObj) {
    // 业务逻辑xxx，例如判断是否存在，是否符合要求
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
    // 方式一：通过实例
    /* const instance = await Admin.findByPk(adminId);
    instance.loginId = adminObj.loginId;
    instance.save(); */

    // 方式二
    Admin.update(adminObj, {
        where: {
            id: adminId
        }
    });
};
