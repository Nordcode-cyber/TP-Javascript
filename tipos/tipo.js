/*
Ejemplos de 
tipos de datos 
en JavaScript sin tipar
*/
//Tipo de dato string
//var nombre = "Carlos";
//console.log(nombre);

//Tipo de dato numerico
//var numero = 1000;
//console.log(numero);
//Tipo de dato objetos
console.log('%c 🤬🤬⚒️ Javascript soporta tipos!!1 sin importar si los declaras, cabrones!! 💾🤬🤬', 'font-size: 22px; color: purple; font-weight: bold;');
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
var asociado ={
    movil:"bicicleta",
    nombre:"jose",
    apellido: "barreiro",
    nroasociado: 45645
}
console.log({destino});
console.table(destino);
console.log({pedido});
console.table(pedido);
console.log({asociado});
console.table(asociado);
