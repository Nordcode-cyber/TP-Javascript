/*
Ejemplos de 
tipos de datos 
en JavaScript
*/
//Tipo de dato string
var nombre = "Carlos";
console.log(nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato objetos
var destino = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322",
    calle: "mercaderes",
    altura: "451545" ,
    localidad: "Port saillert"
}
var pedido = {
    comida: "Pizza de Mozarella" ,
    extras: "Aceitunas negras" ,
    postre: "Sfogliatelle" ,
    bebida_sin_alcohol:"Agua tonica" ,
    bebida_Alcoholica: "Cerveza" ,
    bebida_para_bardear: "Gin" ,
}
console.log(destino);
console.log(pedido);
console.table(destino);
console.table(pedido);
