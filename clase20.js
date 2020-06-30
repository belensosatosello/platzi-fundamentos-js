// Clase 20 - Reduce Arrays
var belen={
    nombre: 'Belen',
    apellido: 'Sosa',
    altura: 1.58,
    cantidadDeLibros: 15
}

var maria ={
    nombre: 'Maria',
    apellido: 'Rodriguez',
    altura: 1.65,
    cantidadDeLibros: 10
}

var juan={
    nombre: 'Juan',
    apellido: 'Lopez',
    altura: 1.35,
    cantidadDeLibros: 5
}

var manuel={
    nombre: 'Manuel',
    apellido: 'Torres',
    altura: 1.75,
    cantidadDeLibros: 23
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.60,
  cantidadDeLibros: 18
}

var david={
    nombre: 'David',
    apellido: 'Baez',
    altura: 1.81,
    cantidadDeLibros: 40
}

var personas = [belen, maria, juan, manuel, vicky, david]

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer,0)

console.log(`En total todos tienen ${totalDeLibros} libros`);
