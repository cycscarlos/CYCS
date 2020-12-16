var swiper = new Swiper(".slideshow2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  direction: "horizontal",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
