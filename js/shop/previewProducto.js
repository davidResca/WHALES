const $previewProducto = document.querySelector('#preview-producto');
const $btnClosePrevProduct = document.querySelector('#btn-close-prevProduct');
const $producto = document.querySelector('#producto');


function previsualizarProducto(element){
    abrirPreview();
    crearPrevisualizacion($producto, element);
}

$btnClosePrevProduct.addEventListener('click', ()=>{
    cerrarPreview();
})
function abrirPreview(){
    $previewProducto.classList.remove('oculto');
}
function cerrarPreview(){
    $previewProducto.classList.add('oculto');
}

function crearPrevisualizacion($producto, element){
    $producto.innerHTML = "";
    mostrarProductoSeleccionado($producto, element);
}

function mostrarProductoSeleccionado($producto, element){
    if($producto.innerHTML === ""){
        $producto.innerHTML =  `
                                <div class="product-img-container">
                                    <img class="product-img" src="${element?.img}"/>
                                </div>
                                <div class="product-info">
                                    <h5 class="product-name">${element?.artworkName}</h5>
                                    <h5 class="product-author">${element?.author}</h5>
                                    <h5 class="product-stock">stock: ${element?.stock} </h5>
                                    <h5 class="product-price">${element?.price} </h5>
                                    <div id="btnComprar">Add to Cart</div>
                                </div>
                                `;
        agregarEventoComprar(element);
    } else {
        $producto.innerHTML = "";
    }
}

function agregarEventoComprar(element){
    const btnComprar = document.querySelector('#btnComprar');

    btnComprar.addEventListener('click', ()=>{
        verificarStockProducto(element);
    })
}

