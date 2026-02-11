const track = document.getElementById("logoTrack");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

/* ===== ARROW SPEED CONTROL ===== */

leftArrow.onclick = () => {
  track.style.animationDuration = "40s";
};

rightArrow.onclick = () => {
  track.style.animationDuration = "10s";
};

/* Reset speed */
setInterval(() => {
  track.style.animationDuration = "25s";
}, 3000);

/* ===== REVERSE SCROLL TOGGLE ===== */

let reversed = false;

rightArrow.addEventListener("dblclick", () => {
  reversed = !reversed;

  if (reversed) {
    track.classList.add("reverse");
  } else {
    track.classList.remove("reverse");
  }
});

/* ===== MOBILE SWIPE / DRAG ===== */

let isDown = false;
let startX;
let scrollLeft;

const viewport = document.querySelector(".logo-viewport");

viewport.addEventListener("mousedown", e => {
  isDown = true;
  startX = e.pageX;
});

viewport.addEventListener("mouseleave", () => {
  isDown = false;
});

viewport.addEventListener("mouseup", () => {
  isDown = false;
});

viewport.addEventListener("mousemove", e => {
  if (!isDown) return;

  const walk = (e.pageX - startX) * 2;
  track.style.animationPlayState = "paused";
  track.style.transform =
    `translateX(${walk}px)`;
});

/* Touch support */
viewport.addEventListener("touchstart", e => {
  startX = e.touches[0].pageX;
});

viewport.addEventListener("touchmove", e => {
  const walk = e.touches[0].pageX - startX;
  track.style.animationPlayState = "paused";
  track.style.transform =
    `translateX(${walk}px)`;
});
