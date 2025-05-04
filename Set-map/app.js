let map = new Map();

map.set('1', 'string');   // un string como clave
map.set(1, 'number');     // un número como clave
map.set(true, 'boolean'); // un booleano como clave

// ¿recuerda el objeto regular? convertiría las claves a string.
// Map mantiene el tipo de dato en las claves, por lo que estas dos son diferentes:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'
console.log(map.get(true))

console.log( map.size ); // 3