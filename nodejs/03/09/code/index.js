const moment = require("moment");

console.log(moment());
console.log(moment().toString()); // 本地时间
console.log(moment.utc().toString()); // UTC 时间

console.log(moment().valueOf()); // 本地时间戳
console.log(moment.utc().valueOf()); // UTC 时间戳

// 根据指定的时间格式得到时间
// 使用日期令牌转换
// 令牌是一个格式化的字符串 YYYY-MM-DD HH:mm:ss
console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
console.log(moment.utc().format("YYYY-MM-DD HH:mm:ss"));

console.log(moment("1970-01-01").format("YYYY-MM-DD HH:mm:ss"));
console.log(moment.utc("1970-01-01").format("YYYY-MM-DD HH:mm:ss"));