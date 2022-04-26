function notificarAgregarProductoAlCarrito(){
    Toastify({
        text: "Agregado al Carrito",
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: "rgba(13, 5, 20, 1)",
            borderRadius: "5px",
        }
    }).showToast();
}

function notificarFaltanteStock(){
    Toastify({
        text: "No hay más productos",
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: "rgba(13, 5, 20, 1)",
            borderRadius: "5px",
        }
    }).showToast();
}
