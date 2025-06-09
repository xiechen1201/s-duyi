const express = require("express");
const app = express();
const port = 3000;

const cookieParser = require("cookie-parser");
const cors = require("cors");
const auth = require("./middlewares/auth");

const authRouter = require("./routers/auth");
const studentRouter = require("./routers/student");

// 注入中间件
const whitelist = ["null"];
app.use(
    cors({
        origin(origin, callback) {
            if (whitelist.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        }
    })
);
app.use(cookieParser("express-app"));
app.use(auth);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 路由
app.use("/api/auth", authRouter);
app.use("/api/student", studentRouter);

app.use((err, req, res, next) => {
    console.log("全局错误处理中间件:", err);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
