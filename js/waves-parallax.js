// Obtener elementos HTML
const wavesCollection = document.querySelectorAll('.parallax-wave');
const wavesArray = Array.from(wavesCollection);

// VALORES DE ENTRADA: MOUSE ejes X e Y
const entrada = {
    mouseX: {
        inicio: 0,
        fin: window.innerWidth,
        actual: 0,  // Actualizo el valor con el eventListener 'mousemove' -linea 65-
    },
    mouseY:{
        inicio: 0,
        fin: window.innerHeight,
        actual: 0,// Actualizo el valor con el eventListener 'mousemove' -linea 65-
    }
};

//agrego atributo rango (para almacenar la posicion del mouse más adelante)
entrada.mouseX.rango = entrada.mouseX.fin - entrada.mouseX.inicio;
entrada.mouseY.rango = entrada.mouseY.fin - entrada.mouseY.inicio;

// VALORES DE SALIDA
const salida = {
    ejeX:{
        inicio: -20,
        fin: 0,
        actual: 0,
    },
    ejeY:{
        inicio: -20,
        fin: 0,
        actual: 0,
    },
    escala: {
        inicio: 1.2,
        fin: .8,
    }
};

//Rango de Salida
//agrega propiedad rango en objeto salida.escala - CALCULA EL RANGO DE TAMAÑO.
salida.escala.rango = salida.escala.fin - salida.escala.inicio;

// rango de salida en eje X e Y
salida.ejeX.rango = (salida.ejeX.fin - salida.ejeX.inicio);
salida.ejeY.rango = (salida.ejeY.fin - salida.ejeY.inicio);

const mouse = {
    x: 0,
    y: 0,
};

/* eventListener + llamado a funciones. Conecta entradas Salidas y actualiza los valores de los elementos*/
const manejarMovimientoDelMouse = (event)=>{    
    mouse.x = event.clientX; //clientX => https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
    mouse.y = event.clientY; //clientY => https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY
    
    actualizarEntradas();
    actualizarSalidas();
    actualizarCadaElemento();
}
/* Creo el eventListener y llamo a la funcion*/
window.addEventListener('mousemove', manejarMovimientoDelMouse);

const actualizarEntradas = ()=>{
    // Entrada -Mouse- eje x e y
    entrada.mouseX.actual = mouse.x;
    entrada.mouseX.fraccion = (entrada.mouseX.actual - entrada.mouseX.inicio) / entrada.mouseX.rango;
    entrada.mouseY.actual = mouse.y;
    entrada.mouseY.fraccion = (entrada.mouseY.actual - entrada.mouseY.inicio) / entrada.mouseY.rango;
}
const actualizarSalidas = ()=>{
    // salida eje x e y
    salida.ejeX.actual = salida.ejeX.inicio + (entrada.mouseX.fraccion * salida.ejeX.rango);
    salida.ejeY.actual = salida.ejeY.inicio + (entrada.mouseY.fraccion * salida.ejeY.rango);
    //salida.y.opuesto = salida.y.fin - (entrada.mouseY.fraccion * salida.y.rango);
}
const actualizarCadaElemento = ()=>{
    wavesArray.forEach((wave, i)=>{
        //Profundidad (determina la velocidad de cada elemento)
        let depth = parseFloat(wave.dataset.depth );
        let waveSalida = {
            x: salida.ejeX.actual - (salida.ejeX.actual * depth),
            y: salida.ejeY.actual - (salida.ejeY.actual * depth),
            escala: salida.escala.inicio + (salida.escala.rango * depth),
        };
        
        // Aplicar Valores al elemento HTML. (estilos css dinámicos);
        wave.style.transform = /* 'scale('+waveSalida.escala+') */ 'translate('+waveSalida.x+'px,'+waveSalida.y+'px)';
    
    })

}

actualizarEntradas();
actualizarSalidas();
actualizarCadaElemento();


/** Para actualizar valores al ajustar el tamaño de pantalla */
const manejarTamañoDePantalla = ()=>{
    // MOUSE X
    entrada.mouseX.fin = window.innerWidth;
    entrada.mouseX.rango = entrada.mouseX.fin - entrada.mouseX.inicio;
    // MOUSE Y
    entrada.mouseY.fin = window.innerHeight;
    entrada.mouseY.rango = entrada.mouseY.fin - entrada.mouseY.inicio;
    
    //scroll
    /* input.scrollY.end = html.scrollHeight - window.innerHeight;
    scrollInput.scrollY.range = scrollInput.scrollY.end - scrollInput.scrollY.start; */

}

window.addEventListener('resize', manejarTamañoDePantalla); 