const headerBg = document.querySelector('.header-bg');
inView('.hero')
    .on('enter', removebg => {
        headerBg.classList.remove('appear')
    })
    .on('exit', addbg => {   
        headerBg.classList.add('appear')
    });
inView.threshold(0.9);

const menuBtn = document.querySelector('.menu-btn');
const menuBox = document.querySelector('.menu');

let menuOpen = false;
menuBtn.addEventListener('click', open => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuBox.classList.add('visible');
        menuBox.style.boxShadow = '0px 5px 2px 0px rgba(0,0,0,0.19)';
        menuOpen = true;
        headerBg.style.boxShadow = 'none';
    } else {
        menuBtn.classList.remove('open');
        menuBox.classList.remove('visible');
        menuBox.style.boxShadow = 'none';
        menuOpen = false;
        headerBg.style.boxShadow = '0 0 2px 1px #000';
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

const holder = document.querySelector('.holder');
const slides = document.querySelectorAll('.holder div');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

let counter = 1;
let slideWidth = -100 * counter;
holder.style.transform = 'translateX(' + slideWidth + 'vw)';

nextBtn.addEventListener('click', () => {
    if (counter >= slides.length -1) return;
    holder.style.transition = 'transform 0.5s ease';
    counter++;
    slideWidth = -100 * counter;
    holder.style.transform = 'translateX(' + slideWidth + 'vw)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    holder.style.transition = 'transform 0.5s ease';
    counter--;
    slideWidth = -100 * counter;
    holder.style.transform = 'translateX(' + slideWidth + 'vw)';
});

holder.addEventListener('transitionend', () => {
    if (slides[counter].id === 'lastClone') {
        holder.style.transition = 'none';
        counter = slides.length - 2;
        slideWidth = -100 * counter;
        holder.style.transform = 'translateX(' + slideWidth + 'vw)';
    }
    else if (slides[counter].id === 'firstClone') {
        holder.style.transition = 'none';
        counter = slides.length - counter;
        slideWidth = -100 * counter;
        holder.style.transform = 'translateX(' + slideWidth + 'vw)';
    }
});