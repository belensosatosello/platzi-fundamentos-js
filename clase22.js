// Clase 22 - modificando un prototipo
function Persona(nombre,apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}


// Las funciones y prototipos declararlas arriba de todo al iniciar el codigo a
Persona.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function(){
  return this.altura > 1.8
}


var belen = new Persona('Belen','Sosa', 1.58)
var maria = new Persona('Maria', 'Rodriguez', 1.6)
var arturo = new Persona('Arturo', 'Martinez', 1.82)

belen.soyAlto()
maria.soyAlto()
arturo.soyAlto()
