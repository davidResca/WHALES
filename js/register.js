const $btnNewUser = document.querySelector('#btn-new-user');
const $btnCloseRegister = document.querySelector('#btn-close-register');
const $btnRegisterSubmit = document.querySelector('#register-container');
const formRegister = document.querySelector('#register-container');

$btnNewUser.onclick = ()=>{
    formRegister.classList.remove('oculto');
}

$btnCloseRegister.onclick = function(){
    formRegister.classList.add('oculto');
}

$btnRegisterSubmit.onclick = ()=>{
    return false;
}

/* 
const $inputName = document.querySelector('#register-username');
const $inputEmail = document.querySelector('#register-email');
const $inputPassword = document.querySelector('#register-password');
const $inputConfirmPassword = document.querySelector('#confirm-password');
 */