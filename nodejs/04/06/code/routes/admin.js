const express = require("express");
const router = express.Router();
const {} = require("../service/admin-service");
const response = require("../utils/response")

router.post("/login", (req, res) => {
    res.cookie("token", "123".repeat(10), {
        maxAge: 1000 * 60 * 60
    });
    response.success(res, 200, 0, "登录成功");
});

module.exports = router;