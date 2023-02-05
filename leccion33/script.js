let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

persona.tel = '55443322';
persona.tel = '44332211';

console.log( persona );

delete persona.tel;
console.log( persona );
persona.tel = '44332211';
delete persona.nombre;

console.log( persona );
persona.nombre = 'Jose';
console.log( persona );
persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

persona.tel = '55443322';
persona.tel = '44332211';

console.log( persona );

delete persona.tel;

console.log( persona );

//Concatenar cada valor de cada propiedad
console.log( persona.nombre + ', ' + persona.apellido);

//for in
for( nombrePropiedad in persona){
    console.log( persona[nombrePropiedad]);
}

let personaArray = Object.values( persona );
console.table( personaArray );

let personaString = JSON.stringify( persona );
console.table( personaString );