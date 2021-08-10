import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const instaSection= () => {

  var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 3,
    slideToClickedSlide: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });;



}

export { instaSection }