const { EventEmitter } = require("events");

// 创建一个事件处理对象
// 可以注册事件，可以触发事件
const ee = new EventEmitter();

ee.on("newListener", (data1, data2) => {
    console.log("有新的事件监听了", data1, data2);
});

// ee.addListener('click', () => {
//   console.log('click');
// })

// 触发 newListener 事件
// 会依次运行注册的事件处理函数
// 同步触发
ee.emit("newListener", { data: 123 }, "456");

console.log("script end");
