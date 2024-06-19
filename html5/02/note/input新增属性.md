# 新增属性

## input 新增属性

placeholder 属性：

用作表单输入提示信息。

```html
<input type="text" placeholder="请输入内容" />
```

type 属性新增的值：

```html
<!-- 之前 -->
<input type="text" name="username" />
<input type="password" name="password" />
<input type="checkbox" name="subscribe" value="newsletter" /> Subscribe to newsletter
<input type="radio" name="gender" value="male" /> Male
<input type="radio" name="gender" value="female" /> Female
<input type="submit" value="Submit" />
<input type="reset" value="Reset" />
<input type="button" value="Click Me" onclick="alert('Button clicked!')" />
<input type="file" name="file" />
```

```html
<form action="/testSubmit" method="get">
    <input type="submit" value="提交" />
    <input type="date" name="date" />
    <input type="time" name="time" />
    <input type="week" name="week" />
    <input type="datetime-local" name="datetime" />
    <input type="number" name="number" />
    <input type="email" name="email" />
    <input type="color" name="color" />
    <input type="range" name="range" min="1" max="100" />
    <!-- 相比普通的输入框会多出一个输入的记录 -->
    <input type="search" name="search" />
    <input type="url" name="url" />
</form>
```

## contenteditable 可编辑属性

配置元素是否可编辑。

该属性是可以被继承的！

也是可以被覆盖的！

```html
<div style="border: 1px solid #333;" contenteditable="true">
    youlixiang
    <span contenteditable="false">child</span>
</div>
```

contenteditable='false' 表示内部的东西不能被编辑，但是整个标签可以作为一个整体被删除。

## draggable 可拖拽属性

```html
<div class="a" draggable="true"></div>
```

默认开启该属性的标签：a、img。

拖拽的生命周期：按下（开始）、拖拽（进行）、松手（结束）。

拖拽的组成：被拖拽的物体、目标区域。

开启拖拽属性后，会触发拖拽事件：

-   被拖拽物体

    -   dragstart 按下物体的瞬间不会触发，拖动一点点开始触发

    -   drag 移动时开始触发

    -   dragend 拖拽结束触发

-   目标区域

    -   dragenter 鼠标拖拽物体时，鼠标进入目标区域后触发

    -   dragover 鼠标拖拽物体时，鼠标进入目标区域后持续触发

    -   dragleave 鼠标拖拽物体时，鼠标离开目标区域后触发

    -   drop 鼠标拖拽物体时，物体放置在目标区域后触发

        -   所有的元素拖拽结束后，默认事件都是回到原处，需要在 dragover 事件内阻止默认事件，否者不触发 drop 事件

        -   事件是由行为触发的，但是一个行为可以不止触发一个事件，当我们鼠标放下的时候实际上也是触发了两个事件 dragover 和 drop

        -   ![alt text](image.png) 阻止默认事件后才可以触发 drop 事件

```js
var oBox = document.querySelector('.a');
var oTarget = document.querySelector('.target');

oBox.ondragstart = function (e) {
    // console.log('dragstart', e);
};
oBox.ondrag = function (e) {
    // console.log('drag', e);
};
oBox.ondragend = function (e) {
    // console.log('ondragend', e);
    // e.target.style.top = e.pageY + 'px';
    // e.target.style.left = e.pageX + 'px';
};

oTarget.ondragenter = function (e) {
    console.log('ondragenter', e);
};
oTarget.ondragover = function (e) {
    e.preventDefault();
    // console.log('ondragover', e);
};
oTarget.ondragleave = function (e) {
    console.log('ondragleave', e);
};
oTarget.ondrop = function (e) {
    console.log('ondrop', e);
};
```

## dataTransfer 对象

