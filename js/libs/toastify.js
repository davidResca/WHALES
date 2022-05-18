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

function notificarFaltanteStock(){
    Toastify({
        text: "Sorry, no more :(",
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: "red",
            fontFamily: 'Poppins',
            fontSize: '2rem',
        }
    }).showToast();
}
