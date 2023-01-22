                                   Array Ó Vectores

Los objetos te permiten almacenar colecciones de datos a través de nombres. Eso está bien.
Pero a menudo necesitamos una colección ordenada, donde tenemos un 1ro, un 2do, un 3er elemento y así sucesivamente. 
Por ejemplo, necesitamos almacenar una lista de algo: usuarios, bienes, elementos HTML, etc.
No es conveniente usar objetos aquí, porque no proveen métodos para manejar el orden de los elementos. 
No podemos insertar una nueva propiedad “entre” los existentes. Los objetos no están hechos para eso.
Existe una estructura llamada Array (llamada en español  o matriz/vector) para almacenar colecciones ordenadas.

                          Hay dos sintaxis para crear un array vacío:

let arr = new Array();
let arr = [];
let fruits = ["Apple", "Orange", "Plum"];

                          ->console.log( fruits[0] ); // Apple
                          ->console.log( fruits[1] ); // Orange
                          ->console.log( fruits[2] ); // Plum
                                let matrix = [
                                    [1, 2, 3],
                                    [4, 5, 6],
                                    [7, 8, 9]
                                      ];

->console.log( matrix[1][1] ); // 5, el elemento central
->console.table(arr);
                                                          ┌─────────┬──────────┐ 
                                                          │ (index) │  Values  │ 
                                                          ├─────────┼──────────┤ 
                                                          │    0    │ 'Apple'  │ 
│    1    │ 'Orange' │ 
│    2    │  'Plum'  │ 
└─────────┴──────────┘ 

                                                       Arrays de objetos
var apps = {
    mapas: "google",
    musica: "youtube" ,
    radio: "ask.fm ",
    correr: "runkeeper" ,
    reloj: "TimeRoot" ,
    agenda: "Calendar" ,
    caminar: "poodmeter"
}            
->console.table(apps);
┌─────────┬─────────────┐ 
│ (index) │   Values    │ 
├─────────┼─────────────┤ 
│  mapas  │  'google'   │ 
│ musica  │  'youtube'  │ 
│  radio  │  'ask.fm '  │ 
│ correr  │ 'runkeeper' │ 
│  reloj  │ 'TimeRoot'  │ 
│ agenda  │ 'Calendar'  │ 
│ caminar │ 'poodmeter' │ 
└─────────┴─────────────┘ 

                                                       
                                                       

