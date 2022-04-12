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
let menuOpen = false;
menuBtn.addEventListener('click', open => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});