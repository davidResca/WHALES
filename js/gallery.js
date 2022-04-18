const productContainer = document.querySelector('#product-container');

function showArtwork(){
    productos.forEach((element)=>{
        const productCard = document.createElement('article');
        productCard.setAttribute('class', 'product-card');
        
        productCard.innerHTML =`<div>
                                    <img  class="prod-img" width="300px" src="${element.img}" alt="${element.artworkName}">
                                </div>
                                <div class="prod-description">
                                    <h5 class="artwork-name">${element.artworkName}</h5>
                                    <h5 class="author">${element.author}</h5>
                                    <p class = "price">${element.price}</p>
                                    <p id="btn-buy" class="buy">buy now</p>

                                </div>`;
        productContainer.appendChild(productCard);                                
    });
};

showArtwork();


