export default class DeviceIdentification {
  constructor(socket, debug) {
    this.socket = socket;
    this.debug = debug;

    this.animationEffects = [
      'blurEffect',
    ]
  }

  identifyDevice(data) {
    console.log('Ping from ' + data.triggerSocketId);
    console.log(`myOrder is ${data.userPosition}`);

    let delayToStartAnimation = 0;
    const animationInDuration = 1000;
    const animationStopDuration = 500;
    const animationOutDuration = 1000;

    if(data.userPosition == 1) {
      delayToStartAnimation = 500;
    }

    const animationClassIndex = Math.floor(this.animationEffects.length * Math.random());
    
    const identifyContainer = document.querySelector('.identifyContainer');
    const identifyWrapper = document.querySelector('.identifyWrapper');
    
    identifyWrapper.classList.add(this.animationEffects[animationClassIndex]);
    // force layout reflow, see: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    identifyWrapper.offsetHeight;
    identifyWrapper.classList.add('animationEnabled');

    document.querySelector('#identifyDeviceNumber').innerHTML = data.userPosition;

    setTimeout(() => {
      identifyContainer.classList.add('identifyIn');
    }, delayToStartAnimation);

    setTimeout(() => {
      identifyContainer.classList.remove('identifyIn');
      identifyContainer.classList.add('identifyOut');
    }, delayToStartAnimation + animationInDuration + animationStopDuration);

    setTimeout(() => {
      identifyWrapper.classList.remove('animationEnabled');
      identifyWrapper.classList.remove(this.animationEffects[animationClassIndex]);
      identifyContainer.classList.remove('identifyOut');
      this.socket.emit('identifyDeviceReply');
      console.log('event sent');
    }, delayToStartAnimation + animationInDuration + animationStopDuration + animationOutDuration);
  }

  identifyDevicesTriggered() {
    document.querySelector('html').classList.add('deviceIdentificationTriggered');
  }

  identifyDevicesFinished() {
    document.querySelector('html').classList.remove('deviceIdentificationTriggered');
  }

  initListeners(){
    const identifyBtn = document.querySelector('#identifyDevices');
    identifyBtn.addEventListener('click', () => {
      console.log('start');
      this.socket.emit('identifyDevicesStartTrigger');
    });

    this.socket.on('identifyDevicesTriggered', this.identifyDevicesTriggered.bind(this));
    this.socket.on('identifyDevicesFinished', this.identifyDevicesFinished.bind(this));
    this.socket.on('identifyDevice', this.identifyDevice.bind(this));
  }
}