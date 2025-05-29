const path = require("path");
const express = require("express");
const app = express();
const { error } = require("./middleware");

const studentRouter = require("./routes/student");

const port = 3000;
const staticPath = path.resolve(__dirname, "./public");

// 静态资源
app.use("/public", express.static(staticPath));
// 解析请求体
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 路由
app.use("/api/student", studentRouter);

// 错误处理
app.use(error);
 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});