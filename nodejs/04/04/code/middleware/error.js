/**
 * @fileoverview 处理错误中间件
 */

module.exports = function (err, req, res, next) {
    if (err) {
        console.log(err);
        res.status(500).end(err.message);
    } else {
        next();
    }
};