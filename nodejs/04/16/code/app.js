const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3000;
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, "uploads"));
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + path.extname(file.originalname).toLowerCase());
        }
    })
});

app.use(express.static(path.resolve(__dirname, "uploads")));

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).send({
        code:0,
        data: {
            filename: `/uploads/${req.file.filename}`,
            size: req.file.size,
        }
    });
});

app.use(function (err, req, res, next) {
    res.status(500).send({
        code: 1,
        msg: err.message
    });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
