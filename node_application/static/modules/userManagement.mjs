/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
import User from './user.mjs';

export default class UserManagement {
  constructor(socket, debug) {
    this.localRegistredUsers = new Map(); // key = socketId
    this.userBuffer          = new Map(); // key = socketId
    this.socket = socket;
    this.userOrder = [];
    this.debug = debug;

    this.deviceDomElementSelector = '.device';
    this.connectedDevicesDomSelector = '.connectedDevices';
  }

  /**
   * function to be called when new user gets connected
   * @param dataToSendToAll: object {clientsCount,socketId,numberId,color,connectedUsersArray}
   */
  userConnectUpdate(data) {
    let isCurrentClient = false;

    // add new logged in user to dom and localRegistredUsers
    if (this.socket.id === data.newConnectedUser.socketId) {
      isCurrentClient = true;
    }

    const newUser = new User(
      data.newConnectedUser.socketId,
      data.newConnectedUser.numberId,
      data.newConnectedUser.color,
      isCurrentClient,
    );

    this.userOrder = data.userOrder;

    newUser.addToMap(this.localRegistredUsers); // localRegistredUsers.set(dataToSendToAll.numberId, newUser);
    newUser.addToMap(this.userBuffer); // this.userBuffer.set(newUser.order, newUser);

    // reconvert Array to map
    const connectedUsers = new Map(JSON.parse(data.connectedUsersArray));

    if(this.debug) {
      console. groupCollapsed('userConnectUpdate');
      console.log(`connectedUsers:`);
      console.log(connectedUsers);
      console.log(`localRegistredUsers:`);
      console.log(this.localRegistredUsers);
      console.log(`this.userOrder:`);
      console.log(this.userOrder);
      console.groupEnd();
    }

    // add previous users, if there are more on server than on client
    if (connectedUsers.size > 1) { // this.localRegistredUsers.size
      for (const [key, value] of connectedUsers) {
        if (!this.localRegistredUsers.has(key)) {
          const prevUser = new User(
            value.socketId, // key
            value.numberId,
            value.color,
            false,
          );

          // prevUser.createUserElement();
          prevUser.addToMap(this.localRegistredUsers);
          prevUser.addToMap(this.userBuffer); // this.userBuffer.set(prevUser.order, prevUser);

          if(this.debug) {
            console. groupCollapsed(`added previous user ${key}`);
            console.log(prevUser);
            console.log(`this.localRegistredUsers.size = ${this.localRegistredUsers.size}`);
            console.groupEnd();
          }
        }
      }
    }

    // if was disconnected/server restarted, and user itsself was not deleted (more local users)
    if (this.localRegistredUsers.size > connectedUsers.size) {
      if(this.debug) {
        console. groupCollapsed('there are more local clients than on server!');
        console.log(`connectedUsers.size = ${connectedUsers.size}`);
        console.log(connectedUsers);
        console.log(this.localRegistredUsers);
        console.groupEnd();
      }

      for (const [key, value] of this.localRegistredUsers) {
        if (!connectedUsers.has(key)) {
          this.deleteUser(key);
          console.log(`removed user ${key} because of disconnection`);
        }
      }
    }

    this.printDevices();
    this.userBuffer = new Map();
  }

  printDevices() {
    if(this.debug) {
      console. groupCollapsed('add to DOM:');
    }
    this.userOrder.forEach((value, index) => {
      // append just buffered ones
      if (this.userBuffer.has(value)) {
        let animated = false;

        // animate last insert
        if (index === this.userOrder.length - 1) {
          animated = true;
        }

        let user = this.localRegistredUsers.get(value);
        user.createUserElement(animated);

        if(this.debug) {
          console.log(`id (value) = ${value}`);
          console.log(`index (wie order) = ${index}`);
          console.log(`this.userOrder.length = ${this.userOrder.length}`);
          console.log(user);
        }
      }
    });
    if(this.debug) {
      console.groupEnd();
    }

    this.initUserElementListeners();
  }

  printDevicesAfterReorder() {
    this.userOrder.forEach((value, index) => {
      const user = this.localRegistredUsers.get(value);
      console.log(user);
      user.createUserElement(false);
    });

    this.initUserElementListeners();
  }

  userDisconnectUpdate(data) {
    this.userOrder = data.userOrder;
    this.deleteUser(data.deletedUser.socketId);
  }

  deleteUser(socketId) {
    const user = this.localRegistredUsers.get(socketId);
    user.removeUserDOMElement();
    user.removeFromMap(this.localRegistredUsers);
  }

  orderUpdate(newOrder) {
    this.userOrder = newOrder;

    const connectedDevices = document.querySelector(this.connectedDevicesDomSelector);
    connectedDevices.classList.add('reordering');

    // remove dom-element after hide animation
    setTimeout(() => {
      const userElements = document.querySelectorAll(this.deviceDomElementSelector);
      Array.from(userElements).forEach((userElement) => {
        userElement.remove();

        if(this.debug) {
          console.groupCollapsed(`removed ${userElement.id} from dom because of reordering`);
          console.log(userElement);
          console.groupEnd();
        }
      });

      this.printDevicesAfterReorder();
      setTimeout(() => {
        connectedDevices.classList.remove('reordering');
      }, 100);
    }, 350);
  }

