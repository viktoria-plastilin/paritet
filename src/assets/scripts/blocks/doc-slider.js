window.app.initDocSlider = () => {

  const swiper = new Swiper('.doc-slider', {
      navigation: {
        nextEl: '.doc-slider__prev',
        prevEl: '.doc-slider__next',
      },
      slidesPerView: 1.5,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2.5,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 100
        }
      }
  });


};

window.app.initDocSlider();