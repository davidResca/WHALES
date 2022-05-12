
const url = "https://api.nomics.com/v1/currencies/ticker?key=01f2a5f72543d83720cfed87db94aeada8f3cea4&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1";

fetch(url)
.then(response => response.json())
.then(data => printData(data))



async function printData(data){
    const marquesina = document.querySelector(".mostrar-data-nomics");
    data.forEach(element => {
        marquesina.innerHTML = `<img src="${element.logo_url}" width="10" style="margin-right:5px"/>
                                <p>${element.id} = U$D ${parseInt(element.price)}</p>
                                `;
    });
}