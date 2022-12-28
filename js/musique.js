const btnMetal = document.querySelector('.metalButton');
const btnTechno = document.querySelector('.technoButton');

btnMetal.onclick = () => {
    document.getElementById('musiqueRigthMetal').style.display = "flex";
    document.getElementById('musiqueRigthTechno').style.display = "none";
    document.getElementById('musiqueContainBase').style.backgroundImage = "url('../img/bg-metal.jpg')";

}

btnTechno.onclick = () => {
    document.getElementById('musiqueRigthMetal').style.display = "none";
    document.getElementById('musiqueRigthTechno').style.display = "flex";
    document.getElementById('musiqueContainBase').style.backgroundImage = "url('../img/bg-techno.jpg')";
}

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

mentionLegal.onclick = () => {
    modal.style.display="block";
}

closeModal.onclick = () => {
    modal.style.display="none";
}