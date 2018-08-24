let slider = document.querySelector('#slider__d');

slider.ondragstart = () => {return false;}

slider.onmousedown = (e) => {
  console.log('down');
}
