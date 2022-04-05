const $btnLogin = document.querySelector('#btn-login');
const $btncloseLogin = document.querySelector('#btn-close-login');
const $btnLoginSubmit = document.querySelector('#btn-login');
const formLogin = document.querySelector('#login-container');

$btnLogin.addEventListener('click', ()=>{
    formLogin.classList.remove('oculto');
});

$btncloseLogin.addEventListener('click', ()=>{
    formLogin.classList.add('oculto');
})

