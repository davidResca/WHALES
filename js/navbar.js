const $BtnNavMenu = document.querySelector('#nav-button');

const $NavLinks = document.querySelectorAll('.nav__list--item');
const arrayLinks = Array.from($NavLinks);

$BtnNavMenu.addEventListener('click', ()=>{
    collapsarMenu();
});

const collapsarMenu = ()=>{
    const intervalo = 30;
    $NavLinks.forEach((link, index)=>{
        setTimeout(()=>{
            (link.style.transform === 'translateX(-100%)') ? link.style.transform = 'translateX(0)' : 
                link.style.transform = 'translateX(-100%)';
        }, index * intervalo);
    });
}

collapsarMenu();


