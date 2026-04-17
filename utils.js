generarAleatorio=function(min,max){
    let random;
    let numero;
    let numeroEntero;
    random=Math.random();//0-1
    //EJEMPLO: max es 600, minimo es 5 
    numero=random*(max-min);//0-max 0-595
    numeroEntero=Math.ceil(numero);
    //EJEMPLO: 0 
    numeroEntero=numeroEntero+min;//5-600
    return numeroEntero
}