const track = document.getElementById("carouselTrack");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let scrollSpeed = 0.4; // auto speed
let position = 0;
let isHovered = false;

/* Duplicate slides for infinite loop */
track.innerHTML += track.innerHTML;

/* Auto Scroll */
function animate() {
  if (!isHovered) {
    position += scrollSpeed;
    track.style.transform =
      `translateX(-${position}px)`;

    /* Reset for infinite illusion */
    if (position >= track.scrollWidth / 2) {
      position = 0;
    }
  }

  requestAnimationFrame(animate);
}
animate();

/* Arrow Controls */
const slideAmount = 300;

rightArrow.onclick = () => {
  position += slideAmount;
};

leftArrow.onclick = () => {
  position -= slideAmount;
  if (position < 0) position = 0;
};

/* Pause on Hover */
track.addEventListener("mouseenter", () => {
  isHovered = true;
});

track.addEventListener("mouseleave", () => {
  isHovered = false;
});

/* Drag / Swipe Support */
let isDown = false;
let startX;

track.addEventListener("mousedown", e => {
  isDown = true;
  startX = e.pageX;
});

track.addEventListener("mouseup", () => {
  isDown = false;
});

track.addEventListener("mousemove", e => {
  if (!isDown) return;
  const walk = (e.pageX - startX);
  position -= walk * 0.5;
  startX = e.pageX;
});

/* Mobile Touch */
track.addEventListener("touchstart", e => {
  startX = e.touches[0].pageX;
});

track.addEventListener("touchmove", e => {
  const walk = e.touches[0].pageX - startX;
  position -= walk * 0.5;
  startX = e.touches[0].pageX;
});
