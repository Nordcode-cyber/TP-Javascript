//let year = prompt('En que año nacio el lenguaje C');
//if (year ==1970) alert ('estas en lo cierto');
let year = prompt('¿En qué año fue publicada la especificación ECMAScript-2015?', '');
if (year == 2015) {
    alert( '¡Lo adivinaste, correcto!' );
    } else {
      alert( '¿Cómo puedes estar tan equivocado?' ); // cualquier valor excepto 2015
    }    
let color = prompt('de que color es la mascota de php', '');
if (color == 'violeta') {
    alert( '¡Lo adivinaste, correcto!' );
    } else {
      alert( '¿Cómo puedes estar tan equivocado?' ); // cualquier valor excepto violeta
        } 
let anio = prompt('¿En qué año fue publicado el lenguaje php', '');
if (anio < 1994) {
    alert( 'Muy poco...' );// cualquier valor excepto 1994
    } else if (anio > 1994) {
        alert( 'Muy Tarde' );// cualquier valor excepto 1994
        } else {
           alert( '¡Exactamente!' );
        }
let mes = prompt('En que mes empieza la primavera', '');
if (mes <9){
    alert('mas arriba');
   } else if (mes > 9){
        alert('mas abajo');
        } else {
           alert('Exactamente!!');  
     }
let edad = prompt('Que edad tiene juanito: ', '');
if(edad <14){
    alert('es chico');
   } else if(edad >14){
        alert('es grande');
        } else {
            alert('Exactamente');
     }  
let caracter = prompt('Que caracter representa la CSS', '');
if(caracter == '#'){
    alert('Es Correcto');
} else {
    alert('Como puedes estar equivocado!!');
}
let nombre = prompt('Cual es el primer nombre Stalmman el padre de GNU','');
if(nombre =='richard'){
    alert('es corecto');
}else if(nombre =='rms'){
    alert('error.. ese es su apodo!!');
}else{
    alert('Como puedes estar equivocado!!');
}                        
