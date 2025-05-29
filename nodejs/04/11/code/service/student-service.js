const Student = require("../models/student");

function getStudentByPage(page = 1, limit = 10) {
    return Student.findAndCountAll({
        offset: (page - 1) * limit,
        limit: limit,
        // attributes: ["id", "name"]
    });
}

module.exports = {
    getStudentByPage
};
