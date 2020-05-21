(()=>{

let beforeButton = document.querySelector('.example__button--before');
let afterButton = document.querySelector('.example__button--after');
let imageBefore = document.querySelector('.example__before');
let imageAfter = document.querySelector('.example__after');
let control = document.querySelector('.example__control');
let slider = document.querySelector('.example__slider');
let background = document.querySelector('.example__background');

beforeButton.addEventListener('click',()=>{
  control.classList.remove('example__control--after');
  slider.value = 0;
  onSliderMove();
});

afterButton.addEventListener('click',()=>{
  control.classList.add('example__control--after');
  slider.value = 100;
  onSliderMove();
});

slider.addEventListener('input', onSliderMove);

function onSliderMove() {
  imageBefore.style.width = slider.value+"%";
  background.style.backgroundPositionX = (100-slider.value)+"%";
  imageAfter.style.width = (100-slider.value)+"%";
}

})();