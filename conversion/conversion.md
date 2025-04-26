                     Conversiones de Tipos

La mayoría de las veces, los operadores y funciones convierten automáticamente,- 
los valores que se les pasan al tipo correcto. Esto es llamado “conversión de tipo”.
Por ejemplo, ->console.log convierte automáticamente cualquier valor a string para mostrarlo. 
Las operaciones matemáticas convierten los valores a números.
También hay casos donde necesitamos convertir de manera explícita un valor al tipo esperado.

                            ToString
La conversión a string ocurre cuando necesitamos la representación en forma de texto de un valor.
Por ejemplo, ->console.log(value) lo hace para mostrar el valor como texto.

También podemos llamar a la función String(value) para convertir un valor a string:

let value = true;
->console.log(typeof value); // boolean

value = String(value); // ahora value es el string "true"
->console.log(typeof value); // string
La conversión a string es bastante obvia. El boolean false se convierte en "false", null en "null", etc.

                           ToNumber
La conversión numérica ocurre automáticamente en funciones matemáticas y expresiones.
Por ejemplo, cuando se dividen valores no numéricos usando /:

->console.log( "6" / "2" ); // 3, los strings son convertidos a números
Podemos usar la función Number(value) para convertir de forma explícita un valor a un número:

let str = "123";
->console.log(typeof str); // string

let num = Number(str); // se convierte en 123

->console.log(typeof num); // number
La conversión explícita es requerida usualmente cuando leemos un valor desde una fuente basada en texto, 
como lo son los campos de texto en los formularios, pero que esperamos que contengan un valor numérico.

                          ToBoolean

La conversión a boolean es la más simple.Ocurre en operaciones lógicas también puede realizarse,- 
de forma explícita llamando a la función Boolean(value).

                    Las reglas de conversión:

Los valores que son intuitivamente “vacíos”, como 0, "", null, undefined, y NaN, se convierten en false.
Otros valores se convierten en true.
Por ejemplo:

->console.log( Boolean(1) ); // true
->console.log( Boolean(0) ); // false

->console.log( Boolean("hola") ); // true
->console.log( Boolean("") ); // false