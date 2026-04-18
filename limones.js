let canvas;
let ctx;
canvas=document.getElementById("areaJuego");
ctx=canvas.getContext("2d");

iniciar=function(){
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
}

const ALTURA_SUELO=50;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ANCHO_LIMON=20;
const ALTURA_LIMON=20;

let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
let limonX=canvas.width/2;
let limonY=0;
let puntaje=0;

dibujarSuelo=function(){
    ctx.fillStyle="green"
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

dibujarPersonaje=function(){
    ctx.fillStyle="#00DBFC"
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

let velocidadPersonaje=20;

moverIzquierda=function(){
    personajeX=personajeX-velocidadPersonaje;
    actualizarPantalla();
}

moverDerecha=function(){
    personajeX=personajeX+velocidadPersonaje;
    actualizarPantalla();
}

actualizarPantalla=function(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

limpiarCanva=function(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

dibujarLimon=function(){
    ctx.fillStyle="#EFFF36"
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON);
}

bajarLimon=function(){
    limonY=limonY+10;
    actualizarPantalla();
    detectarAtrapado();
}

detectarAtrapado=function(){
    if(limonX+ANCHO_LIMON>=personajeX && 
        limonX<=personajeX+ANCHO_PERSONAJE &&
        limonY+ALTURA_LIMON>=personajeY && 
        limonY<=personajeY+ALTURA_PERSONAJE){
        aparecerLimon();
        puntaje=puntaje+1;
        let componente;
        componente=document.getElementById("txtPuntaje");
        componente.textContent=puntaje;
        }    
}

aparecerLimon=function(){
    limonX=generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarPantalla();
}