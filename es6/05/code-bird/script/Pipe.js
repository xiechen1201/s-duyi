const gameWeight = gameDom.clientWidth;

class Pipe extends Rectangle {
  constructor(height, top, speed, dom) {
    super(52, height, gameWeight, top, speed, 0, dom);
  }

  onMove() {
    if (this.left < -this.width) {
      this.dom.remove();
    }
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class PipePare {
  constructor(speed) {
    this.spaceHeight = 150; // 管道空隙的高度
    this.minHeight = 80; // 管道的最小高度
    this.maxHeight = landTop - this.minHeight - this.spaceHeight; // 管道最大高度

    const upHeight = getRandom(this.minHeight, this.maxHeight); // 上水管的高度
    const downHeight = landTop - upHeight - this.spaceHeight; // 下水管的高度
    const downTop = landTop - downHeight; // 下水管的上边距

    // 创建 DOM 对象
    const upDom = document.createElement('div');
    upDom.className = 'pipe up';

    const downDom = document.createElement('div');
    downDom.className = 'pipe down';

    this.upPipe = new Pipe(upHeight, 0, speed, upDom); // 上水管
    this.downPipe = new Pipe(downHeight, downTop, speed, downDom); // 下水管

    gameDom.appendChild(upDom);
    gameDom.appendChild(downDom);
  }

  // 该管道对是否已经不再需要
  get useLess() {
    return this.upPipe.left < -this.upPipe.width;
  }

  move(duration) {
    this.upPipe.move(duration);
    this.downPipe.move(duration);
  }
}

/**
 * @description 用于不断的产生管道对
 */
class PipePareProducer {
  constructor(speed) {
    this.speed = speed;
    this.pairs = [];
    this.timer = null;
    this.tick = 1500;
  }

  startProduce() {
    if (this.timer) return;

    this.timer = setInterval(() => {
      // 添加管道
      this.pairs.push(new PipePare(this.speed));

      // 移除用不到的管道
      for (let i = 0; i < this.pairs.length; i++) {
        let pair = this.pairs[i];
        if (pair.useLess) {
          this.pairs.splice(i, 1);
          i--;
        }
      }
    }, this.tick);
  }

  stopProduce() {
    clearInterval(this.timer);
    this.timer = null;
  }
}

/* var producer = new PipePareProducer(-100);
producer.startProduce();

setInterval(() => {
  producer.pairs.forEach((pair) => pair.move(16 / 1000));
}, 16); */
