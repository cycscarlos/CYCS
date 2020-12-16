const addListeners = (div) => {
  div.addEventListener("mouseenter", () => {
    div.classList.add("hover");
  });
  div.addEventListener("mouseleave", () => {
    div.classList.remove("hover");
  });
};

const container = document.querySelector(".container");
addListeners(container);

const allGalleryContainer = document.querySelectorAll(".gallery-container");
allGalleryContainer.forEach((galleryContainer) => {
  addListeners(galleryContainer);
});
