let j = 0;
/*
while( j < 3 ){
    console.log(j);
    j++;
}
*/

do{
    console.log(j);
    j++;
}while(j < 10);
console.log("Fin ciclo do while");
i =0;
do{
    console.log(i);
    i++;
}while(i<10);
console.log("fin ciclo do while con variable i");
for(let j = 0; j <= 10; j++){
    if( j % 2 !== 0){
		 console.log(j);
        break;//termina la ejecución del ciclo for por completo 
    }
   
}
for(let j = 0; j <= 10; j++){
    if( j % 2 !== 0){
        continue;//ir a la siguiente iteracion
    }
    console.log(j);
}
inicio://go to
for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue inicio;//ir a la siguiente iteracion
    }
    console.log(contador);
}
