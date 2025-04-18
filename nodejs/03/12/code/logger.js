const log4js = require("log4js");
const path = require("node:path");

log4js.configure({
    appenders: {
        // 定义一个sql日志出口
        sql: {
            type: "file",
            filename: path.resolve(__dirname, "logs", "sql.log"),
            layout: {
                type: "pattern",
                pattern: "%c %d{yyyy-MM-dd hh:mm:ss} [%p] %m"
            } 
        },
        default: {
            type: "stdout"
        }
    },
    categories: {
        // 该分类使用出口 sql 的配置写入日志
        sql: {
            appenders: ["sql"],
            level: "all"
        },
        default: {
            appenders: ["default"],
            level: "all"
        }
    }
});

process.on("exit", () => {
    log4js.shutdown();
});

const sqlLogger = log4js.getLogger("sql");
const defaultLogger = log4js.getLogger("default");

module.exports = {
    sqlLogger,
    defaultLogger
};
