alert("Debe ingresar peso en Kilogramos para asignar lugar para su camion");
let tara  =prompt("Ingrese tara de su camion  en Kg " , 180);//seguir este patron
if(tara >=500 && tara <= 2500){
    bienvenido();
   function bienvenido(){
      alert("Descargue en la Darsena A10D para camiones ligeros");
    }
}
else if(tara >2500 && tara <=3500){
    bienvenido();
    function bienvenido(){
       alert("Descargue en la Darsena B40F para camiones livianos");
    }
}
else if (tara >3500 && tara <= 4750){
    bienvenido();
    function bienvenido(){
        alert("Descargue en la Darsena C50G para camiones semilivianos");
    }
}
else if(tara >4750 && tara <=5600){
    bienvenido();
    function bienvenido(){
        alert("Descargue en la Darsena DA95 para camiones mediano");
    }
}
else if(tara >5500 && tara <=7600){
    bienvenido();
    function bienvenido(){
        alert("Descarge en la darsena H14B para camiones semipesados");
    }
}
else if(tara >7600 && tara<= 9700){
    bienvenido();
    function bienvenido(){
        alert("descargue en la darsena M88K para camiones pesados")
    }
}
else if(tara <500 || tara >9700){
    bienvenido();
    function bienvenido(){
        alert("Dato erroneo fuera de rango  joder!!! no seas gillipollas!!");
    }
}
let eslora  =prompt("Ingrese eslora de su embarcacion en metros " , 180);//seguir este patron
if(eslora >=5 && tara <= 10){
    bienvenido();
   function bienvenido(){
      alert("tiene asignado el muellse A54m para amarrar su bote familiar");
    }
}
else if (eslora >10 && eslora <=15){
    bienvenido();
    function bienvenido(){
        alert("tiene asignado el muelle A67j para amarrar su lancha pesquera");
    }
}
else if (eslora >15 && eslora <=25){
    bienvenido();
    function bienvenido(){
        alert(" tiene asignado el muelle B81l para amarrar su barco revolcador");
    }
}
else if (eslora >25 && eslora <=36){
    bienvenido();
    function bienvenido(){
        alert("tiene asignado el muelle G84r para amarrar su barco petrolero");
    }
}
else if(eslora >36 && eslora <=58){
    bienvenido();
    function bienvenido(){
        alert("asignado el muelle J91q parra amarrar su barco de Factoria")
    }
}   
else if (eslora <5 && eslora >58){
    bienvenido();
    function bienvenido(){
        alert("Dato fuera de rango entre 5 y 58 Pero joder!! gillipollas!! ")
    }
}    