                        FUNCIÓN isNaN

/*La función isNaN() determina cuando el valor es NaN o no. 
Tenga presente que la coerción dentro de la función isNaN tiene reglas interesantes; 
tal vez quieras usar de forma alternativa Number.isNaN(), como fue definido en ECMAScript 2015
 *El acrónimo NaN es un valor especial de Javascript que significa 
 literalmente Not A Number (No es un número). Sin embargo, no hay que dejarse llevar por.- 
 su significado literal, ya que nos podría dar lugar a malentendidos. 
 El valor NaN, a pesar de su significado, se usa para representar 
 valores numéricos (y ahora es donde viene el matiz) 
 que son indeterminados o imposibles de representar como número.

Dentro de esa categoría hay varios:

Indeterminación matemática: Por ejemplo, 0 / 0.
Valores imposibles: Por ejemplo, 4 - 'a', ya que es imposible restar una letra a un número.
Operaciones con NaN: Por ejemplo, NaN + 4, ya que el primer operando es NaN.
Propiedad o metodo   | Descripcion
Number.NaN           | Es equivalente a NaN. Valor que no puede representarse como número.
Number.isNaN(number) | comprueba si number no es un numero
