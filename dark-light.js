let btn = document.getElementById('header_bnt--dark');
let moon = document.querySelector('.fa-moon');
let sun = document.querySelector('.fa-sun');
let picture = document.getElementById('picture-tema');

btn.addEventListener('click', function () {

    let tema2 = document.getElementById('tema');
    if (tema.getAttribute('href') == "./light_style.css") {
        tema.href = "./style.css";
        picture.href = "./picture.css";
        moon.style.display = 'none';
        sun.style.display = 'block';
    }
    else if (tema.getAttribute('href') == "./style.css") {
        tema.href = "./light_style.css";
        picture.href = "./picture-light.css";
        moon.style.display = 'block';
        sun.style.display = 'none';
    }
})