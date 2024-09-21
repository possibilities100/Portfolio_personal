// Typing effect for the home section
document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.querySelector(".typing-text span");
    const words = ["Web Designer","Linux Ricer", "Aspiring Cybersecurity Analyst"];
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
// Smooth Scroll for Back to Top Button
document.querySelector('.back-to-top-btn').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
