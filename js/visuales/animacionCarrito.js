const $carritoCompras = document.querySelector('#carrito-menu');
const $btnCarrito = document.querySelector('#btn-carrito');

$btnCarrito.addEventListener('click', ()=>{
    mostrarCarrito();
})

function mostrarCarrito(){
    ($carritoCompras.style.transform === 'translateX(100%)') ? $carritoCompras.style.transform = 'translateX(0)' : $carritoCompras.style.transform = 'translateX(100%)';
}


mostrarCarrito();