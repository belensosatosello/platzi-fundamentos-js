// CLASE 7 -
var belen = {
  nombre: 'Belen',
  apellido: 'Sosa',
  edad: 30
}

var maria = {
  nombre: 'Maria',
  apellido: 'Rodriguez',
  edad: 25
}


function imprimirNombreEnMayusculas(persona){
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase());
}

function imprimirNombreYEdad(persona){
  var { nombre } = persona
  var { edad } = persona
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreEnMayusculas(belen)
imprimirNombreEnMayusculas(maria)
//imprimirNombreEnMayusculas({name:'Beto'})

imprimirNombreYEdad(belen)
imprimirNombreYEdad(maria)

// El objeto se pasa como referencia
function cumpleanosPorRef(persona){
  persona.edad += 1
}

// Parametro como valor
function cumpleanosPorValor(edad){
  edad += 1
}

// Devuelve un nuevo objeto copiado del q pasamos
// como parametro pero con mas edad
function cumpleanos(persona){
  return {
    ...persona,
    edad: persona.edad + 1
  }
}
