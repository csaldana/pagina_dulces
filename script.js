const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

document.querySelector('.carousel-button.next').addEventListener('click', () => {
    changeSlide(1);
});

document.querySelector('.carousel-button.prev').addEventListener('click', () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}


document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript cargado correctamente.");
    window.addEventListener('scroll', function() {
        const aboutSection = document.querySelector('.about-section');
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            document.querySelector('.about-image').classList.add('show');
            document.querySelector('.about-text').classList.add('show');
        }

        const chooseUsSection = document.querySelector('#por-que-elegirnos');

        if (sectionPosition < screenPosition) {
            document.querySelector('.choose-us-text').classList.add('show');
            document.querySelector('.choose-us-image').classList.add('show');
        }
    });


});


document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product-item');
    console.log( products );
    const showProducts = () => {
        products.forEach(product => {
            const productPosition = product.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (productPosition < screenPosition) {
                product.classList.add('show-product');
            }
        });
    };

    window.addEventListener('scroll', showProducts);
    showProducts();
});


const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Alternar clase "active" al hacer clic
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});