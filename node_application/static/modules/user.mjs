export default class User {
  constructor(id, numberId, color, order, isCurrentClient) {
    this.id = id;
    this.numberId = numberId;
    this.color = color;
    this.order = order;
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
    const userNode = document.createElement('aricle');

    if (this.isCurrentClient) {
      userNode.classList.add('active');
    }
    if (!animated) {
      userNode.classList.add('show');
    }
    userNode.classList.add('device', 'otherUser');
    userNode.id = this.id;
    userNode.title = this.id;
    userNode.draggable = true;
    userNode.setAttribute('data-numberId', this.numberId);

    const deviceIcon = this.randomDeviceIcon();
    const userHtml = `
      <div class="userHeader">  
        <img class="deviceIcon" src="/icons/${deviceIcon}">
        <div class="userColorDot" style="background:${this.color}">${this.order}</div>
      </div>
      <p class="userName" style="border-color:${this.color};">User ${this.numberId}</p>`;
    userNode.innerHTML = userHtml;
    document.querySelector(this.userElementsContainer).appendChild(userNode);

    if (animated) {
      setTimeout(() => {
        document.getElementById(this.id).classList.add('show');
      }, 500);
    }
  }

  /**
   * adds user to map, key is used numberId
   * @param map map
   */
  addToMap(map) {
    map.set(this.numberId, this);
  }

  removeUserElement() {
    const elem = document.getElementById(`${this.id}`);

    // document.querySelector(`#${this.id}`); ist not valid
    // if id starts with a number/digit, querySelector produces an error

    /**
     * TODO: very dirty!
     * now it just removes element, if it's there.
     * --> not removing, when printDevices is first called.
     */
    if (elem) {
      elem.remove();
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
