import io from 'socket.io-client';
import UserManagement from './modules/userManagement.mjs';
import DeviceMotion from './modules/deviceMotion.mjs';
import DeviceIdentification from './modules/deviceIdentification.mjs';
import Animation from './modules/animation.mjs';
import * as Utils from './modules/utils.mjs';

import '../scss/style.scss';

const debug = true;
const deviceType = Utils.detectDeviceType();
console.log(deviceType);

const socket = io({
                transportOptions: {
                  polling: {
                    extraHeaders: {
                      'deviceType': deviceType,
                    },
                  },
                },
              });

const userManagement = new UserManagement(socket, debug);
const deviceMotion = new DeviceMotion();
const deviceIdentification = new DeviceIdentification(socket, debug);

const playground = document.querySelector('#playground');
const animation = new Animation(playground);

userManagement.initListeners();
// deviceMotion.initListeners();
deviceIdentification.initListeners();