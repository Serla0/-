const swiper = new Swiper('.big_swiper', {
    
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: {
            el: '.mini_swiper',
            slidesPerView: 5,
            loop: true,
        }
    }
  });

const sliderHeader = new Swiper('.slider_header', {
    loop: true,
    slideToClickedSlide: true,
      
    effect: 'flip',
    flipEffect: {
        limitRotation: true,
    },

    navigation: {
        nextEl:'.slider_header',
    },
});

