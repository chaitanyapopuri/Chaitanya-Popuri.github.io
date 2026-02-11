/* Image List */
const images = [
  "image1.webp",
  "image2.webp",
  "image3.webp",
  "image4.webp"
];

const slidesContainer = document.getElementById("slides");

let index = 0;

/* Load Images into Slider */
function loadSlides() {
  images.forEach(function (src) {
    const img = document.createElement("img");
    img.src = src;
    slidesContainer.appendChild(img);
  });
}

/* Auto Slide Function */
function autoSlide() {
  index++;

  if (index >= images.length) {
    index = 0;
  }

  slidesContainer.style.transform =
    "translateX(-" + index * 100 + "%)";
}

/* Init */
window.onload = function () {
  loadSlides();
  setInterval(autoSlide, 3000); // change every 3 sec
};
