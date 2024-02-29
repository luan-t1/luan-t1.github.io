document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slider-image");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach((slide) => slide.style.display = "none");
        dots.forEach((dot) => dot.classList.remove("active"));
        slides[n].style.display = "block";
        dots[n].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function currentSlideIndex(n) {
        showSlide(n);
        currentSlide = n;
    }

    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => currentSlideIndex(index));
    });

    showSlide(0);
});

document.addEventListener("DOMContentLoaded", function() {
    const banners = document.querySelector('.banners');
    const slides = document.querySelectorAll('.banner-img');
    const prevBtn = document.querySelector('.banner-prev');
    const nextBtn = document.querySelector('.banner-next');
    const dots = document.querySelectorAll('.dot-banner');

    let currentIndex = 0;

    function showSlide(index) {
        currentIndex = index;
        banners.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    showSlide(currentIndex);
});