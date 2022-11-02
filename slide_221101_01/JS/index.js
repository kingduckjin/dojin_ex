const prevBtn = document.querySelector('.btn_back'),
nextBtn = document.querySelector('.btn_next'),
image = document.querySelectorAll('li'),
slide_list = document.querySelector('.slide_list'),
main_container = document.querySelector('.main_container');
let indexNb = 0;


function addClass() {
    this.classList.add('hidden');
}
function removeClass() {
    this.classList.remove('hidden');
}

nextBtn.addEventListener('click', function (e) {
    indexNb++;
    console.log(indexNb);
    slide_list.style.left = `-${indexNb}00%`;

    // 처음에는 그냥 둘 다 안보이게 만들고
    nextBtn.classList.remove('hidden');

    // 조건에 따라서 보이게 만드는 게 정신건강에 이로움.
    if (indexNb <= 0) {
        prevBtn.classList.add('hidden');
    } else if (indexNb >= image.length - 1) {
        nextBtn.classList.add('hidden');
    }
});


prevBtn.addEventListener('click', function () {
    indexNb--;
    console.log(indexNb);
    slide_list.style.left = `-${indexNb}00%`;

    prevBtn.classList.remove('hidden');
    nextBtn.classList.remove('hidden');

    if (indexNb <= 0) {
        prevBtn.classList.add('hidden');
    } else if (indexNb >= image.length - 1) {
        prevBtn.classList.add('hidden');
    }
});

let stop;

main_container.addEventListener('mouseenter', function () {
    // nextBtn.classList.add('hidden');
    // prevBtn.classList.add('hidden');
    stop = setInterval(() => {
        prevBtn.classList.remove('hidden')
        slide_list.style.left = `-${indexNb}00%`
        indexNb++;
        if (indexNb == image.length) {
            indexNb = 0;
        }
    }, 1000);
})

main_container.addEventListener('mouseleave', function () {
    clearInterval(stop);
})