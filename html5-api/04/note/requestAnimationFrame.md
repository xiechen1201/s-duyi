# requestAnimationFrame

小方块的移动速度不是均匀的！

```js
function move() {
    var oMain = document.getElementById('main');
    if (oMain.offsetLeft >= 500) {
        return false;
    }
    oMain.style.left = oMain.offsetLeft + 20 + 'px';
}
setInterval(move, 10);
```

为什么会出现这个现象？

显示器刷新的频率是多少？60hz（也就是每秒钟闪 60 次）,如果变化 1 秒超过 60 次，那么就必然会有一些动画贞被丢掉，也就是动画卡顿。

如果进行优化？

requestAnimationFrame 类似于 setTimeout。

因为该 API 是每秒 60 贞。是不是可以把 setInterval 设置为 1000/60 呢？

区别：

-   setInterval 设置 1 帧、2 帧、3 帧，前提是每一帧少于 1/60 秒，如果大于 1/60 是运行不完的，

-   requestAnimationFrame 是有一个特殊的队列的，可以准时执行每一帧。

```js
move();
var timer = null;
function move() {
    var oMain = document.getElementById('main');
    if (oMain.offsetLeft >= 500) {
        cancelAnimationFrame(timer);
        return false;
    }
    oMain.style.left = oMain.offsetLeft + 20 + 'px';
    timer = requestAnimationFrame(move);
}
```
