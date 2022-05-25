const $BtnNavMenu = document.querySelector('#nav-button');

const $NavLinks = document.querySelectorAll('.nav__list--item');

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

window.addEventListener('click', (e)=>{
    if (!document.querySelector('.nav__list--item').contains(e.target) && (!document.querySelector('#nav-button').contains(e.target))){
        const intervalo = 30;
        $NavLinks.forEach((link, index)=>{
            setTimeout(()=>{
                link.style.transform = 'translateX(-100%)';
            }, index * intervalo);
        });
    } 
})