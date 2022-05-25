function notificarAgregarProductoAlCarrito(){
    Toastify({
        text: "Added to Cart",
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: "rgba(13, 5, 20, 1)",
            fontFamily: 'Poppins',
            fontSize: '2rem',
        }
    }).showToast();
}
function notificarRemoverProductoDelCarrito(){
    Toastify({
        text: "Product removed",
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: "rgba(13, 5, 20, 1)",
            fontFamily: 'Poppins',
            fontSize: '2rem',
        }
    }).showToast();
}
function notificarBorrarCarrito(){
    Toastify({
        text: "Cart Deleted",
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: "rgba(13, 5, 20, 1)",
            fontFamily: 'Poppins',
            fontSize: '2rem',
        }
    }).showToast();
}
