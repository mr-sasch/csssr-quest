const sliderMobFunc = (e) => {
  // Объяявляем глобальную переменнную для координат указателя/thumb`а
  var coords;
  // И другие глобальные для функции переменные
  var sliderMob = document.querySelector('#slider__m'),
  sliderMobHeight = sliderMob.offsetHeight,
  sliderMobTop = sliderMob.getBoundingClientRect().top,
  thumbMob = sliderMob.querySelector('.slider__m-pointer'),
  thumbMobHeight = thumbMob.offsetHeight,
  itemMob = sliderMob.querySelector('.slider__m-item-label'),
  itemMobHeight = itemMob.offsetHeight;

  // Определяем, на чем совершено действие

  // Функция движения ползунка
  const move = () => {

    // Изменяем значение переменной с координатами
    coords = ;
  }

  // Функция клика по пойнту
  const clickPoint = () => {

    // Изменяем значение переменной с координатами
    coords = ;
  }

  // Функция при поднятии кнопки(определение координат, интервалов, передвижение ползунка)
  const mouseUpMob = () => {

  }




  thumbMob.ondragstart = () => {return false;}

  thumbMob.onmousedown = (e) => {
    sliderMob.style.position = 'relative';
    thumbMob.style.position = 'absolute';

    var thumbMobTop = thumbMob.getBoundingClientRect().top,
    thumbMobShift = e.pageY - thumbMobTop;

    document.onmousemove = (e) => {
      var top = e.pageY - sliderMobTop - thumbMobShift,
      topStyle;


      if (top < 0 - thumbMobHeight/2) {
        topStyle = 0 - thumbMobHeight/2;
      } else if (top > sliderMobHeight - thumbMobHeight/2 - itemMobHeight/2) {
        topStyle = sliderMobHeight - thumbMobHeight/2 - itemMobHeight/2;
      } else {
        topStyle = top;
      }
      thumbMob.style.top = topStyle + 'px';
      // console.log(topStyle);
      document.onmouseup = (e) => {

        document.onmousemove = null;
        document.onmouseup = null;
        console.log(topStyle);
        return topStyle;
      }
    }

    // document.onmouseup = (e) => {
    //
    //   // mouseUpMob(e);
    //
    //   document.onmousemove = null;
    //   document.onmouseup = null;
    //   // return topStyle;
    // }
  }

}

const mouseUpMob = () => {


  document.onmouseup = (e) => {

    var itemsArr = [],
    items = document.querySelectorAll('.slider__m-item-label'),
    sliderMob = document.querySelector('#slider__m'),
    sliderMobTop = sliderMob.getBoundingClientRect().top,
    thumbMob = sliderMob.querySelector('.slider__m-pointer'),
    thumbMobHeight = thumbMob.offsetHeight,
    target = e.target;

    /* Массив с координатами */
    var itemCoords = [];
    for (let i = 0; i < items.length; i++) {
      itemCoords[i] = items[i].getBoundingClientRect().top - sliderMobTop;
    }
    console.log('itemCoords', itemCoords);
    /* /Массив с координатами */

    /* Массив с интервалами */
    var intervalFrom = [],
    intervalTo = [];
    for (let i = 0; i < items.length; i++) {
      if (i === 0) {
        intervalFrom[i] = -10;
        intervalTo[i] = itemCoords[i] + (itemCoords[i + 1] - itemCoords[i]) / 2;
      } else if (i === (items.length - 1)) {
        intervalFrom[i] = itemCoords[i] - (itemCoords[i] - itemCoords[i - 1]) / 2;
        intervalTo[i] = itemCoords[i];
      } else {
        intervalFrom[i] = itemCoords[i] - (itemCoords[i] - itemCoords[i - 1]) / 2,
        intervalTo[i] = itemCoords[i] + (itemCoords[i + 1] - itemCoords[i]) / 2;
      }
    }
    console.log('intervalFrom', intervalFrom);
    console.log('intervalTo', intervalTo);
    /* /Массив с интервалами */

    /* Массив объектов с координатами и интервалами */
    for (let i = 0; i < items.length; i++) {
      itemsArr[i] = {
        id: i + 1,
        coords: itemCoords[i],
        intFrom: intervalFrom[i],
        intTo: intervalTo[i]
      }
    }
    /* /Массив объектов с координатами и интервалами */

    /* Проверка на соответствие интервала */
    var thumbMobTop = thumbMob.getBoundingClientRect().top, // этот дубляж убрать
    thumbMobShift = e.pageY - thumbMobTop,
    topStatic = target.getBoundingClientRect().top;

    for (let i = 0; i < items.length; i++) {
      console.log('itemsArr', itemsArr[i]);
      console.log('topStatic', topStatic);
      if ((topStatic >= itemsArr[i].intFrom) && (topStatic < itemsArr[i].intTo)) {
        thumbMob.style.top = itemsArr[i].coords - thumbMobHeight/2 + 1 + 'px';
        console.log('точка', itemsArr[i].id);
        break;
      }
    }
    /* /Проверка на соответствие интервала */


    console.log('Полные данные', itemsArr);
  }



}
