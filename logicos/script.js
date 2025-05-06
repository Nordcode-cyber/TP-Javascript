console.log(true || true); // true (verdadero)
console.log(false && true); //false (falso)
console.log(!false && true); //true (verdadero)
console.log(true || false && true || !false);//true(verdadero)
let peso =24;
if(peso <2500 || peso >500){
    console.log("no admitimos transporte con ese peso")
}

let nota = -2;
if (nota < 0 || nota >10){
    console.log("dato erroneo");
}
let hora = 11;
if (hora <16 || hora >21){
     console.log("Negocio cerrado");
} else if(hora >15 && hora <21 ) {
    console.log("Estamos atendiendo");
} 
