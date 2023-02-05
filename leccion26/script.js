miFuncion(4, 2);

//Declaración de la función
function miFuncion(a, b){
    console.log("la Suma de los : " + (a + b));   
}
//Llamando a la función puede ser antes o despues de declarar la funcion
miFuncion(2, 3);
miFuncion(8, 3);
restar(4, 12);
function restar(c, d){//(c, d Paramentros)
    console.log("Resta: " + (c -d));
}
restar(6, 7);
restar(15, 6);
producto(2, 11);
function producto (e, f){
    console.log("Producto: " +(e*f));
}
producto(2, 8);
producto(9, 1);
division(9, 3);
function division (g, h){
    console.log("Division: "+(g / h));
}
division(256, 16);
division(625, 25);
resto(25, 4);
function resto (i, j){
    console.log("Resto: "+(i % j));
}
resto(100, 24);
resto(256, 5);
resto(1024, 9);
potencia(5, 3);
function potencia (k,l){
    console.log("Potenciacion: "+(k **l));
}
potencia(5, 3);
potencia(2, 6);
potencia(6, 4);
function mostrardedic(from, text){
    console.log(from + ":" + text);
}
mostrardedic('Riber' , 'Decime que se siente');
mostrardedic('Haber' , 'Jugado el Nacional' );
mostrardedic('le pegaste a un jugador', 'cobardes los borrachos del tablon');
function sumar(m, n, o){
    return m + n + o;
  }
//let resultado=sumar(5,7,8);
let resultado=sumar(5,12,13);
console.log(resultado); 
//resultado=0; 
function sumneg(p1, p2, p3, p4){//suma de nros negativos
    return p1 + p2 +p3 +p4;
}
//se puede reutilizar la variable resultado
resultado =sumneg(-3, -6, 5, -11);
console.log(resultado);
function restneg(p5, p6, p7, p8, p9){//funcion resta de nros negativos
    return p5 - p6 - p7 - p8 - p9;  
}
resultado = restneg(-3, -8, -11, -5, -15);
console.log(resultado);
function prodneg(n1, n2, n3, n4, n5, n6){
    return n1 *n2 *n3 *n4 *n5 *n6;
}
resultado = prodneg(-9,-6,-11,-5,-2,-8);
console.log(resultado);
/*
 *Funcion de tipo Expresion Javascript
 */
let x = function (k1, k2){
    return k1 + k2};
resultado = x(2, 7);
console.log(resultado);//imprime suma
let y = function(k3, k4, k5, k6){
    return k3 *k4 + k5-k6};
resultado = y (24, 2, 6, 12);
console.log(resultado);
let z = function(d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12){
    return d1+d2+d3+d4+d5**d6+d7+(d8-32)+d9+(d10**2)/(d2)+d11+d12**3};
resultado= z(6, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 16);
console.log(resultado);