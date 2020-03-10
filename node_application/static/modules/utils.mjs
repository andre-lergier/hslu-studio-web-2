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
