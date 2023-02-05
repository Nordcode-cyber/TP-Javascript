let resultado = sumarTodo(5, 4, 13, 10, 9, 10, 11, 3);//suma de los elementos
console.log( resultado );

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; // suma = suma + arguments[i]
    }
    return suma;
}
let resultado1 = restarTodo(65,35,14,8,14,23,7,2);
function restarTodo(){
    let resta =0;
    for(let i=0; i<arguments.length;i++){
        resta-= arguments[i];
    }
    return resta;
}
console.log(resultado1);
let resultado2 = multiplicarTodo(7,4,6,2);
function multiplicarTodo(){
    let multiplo =1;
    for(let j=0;j<arguments.length;j++){
        multiplo = multiplo *arguments[j];
    }
    return multiplo;
}
console.log(resultado2);

