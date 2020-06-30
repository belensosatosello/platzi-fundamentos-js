// Clase 17 -Arrays 
var belen={
    nombre: 'Belen',
    apellido: 'Sosa',
    altura: 1.58
}

var maria ={
    nombre: 'Maria',
    apellido: 'Rodriguez',
    altura: 1.65
}

var juan={
    nombre: 'Juan',
    apellido: 'Lopez',
    altura: 1.35
}

var manuel={
    nombre: 'Manuel',
    apellido: 'Torres',
    altura: 1.75
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.60
}

var david={
    nombre: 'David',
    apellido: 'Baez',
    altura: 1.81
}

var personas = [belen, maria, juan, manuel, vicky, david]

for(var i = 0; i < personas.length; i++){
  console.log(`${personas[i].nombre} mide ${personas[i].altura} mts`);
}

// FILTRAR un ARRAY
//const esAlta = persona => persona.altura > 1.8
const esAlta = ({altura}) => altura > 1.8
var personasAltas = personas.filter(esAlta) // filter devuelve un nuevo array
//var personasAltas = personas.filter(function (persona) {
//  return persona.altura > 1.8
//})
console.log(personasAltas);

const esBaja = (persona) => !esAlta(persona)
var personasBajas = personas.filter(esBaja)

console.log(personasBajas)


// TRANSFORMAR
// MAP devuelve un nuevo array
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

// const pasarAlturaACms = persona => {
//   return {
//     ...persona,
//     altura: persona.altura * 100
//   }
// }

var personasCms = personas.map(pasarAlturaACms)
console.log(personasCms);
