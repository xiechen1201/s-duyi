const express = require("express");
const app = express();
const port = 3000;

app.get(
    "/imgs/:filename",
    function (req, res, next) {
        const { referer, host } = req.headers;
        if (referer && referer !== host) {
            throw new Error("保护版权，从你我做起");
        }
        next();
    },
    function (req, res) {
        res.download(path.resolve(__dirname, "imgs", req.params.filename));
    }
);

// 错误处理
app.use(function (err, req, res, next) {
    res.status(500).send({
        code: 1,
        msg: err.message
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
