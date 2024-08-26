let a = 2 + 1;
let b = 4;

switch (a) {
  case 3:
    alert( 'Muy pequeño' );
    break;
  case 4:
    alert( '¡Exacto!' );
    break;
  case 5:
    alert( 'Muy grande' );
    break;
  default:
    alert( "Desconozco estos valores" );
}
switch(b){
    case 3:
        alert("mas grande: ");
        break;
    case 4:
        alert("falta poco: ");
        break;    
    case 5:
        alert("exacto: ");
        break;
    default:
        alert("inalcanzable...")    

    }
   let arg = prompt("Ingrese un valor");
   switch (arg) {
        case '1':
        alert( 'Uno' );
        break;
        case '2':
        alert( 'Dos' );
        break;
        case '3':
        alert( '¡Nunca ejecuta!' );
        break;
        default:
        alert( 'Un valor desconocido' );
    }
    let nota = prompt("ingrese la nota del alumno: ");
    switch (nota) {
        case '1':
            alert('aplazado');
            break;
        case '2':
            alert('aprobado');
            break;
        case '3':
            alert('sobresaliente');
            break;       
        case '4':
            alert('Valor fuera de rango');
            break;
            default:   
    }
    alert("pase a elegir sala");
    alert('presione 1 para sala Jorge luis Borges');
    alert('presione 2 para sala victoria ocampo');
    alert('presione 3 para sala Julio Cortazar ');
    alert('presione 4 para salir');        
    let sala = prompt("ingrese la sala donde quiere visitar: ");
    switch (sala) {
        case '1':
        alert('caminar hasta el pasillo verde y entrar en la puerta 6');
        break;
        case '2':
        alert('gira 90° caminar hasta pasillo amarillo y entrar en la puerta 14');  
        break;
        case '3':
        alert('caminar hasta pasillo naranja y entrar en la escalera al 1er piso');
        break;
        case '4':
        alert('Saliendo..');
        default:
    }
    alert("Para tomar los siguientes medios de trasporte");
    alert('presione 1 para viajar a los barrios de Montania,[casares, mercaderes, y osorno]');
    alert('presione 2 para viajar a los barrios de Valonner,[Kardinger, saldier, y Moron]');
    alert('presione 3 para viajar a los barrios de Torquist,[Salinas, Trujher, Boulogne] ');
    alert('presione 4 para salir'); 
    let colectivo = prompt("ingrese a que ciudad quiere viajar");
    switch (colectivo) {
        case '1':
        alert('Calle Daract 2300 darsena F');
        break;
        case '2':
        alert('Calle Padre Fahfhitt darsena L');
        break;
        case '3':
        alert('Calle Frighinshon darsena D1');
        break;
        case '4':
        alert('Saliendo...');
        default:                
    }
    alert("Para seleccionar su embarcacion");
    alert('presione 1 si su embarcacion es bote familiar');
    alert('presione 2 si su embarcacion es lancha de paseo');
    alert('presione 3 si su embarcacion es un remolcador ');
    alert('presione 4 si su embarcacion es un barco pesquero'); 
    alert('presione 5 si su embarcacion es barco petrolero');
    alert('presione 6 si su embarcacion es barco gasifero');
    alert('presione 7 si su embarcacion es un barco de factoria');
    let eslora = prompt("ingrese eslora de su embarcacion: ");
    switch (nota) {
        case '1':
            alert('puede amarrar en muelle AS56m');
            break;
        case '2':
            alert('puede amarrar en muelle AD47q');
            break;
        case '3':
            alert('puede amarrar en muelle CF51l');
            break;       
        case '4':
            alert('puede amarrar en muelle FD78p');
            break;
        case '5':
            alert('puede amarrar en muelle GT43k');
            break;
        case '6':
            alert('puede amarrar en muelle JP35a');
            break;
        case '7':
            alert('puede amarrar en Hangar DF500p');
            break;
        case '8':
            alert('saliendo...')
            default:   
    }
    

    
