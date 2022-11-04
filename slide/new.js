const li = document.getElemnetsByTagName('li'),
    pager = document.querySelector('.pager');

// 1. pager에 pagerbtn 만들기
for (let i = 0; i < li.length; i++) {
    pager.innerHTML += `<a href="#" ></a>`;
}

