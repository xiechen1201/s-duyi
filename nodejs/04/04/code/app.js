const path = require("path");
const express = require("express");
const app = express();
const { error } = require("./middleware");

const port = 3000;
const staticPath = path.resolve(__dirname, "./public");

app.use("/public", express.static(staticPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send({});
});

app.use(error);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
