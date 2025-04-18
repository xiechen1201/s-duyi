const Student = require("../modules/student");
const { Op } = require("sequelize");
const Classroom = require("../modules/classroom");

// 方式一
/* exports.getStudentByPage = async function (page = 1, limit = 10) {
    let list = await Student.findAll({
        offset: (page - 1) * limit,
        limit: limit
    });
    let count = await Student.count();

    return {
        count,
        page,
        limit,
        list
    }
}; */

// 方式二
/* exports.getStudentByPage = async function (page = 1, limit = 10) {
    return Student.findAndCountAll({
        offset: (page - 1) * limit,
        limit: limit
    })
}; */

// 方式三
/* exports.getStudentByPage = function (
    page = 1,
    limit = 10,
    sex = -1,
    name = ""
) {
    const condotion = {};

    if (sex !== -1 && sex !== null) {
        condotion.sex = !!sex;
    }
    if (name) {
        condotion.name = {
            [Op.like]: `%${name}%`
        };
    }

    return Student.findAndCountAll({
        offset: (page - 1) * limit,
        limit: limit,
        where: condotion
    });
}; */

exports.getStudentByPage = function (page = 1, limit = 10) {
    return Student.findAndCountAll({
        offset: (page - 1) * limit,
        limit: limit,
        attributes: ["id", "name"]
    });
};

exports.getStudentById = function (id) {
    return Student.findAndCountAll({
        includes: [Classroom],
        offset: 1,
        limit: 10
    });
};
