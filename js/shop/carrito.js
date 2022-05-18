const contenedorCarrito = document.querySelector('#productos-carrito');
const data = JSON.parse(localStorage.getItem('CARRITO'));

let carrito = new Carrito([]);

if(!data){
    carrito = new Carrito([]);
}
else{
    carrito = new Carrito(data);

    actualizarCarrito();
}


/** OBTENER IDs => CANTIDADES Y STOCK Y RESTARLOS SEGUN EL ID DE PRODUCTO */

//verificar stock y agregar productos a carrito
const verificarStockProducto = (element)=>{
    const {stock} = element;

    let cantidad = document.querySelector('.cart-cantidad');
    
    if (stock > 0){
        agregarProductoAlCarrito(element.id);
        notificarAgregarProductoAlCarrito(); 
        element.stock -= 1;
    } else {
        notificarFaltanteStock();
    }
}

function agregarProductoAlCarrito(element){
    const products = productos.map(el=>el.id);
    let index = products.findIndex(el=>el===element); 
    let product = productos[index];
    carrito.addProducto(product);

    actualizarCarrito();
}

function actualizarCarrito(){
    contenedorCarrito.innerHTML="";
    let productos = carrito.productos;
    productos.forEach(producto=>{
        let produ = producto.producto;
        const nodoLi = document.createElement('li');
        nodoLi.setAttribute('class', 'producto');
        nodoLi.innerHTML = `<img class="cart-img" src="${produ?.img}" alt="${produ?.artworkName}"/>
                            <div class="cart-nombre">${produ?.artworkName}</div>
                            <div id="cart-precio" class="cart-precio">${parseFloat(produ?.price) * producto?.cantidad} ETH</div>
                            <div class="cart-cantidad"> items: ${producto?.cantidad}</div>                            
                            <div class="cart-remover">remove</div>                            
                            `;
        contenedorCarrito.appendChild(nodoLi);
    })  
    carrito.guardar();
}

