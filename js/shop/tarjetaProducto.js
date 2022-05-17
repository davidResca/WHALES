const productContainer = document.querySelector('#product-container');

// TARJETAS DE PRODUCTOS
const mostrarProductos = ()=>{
    productos.forEach((element)=>{
        crearCard(element);
    });
};

const crearCard = (element)=>{
    const productCard = document.createElement('article');
    productCard.setAttribute('class', 'product-card');

    productCard.innerHTML =`<div>
                                <img class="prod-img" src="${element?.img}" alt="${element.artworkName}"/>
                            </div>
                            <div class="prod-description">
                                <h5 class="artwork-name">${element?.artworkName}</h5>
                                <h5 class="author">${element?.author}</h5>
                                <h5 class="price">${element?.price} </h5>   
                            </div>
                            `;
    productContainer.appendChild(productCard);  
    agregarEventoACard(productCard, element);
}

const agregarEventoACard= (productCard, element)=>{
    productCard.addEventListener('click', ()=>{
        previsualizarProducto(element);
    })
} 

mostrarProductos();





