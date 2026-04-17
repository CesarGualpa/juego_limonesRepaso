let canvas;
let ctx;
canvas=document.getElementById("areaJuego");
ctx=canvas.getContext("2d");

iniciar=function(){
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

const ALTURA_SUELO=50;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ANCHO_LIMON=20;
const ALTO_LIMON=20;

let personajeX=canvas.width/2;
let limonX=canvas.width/2;
let limonY=0;

dibujarSuelo=function(){
    ctx.fillStyle="green"
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

dibujarPersonaje=function(){
    ctx.fillStyle="#00DBFC"
    ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
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
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTO_LIMON);
}

bajarLimon=function(){
    limonY=limonY+10;
    actualizarPantalla();
}