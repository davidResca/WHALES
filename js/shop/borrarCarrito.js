const $btnRemoverCarrito = document.querySelector('.remove-cart');
const $btnRemove = document.querySelector('.cart-remover');


$btnRemoverCarrito.addEventListener('click', ()=>{
    limpiarCarrito();
})


function limpiarCarrito(){
    localStorage.removeItem('CARRITO');

}


$btnRemove.addEventListener('click', ()=>{
    borrarProducto();
})


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