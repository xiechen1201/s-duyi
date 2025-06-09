# EventEmitter

是 NodeJS 中事件管理的通用机制。

```js
res.on("data", () => {});

socket.on("close", () => {});
```
 
事件触发的时候就会执行回调函数。

```js
const {EventEmitter} = require('events');

// 创建一个事件处理对象
// 可以注册事件，可以触发事件
const ee = new EventEmitter();

ee.on('newListener', (eventName, listener) => {
  console.log('有新的事件监听了', eventName, listener);
})

// ee.addListener('click', () => {
//   console.log('click');
// })

// 触发 newListener 事件
// 会依次运行注册的事件处理函数
// 同步触发
ee.emit("newListener");

console.log("script end")
```

如何做的？

内部维护了多个事件多列，可以理解是一个普通的数组。

```jsx
{
    "eventName": [
        () => {},
        () => {}
    ]
}
```

是同步触发的

其他的方法：

- once 事件只触发一次（类似于执行后从数组中删除）

- off 移除事件