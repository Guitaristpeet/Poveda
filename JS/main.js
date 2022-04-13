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