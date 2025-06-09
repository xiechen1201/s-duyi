const allowOrigins = ["http://127.0.0.1:5500"];

module.exports = (req, res, next) => {
    // 处理预检请求
    if (req.method === "OPTIONS") {
        res.set(
            "Access-Control-Allow-Methods",
            req.headers["access-control-request-method"]
        );
        res.set(
            "Access-Control-Allow-Headers",
            req.headers["access-control-request-headers"]
        );
        console.log(res)
        return next();
    }

    // 处理简单请求
    if ("origin" in req.headers && allowOrigins.includes(req.headers.origin)) {
        res.set("Access-Control-Allow-Origin", req.headers.origin);
        return next();
    }

    // 处理不匹配的请求
    next();
};
