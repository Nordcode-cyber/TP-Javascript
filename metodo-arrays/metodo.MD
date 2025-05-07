### Métodos de arrays
Los arrays (también llamados arreglos o matrices) cuentan con muchos métodos. Para hacer las cosas más sencillas, en este capítulo los separamos en grupos.

Agregar/remover ítems
Ya conocemos algunos métodos que agregan o extraen elementos del inicio o final de un array:

arr.push(...items) – agrega ítems al final,
arr.pop() – extrae un ítem del final,
arr.shift() – extrae un ítem del inicio,
arr.unshift(...items) – agrega ítems al principio.
## splice
¿Cómo podemos borrar un elemento de un array?

Los arrays son objetos, por lo que podemos intentar con delete:
´´´ let arr=["voy","a","casa"]´´´
´´´delete arr[1];´´´
´´´console.log(arr[1])´´´
´´´console.log(arr.length)´´´
El elemento fue borrado, pero el array todavía tiene 3 elementos; podemos ver que arr.length == 3.

Es natural, porque delete obj.key borra el valor de key, pero es todo lo que hace. Esto está bien en los objetos, pero en general lo que buscamos en los arrays es que el resto de los elementos se desplace y se ocupe el lugar libre. Lo que esperamos es un array más corto.

Por lo tanto, necesitamos utilizar métodos especiales.
## metodo arr.splice
funciona como una navaja suiza para arrays. Puede hacer todo: insertar, remover y remplazar elementos.
La sintaxis es:
```arr.splice(start[, deleteCount, elem1, ..., elemN])```
```let arr = ['yo','estudio','javascript'];```
```arr.splice(1, 1);```
```console.log(arr)```

