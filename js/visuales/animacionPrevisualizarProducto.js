const $prevProducto = document.querySelector('#preview-producto');


function mostrarOcultarPrevProducto(){
    ($prevProducto.style.transform === 'translateX(-100%)') ? $prevProducto.style.transform = 'translateX(0)' : $prevProducto.style.transform = 'translateX(-100%)';
}


mostrarOcultarPrevProducto()