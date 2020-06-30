// CLASE 3 - NUMEROS
var edad = 29;
var peso = 55;

//incrementadores
edad++;
edad+=1;

//decremento
peso-=2;
peso--;

// Decimales
var precioDeVino = 200.3;
var total = precioDeVino * 3; // Da 600.90000000001
//lo hace impreciso para guardar decimales
// para hacerlo mas preciso...
var total = precioDeVino * 100 * 3 / 100;

//Decimales precisos
var total2 = Math.round(precioDeVino * 100 * 3) / 100;
var totalStr = (precioDeVino * 3).toFixed(2);
var totalFloat = parseFloat(totalStr);

var pizza = 8;
var personas = 2;
var porcionesPorPersona = pizza /personas;
