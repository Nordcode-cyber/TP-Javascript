let mes = 12;
let estacion;
//estaciones usa 
if( mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
}
else if( mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
}
else if( mes == 6 || mes == 7 || mes == 8 ){
    estacion = "Verano";
}
else if( mes == 9 || mes == 10 || mes == 11 ){
    estacion = "Otoño";
}
else{
    estacion = "Valor incorrecto";
}
/*esta mal diseñado este ejercicio porque en un mes
 * puede correr 2 estaciones del año porque en diciembre en usa
termina el otoño y empieza invierno y en Latinoamerica termina 
la primavera y empieza el verano, por lo tanto se debe implementar
con variables del mes con dias
 */
//latam
let mes1 = 0;
if(mes1 ==1 || mes1 ==2 || mes1== 12){
    console.log("Verano");
}
else if(mes1 == 9 || mes1 == 10 || mes1 ==11 ){
    console.log("Primavera")
}
else if(mes1 ==6 || mes1 == 7 || mes1 ==8){
    console.log("Invierno");
}
else if(mes1 == 3 || mes1== 4 || mes1){
    console.log("Otoño");
}
else if (mes1 <1 || mes1 >12){
    console.log("valor fuera de rango");
}

