export default class Ball {
  constructor(radius) {
    this.radius = radius;

    // position from top left
    this.x = 0;
    this.y = 0;
    
    // velocity
    this.vx = 0;
    this.vy = 0;

    this.ballElement = -1;
    this.startTime = null;
  }

  addToPlayground(playground) {
    this.playground = playground;

    this.ballElement = document.createElement('div');
    this.ballElement.classList.add('ball');
    this.ballElement.style.width = `${this.radius * 2}px`;
    this.ballElement.style.height = `${this.radius * 2}px`;

    this.playground.appendChild(this.ballElement);
  }

  centerBall() {
  }

  animate(timestamp) {
    console.log(this.startTime);
    if (!this.startTime) this.startTime = timestamp;
    let progress = timestamp - this.startTime;
    let x = progress / 10;
    let y = progress / 10;

    this.ballElement.style.transform = `translate3d(${x}px, ${y}px, 0)`;

    window.requestAnimationFrame(this.animate.bind(this));
  }

  triggerAnimation() {
    window.requestAnimationFrame(this.animate.bind(this));
  }

  changeColor(){
    this.ballElement.style.background = 'red';
  }
}