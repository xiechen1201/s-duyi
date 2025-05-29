const express = require("express");
const captcha = require("svg-captcha");
const session = require("express-session");

const app = express();
const port = 3000;

app.use(
    session({
        secret: "zhengxiadi",
        resave: false,
        saveUninitialized: false,
    })
);

app.get("/captcha", (req, res) => {
    const { text, data } = captcha.create();
    req.session.code = text;
    res.status(200).json({
        data
    });
    console.log(req.session, req.sessionID);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
