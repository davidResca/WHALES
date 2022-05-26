const $title = document.querySelector('.main-title');
const $bgWave = document.querySelector('#wave5');
const $darkmodeSelectPink = document.querySelector('.btn-darkmodeSelectPink');
const $darkmodeSelectGreen = document.querySelector('.btn-darkmodeSelectGreen');
const $main = document.querySelector('main');
const $burgerColor = document.querySelector('.nav__burger');
const $darkmodeContainerFix = document.querySelector('.btn-darkmodeFix')
const $navLinks = document.querySelectorAll('.nav-link');
const $btnDarkMode = document.querySelector('#btn-darkmode');


function alternativeMode(){
    $title.style.color = 'black';
    $bgWave.style.color = 'black';
    $main.style.backgroundColor = 'white';
    $main.style.backgroundImage = "url('assets/GIF/waterripple.gif')";
    $burgerColor.style.color = '#00FF85';
    $darkmodeSelectPink.style.color = '#00FF85';
    $darkmodeSelectGreen.style.color = '#EB67B6';
    $darkmodeContainerFix.style.color = 'black';
    contenedorProductos.style.backgroundColor = 'black';
    
    $navLinks.forEach((element)=>{
        element.style.color = '#00FF85';
    })

    return "alternative";
}
function naturalMode(){
    $title.style.color = 'azure';
    $bgWave.style.color = '#EB67B6';
    $burgerColor.style.color = 'azure';
    $main.style.backgroundColor = 'rgba(18, 12, 33, .8)';
    $main.style.backgroundImage = "url('assets/GIF/starscream.gif')";
    $darkmodeSelectPink.style.color = '#EB67B6';
    $darkmodeSelectGreen.style.color = '#00FF85';
    $darkmodeContainerFix.style.color = '#fff';
    contenedorProductos.style.backgroundColor = '#EB67B6';

    $navLinks.forEach((element)=>{
        element.style.color = 'azure';
    })

    return "natural";
}

let color = localStorage.getItem('color') || naturalMode();

function validarModoLocal(){
    color==='natural' ? (color = naturalMode()) : (color = alternativeMode());
}
validarModoLocal();


$btnDarkMode.addEventListener('click', ()=>{
    color === "natural" ? (color = alternativeMode()) : (color = naturalMode());

    localStorage.setItem('color', color);
});
