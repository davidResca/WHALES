const $totalCarrito = document.querySelector('.carrito-total');

function calcularTotalCarrito(){
    const $preciosProdEnCarrito = (document.querySelectorAll('#cart-precio'));
    
    const array = Array.from($preciosProdEnCarrito);

    const totalCarrito = array.reduce((acc,element)=>acc+=parseFloat((element.innerText)),0);
    
    imprimirTotalCarrito(totalCarrito);
}

function imprimirTotalCarrito(totalCarrito){

    $totalCarrito.innerHTML = `total : ${totalCarrito} ETH`;
}

calcularTotalCarrito();
