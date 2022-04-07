/** Para actualizar valores al ajustar el tamaño de pantalla */
const manejarTamañoDePantalla = ()=>{
    // MOUSE X
    entrada.mouseX.fin = window.innerWidth;
    entrada.mouseX.rango = entrada.mouseX.fin - entrada.mouseX.inicio;
    // MOUSE Y
    entrada.mouseY.fin = window.innerHeight;
    entrada.mouseY.rango = entrada.mouseY.fin - entrada.mouseY.inicio;
    
    //scroll
    input.scrollY.end = html.scrollHeight - window.innerHeight;
    scrollInput.scrollY.range = scrollInput.scrollY.end - scrollInput.scrollY.start;

}

window.addEventListener('resize', manejarTamañoDePantalla); 