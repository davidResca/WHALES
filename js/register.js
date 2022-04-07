const $btnNewUser = document.querySelector('#btn-new-user');
const $btnCloseRegister = document.querySelector('#btn-close-register');
const $btnRegisterSubmit = document.querySelector('#btn-register');
const formRegister = document.querySelector('#register-container');

$btnNewUser.addEventListener('click', ()=>{
    formRegister.classList.remove('oculto');
});

$btnCloseRegister.addEventListener('click', ()=>{
    formRegister.classList.add('oculto');
});



/* const $inputName = document.querySelector('#register-username');
const $inputEmail = document.querySelector('#register-email');
const $inputPassword = document.querySelector('#register-password');
const $inputConfirmPassword = document.querySelector('#confirm-password'); */


