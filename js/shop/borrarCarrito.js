const $btnRemoverProducto = document.querySelector('#remove-cart');
$btnRemoverProducto.addEventListener('click', ()=>{
    borrarProductos();
})


function borrarProductos(){ 
    carrito = {};
    actualizarCarrito(carrito);
    notificarBorrarCarrito();
}


