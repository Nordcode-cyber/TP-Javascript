//Declaración Función de tipo Expresión
//function(a, b)<= parametros
//funtion(2, 5) <= argumentos o ingresado x teclado
/*
los parametros pueden o no llevar argumentos en la declaracion de la funcion
 *Esa convenientemente que los parametros no contengan argumentos ya que fuera de la funcion no es respetado esos argumentos 5vg
*/
let sumar = function(a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+b;
};
resultado = sumar(5,8);
console.log("la suma de los parametros a + b es: "+resultado);
let restar = function(c=3, d=5,e=7,f=10){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    return c-d-e-f;
};
resultado1 = restar(3,5, 7,10 );
console.log("la resta de los parametros c-d-e-f es: " +resultado1);
let producto = function(g1,g2,g3,g4,g5,g6){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    console.log(arguments[4]);
    console.log(arguments[5]);
    return g1*g2*g3*g4*g5*g6;//los parametros pueden operar con datos primitivos
};
resultado2 = producto(2,5,4,16,1,2);
console.log("El producto de los parametros  g1*g2*g3*g4*g5*g6 es: "+resultado2);
let sumapot = function(h1,h2,h3,h4,h5,h6,h7){
    console.log(arguments[0]);
    console.log(arguments[0]);
    console.log(arguments[0]);
    console.log(arguments[0]);
    console.log(arguments[0]);
    console.log(arguments[0]);
    return h1**2+h2**3+h3**1+h4**0+h5**-1+h6**4+h7**-2;
}
resultado3 =sumapot(3,2,4,16,1,8,64);
console.log("la suma de potencia de los parametros de la funcion es: "+resultado3);

