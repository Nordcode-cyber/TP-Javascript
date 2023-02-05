En la programación clásica, el OR lógico esta pensado para manipular solo valores booleanos. 
si cualquiera de sus argumentos es true, retorna true, de lo contrario retorna false.
En JavaScript, el operador es un poco más complicado y poderoso. Pero primero, 
veamos qué pasa con los valores booleanos.

Hay cuatro combinaciones lógicas posibles:
->console.log(true || true); // true (verdadero)
->console.log(false || true); // true
->console.log(true || false); // true
->console.log(false || false); // false (falso)

En la programación clásica, AND retorna true si ambos operandos 
son valores verdaderos y false en cualquier otro caso.
->console.log(true && true); // true
->console.log(false && true); // false
->console.log(true && false); // false
->console.log(false && false); // false
