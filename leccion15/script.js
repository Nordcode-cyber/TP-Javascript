let miNumero = "18";
let n1 = 13;
let n2 =4;
 //console.log(typeof miNumero);
 
 let edad = Number(miNumero);
 //console.log(typeof edad);
 if(edad >= 18){
	 console.log("Puede votar");
 }
 else{
	 console.log("Muy joven para votar");
 }
 if(n1 <=12){
    console.log("puede ingresar a la atraccion bus escolar");
 }else{
    console.log("No puede ingresar a la atraccion bus escolar");
 }
 if(n2 <=5){
    console.log("puede ingresar al jardin de infantes");
 }else{
    console.log("no puede ingresar al jardin de infantes");
 }
 /*var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Condición
if (nota < 5) {
  // Acción A (nota es menor que 5)
  calificacion = "suspendido";
}
if (nota >= 5) {
  // Acción B (nota es mayor o igual que 5)
  calificacion = "aprobado";
}

console.log("Estoy", calificacion);
 
 El operador ternario es una alternativa de condicional if/else 
 de una forma mucho más corta y, en muchos casos, más legible. 
 Vamos a reescribir el ejemplo anterior utilizando este operador:
  * ar nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Operador ternario: (condición ? verdadero : falso)
var calificacion = nota < 5 ? "suspendido" : "aprobado";

console.log("Estoy", calificacion);
 */
var nota = 1;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Condición
if (nota < 5) {
  // Acción A (nota es menor que 5)
  calificacion = "suspendido";
}
if (nota >= 5) {
  // Acción B (nota es mayor o igual que 5)
  calificacion = "aprobado";
}

console.log("Estoy", calificacion);
// Operador ternario: (condición ? verdadero : falso)
var calificacion = nota < 5 ? "suspendido" : "aprobado";

console.log("Estoy", calificacion);
 let resultado = (edad >= 18)? "Puede votar" : "Muy joven para votar";//operador ternario
 console.log( resultado );
 let salida = (n1<=12)? "puede ingresar a la atraccion bus escolar" : "no puede ingresar a la atraccion bus escolar";
 console.log(salida);
 let jardin = (n2 <=5)? "puede ingresar al jardin de infantes":"no puede ingresar al jardin de infantes";
 console.log(jardin);
