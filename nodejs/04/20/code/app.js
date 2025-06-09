const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
    if (req.url.startsWith("/data/api")) {
        fetch("http://www.baidu.com", {
            method: req.method,
            headers: req.headers,
            body: req.body
        })
            .then((res) => res.text())
            .then((data) => {
                console.log(data)
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(500).send({
                    code: 1,
                    msg: err.message
                });
            });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
