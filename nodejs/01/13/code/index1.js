const { EventEmitter } = require("events");
const http = require("http");

class MyRequest extends EventEmitter {
    constructor(url, options = {}) {
        super();

        this.url = url;
        this.options = options;
    }

    send(body = "") {
        const request = http.request(this.url, this.options, (res) => {
            let result = "";
            res.on("data", (chunk) => {
                result += chunk.toString("utf-8");
            });
            res.on("end", () => {
                this.emit("response", result);
            });
        });
        request.write(body);
        request.end(body);
    }
}

module.exports = MyRequest;

// ========== 测试调用 ==========

const request = new MyRequest("http://www.baidu.com");
request.send();
request.on("response", (res) => {
    console.log(res);
});
