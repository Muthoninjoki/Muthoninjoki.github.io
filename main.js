const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});


const typed = new Typed('.multiple', {
    strings: ['Product Designer', 'Front-End Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});


// JavaScript for profile slider
const images = document.querySelectorAll('.profile-slider img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        image.style.transform = `translateX(${-index * 100}%)`;
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

setInterval(nextImage, 3000);
