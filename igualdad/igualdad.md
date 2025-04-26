      Comparaciones en Javascript
Conocemos muchos operadores de comparación de las matemáticas:

Mayor/menor que: a > b, a < b.
Mayor/menor o igual que: a >= b, a <= b.
Igual: a == b (ten en cuenta que el doble signo == significa comparación, mientras que un solo símbolo a = b significaría una asignación).
Distinto. En matemáticas la notación es ≠, pero en JavaScript se escribe como una asignación con un signo de exclamación delante: a != b.
                       Booleano es el resultado
Como todos los demás operadores, una comparación retorna un valor. En este caso, el valor es un booleano.

true – significa “sí”, “correcto” o “verdad”.
false – significa “no”, “equivocado” o " no verdad". 
ejemplos:
->console.log( 2 > 1 ); // true (correcto)
->console.log( 2 == 1 ); // false (incorrecto)
->console.log( 2 != 1 ); // true (correcto)
let result = 5 > 4; // asignar el resultado de la comparación
->console.log( result ); // true