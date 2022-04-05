// Obtener elementos HTML
const wavesCollection = document.querySelectorAll('.parallax-wave');
const wavesArray = Array.from(wavesCollection);
//console.log('wavesArray', wavesArray);
//console.log('wavesCollection', wavesCollection);


// VALORES DE ENTRADA de: MOUSE ejes X e Y
const entrada = {
    mouseX: {
        inicio: 0,
        fin: window.innerWidth,
        actual: 0,
    },
    mouseY:{
        inicio: 0,
        fin: window.innerHeight,
        actual: 0,
    }
};
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
        inicio: 1.3,
        fin: .8,
    }
};

//Rango de Salida
salida.escala.rango = salida.escala.fin - salida.escala.inicio;
salida.ejeX.rango = salida.ejeX.fin - salida.ejeX.inicio;
salida.ejeY.rango = salida.ejeY.fin - salida.ejeY.inicio;


const mouse = {
    x: 0,
    y: 0,
};

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
        wave.style.transform = 'scale('+waveSalida.escala+') translate('+waveSalida.x+'px,'+waveSalida.y+'px)';
    })
}
/** EVENT LISTENER */
const manejarMovimientoDelMouse = function(event){    
    // Entrada
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    
    actualizarEntradas();
    actualizarSalidas();
    actualizarCadaElemento();
}

window.addEventListener('mousemove', manejarMovimientoDelMouse); 

/** Para actualizar valores al ajustar el tamaño de pantalla */
const manejarTamañoDePantalla = ()=>{
    // MOUSE X
    entrada.mouseX.fin = window.innerWidth;
    entrada.mouseX.rango = entrada.mouseX.fin - entrada.mouseX.inicio;
    // MOUSE Y
    entrada.mouseY.fin = window.innerHeight;
    entrada.mouseY.rango = entrada.mouseY.fin - entrada.mouseY.inicio;
}
window.addEventListener('resize', manejarTamañoDePantalla); 


actualizarEntradas();
actualizarSalidas();
actualizarCadaElemento();