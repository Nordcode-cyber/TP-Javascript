/*Funcion isNaN*/
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
*/
NaN == NaN;         // false (El valor no es el mismo)
NaN === NaN;        // false (Ni el valor, ni el tipo de dato es el mismo)

Number.isNaN(NaN);  // true (Forma correcta de comprobarlo)
Number.isNaN(5);    // false (5 es un número, no es un NaN)
Number.isNaN("A"); // false ("A" es un string, no es un NaN)
Number.isNaN(11);
let miNumero = "17";
let edad = Number(miNumero); 
console.log( edad );
if( isNaN(edad)){
    console.log("No es un número");
}
else{
    if(edad >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar");
    }    
}

if( isNaN(edad)){
    console.log("No es un número");
}
else{
    let resultado = (edad >= 18)? "Puede votar" : "Muy joven para votar";
    console.log( resultado ); 
}
function milliseconds(x) {
    if (isNaN(x)) {
      return 'Not a Number!';
    }
    return x * 1000;
  }
  console.log(milliseconds('100F'));
  // salida esperada: "¡No es un número!"
  
  console.log(milliseconds('0.0314E+2'));
  // salida esperada: 3140
  function n(y){
    if (isNaN(y)){
        return 'No es un numero';
    }
    return y * 10;
  }
  console.log(n('45F'));
  //salida esperada no es un numero
  console.log(n('0.245E+2'));
  console.log(typeof n);
  pi= 0.03141592165E+2
  console.log(pi);
  console.log(typeof pi);
  let p1 = "17";
let litro = Number(p1); 
console.log( litro );
if( isNaN(litro)){
    console.log("No es un número");
}
else{
    if(litro >= 200){
        console.log("Puede volcar en playa 6");
    }
    else{
        console.log("Puede volcar en playa 11 que es mas grande");
    }    
}

if( isNaN(edad)){
    console.log("No es un número");
}
else{
    let resultado = (edad >= 18)? "Puede votar" : "Muy joven para votar";
    console.log( resultado ); 
}
  