let animado = document.querySelectorAll('.animado');
let animadoDcha = document.querySelectorAll('.animado-dcha');
let animadoIzq = document.querySelectorAll('.animado-izq');

function mostrarScroll (){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i<animado.length; i++ ){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 400 < scrollTop){
            animado[i].style.opacity = "1";
            animado[i].classList.add('mostrarArriba');
        }
    }
}
window.addEventListener('scroll', mostrarScroll)
// Izquierda
function mostrarScrollIZQ (){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i<animadoIzq.length; i++ ){
        let alturaAnimadoI = animadoIzq[i].offsetTop;
        if(alturaAnimadoI - 500 < scrollTop){
            animadoIzq[i].style.opacity = "1";
            animadoIzq[i].classList.add('mostrarIzquierda');
        }
    }
}
window.addEventListener('scroll', mostrarScrollIZQ)
// Derecha
function mostrarScrollDCHA (){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i<animadoDcha.length; i++ ){
        let alturaAnimadoD = animadoDcha[i].offsetTop;
        if(alturaAnimadoD - 500 < scrollTop){
            animadoDcha[i].style.opacity = "1";
            animadoDcha[i].classList.add('mostrarDerecha');
        }
    }
}
window.addEventListener('scroll', mostrarScrollDCHA)