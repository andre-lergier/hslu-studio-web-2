import Ball from "./ball.mjs";

export default class Animation {
  constructor(socket, playground, playMode, debug) {
    /**
     * playMode:
     * - 1: single ball in first device
     * - 2: random  balls to right side
     * - 3: random balls, random direction
     */

    this.socket = socket;
    this.playground = playground;
    this.playMode = playMode;
    this.debug = debug;
    this.playgroundWidth = null;
    this.playgroundHeight = null;
    this.balls = new Set();

    this.setPlaygroundSize();
  }

  init() {
    this.initListeners();

    // if(this.playMode != 1){
    // }
    this.addRandomCenteredBall();
  }

  setPlaygroundSize(){
    this.playgroundWidth = this.playground.offsetWidth;
    this.playgroundHeight = this.playground.offsetHeight;

    for (const ball of this.balls) {
      ball.playgroundDimensions = {
        width: this.playgroundWidth,
        height: this.playgroundHeight,
        x: 0,
        y: 0,
      };
    }

    if(this.debug) {
      console.groupCollapsed('playground size');
      console.log(this.playgroundWidth, this.playgroundHeight);
      console.groupEnd();
    }
  }
  
  windowResized() {
    this.setPlaygroundSize();
  }

  addBall(ball) {
    this.balls.add(ball);
    ball.addToPlayground(this.playground);
    ball.playgroundDimensions = {
      width: this.playgroundWidth,
      height: this.playgroundHeight,
      x: 0,
      y: 0,
    };
    
    ball.triggerAnimation();
  }

  addRandomCenteredBall() {
    const ballRadius = Math.ceil(Math.random()*60) + 20; // val [20,80]
    const xCenter = (this.playgroundWidth / 2) - ballRadius;
    const yCenter = (this.playgroundHeight / 2) - ballRadius;

    let directionX = Math.floor(Math.random()*2) == 1 ? 1 : -1;
    let directionY = Math.floor(Math.random()*2) == 1 ? 1 : -1;

    if (this.playMode == 1){
      directionX = 0;
      directionY = 0;
    } else if (this.playMode == 2){
      directionX = 1;
    }

    const ball = new Ball({
      radius: ballRadius,
      x: xCenter,
      y: yCenter,
      vx: Math.random() * 3 * directionX,
      vy: Math.random() * 3 * directionY,
    }, this);
    
    this.addBall(ball);
  }

  /**
   * Socket IO
   */
  ballEnter(data) {
    const radius = data.ball.radius;
    let x;
    const y = this.playgroundHeight * data.yHeightRatio;
    const vx = data.ball.vx;
    const vy = data.ball.vy;
    const color = data.ball.color;

    // if left right, add left (and iverse)
    if(data.side === 'right') {
      x = 0 - radius;
    } else {
      x = this.playgroundWidth - radius;
    }

    const ball = new Ball({radius, x, y, vx, vy, color}, this);
    this.addBall(ball);

    /* if(this.debug){
      console.groupCollapsed('ballEnter');
      console.table(data.ball);
      console.groupEnd();
    } */
  }

  ballLeave(ball, side) {
    const yHeightRatio = ball.data.y / this.playgroundHeight;
    this.socket.emit('ballLeave', {
      ball: ball.data,
      side,
      yHeightRatio,
    });

    this.balls.delete(ball);

    setTimeout(() => {
      ball.removeFromPlayground();
    }, 1500);
  }


  initPointerListeners() {
    /* const ballElements = document.querySelectorAll('.ball');
    console.log(ballElements);
    Array.from(ballElements).forEach((ballElement) => {
      ballElement.addEventListener('onpointerdown', this.onPointerDownHandler.bind(this));
      ballElement.addEventListener('onpointermove', this.onPointerMoveHandler.bind(this));
      ballElement.addEventListener('onpointerup', this.onPointerUpHandler.bind(this));
    });*/
  }

  initListeners() {
    this.socket.on('ballEnter', this.ballEnter.bind(this));

    document.querySelector('#addBallButton').addEventListener('click', this.addRandomCenteredBall.bind(this));

    window.addEventListener('resize', this.windowResized.bind(this));
  }
}