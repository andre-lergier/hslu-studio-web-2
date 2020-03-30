import io from 'socket.io-client';
import UserManagement from './modules/userManagement.mjs';
import DeviceMotion from './modules/deviceMotion.mjs';
import DeviceIdentification from './modules/deviceIdentification.mjs';
import Animation from './modules/animation.mjs';
import * as Utils from './modules/utils.mjs';

import '../scss/style.scss';

const debug = true;
window.debug = debug;

const deviceType = Utils.detectDeviceType();

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
const deviceIdentification = new DeviceIdentification(socket, debug);

const playground = document.querySelector('#playground');
const animation = new Animation(socket, playground, 1, debug);

userManagement.initListeners();
deviceIdentification.initListeners();
animation.init();