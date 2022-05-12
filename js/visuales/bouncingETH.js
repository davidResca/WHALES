const mein = document.querySelector('#main');
const logo = document.querySelector('.logo');
const FPS = 60;

mein.style.height = window.innerHeight - 'px';
mein.style.width = window.innerWidth - 'px';

mein.style.overflow = 'hidden';

let xPosition = 10;
let yPosition = 10;

let xSpeed = 3;
let ySpeed = 3;

function update(){
    logo.style.left = xPosition + 'px';
    logo.style.top = yPosition + 'px';
}


setInterval(()=>{
    if(xPosition + (logo.clientWidth +25) >= window.innerWidth || xPosition <= 0){
        xSpeed = -xSpeed;
    }
    if(yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0){
        ySpeed = -ySpeed;
    }
    xPosition += xSpeed;
    yPosition += ySpeed;

    update();

},1000/FPS)

