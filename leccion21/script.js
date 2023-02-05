/*enunciado
 * sentencia if-else mostrar en pantalla un mensaje:
 * 6am-11am - Buenos dias
 * 12pm-6pm - Buenas tardes
 * 7pm-12am - Buenas Noches
 * 0am-6am - Durmiendo
*/
let hora = 5;
if(hora >=6 && hora <=11){
    console.log("Buenos Dias");
}
else if(hora>=12 && hora <=18){
    console.log("Buenas tarde");
}
else if(hora>=19 && hora <=24){
    console.log("Buenas Noches");
}
else if (hora >0 && hora <6){//aca esta el error con respecto al horarrio
    console.log("durmiendo");
}
/*
 *else if (hora >23 && hora <=6)
 * debe dar un error porque dentro del conjunto de los numero |R
 * no hay un numero dentro del rango mayor 23 y a la vez menor que 6
 * por lo tanto creo que debemos importar del horrario del navegador
 */
