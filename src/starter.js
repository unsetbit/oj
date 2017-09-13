import './app.js';

export default function() {
  document.body.classList.add('loaded');
/*
  const element = document.querySelector('.flags');
  const turkishFlag = element.querySelector('#TurkishFlag');
  const usFlag = element.querySelector('#USFlag');
  const turkishFlagMask = element.querySelector('#TurkishFlagMask polygon');
  const usFlagMask = element.querySelector('#USFlagMask polygon');

  function scaleSize(element, amount) {
    const oldWidth = element.width.baseVal.value;
    const oldHeight = element.height.baseVal.value;
    const oldX0 = element.x.baseVal.value;
    const oldY0 = element.y.baseVal.value;
    const oldX1 = oldX0 + oldWidth;
    const oldY1 = oldY0 + oldHeight;

    const newWidth = oldWidth * amount;
    const newHeight = oldHeight * amount;
    const newX0 = oldX0 - (newWidth - oldWidth) / 2;
    const newY0 = oldY0 - (newHeight - oldHeight) / 2;

    element.width.baseVal.value = newWidth;
    element.height.baseVal.value = newHeight;
    element.x.baseVal.value = newX0;
    element.y.baseVal.value = newY0;
  }

  function translatePoints(element, x, y) {
    for (let i = 0; i < element.points.length; i++) {
      const point = element.points[i];
      point.x += x;
      point.y += y;
    }
  }

  function translateElement(element, x, y) {
    if (element.transform) {
      element.setAttribute('transform', 'translate(' + x + ', ' + y + ')');
    } else {
      element.x.baseVal.value += x;
      element.y.baseVal.value += y;
    }
  }

  function withdrawFlags() {
    document.querySelectorAll('image, polygon').forEach(function (element) {
      element.style.transition = 'all 1s ease-out';
    });

    translateElement(turkishFlag, turkishFlag.width.baseVal.value, 0);
    translateElement(turkishFlagMask, turkishFlag.width.baseVal.value, 0);

    translateElement(usFlag, -1 * usFlag.width.baseVal.value, 0);
    translateElement(usFlagMask, -1 * usFlag.width.baseVal.value, 0);
  }

  turkishFlag.addEventListener("click", function (event) {
    withdrawFlags();
    setTimeout(() => {
      element.parentNode.removeChild(element);
    }, 1000);
  }, false);

  usFlag.addEventListener("click", function (event) {
    withdrawFlags();
    setTimeout(() => {
      element.parentNode.removeChild(element);
    }, 1000);
  }, false);

  turkishFlag.addEventListener("mouseenter", function (event) {
    scaleSize(turkishFlag, 1.03);
    translateElement(turkishFlagMask, 0, 0);
    translateElement(usFlag, -10, 0);
    translateElement(usFlagMask, -10, 0);
  }, false);

  turkishFlag.addEventListener("mouseleave", function (event) {
    scaleSize(turkishFlag, 1 / 1.03);
    translateElement(turkishFlagMask, 0, 0);
    translateElement(usFlag, 0, 0);
    translateElement(usFlagMask, 0, 0);
  }, false);

  usFlag.addEventListener("mouseenter", function (event) {
    scaleSize(usFlag, 1.03);
    translateElement(usFlagMask, 10, 0);
    translateElement(turkishFlag, 25, 0);
    translateElement(turkishFlagMask, -10, 0);
  }, false);

  usFlag.addEventListener("mouseleave", function (event) {
    scaleSize(usFlag, 1 / 1.03);
    translateElement(usFlagMask, 0, 0);
    translateElement(turkishFlag, 15, 0);
    translateElement(turkishFlagMask, 0, 0);
  }, false);

  window.resize = function() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    const newRatio = newWidth / newHeight;

    const oldWidth = element.width.baseVal.value;
    const oldHeight = element.height.baseVal.value;
    const oldRation = oldWidth / oldHeight;

    const growthWidth = newWidth / oldWidth;
    const growthHeight = newHeight / oldHeight;

    function setSize(element, width, height) {
      element.setAttribute('width', width);
      element.setAttribute('height', height);
    }

    setSize(element, newWidth, newHeight);

    function getAdjustedWidth(element, scalar) {
      const currentWidth = element.width.baseVal.value;
      return currentWidth * scalar;
    }

    function getAdjustedHeight(element, scalar) {
      const currentHeight = element.height.baseVal.value;

      currentHeight * scalar;
      return currentHeight * scalar;
    }

    const childrenWithSize = element.querySelectorAll('[width],[height]');
    childrenWithSize.forEach(function(child) {
      const childWidth = child.width.baseVal.value;
      const childHeight = child.height.baseVal.value;

      const width = childWidth * (newHeight / childHeight);
      const height = newHeight;

      const x0 = child.x.baseVal.value;
      const y0 = child.y.baseVal.value;
      const x1 = x0 + width;
      const y1 = y0 + height;

      if (child.getAttribute('pin-right') && width < newWidth) {
        child.x.baseVal.value += newWidth - width;
      }

      setSize(child, width, height);
    });

    const childrenWithPoints = element.querySelectorAll('[points]');
    childrenWithPoints.forEach((child) => {
      let furthestRight = child.points[0];

      for (let i = 0; i < child.points.length; i++) {
        const point = child.points[i];

        if (furthestRight.x < point.x) {
          furthestRight = point;
        }
      }

      let shiftX = 0;
      if (child.getAttribute('pin-right')) {
        shiftX = oldWidth - furthestRight.x;
      }

      for (let i = 0; i < child.points.length; i++) {
        const point = child.points[i];
        point.x *= growthWidth;
        point.y *= growthHeight;
        point.x += shiftX;
      }
    });

    console.log(childrenWithPoints);
    console.log(growthWidth, growthHeight, newWidth, oldWidth);
  };

  window.resize();
  */
}
