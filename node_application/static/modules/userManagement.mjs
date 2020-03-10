/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
import User from './user.mjs';

export default class UserManagement {
  constructor(socket) {
    this.localRegistredUsers = new Map(); // key = numberId
    this.userBuffer          = new Map(); // key = numberId
    this.socket = socket;
    this.userOrder = [];
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
      data.newConnectedUser.order,
      isCurrentClient,
    );

    this.userOrder = data.userOrder;

    // newUser.createUserElement();
    newUser.addToMap(this.localRegistredUsers); // localRegistredUsers.set(dataToSendToAll.numberId, newUser);
    newUser.addToMap(this.userBuffer); // this.userBuffer.set(newUser.order, newUser);

    // reconvert Array to map
    const connectedUsers = new Map(JSON.parse(data.connectedUsersArray));

    // add users, if not first client
    if (connectedUsers.size > 1) {
      for (const [key, value] of connectedUsers) {
        if (!this.localRegistredUsers.has(key)) {
          const prevUser = new User(
            value.socketId,
            value.numberId, // key
            value.color,
            value.order,
            false,
          );

          // prevUser.createUserElement();
          prevUser.addToMap(this.localRegistredUsers);
          prevUser.addToMap(this.userBuffer); // this.userBuffer.set(prevUser.order, prevUser);

          console.group(`added previous user ${key}`);
          console.log(`this.localRegistredUsers.size = ${this.localRegistredUsers.size}`);
          console.log(`this.localRegistredUsers.size = ${this.localRegistredUsers.size}`);
          console.groupEnd();
        }
      }
    }

    // if was disconnected/server restarted, and user itsself was not deleted
    if (this.localRegistredUsers.size > connectedUsers.size) {
      console.group('there are more local clients than on server!');
      console.log(`connectedUsers.size = ${connectedUsers.size}`);
      console.log(connectedUsers);
      console.log(this.localRegistredUsers);
      console.groupEnd();

      for (const [key, value] of this.localRegistredUsers) {
        if (!connectedUsers.has(key)) {
          this.deleteUser(key);
          console.log(`removed user ${key} because of disconnection`);
        }
      }
    }

    console.log('------- buffer before adding');
    console.log(this.userBuffer);
    console.log(this.userOrder);

    this.printDevices();
    this.userBuffer = new Map();
  }

  printDevices() {
    /* for (const [key, value] of this.localRegistredUsers) {
      value.removeUserElement();
    }

    const orderedUsers = new Map([...this.userBuffer.entries()].sort());
    for (const [key, value] of orderedUsers) {
      value.createUserElement(true);
    } */

    // if first user, just add element without regarding order
    /* if (this.userBuffer.size <= 1) {
      for (const [key, value] of this.localRegistredUsers) {
        value.removeUserElement();
      }
    } else { */

    // loop trough array order
    console.group('should add:');
    this.userOrder.forEach((value, index) => {
      // append just buffered ones
      if (this.userBuffer.has(value)) {
        console.log('---');
        console.log(value);

        let animated = false;
        console.log(`index = ${index}`);
        console.log(`this.userOrder.length = ${this.userOrder.length}`);
        if (index === this.userOrder.length - 1) {
          animated = true;
          console.log('animated!!');
        }

        let user = this.localRegistredUsers.get(value);
        user.createUserElement(animated);
        console.log(user);
      }
    });
    console.groupEnd();
    // }
  }

  userDisconnectUpdate(deletedUser) {
    this.deleteUser(deletedUser.deletedNumberId);
  }

  deleteUser(deletedNumberId) {
    const user = this.localRegistredUsers.get(deletedNumberId);
    user.removeUserElement();
    user.removeFromMap(this.localRegistredUsers);
  }

  initListeners() {
    this.socket.on('userConnectUpdate', this.userConnectUpdate.bind(this));

    this.socket.on('userDisconnectUpdate', this.userDisconnectUpdate.bind(this));
  }
}
