const sliderHome = () => {

  const slides = document.querySelectorAll('.carroussel-item');
  let index = null;
  const leftBtn = document.querySelector('.swiper-button-prev');
  const rightBtn = document.querySelector('.swiper-button-next');
  let active = document.querySelector('.active');


  if (slides.length < 2) { return };

  slides.forEach((item) => { 
    item.number = index + 1;
    index ++; 
  })


  const changeSlideRight = () => {

    if (active === slides[slides.length - 1]) {
        active.classList.remove('active');
        slides[0].classList.add('active');
        active = document.querySelector('.active');
    } else {
      active.classList.remove('active');
      slides[active.number].classList.add('active');
      active = document.querySelector('.active');
    }

  }

  const changeSlideLeft = () => {

    if (active === slides[0]) {
        active.classList.remove('active');
        slides[slides.length - 1].classList.add('active');
        active = document.querySelector('.active');
    } else {
      active.classList.remove('active');
      slides[active.number - 2].classList.add('active');
      active = document.querySelector('.active');
    }

  }

setInterval(changeSlideRight, 5000);



  leftBtn.addEventListener('click', () => {
    changeSlideLeft();
  });

  rightBtn.addEventListener('click', () => {
    changeSlideRight();
  });



}

export { sliderHome }