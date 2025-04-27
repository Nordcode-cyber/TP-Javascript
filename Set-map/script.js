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

set;            // Set({5, "A"})
console.log(set);
const set1 = new Set([8,5,6,7,8]);
set1;
console.log(set1.size)//4







