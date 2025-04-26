let a = 3, b = 5, c = 3, d = 5, e = '5';
let z = a == c; // se revisa el valor sin importar el tipo
console.log(z); //true
z = a==d;
console.log(z);
z = b ==d;
console.log(z)
z = a ==b;
console.log(z)
z = d==c;
console.log(z)
z = b ==c;
//=== operador de ingualdad que si compara tipos
z = d == e;
console.log(z)//true porque no compara tipos de datos
