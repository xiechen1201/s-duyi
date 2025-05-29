/**
 * @fileoverview 处理错误中间件
 */

const { error } = require("../utils/response");

module.exports = function (err, req, res, next) {
    if (err) {
        error(res, 500, 101, err.message);
    } else {
        next();
    }
};
