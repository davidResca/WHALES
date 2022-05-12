const html = document.documentElement;


const scrollInput = {
    scrollY:{
        start:0, 
        current: 0,
        end: html.scrollHeight - window.innerHeight,
    }
}

scrollInput.scrollY.range = scrollInput.scrollY.end - scrollInput.scrollY.start;

const manejarScroll = function(){
    input.scrollY.current = html.scrollTop;
    input.scrollY.fraction = (input.scrollY.current - input.scrollY.start) / input.scrollY.range;
    
    const maxScroll = html.scrollHeight - window.innerHeight;
    
    
    console.log('scrolling', cantidadScroll, 'scrollMax', maxScroll);
}


document.addEventListener('scroll', manejarScroll); 