export default class DeviceIdentification {
  constructor() {

  }

  initListeners(){
    const identifyBtn = document.querySelector('#identifyDevices');
    identifyBtn.addEventListener('click', () => {
      console.log('staart');
    });
  }
}