// Clase 24 - Como era la herencia antes
function heredaDe(protipoHijo, prototipoPadre){
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
   //su prototype es un nuevo objeto del padre
  protipoHijo.prototype = new fn
  protipoHijo.prototype.constructor = protipoHijo
}

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

function Desarrollador(nombre,apellido){
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`);
}

// var belen = new Persona('Belen','Sosa', 1.58)
// var maria = new Persona('Maria', 'Rodriguez', 1.6)
// var arturo = new Persona('Arturo', 'Martinez', 1.82)
