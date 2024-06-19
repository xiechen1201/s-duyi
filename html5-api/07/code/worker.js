// 子线程
/* this.onmessage = function (e) {
    console.log('收到主线程消息：', e.data);
};
 */

// TODO:

this.onmessage = function (e) {
    var result = 0;
    for (var i = 0; i < e.data.num; i++) {
        result += i;
    }
    this.postMessage(result);
};
