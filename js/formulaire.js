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


document.forms['register-form'].onsubmit = function(event){
   
    if(this.username.value.trim() === ""){
       document.querySelector(".username-error").innerHTML = "Please enter a username";
       document.querySelector(".username-error").style.display = "block";
       event.preventDefault();
       return false;
    } else {
        document.querySelector(".username-error").style.display = "none";
    }
  
    if(this.password.value.trim() === ""){
       document.querySelector(".password-error").innerHTML = "Please enter a password";
       document.querySelector(".password-error").style.display = "block";
       event.preventDefault();
       return false;
    }

    if(this.password.value.trim() != "" && this.username.value.trim() != "") {
        alert('Merci, vous êtes désormais connecté !')
    }
}

mentionLegal.onclick = () => {
    modal.style.display="block";
}

closeModal.onclick = () => {
    modal.style.display="none";
}