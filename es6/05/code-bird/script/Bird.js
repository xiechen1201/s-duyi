const birdDom = document.querySelector('.bird');
const birdStyles = getComputedStyle(birdDom);
const birdWidth = parseFloat(birdStyles.width);
const birdHeight = parseFloat(birdStyles.height);
const birdLeft = parseFloat(birdStyles.left);
const birdTop = parseFloat(birdStyles.top);
const gameDom = document.querySelector('.game');
const gameHeight = gameDom.clientHeight;

class Bird extends Rectangle {
  constructor() {
    super(birdWidth, birdHeight, birdLeft, birdTop, 0, 0, birdDom);
    this.g = 1000; // 向下的加速度，单位：像素/秒²
    this.maxY = gameHeight - landHeight - this.height; // 最大 Y 坐标
    this.swingStatus = 1; // 小鸟翅膀摆动的状态
    this.timer = null; // 翅膀扇动的计时器

    this.render()
  }

  // 开始扇动翅膀
  startSwing() {
    if (this.timer) {
      return false;
    }

    this.timer = setInterval(() => {
      this.swingStatus++;
      if (this.swingStatus === 4) {
        this.swingStatus = 1;
      }
      this.render();
    }, 200);
  }

  // 结束扇动
  stopSwing() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    super.render();
    this.dom.className = `bird swing${this.swingStatus}`
  }

  move(duration) {
    // 调用父类
    super.move(duration);
    // 根据加速度改变速度
    this.ySpeed += this.g * duration;
  }

  onMove() {
    if (this.top < 0) {
      this.top = 0;
    } else if (this.top > this.maxY) {
      this.top = this.maxY;
    }
  }

  // 向上跳，直接给一个向上的速度
  jump() {
    this.ySpeed = -350;
  }
}

/* var bird = new Bird();
bird.startSwing();

setInterval(() => {
  bird.move(16 / 1000);
}, 16); */
