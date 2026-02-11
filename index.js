const track = document.querySelector(".logo-track");
const left = document.querySelector(".arrow.left");
const right = document.querySelector(".arrow.right");

/* Speed control */
left.onclick = () => {
  track.style.animationDuration = "40s";
};

right.onclick = () => {
  track.style.animationDuration = "10s";
};

/* Reset speed */
setInterval(() => {
  track.style.animationDuration = "25s";
}, 3000);
