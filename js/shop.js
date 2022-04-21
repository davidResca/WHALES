const productContainer = document.querySelector('#product-container');

/* TARJETAS DE PRODUCTOS */

const construirCard = (productCard, element)=>{
    productCard.setAttribute('class', 'product-card');
    productCard.innerHTML =`<div>
                                <img  class="prod-img" width="150px" src="${element?.img}" alt="${element.artworkName}">
                            </div>
                            <div class="prod-description">
                                <h5 class="artwork-name">${element?.artworkName}</h5>
                                <h5 class="author">${element?.author}</h5>
                                <p class = "price">${element?.price} stock: ${element?.stock}</p>
                                <p id="btn-buy" class="buy">buy now</p>
                            </div>`;
        productContainer.appendChild(productCard);  

        agregarEventoACard(productCard, element);
}
const agregarEventoACard = (productCard, element)=>{
    productCard.addEventListener('click', ()=>{
        /* console.log(element?.id); */
        verificarStockProducto(element);
    })
}
const mostrarArtwork = ()=>{
    productos.forEach((element)=>{
        const productCard = document.createElement('article');
        construirCard(productCard, element);
    });
};

mostrarArtwork();

/* CARRITO */
const carritoArray = [];

/* verificar stock y agregar productos a carrito */
const verificarStockProducto = (element)=>{
    const {stock} = element;
    (stock > 0) ? agregarProductoAlCarrito(element) : false;
    console.log(stock);
}

function agregarProductoAlCarrito(element){
    carritoArray.push(element);
    element.stock = element.stock-1;
    localStorage.setItem('carro', JSON.stringify(carritoArray));
    /* console.log(carritoArray) */
}

/* inyectar carrito */


const $btnCarrito = document.querySelector('#btn-cart');

$btnCarrito.addEventListener('click', ()=>{
    crearCarrito();
})

const crearCarrito = ()=>{
    carritoArray.forEach((element)=>{

        imprimirCarrito();
    });
};

/* 
const imprimirCarrito = (carro, element)=>{
    carro = JSON.parse(localStorage.getItem('carrito'));

    const $carritoPopUp = document.querySelector('#carrito-popup');

    $carritoPopUp.setAttribute('class', 'carrito');

    $carritoPopUp.innerHTML =`<div>
                                    <img class="carrito-img" width="50px" src="${element?.img}" alt="${element.artworkName}">
                                </div>
                                <div class="prod-description">
                                    <p class = "precio-carrito">${element?.price}</p>
                                    <p class = "total-carrito">${totalCarrito}</p>
                                </div>`;

    carritoContainer.appendChild(carritoPopUp);
}

function suma(a, b){
    a+b;
} */ 