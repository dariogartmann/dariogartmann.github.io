let timer;
let currentSlide;
let slideItems;
let dots;
let totalSlides;

document.addEventListener("DOMContentLoaded", function(event) {
    initSlider();    
});

function initSlider() {
    slideItems = document.querySelectorAll('.home_slider_item');
    dots = document.querySelectorAll('.hsi_dot');
    totalSlides = slideItems.length;$
    currentSlide = 0;

    console.log("Initiating Slider...");

    if(slideItems.length == 0){
        console.log("No Slider on this page.");
        return;
    }

    console.log("Slider initiated");


    dots.forEach(dot => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();

            showSlide(dot.getAttribute('data-projectindex'));
        });
    });

    clearTimeout(timer);
    showSlide(currentSlide);
}

function showSlide(slideIndex) {
    let newSlide = slideItems[slideIndex];

    slideItems.forEach(item => {
        item.classList.remove("active");
    });

    newSlide.classList.toggle("active");

    currentSlide = slideIndex;

    clearTimeout(timer);
    timer = setTimeout(() => nextSlide(), 5000);

    updateDots();
}

function updateDots() {
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[currentSlide].classList.toggle('active');
}

function nextSlide() {
    if(currentSlide == totalSlides - 1) {
        showSlide(0);
    }else{
        showSlide(currentSlide + 1);
    }
}