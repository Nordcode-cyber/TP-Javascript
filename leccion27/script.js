/*let y = function(k3, k4, k5, k6){
    return k3 *k4 + k5-k6};
resultado = y (24, 2, 6, 12);
console.log(resultado);
 *Funcion del tipo expresion
 */
//Declaración de la función
let resultado = miFuncion(2, 3);
console.log(resultado);
function miFuncion(a, b){
    return a + b;
}
let sumar1 = function (a, b, c){//(a,b..n son parametro)
    return a + b +c};
resultado = sumar1(512, 2, 9);//si uno de los parametros esta vacio resultado devuelve NaN
console.log(resultado);
//Llamando a la función
//Declaración Función de tipo Expresión
let sumar = function (a, b){
    console.log(arguments.length);
    return a + b};

resultado = sumar(1, 2);
console.log(resultado);
let operacion = function (d1, d2, d3, d4, d5){//(a,b..n son parametro)
    return (d1**d2)+(d3*d4/d5)};
resultado = operacion(16, 2,9, 3, 6);//si uno de los parametros esta vacio resultado devuelve NaN
console.log(typeof operacion);
console.log(arguments.length);
console.log(resultado);
//imprimir los parametros dentro de la funcion
//se puede hacer operaciones arimeticas con datos primitivos: R
(function (f1, f2, f3,f4,f5){
    console.log('ejecutando la funcion: '+(f1+f2+f3+(f4**5)+f5+1.5+3.1415921653849));
    console.log(arguments.length);
})(4,6,8,2,6);
/*
*(function (f1, f2, f3,f4,f5){
    console.log('ejecutando la funcion: '+(f1+f2+f3+f4+f5)); 26
})(4,6,8,2,6); 
*/
(function (g1, g2, g3, g4, g5, g6, g7){
    console.log('la operaciones de los parametros: '+(g1+g2+g3/(g4)+g6-g7));
    console.log(arguments.length);
})(8,6,1,6,4,9,2,);