  /**
   * drag element:
   * - dragstart
   * 
   * target container:
   * - drop
   * - dragover
   */
  onDragStart(e) {
    // currentTarget is important - otherwise target could be the device icon
    const userElement = e.currentTarget;
  
    userElement.classList.add('dragging');
    // e.dataTransfer.setData("text/plain", e.currentTarget.id);

    // must define on dragstart
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', userElement.outerHTML);
    e.dataTransfer.setData('text', userElement.id);
  
    if(this.debug) {
      console.groupCollapsed('onDragStart');
      console.log('e.target');
      console.log(e.target);

      console.log('e.currentTarget');
      console.log(e.currentTarget);
      console.log(userElement.outerHTML);
      console.log(e.currentTarget.id);
      console.groupEnd();
    }
  }

  // remove style changing classes
  onDragEnd(e) {
    const userElement = e.currentTarget;
    userElement.classList.remove('dragging');

    const userElements = document.querySelectorAll(this.deviceDomElementSelector);
    Array.from(userElements).forEach((userElement) => {
      userElement.classList.remove('draggingOver');
    });

    const dragOverContainer = document.querySelector(this.connectedDevicesDomSelector);
    dragOverContainer.classList.remove('draggingOver');
  }

  onDragOverConnectedDevices(e) {
    e.preventDefault();

    const dragOverContainer = e.currentTarget;
    dragOverContainer.classList.add('draggingOver');
  }

  onDragLeaveConnectedDevices(e) {
    const dragOverContainer = e.currentTarget;
    dragOverContainer.classList.remove('draggingOver');
  }

  onDropOverConnectedDevices(e) {
    e.preventDefault();
    e.stopPropagation();

    e.dataTransfer.dropEffect = 'move';
    const transferredHTML = e.dataTransfer.getData('text/html');

    // detect target device element (e.target could be just a <p>)
    let targetElement = e.target;
    do {
      if (targetElement.classList && targetElement.classList.contains(this.deviceDomElementSelector.slice(1))) {
        targetElement = targetElement;
        break;
      }
      targetElement = targetElement.parentNode;
    } while (targetElement);

    // this inserts the source element after the target element
    // magically it removes the original!
    const sourceElement = document.getElementById(e.dataTransfer.getData('text'));
    if(targetElement){
      targetElement.before(sourceElement);
    } else {
      return;
    }

    const dragOverContainer = document.querySelector(this.connectedDevicesDomSelector);
    let newOrder = [];
    dragOverContainer.childNodes.forEach((userDevice) => {
      newOrder.push(userDevice.id);
    });

    /* remove null / text from array
     * see https://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
     * damit Element in Array bleibt, muss Funktion true zurückgeben
     */
    newOrder = newOrder.filter(el => el); // wie (e) => {return el;}
    this.userOrder = newOrder;
    this.socket.emit('orderUpdate', newOrder);

    if(this.debug) {
      console.log('old order:')
      console.log(this.userOrder);
      console.log('new order:')
      console.log(newOrder);

      console.groupCollapsed('onDropOverConnectedDevices');
      console.log('e.target');
      console.log(e.target);
      console.log('e');
      console.log(e);
      console.log('targetElement');
      console.log(targetElement);
      console.log('sourceElement');
      console.log(sourceElement);
      console.groupEnd();
    }
  }

  onDragEnterUserElement(e) {
    const userElement = e.currentTarget;
    userElement.classList.add('draggingOver');
  }

  onDragLeaveUserElement(e) {
    const userElement = e.currentTarget;
    userElement.classList.remove('draggingOver');
  }

  initUserElementListeners() {
    const userElements = document.querySelectorAll(this.deviceDomElementSelector);

    Array.from(userElements).forEach((userElement) => {
      userElement.addEventListener('dragstart', this.onDragStart.bind(this));
      userElement.addEventListener('dragend', this.onDragEnd.bind(this));

      userElement.addEventListener('dragover', this.onDragEnterUserElement.bind(this));
      userElement.addEventListener('dragleave', this.onDragLeaveUserElement.bind(this));
    });
  }

  initListeners() {
    this.socket.on('userConnectUpdate', this.userConnectUpdate.bind(this));
    this.socket.on('userDisconnectUpdate', this.userDisconnectUpdate.bind(this));
    this.socket.on('orderUpdate', this.orderUpdate.bind(this));

    const dragOverContainer = document.querySelector(this.connectedDevicesDomSelector);
    dragOverContainer.addEventListener('dragover', this.onDragOverConnectedDevices.bind(this));
    dragOverContainer.addEventListener('dragleave', this.onDragLeaveConnectedDevices.bind(this));
    dragOverContainer.addEventListener('drop', this.onDropOverConnectedDevices.bind(this));

    this.initUserElementListeners();
  }
}
