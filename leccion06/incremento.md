#Incremento/Decremento
Aumentar o disminuir un número en uno es una de las operaciones numéricas más comunes.

Entonces, hay operadores especiales para ello:

Incremento ++ incrementa una variable por 1:
Pre-incremento (el operador ++ antes de la variable)
Importante:
Incremento/decremento sólo puede ser aplicado a variables. 
Intentar utilizarlocon datos primitivospor ejemplo 5++ dará un error.
->console.log(5++); 
VM99:1 Uncaught SyntaxError: Invalid left-hand side in assignment
tira error porque solo se puede incrementar/decrementar variables.
                            Aclaración

Cuando el operador va después de la variable, está en “forma de sufijo”: counter++.
La “forma de prefijo” es cuando el operador va antes de la variable: ++counter.
Ambas sentencias hacen la misma cosa: aumentar counter por 1.
¿Existe alguna diferencia? Sí, pero solamente la podemos ver si utilizamos el valor devuelto de ++/--.

Aclaremos. Tal como conocemos, todos los operadores devuelven un valor. 
Incremento/decremento no es una excepción. 
La forma prefijo devuelve el nuevo valor mientras,- 
que la forma sufijo devuelve el valor anterior.- (antes del incremento/decremento).

                     Incremento/decremento entre otros operadores
Los operadores ++/-- también pueden ser usados dentro de expresiones. 
Su precedencia es más alta que la mayoría de los otros operadores aritméticos.

Por ejemplo:
->let p = 1;
->console.log( 2 * p++ ); // 2
->let q =1;
->console.log( 2 * ++q ); // 4
, porque p++ devuelve el valor "antiguo"
Aunque técnicamente está bien, tal notación generalmente hace que el código sea menos legible. Una línea hace varias cosas, no es bueno.

Mientras lee el código, un rápido escaneo ocular “vertical” puede pasar por alto fácilmente algo como ‘counter++’ y no será obvio que la variable aumentó.

Aconsejamos un estilo de “una línea – una acción”:*/
