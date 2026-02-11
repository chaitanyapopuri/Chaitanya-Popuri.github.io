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
const cards = document.querySelectorAll(".cf-card");
const track1 = document.querySelector(".cf-track1");
const leftBtn = document.querySelector(".cf-arrow.left");
const rightBtn = document.querySelector(".cf-arrow.right");

let index = 1; // center card

function updateCarousel() {
  cards.forEach((card, i) => {
    card.classList.remove("active", "side");

    if (i === index) {
      card.classList.add("active");
    } else {
      card.classList.add("side");
    }
  });

  const offset = (index - 1) * 250;
  track.style.transform = `translateX(-${offset}px)`;
}

/* Arrow Controls */

rightBtn.onclick = () => {
  index++;
  if (index >= cards.length) index = cards.length - 1;
  updateCarousel();
};

leftBtn.onclick = () => {
  index--;
  if (index < 0) index = 0;
  updateCarousel();
};

/* Init */
updateCarousel();
