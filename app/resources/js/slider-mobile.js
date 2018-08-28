var sliderMob = document.querySelector('#slider__m'),
sliderMobHeight = slider.offsetHeight,
sliderMobTop = sliderMob.getBoundingClientRect().top,
thumbMob = sliderMob.querySelector('.slider__m-pointer'),
thumbMobHeight = thumbMob.offsetHeight;

thumbMob.ondragstart = () => {return false;}

thumbMob.onmousedown = (e) => {
  sliderMob.style.position = 'relative';
  thumbMob.style.position = 'absolute';

  var thumbMobTop = thumb.getBoundingClientRect().top,
  thumbMobShift = e.pageY - thumbMobTop;

  document.onmousemove = (e) => {
    top = e.pageY - sliderMobTop - shift;
  }
}
