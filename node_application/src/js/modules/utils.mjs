export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

/**
 * check if iOS device
 */
export const isIos = () => {
  const iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod',
  ];

  if (navigator.platform) { // !!navigator.platform
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()) {
        return true;
      }
    }

    return false;
  }
};

/**
 * check if touch device
 */
export const isTochDevice = () => {
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

  const mq = (query) => {
    return window.matchMedia(query).matches;
  }

  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}

export const detectDeviceType = () => {
  const screenWidth = window.screen.availWidth;
  const screenHeight = window.screen.availHeight;

  let largerSide;
  if (screenWidth > screenHeight) {
    largerSide = screenWidth;
  } else {
    largerSide = screenHeight;
  }

  let deviceType;
  if(largerSide < 850) {
    deviceType = 'smartphone';
  } else {
    if (isTochDevice()) {
      deviceType = 'tablet';
    } else {
      if (largerSide < 1800) {
        deviceType = 'notebook';
      } else {
        deviceType = 'desktop';
      }
    }
  }
  return deviceType;
}

export const removeElementFromArray = (array, element) => {
  const index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
    return true;
  }
  return false;
}
