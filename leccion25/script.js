//let autos = new Array('BMW','Mercedes Benz','Volvo');
/*const arr = [5,8,2,4];
*console.log(arr);
*console.log(typeof arr);
*console.log( Array.isArray(arr) );
*console.log( arr instanceof Array);
* verificar si es un array
*/

const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}
const lenguajes = ['C', 'C++','JAVA','PYTHON','JAVASCRIPT','PHP','C#', 'TYPESCRIPT', 'KOTLIN'];
console.log(lenguajes);
console.log(lenguajes[2]);
console.log(lenguajes[4]);
console.log(lenguajes[0]);
console.log(lenguajes[8]);
for(let j=0; j<lenguajes.length;j++){
    console.log(j + ':' + lenguajes[j]);
}
console.log(typeof lenguajes);
console.log( Array.isArray(lenguajes) );//devuelve un valor Booleano
console.log(lenguajes instanceof Array);
console.table(lenguajes);
const so = ['Unix','Beos','Bsd','Gnu/Linux','Io','Amiga os','Solaris', 'Windows', 'Aix os', 'Irix os', 'Palm os'];
console.log(so);
console.table(so);
console.log(so[8]);
console.log(so[2]);
console.log(so[8]);
console.log(so[4]);
console.log(so[3]);
console.log(so[1]);
for(let k=0; k < so.length;k++){
    console.log(k+':'+ so[k]);
}
so[4] = 'Mac os';
console.log(so[4]);
console.table(so);
const ides =['emacs','vi','nano','turbo','frepascal','neovim','kate','lazarus','kdevelop','eclipse', 'intelliidea','vs code'];
console.log(ides);
console.table(ides);
console.log(ides[11]);
console.log(ides[5]);
console.log(ides[9]);
console.log(ides[3]);
console.log(ides[4]);
console.log(ides[10]);
console.log(ides[6]);
console.log(ides[0]);
for(let l=0; l<ides.length;l++){
    console.log(l + ':'+ides[l]);
}
console.log(typeof ides);
console.log( Array.isArray(ides) );//devuelve un valor Booleano
console.log(ides instanceof Array);
console.table(ides);
/*
* console.log(ides.lenght);
*imprime la cantidad de elementos de un Array
*so.push('Adroid stdio');
*so[so.length] = 'Android stdio';
* permite agregar nuevos valores al array
* y a la vez entrar un nuevo indice al array 
*/
//

console.log(ides[4]);

for(let m=0; m<ides.length; m++){
    console.log(m + ':' + ides[m]);
}
so[10]='Hahs os';
so.push('Gnu free bsdf');
so[11]='Gnu/Free Bsd';
console.log(so);
console.log(so.length); 
/*
* console.log(so.lenght);
*imprime la cantidad de elementos de un Array
*so.push('Adroid');
*so[so.length] = 'Android';
* permite agregar nuevos valores al array
* y a la vez entrar un nuevo indice al array 
*/
//
console.log(typeof so);
console.log( Array.isArray(so) );//devuelve un valor Booleano
console.log(so instanceof Array);
console.table(so);
ides.push('delphi');
ides.push('pycharm');
ides.push('atom');
ides[4]= 'free pascal';
ides[10]='intelljidea';
console.log(ides.length);
ides[ides.length] = 'yyyyy';
console.table(ides);
lenguajes[4]='Javascript';//modificar
lenguajes[2]='Java';//modificar
lenguajes[3]='Python';//modificar
lenguajes[5]='Php';//modificar
lenguajes[7]='Typescript';//modificar
lenguajes[8]='Kotlin';//modificar
/*Cada vez que modificamos elementos o propiedades 
 *de un Array siempre debemos hacerlo antes de un console.table(arr)
 *porque permite visualizar la correcta insercion o mdificacion del array
*/
//lenguajes, ides, sistemas operativos
lenguajes.push('Assembler');
lenguajes.push('Object C');
lenguajes.push('Smaltak');
console.log(lenguajes.length);
/*
* console.log(lenguajes.lenght);
*imprime la cantidad de elementos de un Array
*lenguajes.push('D');
*lenguajes[lenguajes.length] = 'D';
* permite agregar nuevos valores al array
* y a la vez entrar un nuevo indice al array 
*/
//
console.log(typeof lenguajes);
console.log( Array.isArray(lenguajes) );//devuelve un valor Booleano
console.log(lenguajes instanceof Array);
console.table(lenguajes);
const framework =['Boostrap','tailcss','angular','react', 'node.js', 'jquery','openlayer', 'angular'];
console.table(framework);
console.log(framework[2]);
console.log(framework[2]);
console.log(framework[3]);
console.log(framework[0]);
console.log(framework[1]);
framework[7] ='Angular';
framework[2] ='Chart.js';
framework.push('flutter');
framework.push('Vue.js');
framework.push('Next.js');
framework.push('Svelt.js');
framework.push('Django');
framework.push('Flask');
framework.push('Pyramid');
framework.push('Spring boot');
for(let n=0; n<framework.length;n++){
    console.log(n + ':' +framework[n]);
}
//cantidade elementos 
console.log(framework.length);
/*
* ides.push(Adroid Stdio);
*ides[ides.length] = 'xxxx';
* permite agregar nuevos valores al array
* y a la vez entrar un nuevo indice al array 
*/
framework[framework.length] = 'darh.js';
console.log(framework.length);
/*
* console.log(framework.lenght);
*imprime la cantidad de elementos de un Array
*framework.push('art.js');
*framework[framework.length] = 'Android';
* permite agregar nuevos valores al array
* y a la vez entrar un nuevo indice al array 
*/
console.log(typeof framework);
console.log( Array.isArray(framework) );//devuelve un valor Booleano
console.log(framework instanceof Array);
console.table(framework);
/*const arr = [5,8,2,4];
*console.log(arr);
*console.log(typeof arr);
*console.log( Array.isArray(arr) );
*console.log( arr instanceof Array);
* verificar si es un array
*/