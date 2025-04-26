/*Incremento/decremento
Aumentar o disminuir un número en uno es una de las operaciones numéricas más comunes.

Entonces, hay operadores especiales para ello:

Incremento ++ incrementa una variable por 1:*/
//Pre-incremento (el operador ++ antes de la variable)
/*Importante:
Incremento/decremento sólo puede ser aplicado a variables. 
Intentar utilizarlo en un valor como 5++ dará un error.*/
let a = 2;
let b = 3;
let c =8
let m;
let n;
let o;
console.log("Variable (a) con  pre-incremento: "+a);//variable antes del incremento
m =++a;
console.log("Variable (m) con post-incremento de la variable (a): "+m); 
console.log("Variable (b) con  pre-incremento: " +b);
n = ++b;
console.log("Variable (n) con post-incremento de la variable (b): "+n);
// funciona igual que n = n + 1,pero es más corto
console.log("Variable (c) con  pre-incremento: "+c);//variable antes del incremento
o = ++c;
console.log("Variable (o) con post-incremento de la variable (c): "+o);
let d = 0;
console.log( d );
d++;
console.log( d );
++d;
console.log( d ); // 2, las líneas de arriba realizan lo mismo
let f = 2;
console.log( "Variable (f) con pre-decremento: "+f ); //pre-decremento
f--;      // funciona igual que counter = counter - 1, pero es más corto
console.log( "Variable (f) con post-decremento"+f ); //post-decremento
//5++;
//console.log(5++); tira error porque solo se puede incrementar/decrementar variables
/*Los operadores ++ y -- pueden ser colocados antes o después de una variable.

Cuando el operador va después de la variable, está en “forma de sufijo”: counter++.
La “forma de prefijo” es cuando el operador va antes de la variable: ++counter.
Ambas sentencias hacen la misma cosa: aumentar counter por 1.

¿Existe alguna diferencia? Sí, pero solamente la podemos ver si utilizamos el valor devuelto de ++/--.

Aclaremos. Tal como conocemos, todos los operadores devuelven un valor. Incremento/decremento no es una excepción. La forma prefijo devuelve el nuevo valor mientras que la forma sufijo devuelve el valor anterior (antes del incremento/decremento).

Para ver la diferencia, aquí hay un ejemplo:*/
let g=8;
g = ++g; // variable++ no incrementa
console.log(g); // 9
g = g--;
console.log(g);//9
g = --g;
console.log(g);
let h=1;
console.log("potenciación de 2 elevando a la variable incrementada (h): "+ 2 * ++h ); // 4
//Compara con:
console.log(h);
h = 1;
console.log("potencia de 2 al valor antiguo de h=1:  " + 2 * h++ ); // 2, porque h++ devuelve el valor "antiguo"
/*Incremento/decremento entre otros operadores
Los operadores ++/-- también pueden ser usados dentro de expresiones. Su precedencia es más alta que la mayoría de los otros operadores aritméticos.

Por ejemplo:

let h = 1;
console.log( 2 * ++h ); // 4
Compara con:

let h = 1;
console.log( 2 * h++ ); // 2, porque h++ devuelve el valor "antiguo"
Aunque técnicamente está bien, tal notación generalmente hace que el código sea menos legible. Una línea hace varias cosas, no es bueno.

Mientras lee el código, un rápido escaneo ocular “vertical” puede pasar por alto fácilmente algo como ‘counter++’ y no será obvio que la variable aumentó.

Aconsejamos un estilo de “una línea – una acción”:*/
let p = 1;
console.log( 2 * p++ ); // 2
let q =1;
console.log( 2 * ++q ); // 4


