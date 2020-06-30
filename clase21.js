// Clase 21 - prototipos
function Persona(nombre,apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function(){
  return this.altura >= 1.8
}

var belen = new Persona('Belen','Sosa', 1.58)
var maria = new Persona('Maria', 'Rodriguez', 1.6)
var arturo = new Persona('Arturo', 'Martinez', 1.82)
