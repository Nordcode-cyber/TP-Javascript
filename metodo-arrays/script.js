let arr = ["voy","caminando","por la","ciudad"];
console.log(arr)
delete arr[2];
console.log(arr)
console.log(arr.length)
console.log('utilizando el metodo splice')
let arr1=['yo','estudio','javascript']
console.log(arr1.length)
arr1.splice(0, 1)//desde el indice 1 remover un elemento
console.log(arr1)
console.log('removemos 3 elementos y reemplazamos con otros 2')
let arr2=['yo','estudio','javascript','ahora','mismo','node js'];
console.log(arr2)
arr2.splice(3, 2, 'para', 'aprender');
console.log(arr2)
console.log('devolver elementos removidos')
let removed = arr2.splice(3, 2)
console.log(removed)
console.log('agregar elementos sin borrar otros')
let arr3=['yo','estudio','java']
console.log(arr3)
arr3.splice(2, 0,'para','desarrollar','software' )
console.log(arr3)
let arr4=[1,2,3,4,5]
console.table(arr4)
arr4.splice(4, 0, 6, 7, 8, 9)
console.table(arr4)



