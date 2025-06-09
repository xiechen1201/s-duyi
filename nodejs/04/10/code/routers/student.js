const express = require("express");
const router = express.Router();

const { getStudentByPage } = require("../service/student-service");

const response = require("../utils/response");

router.get("/getList", async (req, res) => {
    const { page, limit } = req.query;
    let list = await getStudentByPage(page, limit);
    if (res) {
        response.success(res, 200, 0, list);
    } else {
        response.error(res, 500, 2, "获取失败");
    }
});

module.exports = router;
