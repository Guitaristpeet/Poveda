const headerBg = document.querySelector('.header-bg')

inView('.hero')
    .on('enter', removebg => {
        headerBg.classList.remove('appear')
    })
    .on('exit', addbg => {   
        headerBg.classList.add('appear')
    });

inView.threshold(0.9);