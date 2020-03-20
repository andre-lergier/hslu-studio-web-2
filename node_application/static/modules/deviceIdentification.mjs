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

    document.querySelector('#identifyDeviceNumber').innerHTML = data.userPosition;

    const identifyContainer = document.querySelector('.identifyContainer');
    const identifyWrapper = document.querySelector('.identifyWrapper');

    identifyWrapper.classList.add(this.animationEffects[0]);
    identifyWrapper.getBoundingClientRect();
    identifyContainer.getBoundingClientRect();
    identifyContainer.classList.add('identifyIn');

    setTimeout(() => {
      this.socket.emit('identifyDeviceReply');
      console.log('event sent');
    }, 2000);
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