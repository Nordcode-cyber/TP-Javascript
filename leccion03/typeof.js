/*
Ejemplos de 
tipos de datos 
en JavaScript
*/
//Tipo de dato string
console.clear();
const bigInt = 1234567890123456789012345678901234567890123456789n;
let esVerdadero = 4 > 5;
let age =100;
var n2;
let n3;
n3 =0;
n2 = 3.14159265435;
n1 = null;
age = undefined;
p1 = 82659154894895 + 1;
p2 = 82659154894895 + 2;
var hoy = new Date();
console.log("la variable hoy es tipo ? "+typeof hoy);
console.log("la variable n2 es tipo ?"+typeof n2);
console.log("la variable n3 es tipo ?"+typeof n3);
console.log (typeof  "redonda");
console.log("la variable bigInt es tipo ?"+typeof bigInt);
console.log("la variable age es tipo ?"  + typeof age);
console.log(n1);
console.log("la variable hoy es tipo ? "+ typeof hoy);
console.log("la variable esVerdadero es tipo ?"+typeof esVerdadero);
console.log(bigInt);
console.log(age);
console.log("la variable p1 es tipo ?"+typeof p1);
console.log("la variabe p2 es tipo ? "+typeof p2);
console.log(typeof n3);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Math.sqrt(16));//Math.sqrt(x) raiz cuadrada


var nombre = "Carlos";
console.log(typeof nombre);

nombre = 10.5;
console.log(typeof nombre);
var n1 = 5;
var n2 = 3.14159265359;
let str = '1234';
console.log(str);

//Tipo de dato numerico
var numero = 2165456516416546545646546464616544n;
console.log(numero);

//Tipo de dato object
var objecto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
}
var pedido = {
    comida: "Pizza de Mozarella" ,
    extras: "Aceitunas negras" ,
    postre: "Sfogliatelle" ,
    bebida_sin_alcohol:"Agua tonica" ,
    bebida_Alcoholica: "Cerveza" ,
    bebida_para_bardear: "Gin" ,
}
console.log(typeof objecto);
console.table(objecto);
console.table(pedido);
console.log(typeof pedido);
function funcion(){
 }
 console.log(typeof funcion);
 //tipo de dato symbol
let id1 = Symbol(5);
let id2 = Symbol(6);
console.log(id1);
console.log(id2);
console.log(typeof id1);
console.log(id1 == id2); 
console.log(id1 == id2);
// tipo clases es función
class Persona {
    constructor(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    }
}
console.log(Persona);
console.log(typeof Persona);
//tipo undefined
var x=undefined;
console.log(typeof x);
var y = null;
console.log(y);
console.log(typeof y);