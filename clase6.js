// CLASE 6  - Objetos
var belen = {
  name: 'Belen',
  lastName: 'Sosa',
  age: 30
}

var maria = {
  name: 'Maria',
  lastName: 'Rodriguez',
  age: 25
}


function imprimirNombreEnMayusculas({name}){
  console.log(name.toUpperCase());
}

imprimirNombreEnMayusculas(belen)
imprimirNombreEnMayusculas(maria)

imprimirNombreEnMayusculas({name:'Beto'})

//-> cannot read property
//imprimirNombreEnMayusculas({lastName:'Gomez'})

//-> esto da  cannot destructure name of undefined
// imprimirNombreEnMayusculas()
