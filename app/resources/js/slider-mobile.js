
const sliderMob = (e) => {

var sliderMob = document.querySelector('#slider__m'),
sliderMobHeight = sliderMob.offsetHeight,
sliderMobTop = sliderMob.getBoundingClientRect().top,
thumbMob = sliderMob.querySelector('.slider__m-pointer'),
thumbMobHeight = thumbMob.offsetHeight,
itemMob = sliderMob.querySelector('.slider__m-item-label'),
itemMobHeight = itemMob.offsetHeight;

thumbMob.ondragstart = () => {return false;}

thumbMob.onmousedown = (e) => {
  sliderMob.style.position = 'relative';
  thumbMob.style.position = 'absolute';

  var thumbMobTop = thumbMob.getBoundingClientRect().top,
  thumbMobShift = e.pageY - thumbMobTop;

  document.onmousemove = (e) => {
    var top = e.pageY - sliderMobTop - thumbMobShift;

    if (top < 0 - thumbMobHeight/2) {
      thumbMob.style.top = 0 - thumbMobHeight/2 + 'px';
    } else if (top > sliderMobHeight - thumbMobHeight/2 - itemMobHeight/2) {
      thumbMob.style.top = sliderMobHeight - thumbMobHeight/2 - itemMobHeight/2 + 'px';
    } else {
      thumbMob.style.top = top + 'px';
    }
  }

  document.onmouseup = (e) => {
    mouseUp(e);

    document.onmousemove = null;
    document.onmouseup = null;
  }
}


}


const clog = () => {
  console.log('sdfsdfsdfsdf');
}
