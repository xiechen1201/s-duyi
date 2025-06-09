const express = require("express");
const app = express();
const errorMiddleware = require("./error-middleware");
const staticMiddleware = require("./static-middleware");

app.get(
    "/news",
    (req, res, next) => {
        console.log("handle1");
        next();
    },
    (req, res) => {
        console.log("handle2");
        next();
    }
);

app.use(staticMiddleware);
app.use(errorMiddleware);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
