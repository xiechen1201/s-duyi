const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/auth", require("./router/auth"));
app.use("/api/student", require("./router/employee"));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
