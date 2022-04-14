const headerBg = document.querySelector('.header-bg')
inView('.hero')
    .on('enter', removebg => {
        headerBg.classList.remove('appear')
    })
    .on('exit', addbg => {   
        headerBg.classList.add('appear')
    });
inView.threshold(0.9);

const menuBtn = document.querySelector('.menu-btn')
const menuBox = document.querySelector('.menu')
let menuOpen = false;
menuBtn.addEventListener('click', open => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuBox.classList.add('visible');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuBox.classList.remove('visible');
        menuOpen = false;
    }
});

const arrow = document.querySelector('.menu-arrow')
const menuOptions = document.querySelector('.menu-options')
let menuSlide = false;
arrow.addEventListener('click', slide => {
    if (!menuSlide) {
        menuOptions.classList.add('slide')
        menuBox.classList.add('shrink')
        menuSlide = true;
    } else {
        menuOptions.classList.remove('slide')
        menuBox.classList.remove('shrink')
        menuSlide = false;
    }
})

// const slide = document.querySelector('.slide-content')
// const slideDiv = document.querySelectorAll('.slide-content div')
// // slideDiv.forEach((el, index) => {
// //     position = index + 1
// //     console.log(position);
// // });
// const prevBtn = document.querySelector('#prevBtn')
// const nextBtn = document.querySelector('#nextBtn')

// let position = 1;
// const size = slideDiv[0].clientWidth;
// // slide.style.transform = 'translateX(' + (-size * position) + 'px)';

// const nextCont = slideRight => {
//     position++;
//     slide.style.transform = 'translateX(' + (-100 * position) + 'px)';
//     console.log(position);
// }
// const prevCont = slideLeft => {
//     position--;
//     slide.style.transform = 'translateX(' + (100 * position) + 'px)';
//     console.log(position);
// }

// nextBtn.addEventListener('click', nextCont);
// prevBtn.addEventListener('click', prevCont);

const slide = document.querySelector('.slide-content')
const slideDiv = document.querySelectorAll('.slide-content div')
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

const currentSlide = 0
const totalSlide = slideDiv.length

const moveSlide = function () {
    unit = -currentSlide * 100;
    slide.style.transform = 'translateX(' + unit + 'vw)';
}

const nextSlide = () => {
    currentSlide += 1;

    if (currentSlide >= totalSlide) {
        currentSlide = 0
    }

    moveSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);