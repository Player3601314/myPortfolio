let bar = document.querySelector('.header');
let open = document.querySelector('.fa-bars');
let close = document.querySelector('.fa-times');

function openFunc() {
    bar.style.display = "block";
    open.style.display = "none";
}

function closeFunc() {
    bar.style.display = "none";
    open.style.display = "block";
}