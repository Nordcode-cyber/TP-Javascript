//convertir string a Number
let miNumero = "18";
 console.log(typeof miNumero);
  let edad = Number(miNumero);
 console.log(typeof edad);
 if(edad >= 18){
	 console.log("Puede votar");
 }
 else{
	 console.log("Muy joven para votar");
 }
 
 let resultado = (edad >= 18)? "Puede votar" : "Muy joven para votar";
 console.log( resultado );
 let altura ="90";
 console.log(typeof altura);
 let n1 = Number(altura);
 console.log(typeof n1);
 if (n1 <=100){
    console.log("Puede ingresar a la atraccion");
}else{
    console.log(" No puede ingresar a la atraccion");
}
let salida = (n1<=100)? "Puede ingresar a la atraccion" : "No Puede ingresar a la atraccion";
console.log(salida);
let sala = "5";
console.log(typeof sala);
let n2 =Number(sala);//convertir string a Number
console.log(typeof n2);
if(n2<=5){
    console.log("puede ingresar al jardin de infantes");
}else{
    console.log("Se equivoco de lugar");
}
let mensaje =(n2<=5)? "puede ingresar al jardin de infantes": "se equivoco de lugar";
console.log( mensaje);
let value = true;
console.log(typeof value); // boolean

value = String(value); // ahora value es el string "true"
console.log(typeof value); // string

