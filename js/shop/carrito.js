const contenedorCarrito = document.querySelector('#productos-carrito');
// const data = JSON.parse(localStorage.getItem('CARRITO'));

// let carrito = new Carrito([]);

// if(!data){
//     carrito = new Carrito([]);
// }
// else{
//     carrito = new Carrito(data);

//     actualizarCarrito();
// }


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
                                <i data-id="${producto?.id}" id="aumentar-item" class="fa-solid fa-caret-up"></i>                            
                                <i data-id="${producto?.id}" id="disminuir-item" class="fa-solid fa-caret-down"></i>
                            </div>                            
                            `;
        itemsEnCarro.appendChild(nodoLi);
    })
    
    items.appendChild(itemsEnCarro)
    
    calcularTotalCarrito();
    //carrito.guardar();
};


// botones para cambiar cantidades de items en carrito
items.addEventListener('click', e=>{
    btnAccion(e);
    e.stopPropagation();
})

const btnAccion = e => { console.log(e.target)}

