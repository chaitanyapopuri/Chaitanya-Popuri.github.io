const track = document.querySelector(".logo-track");

let speed = 20;

/* Change animation speed */
function setSpeed(value) {
  track.style.animationDuration = value + "s";
}

/* Arrow Controls */
document.querySelector(".arrow.right")
  .addEventListener("click", () => {
    setSpeed(5);   // faster
  });

document.querySelector(".arrow.left")
  .addEventListener("click", () => {
    setSpeed(40);  // slower / reverse feel
  });

/* Reset speed after click */
setInterval(() => {
  setSpeed(20);
}, 3000);
