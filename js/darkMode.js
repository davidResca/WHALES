const $title = document.querySelector('.main-title');
const $bgWave = document.querySelector('#wave5');
const $darkmodeSelectPink = document.querySelector('.btn-darkmodeSelectPink');
const $darkmodeSelectGreen = document.querySelector('.btn-darkmodeSelectGreen');
const $main = document.querySelector('main');
const $btnLoginColor = document.querySelector('.login-selector');
const $btnNewColor = document.querySelector('.register-selector');
const $burgerColor = document.querySelector('.nav__burger');
const $darkmodeContainerFix = document.querySelector('.btn-darkmodeFix')
const $navLinks = document.querySelectorAll('.nav-link');

const $btnDarkMode = document.querySelector('#btn-darkmode');


function darkMode(){
    $title.style.color = 'black';
    $bgWave.style.color = 'black';
    $btnLoginColor.style.color = 'azure';
    $btnNewColor.style.color = 'azure';
    $main.style.backgroundColor = 'white';
    $burgerColor.style.color = '#00FF85';
    $darkmodeSelectPink.style.color = '#00FF85';
    $darkmodeSelectGreen.style.color = '#EB67B6';
    $darkmodeContainerFix.style.color = 'black';
    productContainer.style.backgroundColor = 'black';
    
    $navLinks.forEach((element)=>{
        element.style.color = '#00FF85';
    })

    return "dark";
}
function lightMode(){
    $title.style.color = 'azure';
    $bgWave.style.color = '#EB67B6';
    $btnLoginColor.style.color = 'azure';
    $btnNewColor.style.color = 'rgba(13, 5, 20, 1)';
    $main.style.backgroundColor = 'rgba(18, 12, 33, .8)';
    $burgerColor.style.color = 'azure';
    $darkmodeSelectPink.style.color = '#EB67B6';
    $darkmodeSelectGreen.style.color = '#00FF85';
    $darkmodeContainerFix.style.color = '#fff';
    productContainer.style.backgroundColor = '#EB67B6';

    $navLinks.forEach((element)=>{
        element.style.color = 'azure';
    })

    return "light";
}

let color = localStorage.getItem('color') || lightMode();

function validarModoLocal(){
    color==='light' ? (color = lightMode()) : (color = darkMode());
}
validarModoLocal();


$btnDarkMode.addEventListener('click', ()=>{
    color === "light" ? (color = darkMode()) : (color = lightMode());

    localStorage.setItem('color', color);
});
