// Obtener elementos HTML
const wavesCollection = document.querySelectorAll('.parallax-wave');
const wavesArray = Array.from(wavesCollection);
//console.log('wavesArray', wavesArray);
//console.log('wavesCollection', wavesCollection);


// VALORES DE ENTRADA de: MOUSE ejes X e Y
const input = {
    mouseX: {
        start: 0,
        end: window.innerWidth,
        current: 0,
    },
    mouseY:{
        start: 0,
        end: window.innerHeight,
        current: 0,
    }
};
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

// VALORES DE SALIDA
const output = {
    x:{
        start: -60,
        end: 0,
        current: 0,
    },
    y:{
        start: 20,
        end: 0,
        current: 0,
    },
};

//Rango de Salida
output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

/** EVENT LISTENER */
const handleMouseMove = function(event){    
    //ENTRADA

    // MOUSE X input
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
    

    // MOUSE Y input
    input.mouseY.current = event.clientY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

    // SALIDA 
    
    // output x
    output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
    output.x.currentOpposite = output.x.end - (input.mouseX.fraction * output.x.range);
    
    //output y
    output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);
    output.y.currentOpposite = output.y.end - (input.mouseY.fraction * output.y.range);

    // Aplicar salida a HTML
    wavesArray.forEach((wave, i)=>{
        
        
        //Profundidad (determina la velocidad de cada ellemento)
        let depth = parseFloat(wave.dataset.depth);
        let waveOutput = {
            x: output.x.current - (output.x.current * depth),
            xOpposite: output.x.currentOpposite - (output.x.currentOpposite * depth),
            y: output.y.current - (output.y.current * depth),
            yOpposite: output.y.currentOpposite - (output.y.currentOpposite * depth),
        };

        //console.log(i, 'depth',depth)
        

        //CONTROL DE FLUJO -- COMPORTAMIENTO RESPECTO AL MOUSE.
        if(i===0){
            wave.style.transform = 'translate('+waveOutput.x+'px,'+waveOutput.yOpposite+'px)';
        }
        if(i===1){
            wave.style.transform = 'translate('+waveOutput.xOpposite+'px,'+waveOutput.y+'px)';
        }
        if(i===2){
            wave.style.transform = 'translate('+waveOutput.xOpposite+'px,'+waveOutput.yOpposite+'px)';
        }
        if(i===3){
            wave.style.transform = 'translate('+waveOutput.x+'px,'+waveOutput.y+'px)';
        }
    })
    //console.log('output.x.current', output.x.current);
    //console.log('fraccion X', input.mouseX.fraction);
    //console.log('fraccion Y', input.mouseY.fraction);
}
window.addEventListener('mousemove', handleMouseMove); 

/** Para actualizar valores al ajustar el tamaño de pantalla */
const handleResize = ()=>{
    // MOUSE X
    input.mouseX.end = window.innerWidth;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;
    // MOUSE Y
    input.mouseY.end = window.innerHeight;
    input.mouseY.range = input.mouseY.end - input.mouseY.start;
}
window.addEventListener('resize', handleResize); 


