// slider

const sliders = document.querySelectorAll('.works_slider');

sliders.forEach(slider => {
    const track = slider.querySelector('.slider_image');
    const slides = slider.querySelectorAll('.slider_img');
    const prevBtn = slider.querySelector('.slider_left');
    const nextBtn = slider.querySelector('.slider_right');

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
    });

    prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
    });
});

// accordion

const worksList = document.querySelectorAll('.works_1, .works_2, .works_3, .works_4, .works_5, .works_6');

worksList.forEach(work => {
    const trigger = work.querySelector('.works_trigger');
    const contents = work.querySelector('.works_contents');

    trigger.addEventListener('click', () => {
    contents.classList.toggle('is-open');
    });
});