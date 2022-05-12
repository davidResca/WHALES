



// CARRITO
const carritoArray = [];

//verificar stock y agregar productos a carrito
const verificarStockProducto = (element)=>{
    const {stock} = element;
    (stock > 0) ? agregarProductoAlCarrito(element) : notificarFaltanteStock();
    console.log(stock);
}

function agregarProductoAlCarrito(element){
    carritoArray.push(element);
    element.stock = element.stock-1;
    
    notificarAgregarProductoAlCarrito();
}

// VER CARRO
const menuCarrito = document.querySelector('#carrito-menu');
const $btnCarrito = document.querySelector('#btn-cart');

const crearCarrito = ()=>{
    let carroLocal = JSON.parse(localStorage.getItem('carro'));
    //console.log(carroLocal);
    carroLocal.forEach((element)=>{
        construirCarrito(element);
    });
};

const construirCarrito = (element)=>{
    const productoEnCarro = document.createElement('div');
    productoEnCarro.setAttribute('class', 'prodEnCarro');
    productoEnCarro.innerHTML =`<img class="carro-img" src="${element?.img}" alt="${element.artworkName}"/>
                                <p class="carro-titulo">${element.artworkName}</p>
                                <p class="carro-autor">${element.authorName}</p>
                                <p class="carro-cantidad">cantidad</p>
                                <p class="carro-precio">${element.price}</p>`
    menuCarrito.appendChild(productoEnCarro);
};

crearCarrito();
$btnCarrito.addEventListener('click', ()=>{
    mostrarCarrito();
})



























/* 
const productContainer = document.querySelector('#product-container');

// TARJETAS DE PRODUCTOS
const mostrarProductos = ()=>{
    productos.forEach((element)=>{
        const productCard = document.createElement('article');
        crearCard(productCard, element);
    });
};
const crearCard = (productCard, element)=>{
    productCard.setAttribute('class', 'product-card');
    productCard.innerHTML =`<div>
                                <img class="prod-img" width="150px" src="${element?.img}" alt="${element.artworkName}"/>
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
        //console.log(element?.id);
        verificarStockProducto(element);
    })
}
mostrarProductos();
// CARRITO
const carritoArray = [];
//verificar stock y agregar productos a carrito
const verificarStockProducto = (element)=>{
    const {stock} = element;
    (stock > 0) ? agregarProductoAlCarrito(element) : false;
    console.log(stock);
}
function agregarProductoAlCarrito(element){
    carritoArray.push(element);
    element.stock = element.stock-1;
    localStorage.setItem('carro', JSON.stringify(carritoArray));
}
// VER CARRO
const menuCarrito = document.querySelector('#carrito-menu');
const $btnCarrito = document.querySelector('#btn-cart');
const crearCarrito = ()=>{
    let carroLocal = JSON.parse(localStorage.getItem('carro'));
    //console.log(carroLocal);
    carroLocal.forEach((element)=>{
        construirCarrito(element);
    });
};
const construirCarrito = (element)=>{
    const productoEnCarro = document.createElement('div');
    productoEnCarro.setAttribute('class', 'prodEnCarro');
    productoEnCarro.innerHTML =`<img class="carro-img" src="${element?.img}" alt="${element.artworkName}"/>
                                <p class="carro-titulo">${element.artworkName}</p>
                                <p class="carro-autor">${element.authorName}</p>
                                <p class="carro-cantidad">cantidad</p>
                                <p class="carro-precio">${element.price}</p>`
    menuCarrito.appendChild(productoEnCarro);
};
crearCarrito();
$btnCarrito.addEventListener('click', ()=>{
    mostrarCarrito();
})
function mostrarCarrito(){
    menuCarrito.classList.toggle('oculto');
}
*/
