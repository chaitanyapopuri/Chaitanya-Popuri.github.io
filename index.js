
/* Your Uploaded Images */
const images = [
  "image1.webp",
  "image2.webp",
  "image3.webp",
  "image4.webp"
];

/* Pagination Settings */
let currentPage = 0;
const imagesPerPage = 2; // 2 images per page

function displayImages() {
  const gallery = document.getElementById("imageGallery");

  if (!gallery) return; // prevents null error

  gallery.innerHTML = "";

  const start = currentPage * imagesPerPage;
  const end = start + imagesPerPage;

  images.slice(start, end).forEach(function (src) {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
  });
}

function nextPage() {
  if ((currentPage + 1) * imagesPerPage < images.length) {
    currentPage++;
    displayImages();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    displayImages();
  }
}

/* Load images on page start */
window.onload = displayImages;


/* Initial Load */
displayImages();

