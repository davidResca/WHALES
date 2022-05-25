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
    $main.style.backgroundImage = "url('https://media0.giphy.com/media/ToMjGpjm9vQhsB4cqVa/giphy.gif?cid=ecf05e479g642k4cmnu2r8l5d3w80y9nxwf1xvr41lawa5b5&rid=giphy.gif&ct=g')";
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
    $main.style.backgroundImage = "url('https://media3.giphy.com/media/26n6G8lRMOrYC6rFS/giphy.gif?cid=790b76114344b723e905575916799c48ed20aacee1eae158&rid=giphy.gif&ct=g')";
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
