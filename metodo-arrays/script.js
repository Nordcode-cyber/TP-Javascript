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
console.log('copia el array[principio],[final]')
let arr5 = ["t", "e", "s", "t"];
console.log(arr5)
console.log( arr5.slice(1, 3) ); // e,s (copia desde 1 hasta 3)

console.log( arr5.slice(0) ); // s,t (copia desde -2 hasta el final)
let arr6=['yo','estudio','typescript','para','saber','Angular'];
console.log('tamaño del array arr6: '+arr6.length)
console.log('funcion ForEach javascript')
console.table(arr6)
arr6.forEach(function(arr6, index) {
  console.log('indice: '+ index+ " " + 'valor: '+ arr6);// ... hacer algo con un elemento
});
let arr7 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
arr7.forEach(function(arr7, index) {
  console.log('indice: '+ index+ " " + 'valor: '+ arr7);// ... hacer algo con un elemento
});
console.log('metodo concat')
let arr8 =[3,4,5]
console.log( arr8.concat([6, 7]) );


