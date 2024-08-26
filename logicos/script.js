alert(true || true); // true (verdadero)
alert(false && true); //false (falso)
alert(!false && true); //true (verdadero)
alert(true || false && true || !false);//true(verdadero)
if (1 || 0) { // Funciona como if( true || false )
    alert("valor verdadero!");
  }
if(1 && 1) {
    alert("valor verdadero!");
}  
let nota = -2;
if (nota < 0 || nota >10){
    alert("dato erroneo");
}
let hora = 11;
if (hora <16 || hora >21){
     alert("Negocio cerrado");
} else if(hora >15 && hora <21 ) {
    alert("Estamos atendiendo");
} 
