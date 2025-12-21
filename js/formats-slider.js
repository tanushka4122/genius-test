const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true, //безкінечне гортання, поки не дійдем до кінця
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
    },
  },
  // це крапочки внизу
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button', // властивість задає, який саме клас буде застосовуватися,
    // при цьому не треба ставити крапочку перед назвою класу
    bulletActiveClass: 'pagination__button--active',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel-button.next', //звертання до класу next - через крапку: .next
    prevEl: '.carousel-button.prev',
  }, //це стрілочки
});
