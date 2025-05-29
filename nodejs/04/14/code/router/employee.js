const express = require("express");
const router = express.Router();
const { getAllEmployee } = require("../service/index");
const { verify } = require("../utils/jwt");

router.get("/getAll", function (req, res) {
    const result = verify(req);
    if (result) {
        getAllEmployee().then((result) => {
            res.status(200).json({
                code: 0,
                data: result[0]
            });
        });
    }else{
        res.status(401).json({
            code: 1,
            message: "token 验证失败"
        });
    }
});

module.exports = router;
