export default class DeviceMotion {
  constructor() {

  }

  requestPermission() {
    DeviceOrientationEvent.requestPermission()
      .then((response) => {
        if (response === 'granted') {
          window.addEventListener('deviceorientation', this.handleOrientation, true);
        }
      })
      .catch(console.error);
  }

  handleOrientation(event) {
    let absolute = event.absolute;
    let alpha    = event.alpha;
    let beta     = event.beta;
    let gamma    = event.gamma;
    console.log(event);

    document.querySelector('#data').innerHTML = `absolute: ${event.absolute}<br>
    alpha: ${Math.round((event.alpha + Number.EPSILON) * 10000) / 10000}<br>
    beta : ${Math.round((event.beta + Number.EPSILON) * 10000) / 10000}<br>
    gamma: ${Math.round((event.gamma + Number.EPSILON) * 10000) / 10000}<br>`;
  }

  initListeners() {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      const permissionButton = document.querySelector('#enableMotionTracking');
      permissionButton.classList.add('show');
      permissionButton.addEventListener('click', this.requestPermission.bind(this));
    } else {
      window.addEventListener('deviceorientation', this.handleOrientation, true);
    }
  }
}
