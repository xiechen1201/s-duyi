# BFC

BFC 是什么？

BFC 全程 Block formatting contexts，块级格上下文。

简单说就是页面中的一块渲染区域有一套自己的渲染规则。

BFC 就是一个独立的布局环境，BFC 内部的布局和外部是不影响的。

BFC 规则：

- box 垂直方向一个接着一个的放；

- margin 的值会发生重叠；

- ...

标准流中 body 本身就是一个 BFC，只不过 body 内部还可以在设置 BFC。

如何单独设置 BFC？

- 跟元素

- float

- position

- overflow

- display

BFC 的作用？

1、解决浮动元素父元素高度坍塌的问题

浮动会脱离标准流，可以让父元素出发 BFC。

相当于子元素再怎么布局也都需要在父元素内进行布局。

2、解决非浮动元素被浮动元素覆盖

利用这个特性，可以制作两栏布局。

3、解决外边距重合的问题