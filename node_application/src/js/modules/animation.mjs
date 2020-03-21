import Ball from "./ball.mjs";

export default class Animation {
  constructor(playground) {
    this.playground = playground;
    this.playgroundWidth = this.playground.offsetWidth;
    this.playgroundHeight = this.playground.offsetHeight;

    this.balls = new Map();

    this.init();
  }

  init() {
    this.addBall();
    this.initListeners();

    this.balls.get(0).triggerAnimation();
    // window.requestAnimationFrame(this.balls.get(0).animate.bind(this.balls.get(0)));
  }

  addBall() {
    const ball = new Ball(40);
    ball.addToPlayground(this.playground);

    this.balls.set(this.balls.size, ball);
  }

  windowResized() {
    console.log('resized');
  }

  initListeners() {
    window.addEventListener('resize', this.windowResized.bind(this));
  }
}