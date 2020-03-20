export default class DeviceIdentification {
  constructor(socket, debug) {
    this.socket = socket;
    this.debug = debug;
  }

  identifyDevice(data) {
    console.log('hello, I got pinged from ' + data.triggerSocketId);
    console.log(`myOrder is ${data.userPosition}`);

    document.querySelector('#deviceNumer').innerHTML = data.userPosition;

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