/*no permite repetir datos
 *
 */
const set = new Set();
set.add(5);
set.add("A");
set.add(NaN);
set.add(8);
set.add(5);     // No se inserta
set.add(undefined)
set.add(null)
set.add(NaN);
set.add("A");
set.add("pepe");
set;
console.log(set);
console.log('probando propiedad .size')            // Set({5, "A",NaN,8,undefined,null,pepe})
const set1 = new Set([5,6,7,8,9,11,13]);
set1;
console.log(set1.size)//7
console.log('probando propiedad .has')
console.log(set1.has(4))//false
console.log(set1.has(8))//true
console.log(set1.has(12))//false
console.log(set1.has(13))//true
console.log('probando propiedad .delte')
const set3 = new Set([4,5,7,8,9,11,14,16]);
console.log(set3.delete(4))//true
console.log(set3.delete(6));//false
console.table(set3);
console.log('probando propiedad .clear')
const set4 = new Set([4,5,7,8,9,11,14,16]);
console.log(set4)
set4.clear();
console.log(set4)








