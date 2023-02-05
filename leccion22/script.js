/*La estructura de control switch permite definir casos específicos 
 * a realizar en el caso de que la variable expuesta como condición sea igual a los valores 
 * que se especifican a continuación mediante los case. No obstante, 
 * hay varias puntualizaciones que aclarar sobre este ejemplo:
 *comparaciones estrictas con respecto al tipo de dato
 * 
 */
var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Nota: Este ejemplo NO es equivalente al ejemplo anterior (leer abajo)
switch (nota) {
  case 10:
    calificacion = "Sobresaliente";
    break;
    calificacion = "Notable";
    break;
    calificacion = "Bien";
    break;
  case 5:
    calificacion = "Suficiente";
    break;
  case 4:
    calificacion = "Insuficiente";
    break;
  default:
    // Cualquier otro caso
    calificacion = "Nota errónea";
    break;
}
console.log("He obtenido un", calificacion);
let numero = 1;

let numeroTexto = 'Valor desconocido';

switch( numero ){
    case 1: 
        numeroTexto = 'Número uno';
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case 4:
        numeroTexto = 'Número cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';                
}

console.log(numeroTexto);
let peso =8; //toneladas
switch (peso){
    case 5:
        console.log("transporta frutas");
        break;
    case 6:
        console.log("transporta tabaco");
        break;    
    case 7:
        console.log("transporta acero");
        break;
    case 8:
        console.log("transporta automoviles");
        break;
    case 9:
        console.log("transporta Autopartes de avion");
        break;
    default:
        console.log("Pesaje desconocido");            
}
let mes = 4;
    switch(mes){
        case 1: case 2: case 12:
            console.log('verano');
            break;
        case 3: case 4: case 5:
            console.log("Otoño");
            break;
        case 6: case 7: case 8:
            console.log("invierno");
            break;
        case 7: case 8: case 9:
            console.log("Primavera");
            break;     
        default:
            console.log('valor incorrecto');    
    }  