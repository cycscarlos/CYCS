//: SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  distance: "60px",
  duration: 4800,
  // reset: true,
});

sr.reveal(`.proveedores, .telco, .muro`, {
  origin: "top",
  interval: 100,
});

sr.reveal(`.galeria, .ctrlAcceso, .equipo`, {
  origin: "left",
  interval: 100,
});

sr.reveal(`.clients, .security, .servicesRD`, {
  origin: "right",
  interval: 100,
});
