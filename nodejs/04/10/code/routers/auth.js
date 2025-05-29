const express = require("express");
const router = express.Router();

const { login } = require("../service/admin-service");
const response = require("../utils/response");

// 登录
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    debugger;
    const result = await login(username, password);
    if (result) {
        res.cookie("authorization", username, {
            maxAge: 1000 * 60 * 60 * 24,
            signed: true
        })
        response.success(res, 200, 0, result);
    } else {
        response.error(res, 500, 1, "用户名或密码错误");
    }
});

module.exports = router;
