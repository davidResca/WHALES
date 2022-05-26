document.addEventListener('DOMContentLoaded', ()=>{
    let productData = '../js/data/productData.json';
    
    fetch(productData)
    .then((response)=>response.json())
    .then((data)=>pintarCards(data))

    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito(carrito);
    }
})




/* const fetchData = async () => {
    try {
        const res = await fetch('../js/data/productData.json');
        const data = await res.json();
        pintarCards(data);
        //console.log(data);
    } catch(error){
        console.log(error);
    }
} */

const contenedorProductos = document.querySelector('#product-container');
const cards = document.createDocumentFragment();

const pintarCards = (data) => {
    data.forEach(producto =>{
        const cardProducto = document.createElement('article');
        cardProducto.setAttribute('id', 'tarjeta-producto');
        cardProducto.innerHTML =`
                                <img class="prod-img" src="${producto?.img}" alt="${producto?.nombre}"/>
                                <div class="prod-description">
                                    <h5 class="obra-nombre">${producto?.nombre}</h5>
                                    <h5 class="obra-autor">${producto?.autor}</h5>
                                </div>
                                `;
        cards.appendChild(cardProducto);                        
        agregarEventoACard(cardProducto, producto);
    })
    contenedorProductos.appendChild(cards);
}


//controlador
function agregarEventoACard(card, producto){
    card.addEventListener('click', ()=>{
        previsualizarProducto(producto);
        mostrarOcultarPrevProducto();
    });
}
