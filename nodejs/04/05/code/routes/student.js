const express = require("express");
const router = express.Router();
const response = require("../utils/response");

router.post("/", (req, res) => {
    res.send("分页获取学生数据");
});

router.get("/detail/:id", (req, res) => {
    const id = req.params.id;
    if (!id) {
        response.error(res, 500, 101, "id不能为空");
    } else { 
        response.success(res, 200, 0, "获取学生详情数据" + id);
    }
});

module.exports = router;
