/**
 * @fileoverview 静态资源中间件
 */

const path = require("path");

module.exports = function (req, res, next) {
    if(req.path.startsWith("/static")) {
        const filePath = path.join(__dirname, "../public", req.path);
        console.log(filePath)
        res.send(filePath)
    }else{
        next();
    }
};
