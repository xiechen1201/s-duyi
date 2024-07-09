/**
 * 矩形类，可以移动
 * 属性：宽度、高度、横坐标、纵坐标、横向速度、纵向速度、对应的 DOM 对象
 *      横向速度：xSpeed，单位（像素/秒），正数向右，负数向左
 *      纵向速度：ySpeed，单位（像素/秒），正数向下，负数向上
 * 方法：
 */
class Rectangle {
    constructor(width, height, left, top, xSpeed, ySpeed, dom) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.dom = dom;

        this.render()
    }

    render() {
        this.dom.style.width = this.width + 'px';
        this.dom.style.height = this.height + 'px';
        this.dom.style.left = this.left + 'px';
        this.dom.style.top = this.top + 'px';
    }

    /**
     * 按照矩形的速度，和指定的时间，移动矩形
     * @param {*} duration
     */
    move(duration) {
        const xDis = this.xSpeed * duration; // 横向移动的距离
        const yDis = this.ySpeed * duration; // 纵向移动的距离
        this.left = this.left + xDis;
        this.top = this.top + yDis;

        // 可能会发生一些事，具体什么事情？父类也不知道！
        // 是否存在 onMove 方法？存在则调用！
        // 每次移动后，渲染前，均会调用此方法！
        this.onMove && this.onMove()

        this.render();
    }
}
