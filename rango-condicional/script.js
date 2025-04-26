//Ejemplo AND (&&), regresa true solo si ambos operandos son true
let a = 15;
let valMin = 0, valMax = 10;
let peso = 70;
let varilla = 22;

if( a >= valMin && a <= valMax ){
    console.log("Dentro de rango");
}
else{
    console.log("Fuera de rango");
}

//Ejemplo OR (||), regresa true si cualquier operando es true
let vacaciones = false, diaDescanso = true;
if( vacaciones || diaDescanso ){
    console.log("Padre puede asistir al juego del hijo");
}
else{
    console.log("El padre está ocupado");
}
if(peso >=200 || peso <=80){
    console.log("Sr chofer pase por la bascula A357");
}else{
    console.log("Sr chofer pase por la Bascula B786");
}

if (varilla >=4 || varilla <=10 ){
    console.log("Deje las varillas en el slot R66");
}else{
    console.log("Deje las varillas en el slot P77 que ha suficiente espacio");
}
