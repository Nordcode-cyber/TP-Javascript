let value = true;
let n =2;
console.log(typeof n);
console.log(typeof value); // boolean
value = String(value); // ahora value es el string "true"
console.log(typeof value); // string
let str = "123";
console.log(typeof str); // string
let num = Number(str); // se convierte en 123
console.log(typeof num); // number
console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error al leer un número en "z")
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0
console.log( 1 + '2' ); // '12' (string a la derecha)
console.log( '1' + 2 ); // '12' (string a la izquierda)
console.log( Boolean(1) ); //true
console.log(Boolean(9)); //false
console.log(Boolean("hola") ); //true
console.log(Boolean("") ); //false