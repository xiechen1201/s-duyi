# geolocation

用于获取地理信息。

一些系统不支持这个功能，定位（GPS），台式机几乎都没有 GPS，笔记本部分没有 GPS，手机几乎都有 GPS。

如果没有 GPS 可以使用网络定位，通过网络基站来粗略的地理位置。

-   window.navigator 对象，代表了用户代理的状态和身份；

```js
window.navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position.coords.latitude); // 纬度
    console.log(position.coords.longitude); // 经度
});
```

出于安全和隐私的考虑，该 API 只能在特定的协议下使用。

1、HTTPS：Geolocation API 只能在 HTTPS 协议下使用。

2. 文件协议（file://）：在一些浏览器中（如 Chrome 和 Firefox），如果你在本地打开一个 HTML 文件（使用 file:// 协议），Geolocation API 也可以工作。
