class Game {
  constructor() {
    this.sky = new Sky();
    this.land = new Land(-100);
    this.bird = new Bird();
    this.pipeProducer = new PipePareProducer(-100);

    this.timer = null;
    this.tick = 16; // 移动时间间隔，毫秒
    this.gameOver = false;
  }

  start() {
    if (this.timer) {
      return false;
    }

    if (this.gameOver) {
      window.location.reload();
    }

    this.bird.startSwing();
    this.pipeProducer.startProduce();
    this.timer = setInterval(() => {
      const duration = this.tick / 1000;

      this.sky.move(duration);
      this.land.move(duration);
      this.bird.move(duration);
      this.pipeProducer.pairs.forEach((pair) => pair.move(duration));

      if (this.isGameOver()) {
        this.gameOver = true;
        this.stop();
      }
    }, this.tick);
  }

  /**
   * @description 判断是否碰撞
   * @param {*} rec1
   * @param {*} rec2
   */
  isHit(rec1, rec2) {
    // 横向：两个矩形的中心点的距离，是否小于矩形宽度之和的一半
    // 纵向：两个矩形的中心点的距离，是否小于矩形高度之和的一半

    let centerX1 = rec1.left + rec1.width / 2;
    let centerY1 = rec1.top + rec1.height / 2;
    let centerX2 = rec2.left + rec2.width / 2;
    let centerY2 = rec2.top + rec2.height / 2;

    let disx = Math.abs(centerX1 - centerX2);
    let disy = Math.abs(centerY1 - centerY2);

    if (disx < (rec1.width + rec2.width) / 2 && disy < (rec1.height + rec2.height) / 2) {
      return true;
    } else {
      return false;
    }
  }

  isGameOver() {
    if (this.bird.top === this.bird.maxY) {
      // 鸟落地了
      return true;
    }

    for (let index = 0; index < this.pipeProducer.pairs.length; index++) {
      const pair = this.pipeProducer.pairs[index];

      if (this.isHit(this.bird, pair.upPipe) || this.isHit(this.bird, pair.downPipe)) {
        return true;
      }
    }

    return false;
  }

  stop() {
    clearInterval(this.timer);
    this.timer = null;

    this.bird.stopSwing();
    this.pipeProducer.stopProduce();
  }

  regEvent() {
    window.onkeydown = (e) => {
      if (e.key === 'Enter') {
        this.timer ? this.stop() : this.start();
      } else if (e.key === ' ') {
        this.bird.jump();
      }
    };
  }
}

var g = new Game();
g.regEvent();
