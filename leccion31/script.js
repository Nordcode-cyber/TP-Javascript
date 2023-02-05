//Tipos primitivos
let x = 10;

function cambiarValor(a){
    a = 20;
}
//Paso por valor
cambiarValor(x);//10
console.log(x);
//console.log(a);
/*Paso por valor no podemos modificar el valor de la variable original
*/
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: '11',
    calle: 'mercaderes',
    altura: '2455'
}
function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Larams';
    p1.edad = '15';
    p1.calle = 'Jhon Lartengwannp'
    p1.altura = '100'
}
//Paso por referencia
cambiarValorObjeto( persona );
console.log( {persona} );
const Informatica ={
    dispositivo: 'Server GT K254',
    carpeta: 'PROMPT 325',
    red: 'H52',
    protocolo: '8080',
    servicio: 'HTTPS',
    localhost: '127.0.0.1',
    ip_entorno: '552154'
}
console.log(Informatica);
function modificarDatos(q1){
    q1.dispositivo = 'Server KL F341',
    q1.carpeta = 'PROMPT 781',
    q1.red = 'M44' ,
    q1.protocolo= '5500',
    q1.servicio = 'FPRS' ,
    q1.localhost = '254.0.0.1' ,
    ip_entorno = '251.258.63.145'
}
modificarDatos( Informatica );
console.log({Informatica});