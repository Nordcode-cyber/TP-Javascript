/*
Ejemplos de 
tipos de datos 
en JavaScript
*/
//Tipo de dato string
var p1 = 'josecito';
var nombre = "Innombrable";
var nick = "centennials de mielda";
console.log(nombre);
console.log(typeof nombre);
console.log(p1);
console.log(typeof p1);
console.log(nombre);
console.log(typeof nombre);
console.log(nick);
console.log(typeof nick);
console.log(nombre +" "+ nick);
//Tipo de dato numerico
nombre = 10.5;
console.log(typeof nombre);
var p2 = 8.3165641256;
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
}
console.log(typeof objeto);//object
console.table(objeto);

//Tipo de dato boolean (true, false)
var bandera = false;
var esVerdadero = 4==5;//
console.log(bandera);
console.log(typeof bandera);
console.log(esVerdadero);
console.log(typeof esVerdadero);

//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
class cilindro{
    constructor(radio, altura){
        this.radio = radio;
        this.altura = altura;
    }
}
class triangulo{
    constructor(lado1, lado2, lado3){//el constructor abre llaves
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }/*fin constructor */
}/*fin clase triangulo*/
console.log(triangulo);
console.log(typeof triangulo);
console.log(Persona);
console.log(typeof Persona);
console.log(cilindro);
console.log(typeof cilindro);

//Tipo undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

//arays en JavaScript
var autos = ['BMW','Audi','Volvo'];
var lenguajes = ['C', 'C++','JAVA','PYTHON','KOTLIN'];//ARRAY 
console.log(autos);
console.log(typeof autos);
var arr = [0,1,2,3,4,5,6,7,8,9];
var vector = [4,7,3,9,1,2,0,5,8,6];
console.log(vector);
console.log(typeof vector);
console.table(vector);
vector.sort(); //ordenar
console.table(vector);
console.log(arr);
console.log(typeof arr);
console.table(arr);
console.log(lenguajes);
console.log(typeof lenguajes);
console.table(lenguajes);
//Cadena vacia (empty string)
var z = '';
console.log(z);
console.log(typeof z);
//objetos en javascript
var apps = {
    mapas: "google",
    musica: "youtube" ,
    radio: "ask.fm ",
    correr: "runkeeper" ,
    reloj: "TimeRoot" ,
    agenda: "Calendar" ,
    caminar: "poodmeter"
}
console.log(apps);
console.log(typeof apps); //object
console.table(apps);
var os = ['Unix', 'IOs', 'Gnu/Linux', 'Free BSD', 'Beos'];
console.log(os);
console.log(typeof os); //array
console.table(os);
