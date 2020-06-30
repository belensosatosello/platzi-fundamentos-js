// CLASE 10 - Condicionales
var belen = {
  nombre: 'Belen',
  apellido: 'Sosa',
  edad: 30,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  buzo: true,
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 3
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es:`);
  if(persona.ingeniero){
    console.log('Ingeniero')
  }
  if(persona.cocinero){
    console.log('Cocinero')
  }
  if(persona.cantante){
    console.log('cantante')
  }
  if(persona.dj){
    console.log('dj')
  }
  if(persona.guitarrista){
    console.log('guitarrista')
  }
  if(persona.buzo){
    console.log('buzo')
  }
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

function esMayorDeEdad(persona){
  return persona.edad >= MAYORIA_DE_EDAD;
}

imprimirProfesiones(belen);
imprimirSiEsMayorDeEdad(belen);
