//: SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  distance: "60px",
  duration: 4800,
  // reset: true,
});

sr.reveal(`.texto`, {
  origin: "top",
  interval: 100,
});
sr.reveal(`.scrollDown`, {
  origin: "left",
  interval: 300,
});
