// pokemon arrow clicker

// calls out the button in html 
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// scrolls through the pokemon
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}


