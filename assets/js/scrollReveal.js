//: SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  distance: "60px",
  duration: 4800,
  // reset: true,
});

sr.reveal(`.article`, {
  origin: "top",
  interval: 100,
});
// sr.reveal(`.sphere`, {
//   origin: "left",
//   interval: 300,
// });
