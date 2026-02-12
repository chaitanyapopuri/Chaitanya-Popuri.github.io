
// window.addEventListener("DOMContentLoaded", () => {

//   const track = document.getElementById("cfTrack");
//   const cards = document.querySelectorAll(".cf-card");
//   const leftBtn = document.querySelector(".cf-arrow.left");
//   const rightBtn = document.querySelector(".cf-arrow.right");

//   if (!track || !cards.length) return;

//   let index = Math.floor(cards.length / 2); // start center

//   function updateCarousel() {

//     cards.forEach((card, i) => {
//       card.classList.remove("active");

//       if (i === index) {
//         card.classList.add("active");
//       }
//     });

//     const cardWidth = 260; // card + margin approx
//     const offset = (index * cardWidth) - (track.parentElement.offsetWidth / 2) + (cardWidth / 2);

//     track.style.transform = `translateX(-${offset}px)`;
//   }

//   /* ===== RIGHT ARROW ===== */
//   rightBtn.addEventListener("click", () => {
//     index++;

//     if (index >= cards.length) {
//       index = 0; // loop
//     }

//     updateCarousel();
//   });

//   /* ===== LEFT ARROW ===== */
//   leftBtn.addEventListener("click", () => {
//     index--;

//     if (index < 0) {
//       index = cards.length - 1; // loop back
//     }

//     updateCarousel();
//   });

//   updateCarousel();

// });


window.addEventListener("DOMContentLoaded", () => {

  const track = document.getElementById("cfTrack");
  const cards = document.querySelectorAll(".cf-card");
  const leftBtn = document.querySelector(".cf-arrow.left");
  const rightBtn = document.querySelector(".cf-arrow.right");

  if (!track || !cards.length) return;

  let index = 0;
  const cardWidth = 280; // width + gap

  function updateCarousel() {

    track.style.transform =
      `translateX(-${index * cardWidth}px)`;

    cards.forEach(card => card.classList.remove("active"));
    cards[index].classList.add("active");
  }

  /* RIGHT */
  rightBtn.addEventListener("click", () => {
    index++;

    if (index >= cards.length) {
      index = cards.length - 1;
    }

    updateCarousel();
  });

  /* LEFT */
  leftBtn.addEventListener("click", () => {
    index--;

    if (index < 0) {
      index = 0;
    }

    updateCarousel();
  });

  updateCarousel();

});




