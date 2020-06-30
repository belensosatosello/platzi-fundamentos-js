// CLASE 2 - STRINGS
var nombre = 'Belen', apellido = 'Sosa';

var nombreEnMayus = nombre.toUpperCase();
var apellidoEnMinus = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;

var nombreCompleto = nombre + " " + apellido;
var nombreCompleto2 = `${nombre.toUpperCase()} ${apellido}`;

var str = nombre.charAt(1)+ nombre.charAt(2);
var substr = nombre.substr(1,2);

var ultimaLetra = nombre.charAt(nombre.length-1);
