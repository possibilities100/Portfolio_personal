// Typing effect for the home section
document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.querySelector(".typing-text span");
    const words = ["Web Designer", "Aspiring Cybersecurity Analyst"];
    let wordIndex = 0;
    let charIndex = 0;
    let typingSpeed = 100;
    let erasingSpeed = 50;
    let delayBetweenWords = 1000;

    function type() {
        if (charIndex < words[wordIndex].length) {
            typingText.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenWords);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
        }
    }

    setTimeout(type, 200); // Adjust the delay to start typing immediately on page load
});

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.right-arrow').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

document.querySelector('.left-arrow').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}
window.addEventListener('scroll', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const indicators = document.querySelectorAll('.carousel-indicators div');
    let currentIndex = 0;
    let autoPlayInterval = 3000; // Carousel rotates every 3 seconds

    document.querySelector('.right-arrow').addEventListener('click', nextSlide);
    document.querySelector('.left-arrow').addEventListener('click', prevSlide);

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        updateIndicators();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    // Adding swipe functionality for mobile users
    let startX = 0;
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        if (startX > endX + 50) {
            nextSlide(); // Swipe left
        } else if (startX < endX - 50) {
            prevSlide(); // Swipe right
        }
    });

    // Auto-Play functionality
    let autoPlay = setInterval(nextSlide, autoPlayInterval);

    // Pause on hover
    carousel.addEventListener('mouseover', () => {
        clearInterval(autoPlay);
    });

    carousel.addEventListener('mouseleave', () => {
        autoPlay = setInterval(nextSlide, autoPlayInterval);
    });

    // Allow clicking on indicators to jump to the corresponding slide
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
});

//Education Section
window.addEventListener('scroll', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
    });
});

