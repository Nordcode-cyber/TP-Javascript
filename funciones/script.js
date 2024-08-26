function holamundo(){
    console.log('hola a todos' ); //1
}
holamundo();
function mostrarmensaje(){
    let mensaje = 'Hola soy Javascript';
    console.log(mensaje);//2
}
mostrarmensaje();
let nombre = 'Juan';
let mensaje3 = 'Al curso de Javascript';
function mostrarmensaje1(){
    let mensaje1 = 'Hola, ' + nombre + 'Bievenido!'+mensaje3;
    console.log(mensaje1);//3
}
mostrarmensaje1();
let alumno = 'Sergio';
let nota = '7';
let espacio = ' ';
function mostrarnota(){
    let mensaje4 = 'La nota del alumno: '+nota+ espacio+ 'su nombre'+espacio +alumno +espacio;
    console.log (mensaje4);//4
}
mostrarnota();
let nombre1 = 'Juan';
function mostrarmensaje2(){
    nombre1 = "Jose";//(1) cambia la variable externa
    let mensaje5 = 'Hola, ' + nombre1;
    console.log(mensaje5);//5
 }
console.log(nombre1);
mostrarmensaje2();//6
console.log(nombre1);
/*Variable externa
 *
 */
let nick = 'Jhon';
function mostrarmensaje3(){
    let nick = "Bob";
    let mensaje6 = 'Hello, ' + nick;
    console.log(mensaje6);
}
//la funcion cre y utiliza su propia variable local nick
mostrarmensaje3();
console.log(nick);
/*Funcion con parametro
 *
 *un parametro es una variable listada dentro de los .-
 *parentesis en la declaracion de funcion(termino para la declaración)
 *u argumento es el valor que es pasado a la funcion .-
 *cuando esta es llamada(es el termino para el momento en que se llama)
 */
function mostrarmensaje4(from, text){//parametros from text
    console.log(from + ':' + text);//7
}
mostrarmensaje4('Ann' , 'Hola!');//'Ann' , 'Hola!'
mostrarmensaje4('Ann' , "Como estas ?");//'Ann' , 'Hola!'
function mostrardedic(from, text){
    console.log(from + ":" + text);
}
mostrardedic('Riber' , 'Decime que se siente');
mostrardedic('Haber' , 'Jugado el Nacional' );
function mostrarmessage(from, text){
    console.log(from + ':' + text);
}
mostrarmessage('C++' , 'es para videojuegos');
mostrarmessage('java', 'es para mobile');
function sumar(a=2, b=4, c=3){
  return a + b + c;
  console.log(a+b+c);
}
sumar();
