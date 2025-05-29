const jwt = require("jsonwebtoken");
const secretKey = "xiechen";
const cookieKey = "authorization";

// 发布token
exports.publish = function (res, info = {}, maxAge = 3600 * 24) {
    const token = jwt.sign(info, secretKey, {
        expiresIn: maxAge
    });

    // 添加到 Cookie
    res.cookie(cookieKey, token, { maxAge: maxAge * 1000, path: "/" });

    // 添加到 Body
    res.status(200).json({
        code: 0,
        authorization: token
    });
};

// 验证token
exports.verify = function (req) {
    let token;
    // 首先从 cookie 中获取 token
    token = req.cookies[cookieKey];
    if (!token) {
        // 从 header 中获取 token
        token = req.headers.authorization;
        if (!token) {
            return null;
        }
    }

    token = token.split(" ");
    token = token.length === 1 ? token[0] : token[1];

    try {
        const result = jwt.verify(token, secretKey);
        return result;
    } catch (error) {
        return null;
    }
};
