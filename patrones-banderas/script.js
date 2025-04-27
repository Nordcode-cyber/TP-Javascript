let er = /(\w+)\s(\w+)/
let str = 'Norberto Contreras'
let newstr = str.replace(er, '$2, $1')
console.log(newstr);
console.log(newstr);
let str1 = "We will, we will rock you";

let result = str.match(/we/i); // sin la bandera g

console.log( result[0] );     // We (1ra coincidencia)
console.log( result.length ); // 1

// Detalles:
console.log( result.index );  // 0 (posición de la coincidencia)
console.log( result.input );  // We will, we will rock you (cadena fuente)

