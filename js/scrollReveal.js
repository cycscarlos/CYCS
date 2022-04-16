//: SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  distance: "60px",
  duration: 4800,
  // reset: true,
});

sr.reveal(`.cards, .security, .muro, .footer`, {
  origin: "top",
  interval: 100,
});

sr.reveal(`.ctrlAcceso, .equipo`, {
  origin: "left",
  interval: 100,
});

sr.reveal(`.telco, .servicesRD`, {
  origin: "right",
  interval: 100,
});

// sr.reveal(
//   `.about__img-overlay,
//            .video__content,
//            .subscribe__form`,
//   {
//     origin: "right",
//     interval: 100,
//   }
// );
