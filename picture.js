let btn_prev = document.querySelector('.btn-prev');
let btn_next = document.querySelector('.btn-next');
let img = document.querySelectorAll('.slider_img img');

let i = 0;
btn_next.addEventListener('click', function () {
    img[i].style.display = 'none';
    i++;

    if (i >= img.length) {
        i = 0;
    }
    // console.log(i);
    img[i].style.display = 'block';
})

btn_prev.addEventListener('click', function () {
    img[i].style.display = 'none';
    i--;

    if (i < 0) {
        i = img.length - 1;
    }
    // console.log(i);
    img[i].style.display = 'block';
})

setInterval(function(){
    img[i].style.display = 'none';
    i++;

    if (i >= img.length) {
        i = 0;
    }
    // console.log(i);
    img[i].style.display = 'block';
}, 3000);