let slider = document.querySelector('#slider__d'),
sliderLeft = slider.getBoundingClientRect().left,
sliderWidth = slider.offsetWidth,
thumb = slider.querySelector('.slider__d-pointer'),
thumbWidth = thumb.offsetWidth,
thumbShift = thumbWidth/2,
point = slider.querySelector('.slider__d-item-label'),
pointWidth = point.offsetWidth,
pointShift = pointWidth/2,
left;

/* Функции */
/* Двигаем ползунок */
const thumbMove = (e) => {
  slider.style.position = 'relative';
  thumb.style.position = 'absolute';
  let thumbLeft = thumb.getBoundingClientRect().left,
  shift = e.pageX - thumbLeft;

  document.onmousemove = (e) => {
    left = e.pageX - sliderLeft - shift;
    if (left < (0 - thumbShift + pointShift)) {
      thumb.style.left = (0 - thumbShift + pointShift) + 'px';
    } else if (left > sliderWidth - thumbWidth + thumbShift - pointShift) {
      thumb.style.left = sliderWidth - thumbWidth + thumbShift - pointShift + 'px';
    } else {
      thumb.style.left = left + 'px';
    }
  }

  document.onmouseup = (e) => {
    /* - определяем свои координаты
      - соотносим с номерам интервала
      - делаем переход на соответствующую кнопку f(1,2,3,4) */
    intervals();
    choosePoint();
    moveToPoint(myPoint);
    document.onmousemove = null;
    document.onmouseup = null;
  }
}
/* /Двигаем ползунок */

/* Интервалы */
let interval = [],
pointsCoords = [];
const intervals = () => {
  let points = slider.querySelectorAll('.slider__d-item-label'),
  pointsLength = points.length;
  for (let i = 0; i < pointsLength; i++) {
    pointsCoords[i] = points[i].getBoundingClientRect().left - sliderLeft - pointShift;
  }
  for (let i = 0; i < pointsLength - 1; i++) {
    interval[i] = pointsCoords[i] + (pointsCoords[i + 1] - pointsCoords[i])/2;
  }
}
/* /Интервалы*/

/* Определяем в каком интервале находимся */
let myPoint;
const choosePoint = () => {
  if (left < interval[0]) {
    myPoint = 0;
  } else if (left > interval[0] && left < interval[1]) {
    myPoint = 1;
  } else if (left > interval[1] && left < interval[2]) {
    myPoint = 2;
  } else {
    myPoint = 3;
  }
};
/* /Определяем в каком интервале находимся */

/* Делаем переход к нужному пойнту */
const moveToPoint = (point) => {
  thumb.style.left = pointsCoords[point] - thumbShift + pointShift*2 + 'px';
}
/* /Делаем переход к нужному пойнту */


/* /Функции */



thumb.onmouseup = (e) => {
  let thumbLeft = thumb.getBoundingClientRect().left,
  shift = e.pageX - thumbLeft;
  left = e.pageX - sliderLeft - shift;
  intervals();
  choosePoint();
  moveToPoint();
}

/* Двигаем ползунок */
thumb.ondragstart = () => {return false;}
thumb.addEventListener('mousedown', thumbMove);
/* /Двигаем ползунок */

/* Клик на пойнт */
let sliderItem = slider.querySelectorAll('.slider__d-item');


/* /Клик на пойнт */
