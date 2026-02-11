const track = document.getElementById("carouselTrack");

let scrollAmount = 0;
const slideWidth = 272; // image width + gap

/* Arrow Controls */
function slideLeft() {
  scrollAmount -= slideWidth;
  track.style.transform =
    "translateX(-" + scrollAmount + "px)";
}

function slideRight() {
  scrollAmount += slideWidth;
  track.style.transform =
    "translateX(-" + scrollAmount + "px)";
}

/* Auto Scroll */
function autoScroll() {
  scrollAmount += 1; // smooth continuous scroll

  /* Reset for infinite loop */
  if (scrollAmount >= track.scrollWidth / 2) {
    scrollAmount = 0;
  }

  track.style.transform =
    "translateX(-" + scrollAmount + "px)";
}

/* Duplicate images for infinite effect */
function duplicateSlides() {
  track.innerHTML += track.innerHTML;
}

/* Init */
window.onload = function () {
  duplicateSlides();
  setInterval(autoScroll, 20); // speed
};
