const path = require("path");
const MyPlugin = require("./plugins/MyPlugin");

module.exports = {
    mode: "development",
    plugins: [new MyPlugin()]
};
