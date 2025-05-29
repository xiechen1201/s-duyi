/**
 * @fileoverview 处理错误中间件
 */

const response = require("../utils/response");

module.exports = function (err, req, res, next) {
    if (err) {
        response.error(res, 500, 101, err.message);
    } else {
        next();
    }
};
