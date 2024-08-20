
const box = document.querySelector(".slideshow");
const imagens = document.querySelectorAll(".slideshow img");

let contador = 0;

function slider() {
    
    contador ++;

    if (contador > imagens.length -1){
        contador = 0;
    }

   box.style.transform = `translateX(${-contador * 500}px)`  //ALTERADO COM SUCESSOOOO
}

setInterval(slider, 2000);