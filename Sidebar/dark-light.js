let btn = document.getElementById('header_bnt--dark');
let moon = document.querySelector('.fa-moon');
let sun = document.querySelector('.fa-sun');

btn.addEventListener('click', function () {

    let tema2 = document.getElementById('tema');
    if (tema.getAttribute('href') == "./light_style.css") {
        tema.href = "./style.css";
        moon.style.display = 'block';
        moon.style.color = 'black';
        sun.style.display = 'none';
    }
    else if (tema.getAttribute('href') == "./style.css") {
        tema.href = "./light_style.css";
        moon.style.display = 'none';
        sun.style.display = 'block';
        sun.style.color = '#fff';
    }
})