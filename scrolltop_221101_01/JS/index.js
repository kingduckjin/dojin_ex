'use strict';

const topBtn = document.querySelector('.scrollTop');

window.addEventListener('scroll', function () {
    if (parseInt(scrollY) >= (innerHeight / 3)) {
        topBtn.classList.add('visible');
    } else {
        topBtn.classList.remove('visible');
    }
});

topBtn.addEventListener('mouseover', function () {
    this.classList.add('hover');
})
topBtn.addEventListener('mouseleave', function () {
    this.classList.remove('hover');
})

topBtn.addEventListener('click', function () {

    let stop = setInterval(() => {
        window.scrollBy(screenY, -5);
        if (parseInt(window.scrollY) <= 0) {
            clearInterval(stop);
        }
    }, 5);

})