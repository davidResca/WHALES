const $carritoCompras = document.querySelector('#carrito-menu');

function mostrarCarrito(){
    ($carritoCompras.style.transform === 'translateX(100%)') ? $carritoCompras.style.transform = 'translateX(0)' : $carritoCompras.style.transform = 'translateX(100%)';
}


mostrarCarrito();