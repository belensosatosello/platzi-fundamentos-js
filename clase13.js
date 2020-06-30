// Clase 13 - loop for
var belen = {
  nombre: 'Belen',
  apellido: 'Sosa',
  edad: 30,
  peso: 52
}

console.log(`Al inicio del año ${belen.nombre} pesa ${belen.peso} kilos`);

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
  var random = Math.random()

  if(random < 0.25){
    aumentarDePeso(belen)
  } else if (random < 0.5) {
    adelgazar(belen)
  }
}

console.log(`Al final del año ${belen.nombre} pesa ${belen.peso.toFixed(1)} kilos`);
