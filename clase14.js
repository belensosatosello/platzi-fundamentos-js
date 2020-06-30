// Clase 14 - loop while
var belen = {
  nombre: 'Belen',
  apellido: 'Sosa',
  edad: 30,
  peso: 52
}

console.log(`Al inicio del año ${belen.nombre} pesa ${belen.peso} kilos`);

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = belen.peso -3
var dias = 0

while (belen.peso > META){
  if(comeMucho()){
    aumentarDePeso(belen)
  }
  if(realizaDeporte()){
    adelgazar(belen)
  }
  dias+= 1
}

console.log(`Pasaron ${dias} dias hasta que ${belen.nombre} adelgazó 3 kilos`);
