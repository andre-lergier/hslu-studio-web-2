import * as Utils from './utils.mjs';

export default class Ball {
  constructor({
                radius,
                x = 0,
                y = 0,
                vx = 0,
                vy = 0,
                color = null
              }, animationClass) {
    this.radius = radius;

    // position from top left
    this.x = x;
    this.y = y;
    this.baseX = 0;
    this.baseY = 0;

    // velocity
    this.vx = vx;
    this.vy = vy;

    this.color = color;
    this.animationClass = animationClass;

    this.timeBasedAnimation = 0;
    this.debug = 0;

    this.ballElement = null;
    this.ballGone = false;
    this.playground = null;
    this.playgroundWidth = null;
    this.playgroundHeight = null;
    this.playgroundX = null;
    this.playgroundY = null;
    this.startTime = null;
    this.reAnFrAnimation = null;

    this.colors = [
      '#538797',
      '#c2d9cd',
      '#ff842a',
      '#fed55d',
      '#fcfaf1',
    ]

    if(!this.color){
      this.color = Utils.getRandomArrayValue(this.colors);
    }

    this.pointerStarted = false;
    this.pointerDownEvent = null;
    this.pointerMoveLastX = 0;
    this.pointerMoveLastY = 0;
    this.pointerMoveLastDX = 0;
    this.pointerMoveLastDY = 0;
  }

  addToPlayground(playground) {
    this.ballElement = document.createElement('div');
    this.ballElement.classList.add('ball');
    this.ballElement.style.width = `${this.radius * 2}px`;
    this.ballElement.style.height = `${this.radius * 2}px`;
    this.ballElement.style.background = `${this.color}`;
    
    this.playground = playground;
    this.playground.appendChild(this.ballElement);

    this.initPointerListeners();
  }

  removeFromPlayground() {
    this.playground.removeChild(this.ballElement);
  }

  /**
   * Collision handling
   * left & right: when 50% of ball (radius) disappeard
   * top & bottom: when ball touches edges
   */
  checkCollision() {
    const xLeft = this.x;
    const xRight = this.x + this.radius * 2;
    const yTop = this.y;
    const yBottom = this.y + this.radius * 2;

    if (xLeft < this.playgroundX - this.radius) {
      if(this.debug) console.groupCollapsed('collision left! -> event to previous');

      this.animationClass.ballLeave(this, 'left');
      this.ballGone = true;

      if(this.debug) console.table({
        xLeft, xRight, yTop, yBottom, pX: this.playgroundX, pY: this.playgroundY,
      });
      if(this.debug) console.groupEnd();
    } else if (xRight > this.playgroundX + this.playgroundWidth + this.radius) {
      if(this.debug) console.groupCollapsed('collision right! -> event to next');

      this.animationClass.ballLeave(this, 'right');
      this.ballGone = true;

      if(this.debug) console.table({
        xLeft, xRight, yTop, yBottom, pX: this.playgroundX, pY: this.playgroundY,
      });
      if(this.debug) console.groupEnd();
    }

    if(yTop < this.playgroundY) {
      if(this.debug) console.groupCollapsed('collision top!');
      this.vy = this.vy * (-1);

      if(this.debug) console.table({
        xLeft, xRight, yTop, yBottom, pX: this.playgroundX, pY: this.playgroundY,
      });
      if(this.debug) console.groupEnd();
    } else if(yBottom > this.playgroundY + this.playgroundHeight) {
      if(this.debug) console.groupCollapsed('collision bottom!');
      this.vy = this.vy * (-1);

      if(this.debug) console.table({
        xLeft, xRight, yTop, yBottom, pX: this.playgroundX, pY: this.playgroundY,
      });
      if(this.debug) console.groupEnd();
    }
  }

  /**
   * Animation
   * @param timestamp will be inserted trough window.requestAnimationFrame
   */
  animate(timestamp) {
    if (!this.startTime) {
      this.startTime = timestamp;
    }
    let progress = timestamp - this.startTime;
    let timeFactor = (progress / 10);

    if (!this.ballGone){
      this.checkCollision();
    }

    if (this.timeBasedAnimation) {
      console.log(`y old: ${this.y}, ${this.vy}`);
      this.x = this.baseX + (timeFactor * this.vx);
      this.y = this.baseY + (timeFactor * this.vy);
      console.log(`y new: ${this.y}, ${this.vy}, ${timeFactor * this.vy}`);
    } else {
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
    }

    this.ballElement.style.transform = `translate3d(${this.x}px, ${this.y}px, 0)`;

    this.reAnFrAnimation = window.requestAnimationFrame(this.animate.bind(this));
  }

  triggerAnimation() {
    this.reAnFrAnimation = window.requestAnimationFrame(this.animate.bind(this));
  }

  stopAnimation() {
    cancelAnimationFrame(this.reAnFrAnimation);
  }

  /**
   * Setter methods
   */
  set playgroundDimensions(data) {
    this.playgroundWidth = data.width;
    this.playgroundHeight = data.height;
    this.playgroundX = data.x;
    this.playgroundY = data.y;
  }

  setPosition(x,y) {
    if (this.timeBasedAnimation) {
      this.baseX = x;
      this.baseY = y;
    } else {
      this.x = x;
      this.y = y;
    }

    this.ballElement.style.transform = `translate3d(${this.x}px, ${this.y}px, 0)`;
  }

  /** 
   * Getter methods
   */
  get data() {
    return {
      radius: this.radius,
      x: this.x,
      y: this.y,
      vx: this.vx,
      vy: this.vy,
      color: this.color,
    }
  }

  get position () {
    return {
      x: this.x,
      y: this.y,
    }
  }


  /**
   * Pointer Events
   */
  onPointerDownHandler(e) {
    this.stopAnimation();

    this.pointerDownEvent = e;
    this.pointerStarted = true;

    this.pointerMoveLastX = e.clientX;
    this.pointerMoveLastY = e.clientY;

    if(this.debug) console.table({
      x: e.clientX,
      y: e.clientY,
    })
  }

  onPointerMoveHandler(e) {
    if (this.pointerStarted) {
      if(e.buttons === 1) {
        const clientX = e.clientX;
        const clientY = e.clientY;

        const movedX = clientX - this.pointerMoveLastX;
        const movedY = clientY - this.pointerMoveLastY;

        this.setPosition(this.x + movedX, this.y + movedY);

        this.pointerMoveLastX = clientX;
        this.pointerMoveLastY = clientY;
        this.pointerMoveLastDX = movedX;
        this.pointerMoveLastDY = movedY;
      
        if(this.debug) console.table({
          mx: movedX,
          my: movedY,
        });
      }
    }
  }

  onPointerUpHandler(e) {
    this.pointerStarted = false;

    this.vx = this.pointerMoveLastDX;
    this.vy = this.pointerMoveLastDY;

    this.triggerAnimation();

    if(this.debug) console.table({
      pointerMoveLastDX: this.pointerMoveLastDX,
      pointerMoveLastDY: this.pointerMoveLastDY,
      clientX,
      clientY,
    });
  }


  initPointerListeners() {
    // console.log('listeners initialized');
    // console.log(this.ballElement);
    this.ballElement.addEventListener('pointerdown', this.onPointerDownHandler.bind(this));
    this.ballElement.addEventListener('pointermove', this.onPointerMoveHandler.bind(this));
    this.ballElement.addEventListener('pointerup', this.onPointerUpHandler.bind(this));
  }
}