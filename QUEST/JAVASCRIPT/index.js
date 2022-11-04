'use strict';

const page_container = document.querySelector('.page_container'),
    pageFrame = page_container.querySelector('.pageFrame'),
    upBtn = page_container.querySelector('.upBtn'),
    downBtn = page_container.querySelector('.downBtn'),
    pages = page_container.querySelectorAll('.page');

const prePage = 0, nowPage = 0;

console.log(pages);

// 업 / 다운 호버&클릭모션===================================== 
upBtn.addEventListener('mouseenter', function () {
    addHover(this);
});

downBtn.addEventListener('mouseenter', function () {
    addHover(this);
});

function addHover(self) {
    self.classList.add('hover');
}

upBtn.addEventListener('mouseleave', function () {
    removeHover(this);
});

downBtn.addEventListener('mouseleave', function () {
    removeHover(this);
});

function removeHover(self) {
    self.classList.remove('hover');
}

// 클릭이벤트 추가

downBtn.addEventListener('click', function () {
    console.log(downBtn.classList.contains('hover'))
    if (downBtn.classList.contains('hover')) {
        let stop = setInterval(() => {
            window.scrollBy(screenY, 25);
            if (parseInt(window.screenY)) {
                clearInterval(stop);
            }
        }, 5);
    }
})