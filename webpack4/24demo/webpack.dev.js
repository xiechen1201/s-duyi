// 开发环境配置

module.exports = {
    mode: "development",
    devServer: {
        open: true,
        openPage: "list.html",
        proxy: {
            "/api": "http://yuanjin.tech:5100"
        }
    }
};
