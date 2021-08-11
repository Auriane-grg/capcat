const sliderHome = () => {

  const slides = document.querySelectorAll('.carroussel-item');
  let index = 0;

  if (slides.length < 2) { return };

  setInterval(function(){
    if(index < 1){
      slides[index].classList.remove('active');
      index++;
      slides[index].classList.add('active');
    }
    else if (index === 1) {
      slides[index].classList.remove('active');
      index = 0;
      slides[index].classList.add('active');
    }
   }, 5000);




}

export { sliderHome }