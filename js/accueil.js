const btnSun = document.querySelector('.sun');
const btnMoon = document.querySelector('.moon');
const background = document.getElementsByClassName('menu');
let color = document.getElementsByClassName('navList');
let header = document.getElementsByClassName('header');
let mentionLegal = document.querySelector('.mentionLegal');
let modal = document.getElementById('modal');
let closeModal = document.querySelector('.closeModal');


console.log(modal)

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

mentionLegal.onclick = () => {
    modal.style.display="block";
}

closeModal.onclick = () => {
    modal.style.display="none";
}