const $btnLogin = document.querySelector('#btn-login');
const $btncloseLogin = document.querySelector('#btn-close-login');
const formLogin = document.querySelector('#login-container');


$btnLogin.onclick = ()=>{
    formLogin.classList.remove('oculto');
}
$btncloseLogin.onclick = ()=>{
    formLogin.classList.add('oculto');
}

