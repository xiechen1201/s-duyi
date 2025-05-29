const express = require("express");
const router = express.Router();
const { login } = require("../service/index");
const { publish } = require("../utils/jwt");

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    login(username, password).then(([result]) => {
        if (result && result.length) {
            result = result[0];
            publish(res, { username: result.loginId });
        }
    });
});

router.get("/whoami", (req, res) => {
    
})

module.exports = router;
