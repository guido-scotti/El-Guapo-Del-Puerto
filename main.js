/// ---- CARRUSEL DE FOTOS ----
const images = document.querySelectorAll('.carrusel-img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let current = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % images.length;
  showImage(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});

// Mostrar la imagen inicial
showImage(current);

/// ---- AGRANDADO DE IMAGEN ----
