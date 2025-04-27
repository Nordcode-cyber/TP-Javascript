function ask(question, yes, no) {
    if(confirm(question)) yes()
    else no();
}
function showOk(){
    alert("estas de Acuerdo. ");
}
function showCancel(){
    alert("Cancelaste la ejecucion ");

}
ask("Estas de acuerdo ?" ,showOk, showCancel);
function suma(a, b){
    return a + b;
}
//sayHi("Jhon");
let sayHi = function(name){
    alert(`Hola, ${name}` );
};
let age =prompt("Cual es su edad? para entrar a la matine" , 18);//seguir este patron
if(age <18){
    bienvenido();
   function bienvenido(){
      alert("Pasa sentate, enseguida te servimos una limonada");
    }
}else{
    bienvenido();
    function bienvenido(){
        alert("Rajen de aca que son pelotudos grandes");
    }
}
let boleto = prompt("Cual es el precio que pago ?",300);
if(boleto <300){
    enhorabuena();
    function enhorabuena(){
        alert("No sea rata y pague sinverguenza");
    }
} else {
    enhorabuena();
    function enhorabuena(){
        alert("Pase y pongase comodo que servimos un Fernet");
    }
}
let pasaje = prompt("Por que ruta va a viajar: " ,11);
if (pasaje<7000){
    Destino();
    function Destino(){
        alert("Usted viaja por la Ruta 7");
    }
}else{
    Destino();
    function Destino(){
        alert("Usted viaja por la Ruta 40");
    }
}
let peso = prompt("Cuanto pesa su camion?" , 79);
if(peso<8000){
    balanza();
    function balanza(){
        alert("Usted debe volcar en Darsena A1");
    }
}else {
    balanza();
    function balanza(){
        alert("Usted debe volcar en Darsena C5");
    }
}
let altura = prompt("Cual es su altura en (cm) para entrar a la atraccion" ,12);
if(altura<120){
    atraccion();
    function atraccion(){
        alert("Podes Pasar a disfrutar del castillo encantado");
    }
}else{
    atraccion();
    function atraccion(){
    alert("Sos un boludo grande para esta atraccion...");
   }
}
//bienvenido(); //error
let estacion =prompt("Ingrese mes para saber en que estacion del año estamos(Latam): " , 18);//seguir este patron
if(estacion ==1 || estacion ==2 || estacion == 12){
    bienvenido();
   function bienvenido(){
      alert("estamos en verano");
    }
}
else if(estacion ==3 || estacion ==4 || estacion==5){
    bienvenido();
    function bienvenido(){
       alert("estamos en otoño");
    }
}  
else if(estacion ==6 || estacion ==7 || estacion==8){
    bienvenido();
    function bienvenido(){
       alert("estamos en invierno");
    }
}
else if(estacion ==9 || estacion ==10 || estacion==11){
    bienvenido();
    function bienvenido(){
       alert("estamos en primavera");
    }
}
else if(estacion <1 || estacion>12){
    bienvenido();
    function bienvenido(){
       alert("dato fuera de rango joder!!! no seas gillipollas!!");
    }
}