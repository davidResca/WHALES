function agregarEventoBtnRemover(){
    const $btnRemoveProducto = document.querySelector('.cart-remover');
    $btnRemoveProducto.addEventListener('click', ()=>{
        borrarProducto();
    })
}

const $btnRemoverCarrito = document.querySelector('.remove-cart');
$btnRemoverCarrito.addEventListener('click', ()=>{
    limpiarCarrito();
})


function limpiarCarrito(){
    console.log(carrito.productos.splice(0,carrito.length));
    contenedorCarrito.innerHTML="";
    localStorage.removeItem('CARRITO');

    calcularTotalCarrito();
}





function borrarProducto(){
    let productos = carrito.productos;
    let prodMapped = productos.map((element)=>element.producto);
    let prodID = prodMapped.map((element)=>element.id);
    
    let index = prodMapped.find(element=>element.id===prodID)

    console.log(prodID)
    prodMapped.splice(index, 1);
    console.log(prodMapped)

    actualizarCarrito();
}