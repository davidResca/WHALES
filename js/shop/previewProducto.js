const $previewProducto = document.querySelector('#preview-producto');
const $btnClosePrevProduct = document.querySelector('#btn-close-prevProduct');
const $producto = document.querySelector('#producto');
const $prevProducto = document.querySelector('#preview-producto');


$btnClosePrevProduct.addEventListener('click', ()=>{
    mostrarOcultarPrevProducto();
});

//logica
function previsualizarProducto(producto){
    $producto.innerHTML = "";
    if($producto.innerHTML === ""){
        $producto.innerHTML =  `
                                <div class="product-img-container">
                                    <img class="product-img" src="${producto?.img}"/>
                                </div>
                                <div class="product-info">
                                    <h5 class="product-name">${producto?.nombre}</h5>
                                    <h5 class="product-author">${producto?.autor}</h5>
                                    <h5 class="product-price">${producto?.precio} ETH</h5>
                                    <div id="btnComprar" data-id=${producto?.id}>Add to Cart</div>
                                </div>
                                `;
        agregarEventoComprar(producto);
    } else {
        $producto.innerHTML = "";
    }
}

function mostrarOcultarPrevProducto(){
    ($prevProducto.style.transform === 'translateX(-100%)') ? $prevProducto.style.transform = 'translateX(0)' : $prevProducto.style.transform = 'translateX(-100%)';
}

function agregarEventoComprar(producto){
    const btnComprar = document.querySelector('#btnComprar');
    btnComprar.addEventListener('click', e =>{
        cargarCarrito(producto);
        notificarAgregarProductoAlCarrito();
    })
}

mostrarOcultarPrevProducto();






