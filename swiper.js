const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
swiperEl.initialize();