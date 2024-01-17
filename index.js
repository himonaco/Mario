let mario = document.querySelector('#player');
let marioFront = "./asset/mario-front-1.png";
let marioBack = "./asset/mario-back-1.png";
let marioLeft = "./asset/mario-left-1.png";
let marioRight = "./asset/mario-right-1.png";



document.addEventListener('keydown', function(event){
  
    switch(event.key) {
        case 'ArrowLeft':
            mario.src = marioLeft
            mario.style.left = (mario.offsetLeft - 10) + 'px';
            break;
        case 'ArrowRight':
            mario.src = marioRight
            mario.style.left = (mario.offsetLeft + 10) + 'px';
            break;
        case 'ArrowUp':
            mario.src = marioBack
            mario.style.top = (mario.offsetTop - 10) + 'px';
            break;
        case 'ArrowDown':
            mario.src = marioFront
            mario.style.top = (mario.offsetTop + 10) + 'px';
            break; 
       
}
}
);
