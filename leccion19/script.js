/*con  una sola setencia no hace falta llaves*/

darsena = 5499;//kilos
if(darsena >=500 && darsena<=2500 ){
    console.log("Descargue en la Darsena A10D para camiones ligeros");
}
else if(darsena >2500 && darsena <=3500){
    console.log("Descargue en la Darsena B40F para camiones livianos");
}
else if(darsena >3500 && darsena <=4500){
    console.log("Descargue en la Darsena C50G para camiones semilivianos");
}
else if(darsena >4500 && darsena <=5500){
    console.log("Desacargue en la Darsena DA95 para camiones mediano");
} 
else if(darsena >5500 && darsena <=7600){
    console.log("Descarge en la darsena H14B para camiones semipesados");
}
else if(darsena >7600 && darsena <= 9700){
    console.log("descargue en la darsena M88K para camiones pesados");
}
else if(darsena <500 || darsena >9700){
    console.log("Dato erroneo fuera de rango");
}
//embarcadero
let eslora = 12;
//Jet Sky
if(eslora >=2 && eslora <=3){
    console.log("Su embarcacion es un jet sky y puede amarrar en Dique  TR-22h ");
}
else if(eslora >3 && eslora <=7){
    console.log("su embarcacion es un bote familiar y puede amarrar en Dique QW-43a");
}
else if(eslora >7 && eslora <=12){
    console.log("su embarcacion es una lancha familiar y puede amarrar en Dique SD-84c")
}
else if(eslora >12 && eslora <=20){
    console.log("su embarcacion es barco pesquero convencional puede amarrar en Dique FH-51a");
}
else if (eslora >20 && eslora <=70){
    console.log("su embarcacion es barco petrolero puede amarrar en Dique JQ- 77i ");
}
else if(eslora >70 && eslora <=100){
    console.log("su embarcacion es barco gasifero puede amarrar en Dique KG-17o");
}
else if(eslora <2 || eslora >100){
    console.log("dato erroneo")
}

