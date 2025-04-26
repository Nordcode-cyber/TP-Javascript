Operador ternario ‘?’
El operador ternario es una alternativa de condicional if/else de una forma mucho más corta y, 
en muchos casos, más legible. Vamos a escribir un ejemplo  utilizando este operador:
var nota = 7;
console.log("He realizado mi examen. Mi resultado es el siguiente:");

// Operador ternario: (condición ? verdadero : falso)
var calificacion = nota < 5 ? "suspendido" : "aprobado";

console.log("Estoy", calificacion);

