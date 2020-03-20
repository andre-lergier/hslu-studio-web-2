export default class User {
  constructor(id, numberId, color, deviceType, isCurrentClient) {
    this.socketId = id;
    this.numberId = numberId;
    this.color = color;
    this.deviceType = deviceType;
    this.isCurrentClient = isCurrentClient;

    this.userElementsContainer = '.connectedDevices';
    this.deviceIcons = { // static
      smartphone: 'smartphone.svg',
      notebook: 'notebook.svg',
      desktop: 'desktop.svg',
    };
  }

  randomDeviceIcon() {
    const keys = Object.keys(this.deviceIcons);
    return this.deviceIcons[keys[keys.length * Math.random() << 0]];
  };

  createUserElement(animated) {
    const userNode = document.createElement('article');

    if (this.isCurrentClient) {
      userNode.classList.add('currentUser');
    } else {
      userNode.classList.add('otherUser');
    }
    if (!animated) {
      userNode.classList.add('show');
    }

    userNode.classList.add('device');
    userNode.id = this.socketId;
    userNode.title = this.socketId;
    userNode.draggable = true;
    userNode.setAttribute('data-numberId', this.numberId);
    userNode.setAttribute('data-socketId', this.socketId);

    const deviceIcon = this.randomDeviceIcon();
    const userHtml = `
      <div class="userHeader">  
        <img class="deviceIcon" draggable="false" src="/icons/${this.deviceType}.svg">
        <div class="userColorDot" style="background:${this.color}"></div>
      </div>
      <p class="userName" style="border-color:${this.color};">User ${this.numberId}</p>`;
    userNode.innerHTML = userHtml;
    document.querySelector(this.userElementsContainer).appendChild(userNode);

    if (animated) {
      setTimeout(() => {
        document.getElementById(this.socketId).classList.add('show');
      }, 500);
    }
  }

  /**
   * adds user to map, key is used numberId
   * @param map map
   */
  addToMap(map) {
    map.set(this.socketId, this);
  }

  removeUserDOMElement() {
    const elem = document.getElementById(`${this.socketId}`);
    // document.querySelector(`#${this.socketId}`); ist not valid
    // if id starts with a number/digit, querySelector produces an error

    if (elem) {
      elem.remove();
    } else {
      console.warn(`element to remove not found: ${this.socketId}`);
    }
  }

  /**
   * removes user from map, where key is numberId
   * @param map map
   */
  removeFromMap(map) {
    map.delete(this.numberId);
  }
}
