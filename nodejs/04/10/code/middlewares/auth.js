const { pathToRegexp } = require("path-to-regexp");

const response = require("../utils/response");
const whitepath = require("../utils/whitepath");

module.exports = (req, res, next) => {
    // 如果是白名单，直接放行
    const isMatch = whitepath.some((el) => {
        // 如果 methods 匹配，并且 path 匹配，返回 true
        // pathToRegexp 用于匹配 /detail/:id 这种路径
        const { regexp } = pathToRegexp(el.path);
        if (regexp.test(req.path) && req.method === el.method) {
            return true;
        }
    });
    isMatch && next();

    // 否则验证 token
    const authorization = req.signedCookies.authorization;
    if (authorization) {
        next();
    } else {
        response.error(res, 403, 1, "token 过期，请重新登录");
    }
};
