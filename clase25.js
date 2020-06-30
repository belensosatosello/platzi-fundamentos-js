// Clase 25 - Herencia hoy
class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn){
    // var nombre = this.nombre
    // var apellido = this.apellido
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`);
    if(fn){
      fn(nombre, apellido)
    }
  }

  soyAlto(){
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar(fn){
    //var nombre = this.nombre
    //var apellido = this.apellido
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador/a`);
    if(fn){
      fn(nombre,apellido,true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen día ${nombre} ${apellido}`)
  if(esDev){
    console.log(`Ah mirá, no sabía que eras desarrollador/a`);
  }
}


var belen = new Persona('Belen','Sosa', 1.58)
var maria = new Persona('Maria', 'Rodriguez', 1.6)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.82)

belen.saludar()
maria.saludar(responderSaludo)
arturo.saludar(responderSaludo)
