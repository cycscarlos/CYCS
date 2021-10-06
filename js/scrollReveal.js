//: SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

// sr.reveal(`.swiper-container`, {
//   origin: "right",
//   interval: 10,
// });

sr.reveal(
  `.home__data, .home__social-link, .home__info,         
           .experience__data, .experience__overlay,
           .place__card,           
           .clientes__content,
           .footer__data, .footer__rights`,
  {
    origin: "top",
    interval: 100,
  }
);

sr.reveal(
  `.about__data, 
           .video__description,
           .subscribe__description`,
  {
    origin: "left",
  }
);

sr.reveal(
  `.about__img-overlay, 
           .video__content,
           .subscribe__form`,
  {
    origin: "right",
    interval: 100,
  }
);
