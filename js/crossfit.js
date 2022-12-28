const btnSun = document.querySelector('.sun');
const btnMoon = document.querySelector('.moon');
const background = document.getElementsByClassName('menu');
let color = document.getElementsByClassName('navList');
let header = document.getElementsByClassName('header');
let modal = document.getElementById('modal');
let closeModal = document.querySelector('.closeModal');
let mentionLegal = document.querySelector('.mentionLegal');

btnMoon.onclick = () => {
    background[0].style.backgroundColor="rgb(52, 52, 52)";
    for(let ele of  color) {
        ele.style.color = "whitesmoke";
    }
    btnSun.style.display="block";
    btnMoon.style.display="none";
    header[0].style.backgroundColor="rgb(52, 52, 52)";
}

btnSun.onclick = () => {
    background[0].style.backgroundColor="whitesmoke";
    for(let ele of  color) {
        ele.style.color = "black";
    }
    btnSun.style.display="none";
    btnMoon.style.display="block";
    header[0].style.backgroundColor="whitesmoke";
}

const slide = ["../img/crossfit-1.jpg", "../img/crossfit-2.jpg", "../img/crossfit-3.jpg", "../img/crossfit-4.jpg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

mentionLegal.onclick = () => {
    modal.style.display="block";
}

closeModal.onclick = () => {
    modal.style.display="none";
}