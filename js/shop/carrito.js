const carrito = new Carrito([]);
/* 
if(!carrito)
{
    carrito= new Carrito([]);
}
else{
    carrito= new Carrito(data);
}
 */
//verificar stock y agregar productos a carrito
const verificarStockProducto = (element)=>{
    const {stock} = element;
    if (stock > 0){
        agregarProductoAlCarrito(element.id);
        notificarAgregarProductoAlCarrito(); 
        element.stock = element.stock-1;

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
    const contenedorCarrito = document.querySelector('#productos-carrito');
    contenedorCarrito.innerHTML="";
    let productos = carrito.productos;
    productos.forEach(producto=>{
        let produ = producto.producto;
        const nodoLi = document.createElement('li');
        nodoLi.setAttribute('class', 'producto');
        nodoLi.innerHTML = `<img class="cart-img" src="${produ?.img}" alt="${produ?.artworkName}"/>
                            <div class="cart-nombre">${produ.artworkName}</div>
                            <div class="cart-precio">${produ?.price}</div>
                            <div class="cart-cantidad"> stash ${producto.cantidad}</div>                            
                            `;
        contenedorCarrito.appendChild(nodoLi);
    })  
    carrito.guardar();
}

