// CLASE 12 - Arrow functions
var belen = {
  nombre: 'Belen',
  apellido: 'Sosa',
  edad: 30,
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 3
}

function imprimirSiEsMayorDeEdad(persona){
  var { edad } = persona
  if(esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

const MAYORIA_DE_EDAD = 18;

// Funcion anonima
//const esMayorDeEdad = function (persona){
//  return persona.edad >= MAYORIA_DE_EDAD;
//}

// Arrow functions
//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;
// Arrow function mejorada
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;
const esMenorDeEdad = (persona) => !esMayorDeEdad(persona);

function permitirAcceso(persona){
  if(esMenorDeEdad(persona)){
    console.log('Acceso Denegado')
  }
}
