/** BOTONES MAIN */
const $btnNewUser = document.querySelector('#btn-new-user');
/**CONTROL VENTANA DE REGISTRO */
const $btnCloseRegister = document.querySelector('#btn-close-register');
const $btnRegisterSubmit = document.querySelector('#btn-register');
/**CONTENEDOR FORM REGISTRO */
const $regContainer = document.querySelector('#register-container');

/**EVENTO CLICK A BOTONES MAIN */
$btnNewUser.addEventListener('click', ()=>{
    $regContainer.classList.remove('oculto');
});
$btnCloseRegister.addEventListener('click', ()=>{
    $regContainer.classList.add('oculto');
});



/**--------------CONTROL DE FORMULARIO-----------------*/

/**FORMULARIO */
/* const $regForm = document.querySelector('#form-register'); */
/**INPUTS */
/* const userName = $regForm.userName.value;
const email = $regForm.email.value;
const password = $regForm.password.value;
const confirmPassword = $regForm['confirm-password'].value;
 */
/**VALIDACIONES*/
/* 
function validarFormularioLleno(){
    if(!userName || !email || !password || !confirmPassword){
        return "Debes completar todos los campos";
    } 

}

function validarNombreUsuario(){    
    if (userName.length === 0){
        return "Este campo debe tener al menos 1 caracter";
    }   
    if(userName.length>=50){
        return 'Este campo debe tener menos de 50 caracteres';
    } 
}


$btnRegisterSubmit.addEventListener('click', ()=>{
    validarNombre();
})
*/





































// LOGIN

const $btnLogin = document.querySelector('#btn-login');
const $btncloseLogin = document.querySelector('#btn-close-login');
/* const $btnLoginSubmit = document.querySelector(''); */
const formLogin = document.querySelector('#login-container');

$btnLogin.addEventListener('click', ()=>{
    formLogin.classList.remove('oculto');
});

$btncloseLogin.addEventListener('click', ()=>{
    formLogin.classList.add('oculto');
})

