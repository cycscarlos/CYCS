// Define your tags in a JS array.
const myTags = [
  "BND",
  "Banco Maracaibo",
  "Abaco",
  "La Vivienda EAP",
  "Lagoven",
  "Procter & Gamble",
  "Alcasa",
  "Inverbanco",
  "Banco Caracas",
  "Registro Nacional Costa Rica",
  "Banco Principal",
  "Fivenez",
  "Banco Venezuela",
  "Interalumina",
  "Banco Exterior",
  "RCTV",
  "CANTV",
  "Banco Invercredito Bogota",
  "GN",
  "PTJ",
  "DISIP",
  "Base Naval Turiamo",
  "Policia Nacional Vargas",
  "DIEX",
  "C-COM",
  "Banco Fondo Común",
  "COMSAT",
  "Interbank",
  "Mi Casa EAP",
  "Miranda EAP",
  "Venezolana EAP",
  "Sisven",
  "Connectix",
  "Torre ABA",
  "Torre Torreon",
  "Torre La Castellana",
  "Fitven 2013",
  "Minci",
  "DESCA",
  "Cargill Venezuela",
  "Industrias Cegasa",
  "Condominio Los Tulipanes 3",
  "Posada Casa Manantial",
  "Red Franquicias Locatel",
  "Red Supermércados DíaDía",
  "Administradora Asiamérica",
  "Administradora Conadem",
  "Conadem",
  "Corporación STC",
  "Ferreteria Hercrami",
  "Hotel DUNES",
  "Inatur",
  "TV NotiMinuto",
  "Empresas Nucita",
  "Corporación Yambal",
  "VeneAsistencia",
];

// Render a default tag cloud.
// var tagCloud = TagCloud(".content", myTags);

// Config the tag cloud by overriding the default parameters
var tagCloud = TagCloud(".sphere", myTags, {
  // radius in px
  radius: 300,

  // animation speed
  // slow, normal, fast
  maxSpeed: "normal",
  initSpeed: "fast",

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  //   direction: 135,
  direction: 135,

  // interact with cursor move on mouse out
  //   keep: true,
  keep: false,
});

// This creates a basic cloud of words. If you want to change the color of words randomly after each reload, add this small JavaScript code at the end.
var colors = ["#34A853", "#FBBC05", "#4285F4", "#7FBC00", "FFBA01", "01A6F0"];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector(".sphere").style.color = random_color;
