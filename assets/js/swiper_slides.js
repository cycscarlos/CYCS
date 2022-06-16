var swiper = new Swiper(".slideshow2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,  
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    // delay: 800,
    delay: 2000,
    disableOnInteraction: false,
  },
});
