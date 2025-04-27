/*propiedades y metodos de un objeto
 *
 */

let x = 10;
console.log(x.length);
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    telefono: '2965655645',
    email: 'jperez@mail.com',
    edad: 28,
    calle:'Vantselliers',
    altura: '2345',
    localidad: 'Boulogne',
    Codigo_postal: 'CP(1478)',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido + ' ' + this.edad+ ' ' +'años';
    },
    Domicilio: function(){
        return this.calle + ' ' + this.altura + ' ' + this.localidad + ' ' + this.Codigo_postal;
    }
}
/* las propiedades del objeto,
 *
 *Y los metodos del objeto deben  estar separado por una coma
*/
//objetos
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());
console.log(persona.Domicilio());
//Acceder a las propiedades del objeto
console.log(persona['localidad']);
console.log(persona['Codigo_postal']);

console.log(persona);
let servicios = {
    //propieedades del objeto
    localhost:'https://155.254.11.232/localhost',
    https: 'https://155.254.11.232',
    icimip: 'ping https://155.254.11.232',
    port:'8080',
    route:'transporting https://155.254.11.232',
    dns: 'https://155.254.11.232/binddns' ,
    whois: 'https://155.254.11.232/whois_protocol' ,
    testing: 'http://bindspeadtest.net/https://155.254.11.232' ,
    backup: 'hostinger.net/binder/https://155.254.11.232' ,
    pruebaBasica: function(){
        return 'Localhost: '+this.localhost +' '+'puerto: '+ this.port + ' ' +'Server_https: '+ this.https;
    },
    pruebaGral: function(){
        return 'IcimiP: '+this.icimip + 'Routing: ' + this.route + ''+'dns config: ' +this.dns +'testing networking: '+ '' +this.testing + '' + this.backup + '' +'command get whois: '+ this.whois + ' ';
    }
}
console.log(servicios.backup);
console.log(servicios.port);
console.log(servicios.pruebaBasica());
console.log(servicios.pruebaGral());
console.log(servicios['https']);
console.log(servicios['icimip']);
console.table(servicios);
for(propiedad in persona){
    console.log(persona)
}
let persona2 = new Object();
//las propiedades del objeto cierra con ;
persona2.nombre = 'Carlos';
persona2.apellido = 'Regnini';
persona2.calle = 'Saturno ';
persona2.altura = '1255';
persona2.localidad = 'Stronghres';
persona2.Codigo_postal = '1578';
persona2.tel = '55443322';
persona2.legajo = '1458';
console.log(persona2.nombre + ' ' + persona2.apellido);
console.log(persona2.calle + ' ' + persona2.altura+','+' '+ persona2.localidad+'.-' +'('+persona2.Codigo_postal+ ')');
//console.log( persona2 );
console.log('escrito en:  '+' '+windows.lenguaje+' '+ 'Multitares:  '+windows.multitareas + ' '+' '+'Cuota de Mercado en Mainframes: ' +windows.mercado_Mainframe)
console.log('tipo de licencia:  '+' '+windows.licencias+' '+ 'Multiusuarios:  '+windows.multiusuarios + ' '+' '+'Cuota de Mercado en Servidores Web: ' +windows.mercado_servidores_web);
//console.log(windows['mercado_supercomputadores'] );
console.table(windows);

//accede a una sola propiedad del objeto
console.log( persona.nombre);
console.log( persona['apellido'] );
//acceder a las propiedades de los objetos con ciclo For in
//for in
for( nombrePropiedad in persona){
    console.log( nombrePropiedad );
    console.log( persona[nombrePropiedad]);
}
for( nombrePropiedad in servicios){
    console.log( nombrePropiedad );
    console.log( servicios[nombrePropiedad]);
}
let persona3 = {
//las propiedades del objeto cierra con ;
nombre:'Carlos',
apellido: 'Regnini',
calle: 'Saturno ',
altura: '1255',
localidad: 'Stronghres',
Codigo_postal: '1578',
tel: '55443322',
legajo: '1458'
}
for(nombrePropiedad in persona3){
    console.log( nombrePropiedad);
    console.log(persona3[nombrePropiedad])
}
for(nombrePropiedad in windows){
    console.log(nombrePropiedad);
    console.log([windows[nombrePropiedad]])

}
