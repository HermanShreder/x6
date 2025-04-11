let current = 0;
const slides = document.querySelectorAll('.carousel img');

function showNextSlide() {
  slides[current].style.display = 'none';
  current = (current + 1) % slides.length;
  slides[current].style.display = 'block';
}

slides.forEach((slide, i) => {
  slide.style.display = i === 0 ? 'block' : 'none';
});

setInterval(showNextSlide, 4000);
