const contenedorCarrito = document.querySelector('#productos-carrito');

/** OBTENER IDs => CANTIDADES Y STOCK Y RESTARLOS SEGUN EL ID DE PRODUCTO */

//verificar stock y agregar productos a carrito
// const verificarStockProducto = (element)=>{
//     const {stock} = element;
//     if (stock > 0){
//         agregarProductoAlCarrito(element.id);
//         notificarAgregarProductoAlCarrito(); 
//         element.stock -= 1;
//     } else {
//         notificarFaltanteStock(element);
//     }
// }

let carrito = {};

const cargarCarrito = object =>{
    const producto = {
        id: object?.id,
        img: object?.img,
        nombre: object?.nombre,
        precio: object?.precio,
        cantidad: 1,
    }

    if(carrito.hasOwnProperty(producto?.id)) {
        producto.cantidad = carrito[producto?.id].cantidad + 1;
    }

    carrito[producto?.id] = {... producto}

    actualizarCarrito(carrito)
    //console.log(carrito);
}

const items = document.querySelector('#productos-carrito');
const itemsEnCarro = document.createDocumentFragment();

function actualizarCarrito(carrito){
    items.innerHTML = "";
    Object.values(carrito).forEach(producto=>{
        const nodoLi = document.createElement('li');
        nodoLi.setAttribute('class', 'producto');
        nodoLi.innerHTML = `<img class="cart-img" src="${producto?.img}" alt="${producto?.nombre}"/>
                            <div class="cart-nombre">${producto?.nombre}</div>
                            <div id="cart-precio" class="cart-precio">${(parseFloat(producto?.precio) * producto?.cantidad).toFixed(3)} ETH</div>
                            <div class="cart-cantidad"> items: ${producto?.cantidad}</div>
                            <div class="btns-cambiar-cantidad">
                                <img src="../assets/BTN/agregar-item.png" alt="agregar producto" data-id="${producto?.id}" class="agregar-item">
                                <img src="../assets/BTN/quitar-item.png" alt="quitar producto" data-id="${producto?.id}" class="quitar-item">
                            </div>                            
                            `;
        itemsEnCarro.appendChild(nodoLi);
    })
    
    items.appendChild(itemsEnCarro)
    
    calcularTotalCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito));
};


// botones para cambiar cantidades de items en carrito
items.addEventListener('click', e=>{
    btnAccion(e);
})

const btnAccion = e => {
    if(e.target.classList.contains('agregar-item')){
        const producto = carrito[e.target.dataset.id];
        producto.cantidad++
        carrito[e.target.dataset.id] = {... producto};
        //console.log(carrito[e.target.dataset.id]);
        actualizarCarrito(carrito);
    }   
    if(e.target.classList.contains('quitar-item')){
        const producto = carrito[e.target.dataset.id];
        producto.cantidad--;
        if(producto.cantidad <= 0){
            delete carrito[e.target.dataset.id];
        }
        actualizarCarrito(carrito);
        // carrito[e.target.dataset.id] = {... producto};
        //console.log(carrito[e.target.dataset.id]);
    }   

    e.stopPropagation();
}