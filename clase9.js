// CLASE 9 - Comparaciones
var x = 4 , y = '4'

// Compare
// x == y  // true - compara el valor
// x === y // false - compara ademas el tipo

// siempre utilizar el triple =

var belen = {
  nombre : 'Belen'
}

var otraPersona = {
  nombre : 'Belen'
}

var otraPersona2 = belen

var otraPersona3 = {
  ...belen
}

//  belen == otraPersona  -> false
// belen == otraPersona2   -> true , si modifico modifico tambien el original
// belen == otraPersona3   -> false
